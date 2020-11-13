import React, { useState } from "react";

import Web3 from "web3";
import dogsERC721 from "../build/contracts/DogERC721.json";
import setting from "../setting.json";

const TotalSupply = () => {
  const [supply, setSupply] = useState(0);
  const [breed, setBreed] = useState();

  //https://rinkby.infura.io/v3/64710bd1f20c42519965cd9c1dab700b
  //const web3 = new Web3(new Web3.providers.WebsocketProvider(setting.Ethereum.Node));
  const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/f22ec9acdf944e1eb2dc04ed2bea08e5"));

  const contract = new web3.eth.Contract(
    dogsERC721.abi,
    setting.Ethereum.ContractAddress
  );

  // contract.methods.totalSupply().call()
  // .then(function(result){
  //     setSupply(result)
  // });

  contract.methods.name().call()
  .then(function(result){
      setBreed(result)
  });

  const loadCount = async () => {
    const result = await contract.methods.name().call();
    console.log(result);
    setSupply(result);
  }

  loadCount();

  return (
    <h2>Total Supply {supply} of {breed}</h2>
  );
};

export default TotalSupply;
