import hardhat from "hardhat";
import { updateContractConfig } from "../utils";
import * as FixedPriceSale721 from "./contracts/FixedPriceSale721";
import * as ShortTermSale1155 from "./contracts/ShortTermSale1155";
// @ts-ignore
const ethers = hardhat.ethers;

let config;
let network;

const setAddresses = deltaConfig => {
  config = { ...config, ...deltaConfig };
  updateContractConfig(network, config);
};

export const deploy = async () => {
  network = process.env.HARDHAT_NETWORK?.toLowerCase();
  console.log(`network is ${network}`);
  const [deployer] = await ethers.getSigners();
  console.log(`deployer is ${await deployer.getAddress()}`);
  const gasPrice = await deployer.provider.getGasPrice();
  console.log(
    `gas price is `,
    `${ethers.utils.formatUnits(gasPrice, "gwei")} gwei`
  );
  const balance = await deployer.getBalance();
  console.log(`balance is ${ethers.utils.formatEther(balance)} ETH`);
  // Deploy Token contract
  await FixedPriceSale721.deploy(setAddresses);
  // Deploy open sale contract
  await ShortTermSale1155.deploy(setAddresses);
  const delta = balance.sub(await deployer.getBalance());
  console.log(
    `deployment used a total of ${ethers.utils.formatEther(delta)} ETH`
  );

  return config;
};
