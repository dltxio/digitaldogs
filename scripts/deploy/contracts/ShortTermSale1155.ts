import { deployContract, verifyOnEtherscan } from "../utils";

export const deploy = async setAddresses => {
  console.log("deploying Short Term Sale");
  const args = [process.env.REACT_APP_SHORT_TERM_SALE_IMAGE_URL];
  const contract = await deployContract("ShortTermSale1155", args, 8);
  console.log(
    `deployed Short Term Sale contract to address ${contract.address}`
  );
  setAddresses({ shorttermsale: contract.address });
  //@ts-ignore
  await verifyOnEtherscan(contract.address, args);
  return contract;
};
