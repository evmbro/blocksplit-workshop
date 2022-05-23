import { ethers } from "hardhat";
import { expect } from "chai";
import { Signer, BigNumber } from "ethers";

import { AuctionHouseService, Auction, USDC, QueryService } from "../typechain-types"

describe("Auction House Service", async () => {

    let accounts: Signer[];
    
    let ahOwner: Signer;
    let ahOwnerAddress: string;

    let ahCreator: Signer;
    let ahCreatorAddress: string;

    let bidder1: Signer;
    let bidder1Address: string;

    let bidder2: Signer;
    let bidder2Address: string;

    let bidder3: Signer;
    let bidder3Address: string;

    let beneficiary: Signer;
    let beneficiaryAddress: string;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        ahOwner = accounts[0];
        ahOwnerAddress = await ahOwner.getAddress();
        ahCreator = accounts[1];
        ahCreatorAddress = await ahCreator.getAddress();
        bidder1 = accounts[2];
        bidder1Address = await bidder1.getAddress();
        bidder2 = accounts[3];
        bidder2Address = await bidder2.getAddress();
        bidder3 = accounts[4];
        bidder3Address = await bidder3.getAddress();
        beneficiary = accounts[5];
        beneficiaryAddress = await beneficiary.getAddress();
    });

    it("should be able to run a full flow", async () => {
        const AuctionHouseServiceContract = await ethers.getContractFactory("AuctionHouseService");

        const ahInfoHash = "ah-info-hash";
        const ahFeeNumerator = 1;
        const ahFeeDenominator = 10;
        const auctionHouseService: AuctionHouseService = (await AuctionHouseServiceContract.deploy(
            ahOwnerAddress,
            ahInfoHash,
            ahFeeNumerator,
            ahFeeDenominator
        )) as AuctionHouseService;
        console.log("auction house service address", auctionHouseService.address);

        const USDCContract = await ethers.getContractFactory("USDC");
        const usdc: USDC = (await USDCContract.deploy()) as USDC;
        console.log("usdc address", usdc.address);

        const QueryServiceContract = await ethers.getContractFactory("QueryService");
        const queryService: QueryService  = (await QueryServiceContract.deploy()) as QueryService;
        console.log("query service address", queryService.address);

        const auctionName = "My Auction";
        const auctionInfo = "auction-info";
        const auctionMinBid = usdcToWei(50); // 50$ min bid
        const duration = 20 * 60;            // 20 min duration
        const auctionCreationTx = await auctionHouseService.createAuction(
            auctionName,
            auctionInfo,
            usdc.address,
            beneficiaryAddress,
            auctionMinBid,
            duration
        );

        const auctionCreationTxReceipt = await ethers.provider.waitForTransaction(auctionCreationTx.hash);
        const parsedLog = auctionHouseService.interface.parseLog(auctionCreationTxReceipt.logs[0]);
        
        const auction: Auction = (await ethers.getContractAt("Auction", parsedLog.args.auction)) as Auction;
        
        // bidder 1 bids 60$
        const bidder1BidAmount = usdcToWei(60); 
        await usdc.mint(bidder1Address, bidder1BidAmount);
        await usdc.connect(bidder1).approve(auction.address, bidder1BidAmount);
        await auction.connect(bidder1).bid(bidder1BidAmount);
        expect(await usdc.balanceOf(bidder1Address)).to.be.equal(0);

        // bidder 2 bids 70$
        const bidder2BidAmount = usdcToWei(70); 
        await usdc.mint(bidder2Address, bidder2BidAmount);
        await usdc.connect(bidder2).approve(auction.address, bidder2BidAmount);
        await auction.connect(bidder2).bid(bidder2BidAmount);
        expect(await usdc.balanceOf(bidder2Address)).to.be.equal(0);

        // bidder 3 bids 80$
        const bidder3BidAmount = usdcToWei(80); 
        await usdc.mint(bidder3Address, bidder3BidAmount);
        await usdc.connect(bidder3).approve(auction.address, bidder3BidAmount);
        await auction.connect(bidder3).bid(bidder3BidAmount);
        expect(await usdc.balanceOf(bidder3Address)).to.be.equal(0);

        // check total balance of auction contract
        expect(await usdc.balanceOf(auction.address)).to.be.equal(
            bidder1BidAmount.add(bidder2BidAmount).add(bidder3BidAmount)
        );

        // bidder 1 withdraws bid
        await auction.connect(bidder1).withdraw();
        expect(await usdc.balanceOf(bidder1Address)).to.be.equal(bidder1BidAmount);

        // advance time to the end of auction
        await advanceBlockTime(
            (await auction.endTime()).toNumber() + 1
        );

        // close the auction
        await auction.auctionEnd();
        const fee = usdcToWei(8);
        const beneficiaryGrant = usdcToWei(72);

        // auction remains with fee + bidder2 amount
        expect(await usdc.balanceOf(auction.address)).to.be.equal(
            bidder2BidAmount.add(fee)
        );

        // beneficiary has received the grant
        expect(await usdc.balanceOf(beneficiaryAddress)).to.be.equal(beneficiaryGrant);

        // get auction details
        const auctionDetails = await queryService.getAuctionDetailsData(auction.address, bidder2Address);
        console.log("auction details", auctionDetails);

        // bidder 2 withdraws bid
        await auction.connect(bidder2).withdraw();
        expect(await usdc.balanceOf(bidder2Address)).to.be.equal(bidder2BidAmount);
        
        // auction remains with fee only
        expect(await usdc.balanceOf(auction.address)).to.be.equal(fee);

        // get auction house data
        const auctionHouseData = await queryService.getAuctionHouseData(auctionHouseService.address);
        console.log("auction house data", auctionHouseData);

        // auction house owner harvests fee
        await auctionHouseService.harvestFees([ auction.address ]);
        expect(await usdc.balanceOf(ahOwnerAddress)).to.be.equal(fee);
        expect(await usdc.balanceOf(auction.address)).to.be.equal(0);

        // get bids
        const bids = await auction.allBids();
        console.log("bids", bids);

        // get auctions
        const auctions = await auctionHouseService.auctionsList();
        console.log("auctions", auctions);

    });

    function usdcToWei(amount: number): BigNumber {
        return ethers.utils.parseUnits(amount.toString(), 6);
    }

    function weiToUsdc(wei: BigNumber): number {
        return Number(ethers.utils.formatUnits(wei, 6));
    }

    async function advanceBlockTime(time: Number): Promise<String> {
        const response = await ethers.provider.send("evm_mine", [time]);
        console.log("response", response);
        const latest = await ethers.provider.getBlock("latest");
        return latest.hash;
    }

});
