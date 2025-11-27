import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-storage-layout";
import 'hardhat-deploy';
import '@layerzerolabs/hardhat-tron';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.2',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.7.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.7.5',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.19',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.23',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          evmVersion: 'cancun'
        },
      },
    ]
  },
  networks: {
    tron: {
      url: '',
      accounts: [],
      tron: true
    }
  },
  tronSolc: {
    enable: true,
    filter: ['BackedAutoFeeTokenFactoryTron', 'GenericToken', 'SanctionsList', 'WrappedBackedTokenFactory', 'WrappedBackedTokenImplementation', 'ERC20MinterPauser', 'BackedAutoFeeTokenImplementationV1'], //Leave as empty array to compile all contracts.
    compilers: [
      { version: "^0.6.0" },  // Match pragma version
      { version: "^0.6.2" },  // ...
      { version: "0.6.12" },
      { version: "0.7.0" },
      { version: "0.7.5" },
      { version: "^0.8.0" },
      { version: "0.8.0" },
      { version: "0.8.9" },
      { version: "0.8.19" },
      { version: "0.8.23" },
      { version: "0.8.24" },
      { version: "0.8.20" }  // Actual tron-solc version
    ],
    versionRemapping: [
      ["0.6.0", "0.8.20"],
      ["0.6.2", "0.8.20"],
      ["0.6.12", "0.8.20"],
      ["0.7.0", "0.8.20"],
      ["0.7.5", "0.8.20"],
      ["0.8.0", "0.8.20"],
      ["0.8.9", "0.8.20"],
      ["0.8.19", "0.8.20"],
      ["0.8.23", "0.8.20"],
      ["0.8.24", "0.8.20"],
      ["0.8.20", "0.8.20"],
      ["0.8.9", "0.8.20"], // Remap your Solidity 0.8.9 to tron-solc 0.8.20
    ],
  }
};

export default config;
