import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import setting from "../setting.json";
import dogsERC721 from "../build/contracts/DogERC721.json";
import Web3 from "web3";

const Register = () => {
  const [error, setError] = useState();
  const [showError, setShowError] = useState(false);
  const [txHash, setTxHash] = useState();
  const [showTxHash, setShowTxHash] = useState(false);

  const onSubmit = async value => {
    console.log(value);
    const { ethereum } = window;

    if (typeof window.ethereum === "undefined") {
      setError("MetaMask not installed!");
      setShowError(true);
      return false;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[2];
    if (account === "") {
      setError("MetaMask account not found!");
      setShowError(true);
      return false;
    }
    try {
      const web3 = new Web3(
        new Web3.providers.WebsocketProvider(process.env.RINKEBY_NODE)
      );

      const contract = new web3.eth.Contract(
        dogsERC721.abi,
        setting.Ethereum.ContractAddress
      );

      const puppy = contract.methods
        .addOwnPuppy(
          value.name.toUpperCase(),
          value.dob,
          value.microchip,
          value.damID,
          value.sireID,
          value.sex
        )
        .encodeABI();

      console.log(puppy);

      const transactionParameters = {
        from: ethereum.selectedAddress, // must match user's active address.
        gasPrice: setting.Ethereum.GasPrice, // customizable by user during MetaMask confirmation.
        gas: setting.Ethereum.GasLimit, // customizable by user during MetaMask confirmation.
        to: setting.Ethereum.ContractAddress, // Required except during contract publications.
        value: "0x00", // Only required to send ether to the recipient from the initiating external account.
        data: puppy, // Optional, but used for defining smart contract creation and interaction.
        chainId: 3 // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      };

      // txHash is a hex string
      // As with any RPC call, it may throw an error
      const txHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters]
      });
      setTxHash(txHash);
      setShowTxHash(true);
    } catch (error) {
      console.log(error);
    }
  };
};

export default Register;
