# Changelog

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
