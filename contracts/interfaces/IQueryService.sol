// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IAuction.sol";

interface IQueryService {
 
   struct AuctionListItemData {
       string name;
       address contractAddress;
       uint256 createdAt;
       uint256 endsAt;
       address paymentToken;
       uint256 highestBid;
       bool closed;
   }
 
   struct ProtocolFeeData {
       address token;
       uint256 totalAmount;
   }
 
   struct AuctionHouseData {
       address owner;
       address contractAddress;
       string info;
       uint256 currentFeeNumerator;
       uint256 currentFeeDenominator;
       AuctionListItemData[] auctions;
       ProtocolFeeData[] totalFees;
       ProtocolFeeData[] totalFeesToHarvest;
       address[] auctionsToHarvest;
   }

   struct AuctionDetailsData {
       address creator;
       address contractAddress;
       address auctionHouseAddress;
       string name;
       string info;
       address beneficiary;
       address auctionToken;
       uint256 minBid;
       uint256 createdAt;
       uint256 endsAt;
       address highestBidderAddress;
       uint256 highestBidderAmount;
       IAuction.Bid[] allBids;
       uint256 pendingReturnsAmount;
       bool closed;
   }
 
   function getAuctionHouseData(
      address auctionHouseServiceAddress
   ) external view returns (AuctionHouseData memory);
   
   function getAuctionDetailsData(
       address auctionAddress,
       address bidder
   ) external view returns (AuctionDetailsData memory);
 
}
