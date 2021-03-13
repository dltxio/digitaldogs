//const parse = require("csv-parse");
const fs = require("fs");
const path = require("path");
const neatCsv = require("neat-csv");

const DogERC721 = artifacts.require("DogERC721");

module.exports = async function (deployer) {
    const dogs = await DogERC721.deployed();

    const dob = new Date("2019-02-07");
    const epoch = dob.getTime();
    // string calldata name, uint256 dob, bytes32 microchip, Sex sex, uint256 dam, uint256 sire, address owner
    // BALDEV QUEEN OF DIAMONDS,2019-02-07
    await dogs.addPuppy("BALDEV QUEEN OF DIAMONDS", epoch, "0x956000010822866", 0, 0, 0, "0xf51f726449bf2944f11652A349655Bd53c48c9A6");
  };
