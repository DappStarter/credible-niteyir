require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remember snake inner cloth fog tongue'; 
let testAccounts = [
"0x3565b14900530b253d576a4722d0d61be84fe78bd3540784963fde819881d772",
"0xfab5901ab92691b153902fb0483bb8982b82649236e8a28e06bc3fdcc07bcffe",
"0x229ca5c9b91e682244de63cf28bb74bf0ce6cc5baacf8f9b8027a654fabcfdea",
"0xac0abe7b0927454a3b848b31a75243a431c4abd61a65710b7fe79926e3f12eec",
"0x29b3c0311b71465f393651aed8c15058a6d750d123dbe345a3a453167b216ca3",
"0xd8afa065229a9d73b8219e17c4f111a70e7ba98543669e8bb717ec882c91fcfa",
"0x14ded617504c052df5a5a8dbedac6bb44260fccb54248d073b3025ba3e678972",
"0x124d80eea38c2e778fb88693a2ba57d5bf8b4d378f1466647f65c8ef51bb74dc",
"0x545106dbdca88006c078dcae4ea4ccec9b509d90150e5c1b07a19a50851fdc64",
"0x034b3b4e608f5608edf639b83036b41b1a73f5f06be6b98365efad448a8d6a50"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
