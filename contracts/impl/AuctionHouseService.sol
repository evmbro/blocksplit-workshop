// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IAuctionHouseService.sol";
import "../impl/Auction.sol";

contract AuctionHouseService is IAuctionHouseService {

    //------------------------
    //  STATE
    //------------------------
    address public override owner;
    string public override info;
    InfoEntry[] public infoHistory;
    address[] public auctions;
    uint256 public feeNumerator;
    uint256 public feeDenominator;

    //------------------------
    //  STATS
    //------------------------
    mapping(address => uint256) public override totalFeesPerToken;
    address[] public feeTokens;

    //------------------------
    //  CONSTRUCTOR
    //------------------------    
    constructor(
        address _owner,
        string memory _info,
        uint256 _feeNumerator,
        uint256 _feeDenominator
    ) {
        require(
            _owner != address(0),
            "AuctionHouseService:: owner is 0x0"
        );
        _validateFee(_feeNumerator, _feeDenominator);
        owner = _owner;
        info = _info;
        feeNumerator = _feeNumerator;
        feeDenominator = _feeDenominator;
    }
    
    //------------------------
    //  MODIFIERS
    //------------------------
    modifier isOwner() {
        require(
            msg.sender == owner,
            "AuctionHouseService:: not an owner"
        );
        _;
    }

    //---------------------------
    //  IAuctionHoueService IMPL
    //---------------------------
    function infoHistoryList() external view override returns (InfoEntry[] memory) { return infoHistory; }
    
    function auctionsList() external view override returns (address[] memory) { return auctions; }

    function fee() external view override returns (uint256 numerator, uint256 denominator) {
        return (feeNumerator, feeDenominator);
    }

    function feeTokensList() external view override returns (address[] memory) { return feeTokens; }

    function transferOwnership(address newOwner) external override isOwner returns (bool) {
        address oldOwner = owner;
        owner = newOwner;
        emit TransferOwnership(oldOwner, newOwner);
        return true;
    }

    function setFee(uint256 numerator, uint256 denominator) external override isOwner returns (bool) {
        _validateFee(numerator, denominator);
        feeNumerator = numerator;
        feeDenominator = denominator;
        emit SetFee(numerator, denominator);
        return true;
    }

    function setInfo(string memory infoHash) external override isOwner returns (bool) {
        infoHistory.push(InfoEntry(
            infoHash,
            block.timestamp
        ));
        info = infoHash;
        emit SetInfo(info);
        return true;
    }
    
    function harvestFees(address[] memory auctionsToHarvest) external override returns (uint256) {
        uint256 totalAuctionsHarvested;
        for (uint256 i = 0; i < auctionsToHarvest.length; i++) {
            IAuction auction = IAuction(auctionsToHarvest[i]);
            uint256 harvested = auction.harvest();
            if (harvested > 0) {
                address feeToken = auction.auctionToken();
                if (totalFeesPerToken[feeToken] == 0) { feeTokens.push(feeToken); }
                totalFeesPerToken[feeToken] += harvested;
                totalAuctionsHarvested++;
            }
        }
        emit HarvestFees(totalAuctionsHarvested);
        return totalAuctionsHarvested;
    }

    function createAuction(
        string memory name,
        string memory infoHash,
        address auctionToken,
        address beneficiary,
        uint256 minBid,
        uint256 duration
    ) external override returns (address) {
        address auction = address(new Auction(
            msg.sender,
            name,
            infoHash,
            beneficiary,
            auctionToken,
            minBid,
            duration
        ));
        auctions.push(auction);
        emit CreateAuction(auction);
        return auction;
    }

    //------------------------
    //  HELPERS
    //------------------------
    function _validateFee(uint256 numerator, uint256 denominator) private pure {
        require(
            numerator <= denominator,
            "AuctionHouseService:: fee greater than 100%"
        );
        require(
            denominator != 0,
            "AuctionHouseService:: division by 0"
        );
    }

}
