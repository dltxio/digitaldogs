//const parse = require("csv-parse");
const fs = require("fs");
const path = require("path");
const neatCsv = require("neat-csv");

const DogERC721 = artifacts.require("DogERC721");

module.exports = function (deployer) {
    const dogs = await DogERC721.deployed();
    const filePath = path.join(__dirname, "beagles.csv");

    fs.readFile(filePath, async (error, data) => {
        if (error) {
            return console.log("error reading file");
        }
        
        const parsedData = await neatCsv(data);
        console.log(parsedData);
        //await dogs.addPuppy(datum[0], datum[1], datum[2], datum[3], datum[4], datum[5], datum[6]);
    });
  };
