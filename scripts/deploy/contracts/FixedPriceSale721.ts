import { ethers } from "ethers";
import { deployContract, verifyOnEtherscan } from "../utils";

export const deploy = async setAddresses => {
  console.log("deploying FixedPriceSale721");
  const args = ["86400"];
  const contract = await deployContract("FixedPriceSale721", args, 8);
  console.log(`deployed NFT contract to address ${contract.address}`);
  setAddresses({ fixedpricesale: contract.address });
  //@ts-ignore
  await verifyOnEtherscan(contract.address, args);

  // Set Class A2
  await contract.setClassDetails(
    "Class A2",
    1,
    +process.env.REACT_APP_CLASS_A2!,
    ethers.utils.parseEther("0.3"),
    1
  );

  // Set Class A3
  await contract.setClassDetails(
    "Class A3",
    +process.env.REACT_APP_CLASS_A2! + 1,
    +process.env.REACT_APP_CLASS_A3!,
    ethers.utils.parseEther("0.3"),
    1
  );

  // Set Class B1
  await contract.setClassDetails(
    "Class B1",
    +process.env.REACT_APP_CLASS_A3! + 1,
    +process.env.REACT_APP_CLASS_B1!,
    ethers.utils.parseEther("0.1"),
    2
  );

  // Set Class B2
  await contract.setClassDetails(
    "Class B2",
    +process.env.REACT_APP_CLASS_B1! + 1,
    +process.env.REACT_APP_CLASS_B2!,
    ethers.utils.parseEther("0.1"),
    2
  );

  // Set Class C1
  await contract.setClassDetails(
    "Class C1",
    +process.env.REACT_APP_CLASS_B2! + 1,
    +process.env.REACT_APP_CLASS_C1!,
    ethers.utils.parseEther("0.05"),
    4
  );

  // Set Class C2
  await contract.setClassDetails(
    "Class C2",
    +process.env.REACT_APP_CLASS_C1! + 1,
    +process.env.REACT_APP_CLASS_C2!,
    ethers.utils.parseEther("0.05"),
    4
  );

  // Set Class D1
  await contract.setClassDetails(
    "Class D1",
    +process.env.REACT_APP_CLASS_C2! + 1,
    +process.env.REACT_APP_CLASS_D1!,
    ethers.utils.parseEther("0.01"),
    19
  );

  // Set Class D2
  await contract.setClassDetails(
    "Class D2",
    +process.env.REACT_APP_CLASS_D1! + 1,
    +process.env.REACT_APP_CLASS_D2!,
    ethers.utils.parseEther("0.01"),
    19
  );

  // Set Class E1
  await contract.setClassDetails(
    "Class E1",
    +process.env.REACT_APP_CLASS_D2! + 1,
    +process.env.REACT_APP_CLASS_E1!,
    ethers.utils.parseEther("0.0025"),
    2040
  );

  // Set Class E2
  await contract.setClassDetails(
    "Class E2",
    +process.env.REACT_APP_CLASS_E1! + 1,
    +process.env.REACT_APP_CLASS_E2!,
    ethers.utils.parseEther("0.0025"),
    2040
  );

  await contract.setBaseURI(
    "https://gateway.pinata.cloud/ipfs/QmPkNJKEcMHu9JLyjMhU8bwdZ6aqvjDaz6rq21n3q4YPuu/"
  );

  // TEST DATA

  // await contract.buyTokens(
  //   0.25,
  //   9,
  //   "3401,3402,3403,3404,3405,3406,3407,3408,3409,3410,3411,3412,3413,3414,3415,3416,3417,3418,3419,3420,3421,3422,3423,3424,3425,3426,3427,3428,3429,3430,3431,3432,3433,3434,3435,3436,3437,3438,3439,3440,3441,3442,3443,3444,3445,3446,3447,3448,3449,3450,3451,3452,3453,3454,3455,3456,3457,3458,3459,3460,3461,3462,3463,3464,3465,3466,3467,3468,3469,3470,3471,3472,3473,3474,3475,3476,3477,3478,3479,3480,3481,3482,3483,3484,3485,3486,3487,3488,3489,3490,3491,3492,3493,3494,3495,3496,3497,3498,3499,3500"
  // )

  // await contract.buyTokens(
  //   0.25,
  //   8,
  //"1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459"
  // )

  // await contract.buyToken(
  //   0.3,
  //   0,
  //   "17"
  // )

  // await contract.buyToken(
  //   0.1,
  //   2,
  //   "38"
  // )

  // await contract.buyTokens(
  //   0.15,
  //   4,
  // "239,240,241"

  // await contract.buyTokens(
  //   0.1,
  //   7,
  // "851,852,853,854,855,856,857,858,859,860"

  return contract;
};
