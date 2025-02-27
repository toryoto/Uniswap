require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("solidity-coverage");


function getNetwork1(url) {
  const secretKey = "ad38debc539a4fe32fa7f0c47dc579ed4f55dc330fe6ea7055e7ade1e4ea7d33";
  return {
    url,
    accounts: [secretKey]
  };
}

function getNetwork(name) {
  return getNetwork1(`https://${name}.infura.io/v3/5993a9886cbb4e6abb7d17c832bb78f4`);
}

const config = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: getNetwork("sepolia")
  },
  mocha: {
    timeout: 10000
  },
  etherscan: {
    apiKey: "4M12YIH6EEDS6AXPICHR5XPGHV3ZACM9IB"
  }
};

if (process.env.COVERAGE != null) {
  config.solidity = config.solidity.compilers[0];
}

module.exports = config;