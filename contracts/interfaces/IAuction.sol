// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
interface IAuction {
  
   // STRUCTS
   struct Bid {
       address bidder;
       uint256 amount;
       uint256 timestamp;
   }
 
   // EVENTS
   event HighestBidIncreased(address bidder, uint256 amount);
   event Withdraw(address bidder, uint256 amount);
   event AuctionEnded(address highestBidder, uint256 highestAmount, address auctionToken);
   event Harvest(uint256 amount);
 
   // READ
   function auctionHouseService() external view returns (address);
   function creator() external view returns (address);
   function name() external view returns (string memory);
   function info() external view returns (string memory);
   function beneficiary() external view returns (address);
   function auctionToken() external view returns (address);
   function minBid() external view returns (uint256);
   function createdAt() external view returns (uint256);
   function endTime() external view returns (uint256);
   function highestBid() external view returns (Bid memory);
   function allBids() external view returns (Bid[] memory);
   function pendingReturns(address bidder) external view returns (uint256);
   function ended() external view returns (bool);
  
   // WRITE
   function bid(uint256 amount) external returns (bool);
   function withdraw() external returns (uint256 amount);
   function auctionEnd() external returns (uint256 amount);
   function harvest() external returns (uint256 amount);
 
}
