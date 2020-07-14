const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */

    networks: {
        development: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "http://localhost:8543/");
            },
            network_id: "*",
        }

        // development: {
        //  host: "127.0.0.1",     // Localhost (default: none)
        //  port: 7545,            // Standard Ethereum port (default: none)
        //  network_id: "*",       // Any network (default: none)
        // }
    },


    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.5.11",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {          // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 2000
                },
                evmVersion: "petersburg"
            }
        }
    }
}
