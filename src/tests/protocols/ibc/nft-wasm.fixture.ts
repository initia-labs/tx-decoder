/**
 * Mock fixture for IBC NFT Send on WASM VM
 * This represents sending an NFT via IBC from WASM to another chain
 */
export const mockIbcNftSendWasm = {
  code: 0,
  codespace: "",
  data: "0A1E0A1C2F6962632E636F72652E6368616E6E656C2E76312E4D73674163",
  events: [],
  gas_used: "150000",
  gas_wanted: "200000",
  height: "12345",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            {
              key: "packet_data",
              value: JSON.stringify({
                classId: "nft/wasm1contract123/collection1",
                classUri: null,
                receiver: "osmo1receiver123",
                sender: "init1sender123",
                tokenIds: ["token1"],
                tokenUris: ["https://example.com/token1.json"]
              })
            },
            {
              key: "packet_dst_port",
              value: "nft-transfer"
            },
            {
              key: "packet_dst_channel",
              value: "channel-1"
            },
            {
              key: "packet_sequence",
              value: "100"
            }
          ],
          type: "send_packet"
        },
        {
          attributes: [
            {
              key: "action",
              value: "transfer_nft"
            },
            {
              key: "_contract_address",
              value: "wasm1contract123"
            },
            {
              key: "token_id",
              value: "token1"
            },
            {
              key: "from",
              value: "init1sender123"
            }
          ],
          type: "wasm"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2023-11-15T10:00:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5000",
            denom: "uinit"
          }
        ],
        gas_limit: "200000",
        granter: "",
        payer: ""
      },
      signer_infos: []
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/ibc.applications.nft_transfer.v1.MsgTransfer",
          class_id: "nft/wasm1contract123/collection1",
          memo: "",
          receiver: "osmo1receiver123",
          sender: "init1sender123",
          source_channel: "channel-0",
          source_port: "nft-transfer",
          timeout_height: {
            revision_height: "1000000",
            revision_number: "1"
          },
          timeout_timestamp: "1700000000000000000",
          token_ids: ["token1"]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "IBCNFTSENDWASM1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF"
};

/**
 * Mock fixture for IBC NFT Receive on WASM VM
 * This represents receiving an NFT via IBC into WASM from another chain
 */
export const mockIbcNftReceiveWasm = {
  code: 0,
  codespace: "",
  data: "0A1E0A1C2F6962632E636F72652E6368616E6E656C2E76312E4D73674163",
  events: [],
  gas_used: "150000",
  gas_wanted: "200000",
  height: "12346",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            {
              key: "packet_data",
              value: JSON.stringify({
                classId: "nft/wasm1contract456/collection2",
                classUri: null,
                receiver: "init1receiver456",
                sender: "osmo1sender456",
                tokenIds: ["token2"],
                tokenUris: ["https://example.com/token2.json"]
              })
            },
            {
              key: "packet_src_port",
              value: "nft-transfer"
            },
            {
              key: "packet_src_channel",
              value: "channel-0"
            }
          ],
          type: "recv_packet"
        },
        {
          attributes: [
            {
              key: "action",
              value: "mint"
            },
            {
              key: "_contract_address",
              value: "wasm1contract456"
            },
            {
              key: "token_id",
              value: "token2"
            },
            {
              key: "to",
              value: "init1receiver456"
            }
          ],
          type: "wasm"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2023-11-15T10:05:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5000",
            denom: "uinit"
          }
        ],
        gas_limit: "200000",
        granter: "",
        payer: ""
      },
      signer_infos: []
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/ibc.core.channel.v1.MsgRecvPacket",
          packet: {
            data: "encoded_packet_data",
            destination_channel: "channel-1",
            destination_port: "nft-transfer",
            sequence: "100",
            source_channel: "channel-0",
            source_port: "nft-transfer",
            timeout_height: {
              revision_height: "1000000",
              revision_number: "1"
            },
            timeout_timestamp: "1700000000000000000"
          },
          proof_commitment: "proof123",
          proof_height: {
            revision_height: "999999",
            revision_number: "1"
          },
          signer: "init1relayer123"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "IBCNFTRECEIVEWASM1234567890ABCDEF1234567890ABCDEF1234567890AB"
};
