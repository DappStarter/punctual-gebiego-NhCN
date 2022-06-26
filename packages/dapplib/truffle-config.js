require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remain uncover give enroll flush term'; 
let testAccounts = [
"0x858b0e8665376af11ef0ea2868e720ec2df9b7be7cb7e6bdb8b106ed2f225cba",
"0x9aec800ea99dee8d43f48303921743bebb995abae06358d0b3b7e66ffd57b885",
"0x60f61735735525b033db7c7a8e518ec36fb7ea582623da6e9202d90068d92bf7",
"0x8df822de1a6f628d1ec3b0841669dd66cef4ae964d14daee1b02b6c7bd4693c2",
"0x28fa1a6733e970d49e2f734994b98563d9a80bf6977ea4ba7163aa2de044b50c",
"0xcd0fed2b0d36c6eb0ee07a2c0ea87465d8bacc8ea5915a70fdc45327f652e15e",
"0x65c165766dceb1145b87daed24589e11f7a46475014796558b48f6982d024963",
"0x8d2385d3f4388afc5ff35090e1aa77d4459360b1b5560d3f6854d6b14f04b5f6",
"0x8cdb96669c29b4ee383034e70535b6b65b84b153686207d04b105aea1b851759",
"0xb8c370917eb5fac7282db5c185a0f325082672b00eaf5344d6f644b15eb59e71"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

