import { ethers } from "hardhat";
import { AuctionHouseService, QueryService } from "../typechain-types";
 
async function main() {
   const accounts = await ethers.getSigners();

   console.log("Deploying from wallet: ", await accounts[0].getAddress());
 
   const AuctionHouseServiceFactory = await ethers.getContractFactory("AuctionHouseService");
   const auctionHouseService: AuctionHouseService = (await AuctionHouseServiceFactory.deploy(
       await accounts[0].getAddress(),
       "info",
       1, 10
   )) as AuctionHouseService;

   const QueryServiceFactory = await ethers.getContractFactory("QueryService");
   const queryService: QueryService = (await QueryServiceFactory.deploy()) as QueryService;
    
   console.log("AuctionHouseService deployed at", auctionHouseService.address);
   console.log("QueryService deployed at", queryService.address);
   console.log("Owner: ", await auctionHouseService.owner());
}
 
main()
 .then(() => process.exit(0))
 .catch((error) => {
   console.error(error);
   process.exit(1);
 });
