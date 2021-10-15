import { config as dotenvConfig } from "dotenv";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-contract-sizer";
import "./scripts/tasks";
import { ethers } from "ethers";
dotenvConfig();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./src/build"
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.7.4",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200
          }
        }
      }
    ]
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
