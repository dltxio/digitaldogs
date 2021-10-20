# solidity-template

A template for solidity development with [hardhat](https://github.com/nomiclabs/hardhat).

## Scripts

### hh:compile

Compiles the contracts with Hardhat

### hh:deploy

Runs the deployment script with the network set in `process.env.NETWORK`.

### hh:node

Starts a local hardhat node with the `localhost` network.

## Contracts

Contracts are located in the `/contracts` folder.

## Configuration

See `/hardhat.config.ts` for hardhat configuration. Some values are fetched from environment variables, see `dev.env` for local development environment variables and copy it into `.env` before changing the values.

## Deployment

The deployment script is located in the `/scripts/deploy` folder. Each contract to be deployed should have its own deployment module.

### Contract addresses

Deployed addresses are saved in `/contracts.json` for each network. This file should be committed so that addresses are managed by git.

## Hardhat Tasks

Tasks are located in the `/scripts/tasks` folder.
A hardhat task allows for easy contract interaction from the command line. To run a contract task, run a command with the following structure:

```
npx hardhat <taskName>
  --network <networkName>
  [--argName <argValue>]
```

For the local hardhat network, use the default `localhost` value for `networkName`.
