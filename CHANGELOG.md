# Changelog

## [0.10.0](https://github.com/initia-labs/tx-decoder/compare/v0.9.1...v0.10.0) (2025-10-20)


### Features

* add kami721 public mint decoder and related functionality ([#93](https://github.com/initia-labs/tx-decoder/issues/93)) ([9b58afb](https://github.com/initia-labs/tx-decoder/commit/9b58afb3c0392df023c4dd2b707dd784d78cd273))
* add native ETH transfer decoder and related tests ([#96](https://github.com/initia-labs/tx-decoder/issues/96)) ([1819daf](https://github.com/initia-labs/tx-decoder/commit/1819daff8cef1ccf6afb7485b90f40ac18ffbbdf))
* add support for decoding mirrored Cosmos transactions in EVM ([#92](https://github.com/initia-labs/tx-decoder/issues/92)) ([8c89429](https://github.com/initia-labs/tx-decoder/commit/8c89429e9aab261b76756958637c71e6b6e2c25c))

## [0.9.1](https://github.com/initia-labs/tx-decoder/compare/v0.9.0...v0.9.1) (2025-10-15)


### Bug Fixes

* refactor unify metadata resolution for EVM and Move transactions ([942bc21](https://github.com/initia-labs/tx-decoder/commit/942bc218813d0195a20e55512d6db7bd1592ed5a))

## [0.9.0](https://github.com/initia-labs/tx-decoder/compare/v0.8.0...v0.9.0) (2025-10-15)


### Features

* add IBC NFT receive decoder for EVM transactions ([#87](https://github.com/initia-labs/tx-decoder/issues/87)) ([f9ed681](https://github.com/initia-labs/tx-decoder/commit/f9ed681cec33628a267b7ead9234506715783189))
* enhance transaction decoding for unsupported calls ([#88](https://github.com/initia-labs/tx-decoder/issues/88)) ([85ee06e](https://github.com/initia-labs/tx-decoder/commit/85ee06e58d073992a5dcf937a31f464f86380ba5))
* enhance transaction decoding with EVM and Move metadata support ([#90](https://github.com/initia-labs/tx-decoder/issues/90)) ([b567a8a](https://github.com/initia-labs/tx-decoder/commit/b567a8a34dc9869a9d5231c74e468cf533396360))

## [0.8.0](https://github.com/initia-labs/tx-decoder/compare/v0.7.2...v0.8.0) (2025-10-07)


### Features

* add contract creation decoder and improve error handling ([#83](https://github.com/initia-labs/tx-decoder/issues/83)) ([f235517](https://github.com/initia-labs/tx-decoder/commit/f23551714b079169de86f8b481f5fbedf128a7b6))
* add ERC20 / ERC721 approve decoder ([#80](https://github.com/initia-labs/tx-decoder/issues/80)) ([20ac71f](https://github.com/initia-labs/tx-decoder/commit/20ac71f61bffdd8dd939c1f3813ae383f4d5d50e))
* add ERC721 safeTransferFrom decoder and update README ([#81](https://github.com/initia-labs/tx-decoder/issues/81)) ([eff6acf](https://github.com/initia-labs/tx-decoder/commit/eff6acfa983113e08c36bfad9a0edb9ba7b32b68))
* add finalize token deposit decoder for evm ([#75](https://github.com/initia-labs/tx-decoder/issues/75)) ([5127bbd](https://github.com/initia-labs/tx-decoder/commit/5127bbd50bd406789d2c6840d0434e65b4685982))
* add initiate token withdrawal decoder and message type ([#77](https://github.com/initia-labs/tx-decoder/issues/77)) ([92ac3a5](https://github.com/initia-labs/tx-decoder/commit/92ac3a524805ca3abbc0f28445198b12869a5018))
* enhance IBC NFT transfer decoding for EVM transactions ([#86](https://github.com/initia-labs/tx-decoder/issues/86)) ([036ce88](https://github.com/initia-labs/tx-decoder/commit/036ce882d7b7d3bd46a87d58662f216afc01a110))
* support single and multiple contract creation in decodeEthereumTransaction ([#84](https://github.com/initia-labs/tx-decoder/issues/84)) ([1243380](https://github.com/initia-labs/tx-decoder/commit/1243380ee3df25839de292efd18c86edcb62af99))

## [0.7.2](https://github.com/initia-labs/tx-decoder/compare/v0.7.1...v0.7.2) (2025-09-26)


### Bug Fixes

* apply evm amount multiplier for ibc in evm ([f2ab6be](https://github.com/initia-labs/tx-decoder/commit/f2ab6bebc189dff2060a551b2a3415185fa1eb0f))

## [0.7.1](https://github.com/initia-labs/tx-decoder/compare/v0.7.0...v0.7.1) (2025-09-16)


### Bug Fixes

* evm denom parser ([#69](https://github.com/initia-labs/tx-decoder/issues/69)) ([42364fb](https://github.com/initia-labs/tx-decoder/commit/42364fb1a6284def99d83d07e220d2ce73fbec01))

## [0.7.0](https://github.com/initia-labs/tx-decoder/compare/v0.6.0...v0.7.0) (2025-09-15)


### Features

* add EVM transaction decoding support and enhance existing decoders ([#68](https://github.com/initia-labs/tx-decoder/issues/68)) ([4bd6b33](https://github.com/initia-labs/tx-decoder/commit/4bd6b33d31a4fcc26a4614da2c2dd03fb010c7e3))
* support provide liquidity stableswap ([#66](https://github.com/initia-labs/tx-decoder/issues/66)) ([4936b9a](https://github.com/initia-labs/tx-decoder/commit/4936b9abe0aa9b8d19bf36a16a071e7ba152d192))

## [0.6.0](https://github.com/initia-labs/tx-decoder/compare/v0.5.0...v0.6.0) (2025-09-02)


### Features

* add stableswap decoder and update related schemas and types ([#64](https://github.com/initia-labs/tx-decoder/issues/64)) ([61ae397](https://github.com/initia-labs/tx-decoder/commit/61ae39787010a5ea36339c9684d14bde84c19588))

## [0.5.0](https://github.com/initia-labs/tx-decoder/compare/v0.4.1...v0.5.0) (2025-08-23)


### Features

* support `0x1::dex::provide_liquidity_script` ([#63](https://github.com/initia-labs/tx-decoder/issues/63)) ([605fd18](https://github.com/initia-labs/tx-decoder/commit/605fd18711be89a95c20aef31774041001a960f6))


### Bug Fixes

* revert rounding in vip gauge ([3a24fc5](https://github.com/initia-labs/tx-decoder/commit/3a24fc5d2c73297285266310cd93d560d30fc0eb))
* rouding mode in vip gauge vote ([6c7fe54](https://github.com/initia-labs/tx-decoder/commit/6c7fe5424c4606b9133462a9f09205ce2907b575))
* update vip gauge vote decoder to use string representation and divide by 10^6 ([#62](https://github.com/initia-labs/tx-decoder/issues/62)) ([435d5c0](https://github.com/initia-labs/tx-decoder/commit/435d5c0ce516e87b99d292feebe9ea69ba25f155))

## [0.4.1](https://github.com/initia-labs/tx-decoder/compare/v0.4.0...v0.4.1) (2025-08-15)


### Bug Fixes

* update vip gauge vote decoder to use max voting power and enhance test coverage ([#57](https://github.com/initia-labs/tx-decoder/issues/57)) ([cdd4302](https://github.com/initia-labs/tx-decoder/commit/cdd430296ecc5e69f72e72807388a91f6bb57dc1))

## [0.4.0](https://github.com/initia-labs/tx-decoder/compare/v0.3.0...v0.4.0) (2025-08-08)


### Features

* update message decoders to include txResponse and enhance data structures ([#54](https://github.com/initia-labs/tx-decoder/issues/54)) ([5dcafcb](https://github.com/initia-labs/tx-decoder/commit/5dcafcbcdb4888368c7d4b683013863362e2ad6e))

## [0.3.0](https://github.com/initia-labs/tx-decoder/compare/v0.2.1...v0.3.0) (2025-08-08)


### Features

* add chain id to vip claim esinit ([#51](https://github.com/initia-labs/tx-decoder/issues/51)) ([1dfe9b5](https://github.com/initia-labs/tx-decoder/commit/1dfe9b514bf22d378e407d8e0f63246f4940a62f))
* enhance merge liquidity decoder to support multiple positions ([#53](https://github.com/initia-labs/tx-decoder/issues/53)) ([4c26ccd](https://github.com/initia-labs/tx-decoder/commit/4c26ccdce277f6faa99cdfa115e4792e57c26854))
* integrate @initia/utils for address handling ([#50](https://github.com/initia-labs/tx-decoder/issues/50)) ([3650833](https://github.com/initia-labs/tx-decoder/commit/36508336445de731a9a2bc7b76e3d771173e021e))

## [0.2.1](https://github.com/initia-labs/tx-decoder/compare/v0.2.0...v0.2.1) (2025-08-04)


### Bug Fixes

* change error wording ([3f68120](https://github.com/initia-labs/tx-decoder/commit/3f68120d3ab5e8022d9ff1853d7995a064cb31cd))

## [0.2.0](https://github.com/initia-labs/tx-decoder/compare/v0.1.5...v0.2.0) (2025-08-04)


### Features

* packet sequence for ibc msg ([#37](https://github.com/initia-labs/tx-decoder/issues/37)) ([f4194ae](https://github.com/initia-labs/tx-decoder/commit/f4194ae82e0fda3408099bdcc9b930605546e8d6))
* support deposit liquidity msgs ([20b2f00](https://github.com/initia-labs/tx-decoder/commit/20b2f0008c340b31196d1d1663e009ef0a53fe09))
* support owner event for deposit and withdraw ([#44](https://github.com/initia-labs/tx-decoder/issues/44)) ([17f4df5](https://github.com/initia-labs/tx-decoder/commit/17f4df5d4cf6b36eab533096005fd88aaca64b03))


### Bug Fixes

* update release type in CI workflow to node ([0dedafa](https://github.com/initia-labs/tx-decoder/commit/0dedafabf8dc9af432bf51226e015e8b0b86fcec))
* use GITHUB_TOKEN ([a80663e](https://github.com/initia-labs/tx-decoder/commit/a80663e311228f08ff8d6443fcd1951665317572))
