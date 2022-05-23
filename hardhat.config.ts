import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import * as dotenv from 'dotenv';
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 type NetworkConfig = {
  [key: string]: {
    url: string,
    accounts: {
      mnemonic: string
    },
    gasPrice?: number
  }
}

function networks() {
  let networks: NetworkConfig = {}
  if (process.env.SEED_PHRASE) {
    if (process.env.MUMBAI_RPC) {
      networks["mumbai"] = {
        url: process.env.MUMBAI_RPC,
        accounts: {
          mnemonic: process.env.SEED_PHRASE
        },
        gasPrice: 10000000000
      }
    }
  }
  return networks;
}

module.exports = {
  solidity: "0.8.4",
  networks: networks()
};
