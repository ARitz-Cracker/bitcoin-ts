# Cryptowasm

**An ultra-lightweight JavaScript library exposing several cryptographic primitives commonly used in cryptocurrency**

Cryptowasm has **no dependencies** and works in all JavaScript environments, including [Node.js](https://nodejs.org/), [Deno](https://deno.land/) (probably), and browsers.

## Purpose

Cryptowasm is a stripped-down fork of [libauth](https://github.com/bitauth/libauth) by the very skillful [bitjson](https://github.com/bitjson), only including Secp256k1, sha1, sha256, sha512, and Ripemd160. No other utility tools or bitcoin(cash)-specific feature sets. 

## Getting Started

To get started, install `cryptowasm`:

```sh
npm install cryptowasm
```

And import the functionality you need:

```typescript
import { instantiateSecp256k1 } from 'cryptowasm';
import { msgHash, pubkey, sig } from './somewhere';

(async () => {
  const secp256k1 = await instantiateSecp256k1();
  secp256k1.verifySignatureDERLowS(sig, pubkey, msgHash)
    ? console.log('🚀 Signature valid')
    : console.log('❌ Signature invalid');
})();
```

## Stable API

The following APIs are considered stable, and will only include breaking changes in major version upgrades.

### WebAssembly ECDSA & Schnorr

- [instantiateSecp256k1](https://libauth.org/globals.html#instantiatesecp256k1)
- [Secp256k1 Interface](https://libauth.org/interfaces/secp256k1.html)

### WebAssembly Hashing Functions

- [instantiateRipemd160](https://libauth.org/globals.html#instantiateripemd160)
- [Ripemd160 Interface](https://libauth.org/interfaces/ripemd160.html)
- [instantiateSha1](https://libauth.org/globals.html#instantiatesha1)
- [Sha1 Interface](https://libauth.org/interfaces/sha1.html)
- [instantiateSha256](https://libauth.org/globals.html#instantiatesha256)
- [Sha256 Interface](https://libauth.org/interfaces/sha256.html)
- [instantiateSha512](https://libauth.org/globals.html#instantiatesha512)
- [Sha512 Interface](https://libauth.org/interfaces/sha512.html)
