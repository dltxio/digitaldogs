from web3 import Web3
import json

from dotenv import load_dotenv
load_dotenv('../.env')

import os

NODE = os.getenv('REACT_APP_NODE')
CONTRACT_ADDRESS = os.getenv('REACT_APP_CONTRACT_ADDRESS')
print (NODE)

w3 = Web3(Web3.WebsocketProvider(NODE))

with open('../src/build/contracts/DogERC721.json') as json_file:
  data = json.load(json_file)
  abi=data['abi']
  bytecode=data['bytecode']

  # print(abi)

  contract = w3.eth.contract(CONTRACT_ADDRESS, abi=abi)
  name = contract.functions.name().call()
  print (name)

# # string calldata name, uint256 dob, bytes32 microchip, Sex sex, uint256 dam, uint256 sire, address owner
# tx_hash = contract.functions.addPuppy(bob, 100).transact({'from': alice})
# print (tx_hash)