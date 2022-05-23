// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IAuctionHouseService.sol";
import "../interfaces/IAuction.sol";
import "../interfaces/IQueryService.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract QueryService is IQueryService {

    function getAuctionHouseData(
        address auctionHouseServiceAddress
    ) external view override returns (AuctionHouseData memory) {
        IAuctionHouseService auctionHouseService = IAuctionHouseService(auctionHouseServiceAddress);
        
        address[] memory auctionsList = auctionHouseService.auctionsList();
        uint256 auctionsLength = auctionsList.length;

        AuctionListItemData[] memory auctions = new AuctionListItemData[](auctionsLength);
        for (uint256 i = 0; i < auctionsLength; i++) {
            address auctionAddress = auctionsList[i];
            IAuction auction = IAuction(auctionAddress);
            auctions[i] = AuctionListItemData(
                auction.name(),
                auctionAddress,
                auction.createdAt(),
                auction.endTime(),
                auction.auctionToken(),
                auction.highestBid().amount,
                auction.ended()
            );
        }

        address[] memory feeTokensList = auctionHouseService.feeTokensList();
        uint256 feeTokensLength = feeTokensList.length;
        ProtocolFeeData[] memory totalFees = new ProtocolFeeData[](feeTokensLength);
        for (uint256 i = 0; i < feeTokensLength; i++) {
            address token = feeTokensList[i];
            totalFees[i] = ProtocolFeeData(
                token,
                auctionHouseService.totalFeesPerToken(token)
            );
        }

        uint256 auctionsToHarvestCount = 0;
        for(uint i = 0; i < auctionsLength; i++) {
            address auctionAddress = auctionsList[i];
            IAuction auction = IAuction(auctionAddress);
            IERC20 token = IERC20(auction.auctionToken());
            if (token.balanceOf(auctionAddress) > 0 && auction.ended()) {
                auctionsToHarvestCount++;
            }
        }

        address[] memory auctionsToHarvest = new address[](auctionsToHarvestCount);
        ProtocolFeeData[] memory totalFeesToHarvest = new ProtocolFeeData[](auctionsToHarvestCount);
        for(uint i = 0; i < auctionsLength; i++) {
            address auctionAddress = auctionsList[i];
            IAuction auction = IAuction(auctionAddress);
            address tokenAddress = auction.auctionToken();
            IERC20 token = IERC20(tokenAddress);
            uint256 tokenBalance = token.balanceOf(auctionAddress); 
            if (tokenBalance > 0 && auction.ended()) {
                auctionsToHarvest[i] = auctionAddress;
                totalFeesToHarvest[i] = ProtocolFeeData(
                    tokenAddress,
                    tokenBalance
                );
            }
        }
        
        (uint256 feeNumerator, uint256 feeDenominator) = auctionHouseService.fee();
        return AuctionHouseData(
            auctionHouseService.owner(),
            auctionHouseServiceAddress,
            auctionHouseService.info(),
            feeNumerator,
            feeDenominator,
            auctions,
            totalFees,
            totalFeesToHarvest,
            auctionsToHarvest
        );
    }

    function getAuctionDetailsData(
        address auctionAddress,
        address bidder
    ) external view override returns (AuctionDetailsData memory) {
        IAuction auction = IAuction(auctionAddress);
        IAuction.Bid memory highestBid = auction.highestBid();
        return AuctionDetailsData(
            auction.creator(),
            auctionAddress,
            auction.auctionHouseService(),
            auction.name(),
            auction.info(),
            auction.beneficiary(),
            auction.auctionToken(),
            auction.minBid(),
            auction.createdAt(),
            auction.endTime(),
            highestBid.bidder,
            highestBid.amount,
            auction.allBids(),
            auction.pendingReturns(bidder),
            auction.ended()
        );
    }

}
