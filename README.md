# Auction House Service

This project was developed for the purposes of the BlockSplit 3 workshop - "Building full stack dapps",
organized by [AMPnet](https://www.ampnet.io) at the third [BlockSplit](https://www.blocksplit.net) conference
taking place in Split - the heart of Mediterranean. The workshop took place on 23rd of May 2022 and was open sourced to
the wider community in  order to bring the dapp development process closer to the web3 newcomers but also to the
software developers wanting to pivot to the smart contracts development.

The idea behind the workshop is to develop the real world application - Auction House Service.
Auction House Service is a decentralized application powered by the Ethereum blockchain network.
It allows anyone to create an auction, and if auction is closed successfully, the Auction House Service
owner earns protocol fees. The project and the workshop are described in more detail
[here](https://ampnet.notion.site/Building-full-stack-dapps-73253b11bed9404d91fd7c9c9f07bfd2).

This project is intended to showcase the following:
- initialize the empty project
- add typescript and typechain support
- deploy ERC20 token, we'll call it USDC
- implement core Auction House Service functionalities
- implement QueryService functionalities (service layer supporting frontend screens)
- implementing the full flow test of the Auction House service (creating, bidding, closing auction, protocol fee harvesting)
- creating the deployment script (automates the deployment, easily deploy this service on any EVM compatible chain)

You can explore each of these steps from above by following the commits history,
or you can simply pull the latest master and then play with the project as explained below.

## Clone the repo

```shell
git clone git@github.com:AMPnet/auction-house-dapp.git
```

## Install dependencies

```shell
npm install
```

## Compile

```shell
npx hardhat compile
```

## Test

```shell
npx hardhat test
```

## Deploy on Polygon Mumbai

```shell
cp .env.example .env
```
... and then fill the created *.env* file with your secret values. Then run

```shell
npx hardhat run scripts/deploy.ts --network mumbai
```

To add more networks use the `mumbai` config shown as an example in this repo. Once you add your network of choice in
the *hardhat.config.ts*, you can select it as shown above using the `--network` flag. Also make sure your deployer
wallet defined by the SEED_PHRASE var in *.env* file is funded before the deployment.
