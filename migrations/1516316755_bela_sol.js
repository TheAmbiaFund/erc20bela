var Bela = artifacts.require("Bela");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Bela);
};
