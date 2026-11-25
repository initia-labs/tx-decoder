import { InitiaAddress } from "@initia/utils";
import axios from "axios";
import { getAddress, Hex } from "viem";

import { ApiClient } from "@/api";
import { EVENT_SIGNATURES } from "@/constants";
import { cw20TransferProcessor } from "@/processors";
import { evmTransferEventProcessor } from "@/processors/evm/transfer";
import { objectTransferEventProcessor } from "@/processors/move/object-transfer";

const newApiClient = () =>
  new ApiClient({
    registryUrl: "https://registry.test.url",
    restUrl: "https://rest.test.url"
  });

describe("CW-20 transfer", () => {
  it.each(["100uinit", "1.5", "-1", ""])(
    "ignores a non-integer amount %p from a non-CW-20 contract",
    async (amount) => {
      const changes = await cw20TransferProcessor.process(
        {
          attributes: [
            { key: "_contract_address", value: "init1contract" },
            { key: "action", value: "transfer" },
            { key: "from", value: "init1alice" },
            { key: "to", value: "init1bob" },
            { key: "amount", value: amount }
          ],
          type: "wasm"
        },
        [],
        newApiClient()
      );

      expect(changes).toEqual({ ft: {}, nft: {}, vm: "wasm" });
    }
  );
});

describe("self transfers", () => {
  it("records an ERC-721 transfer to the sender as 0", async () => {
    const owner = "0x19f8a98c3512cf16731de58f83318ec553314f46";
    const contract = "0x5d4376b62fa8ac16dfabe6a9861e11c33a48c677";
    const ownerTopic = `0x000000000000000000000000${owner.slice(2)}` as Hex;

    const changes = await evmTransferEventProcessor.process(
      {
        address: contract,
        data: "0x",
        topics: [
          EVENT_SIGNATURES.TRANSFER as Hex,
          ownerTopic,
          ownerTopic,
          "0x00000000000000000000000000000000000000000000000000000000000011d1"
        ]
      },
      newApiClient()
    );

    expect(changes).toEqual({
      ft: {},
      nft: {
        [getAddress(owner)]: {
          [contract]: { "4561": "0" }
        }
      },
      vm: "evm"
    });
  });

  it("records a Move object transfer to the sender as 0", async () => {
    const owner = InitiaAddress("0x1234").bech32;
    const object = InitiaAddress("0xabcd").bech32;

    const changes = await objectTransferEventProcessor.process(
      {
        attributes: [
          {
            key: "data",
            value: JSON.stringify({
              from: "0x1234",
              object: "0xabcd",
              to: "0x1234"
            })
          }
        ],
        type: "move"
      },
      [],
      newApiClient(),
      0
    );

    expect(changes).toEqual({
      ft: {},
      object: { [owner]: { [object]: "0" } },
      vm: "move"
    });
  });
});

describe("REST paths built from event values", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it.each([
    [
      "findValidator",
      (client: ApiClient) => client.findValidator("val/../x?y"),
      "https://rest.test.url/initia/mstaking/v1/validators/val%2F..%2Fx%3Fy"
    ],
    [
      "findDenomFromMetadataAddr",
      (client: ApiClient) => client.findDenomFromMetadataAddr("0x1&x=y"),
      "https://rest.test.url/initia/move/v1/denom?metadata=0x1%26x%3Dy"
    ]
  ])("%s encodes the value", async (_name, call, url) => {
    const get = jest
      .spyOn(axios, "get")
      .mockRejectedValue(new Error("not found"));
    jest.spyOn(console, "error").mockImplementation(() => {});

    await call(newApiClient());

    expect(get).toHaveBeenCalledWith(url, { timeout: 10000 });
  });
});
