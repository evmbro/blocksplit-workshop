import { ethers } from "hardhat";
import { AuctionHouseService } from "../typechain-types";

async function main() {
    const accounts = await ethers.getSigners();

    const AuctionHouseServiceFactory = await ethers.getContractFactory("AuctionHouseService");
    const auctionHouseService: AuctionHouseService = (await AuctionHouseServiceFactory.deploy(
        await accounts[0].getAddress(),
        "info",
        1, 10
    )) as AuctionHouseService;

    console.log("AuctionHouseService deployed at", auctionHouseService.address);
    console.log("Owner: ", await auctionHouseService.owner());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
