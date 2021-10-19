import React, { useState } from "react";
import useWallet from "../Hooks/useWallet";
import { ethers, utils } from "ethers";
import dogsERC721 from "../../build/contracts/DogERC721.sol/DogERC721.json";

// import Web3 from "web3";

const TotalSupply = () => {
  const [supply, setSupply] = useState(0);
  const [breed, setBreed] = useState("");

  // console.log(process.env.REACT_APP_CONTRACT_ADDRESS);

  // const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.REACT_APP_NODE!));

  // const contract = new web3.eth.Contract(
  //   dogsERC721.abi,
  //   process.env.REACT_APP_CONTRACT_ADDRESS
  // );

  const { getSigner } = useWallet();
  const getContract = async () => {
    const signer: any = await getSigner();
    const contract = new ethers.Contract(
      process.env.REACT_APP_FIXED_PRICE_ADDRESS
        ? process.env.REACT_APP_FIXED_PRICE_ADDRESS
        : "",
      dogsERC721.abi,
      signer
    );
    return contract;
  };

  const loadBreed = async () => {
    const contract = await getContract();
    const result = await contract.name();
    console.log(result);
    setBreed(result);
  };

  const loadSupply = async () => {
    const contract = await getContract();
    const result = await contract.count();
    console.log(result);
    setSupply(result);
  };

  loadSupply();
  loadBreed();

  return (
    <h2>
      {supply} {breed}
    </h2>
  );
};

export default TotalSupply;
