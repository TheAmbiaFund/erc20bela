module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 6545,
      from: "0xD29fc7bc833D41Be1c8F00bcF6FF11AAb5Db390d", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
    ropsten: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xD29fc7bc833D41Be1c8F00bcF6FF11AAb5Db390d", // default address to use for any transaction Truffle makes during migrations
      network_id: 3,
      gas: 4612388 // Gas limit used for deploys
    }

  }
};
