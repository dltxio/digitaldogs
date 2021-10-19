import React, { useState } from "react";
// import { Formik, Field, Form } from "formik";
import setting from "../../settings.json";
import dogsERC721 from "../../build/contracts/DogERC721.sol/DogERC721.json";
import useWallet from "../Hooks/useWallet";
import { ethers, utils } from "ethers";

const Register = () => {
  const [error, setError] = useState<string>();
  const [showError, setShowError] = useState(false);
  const [txHash, setTxHash] = useState();
  const [showTxHash, setShowTxHash] = useState(false);

  const onSubmit = async value => {
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

    const contract = await getContract();

    const tx = await contract.addOwnPuppy(
      value.name.toUpperCase(),
      value.dob,
      value.microchip,
      value.damID,
      value.sireID,
      value.sex
    );
    setTxHash(tx.hash);
    setShowTxHash(true);
  };
};

export default Register;
