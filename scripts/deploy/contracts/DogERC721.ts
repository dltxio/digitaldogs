import { ethers } from "ethers";
import { deployContract, verifyOnEtherscan } from "../utils";

export const deploy = async setAddresses => {
  console.log("deploying DogERC721");
  const args = [];
  const contract = await deployContract("DogERC721", args);
  console.log(`deployed NFT contract to address ${contract.address}`);
  setAddresses({ Dogerc721: contract.address });
  //@ts-ignore
  await verifyOnEtherscan(contract.address, args);

  return contract;
};
