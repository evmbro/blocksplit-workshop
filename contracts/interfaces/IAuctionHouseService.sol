// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
interface IAuctionHouseService {
   
   // STRUCTS
 
   struct InfoEntry {
       string hash;
       uint256 timestamp;
   }
 
   //  EVENTS
 
   event TransferOwnership(address oldOwner, address newOwner);
   event SetFee(uint256 numerator, uint256 denominator);
   event SetInfo(string infoHash);
   event HarvestFees(uint256 auctionsHarvested);
   event CreateAuction(address auction);
 
   // READ
 
   function owner() external view returns (address);
   function info() external view returns (string memory);
   function infoHistoryList() external view returns (InfoEntry[] memory);
   function auctionsList() external view returns (address[] memory);
   function fee() external view returns (uint256 numerator, uint256 denominator);
   function feeTokensList() external view returns (address[] memory);
   function totalFeesPerToken(address token) external view returns (uint256);

   // WRITE
 
   function transferOwnership(address newOwner) external returns (bool);
   function setFee(uint256 numerator, uint256 denominator) external returns (bool);
   function setInfo(string memory infoHash) external returns (bool);
   function harvestFees(address[] memory) external returns (uint256 totalHarvested);
   function createAuction(
       string memory name,
       string memory infoHash,
       address auctionToken,
       address beneficiary,
       uint256 minBid,
       uint256 duration
   ) external returns (address auction);
 
}
