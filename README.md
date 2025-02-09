# @libp2p/webrtc <!-- omit in toc -->

[![libp2p.io](https://img.shields.io/badge/project-libp2p-yellow.svg?style=flat-square)](http://libp2p.io/)
[![IRC](https://img.shields.io/badge/freenode-%23libp2p-yellow.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23libp2p)
[![Discuss](https://img.shields.io/discourse/https/discuss.libp2p.io/posts.svg?style=flat-square)](https://discuss.libp2p.io)
[![codecov](https://img.shields.io/codecov/c/github/little-bear-labs//js-libp2p-webrtc.svg?style=flat-square)](https://codecov.io/gh/little-bear-labs//js-libp2p-webrtc)
[![CI](https://img.shields.io/github/workflow/status/libp2p/js-libp2p-interfaces/test%20&%20maybe%20release/master?style=flat-square)](https://github.com/little-bear-labs//js-libp2p-webrtc/actions/workflows/js-test-and-release.yml)

> The browser implementation of the WebRTC module for libp2p.

## Table of contents <!-- omit in toc -->

- [Install](#install)
- [Usage](#usage)
- [API](#api)
  - [Transport](#transport)
  - [Connection](#connection)
- [Hacking](#hacking)
- [Contribute](#contribute)
- [Development](#development)
  - [Build](#build)
  - [Lint](#lint)
  - [Clean](#clean)
  - [Check Dependencies](#check-dependencies)
  - [Build a Release](#build-a-release)
- [License](#license)
- [Contribution](#contribution)

## Install

```shell
npm i @libp2p/webrtc
```

## Usage

```js
import { createLibp2pNode } from 'libp2p'
import { webRTC } from '@libp2p/webrtc'
import { noise } from '@chainsafe/libp2p-noise'
import { multiaddr } from '@multiformats/multiaddr'
import { pipe } from 'it-pipe'
import all from 'it-all'

const node = await createLibp2pNode({
  transports: [
    webRTC()
  ],
  connectionEncryption: [
    noise()
  ]
})

const addr = multiaddr('/ip4/0.0.0.0/udp/56093/webrtc/certhash/uEiByaEfNSLBexWBNFZy_QB1vAKEj7JAXDizRs4_SnTflsQ')
const { stream } = await node.dialProtocol(addr, '/my-protocol/1.0.0')
const values = await pipe(stream, all)
```
## API

### Transport

[![](https://raw.githubusercontent.com/libp2p/js-libp2p-interfaces/master/packages/libp2p-interfaces/src/transport/img/badge.png)](https://github.com/libp2p/js-libp2p-interfaces/tree/master/packages/libp2p-interfaces/src/transport)

`libp2p-webrtc` accepts WebRTC encapsulated addresses: `/ip4/0.0.0.0/udp/56093/webrtc/certhash/uEiByaEfNSLBexWBNFZy_QB1vAKEj7JAXDizRs4_SnTflsQ`

### Connection

[![](https://raw.githubusercontent.com/libp2p/js-libp2p-interfaces/master/packages/libp2p-interfaces/src/connection/img/badge.png)](https://github.com/libp2p/js-libp2p-interfaces/tree/master/packages/libp2p-interfaces/src/connection)

## Hacking

Besides the usual `npm install` to get dependencies, `npm run build` to invoke tsc, and `npm run test` to execute unit tests...

There is also `npm run autogen` which uses ProtoBuf's protoc to populate the generated code directory `proto_ts` based on `*.proto` files in src. Don't forget to run this step before `build` any time you make a change to any of the `*.proto` files.

## Contribute

Contributions are welcome! The libp2p implementation in JavaScript is a work in progress. As such, there's a few things you can do right now to help out:

- [Check out the existing issues](//github.com/little-bear-labs//js-libp2p-webrtc/issues).
- **Perform code reviews**.
- **Add tests**. There can never be enough tests.
- Go through the modules and **check out existing issues**. This is especially useful for modules in active development. Some knowledge of IPFS/libp2p may be required, as well as the infrastructure behind it - for instance, you may need to read up on p2p and more complex operations like muxing to be able to help technically.

Please be aware that all interactions related to libp2p are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Development

This module leans heavily on (Aegir)[https://github.com/ipfs/aegir] for most of the `package.json` scripts.

### Build
The build script is a wrapper to `aegir build`.  To build this package:

```shell
npm run build
```

The build will be located in the `/dist` folder.

### Lint
Aegir is also used to lint the code, which follows the [Standard](https://github.com/standard/standard) JS linter.
The VS Code plugin for this standard is located at https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard.
To lint this repo:

```shell
npm run lint
```

You can also auto-fix when applicable:

```shell
npm run lint:fix
```

### Clean

```shell
npm run clean
```

### Check Dependencies

```shell
npm run deps-check
```

### Build a Release

```shell
npm run release
```
## License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.