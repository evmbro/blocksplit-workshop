// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IAuction.sol";
import "../interfaces/IAuctionHouseService.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Auction is IAuction {

    //------------------------
    //  STATE
    //------------------------
    address public override auctionHouseService;
    address public override creator;
    string public override name;
    string public override info;
    address public override beneficiary;
    address public override auctionToken;
    uint256 public override minBid;
    uint256 public override createdAt;
    uint256 public override endTime;
    bool public override ended;

    address public highestBidderAddress;
    uint256 public highestBidderAmount;
    uint256 public highestBidderTimestamp;
    Bid[] public bids;

    mapping (address => uint256) public override pendingReturns;

    //------------------------
    //  CONSTRUCTOR
    //------------------------
    constructor(
        address _creator,
        string memory _name,
        string memory _info,
        address _beneficiary,
        address _auctionToken,
        uint256 _minBid,
        uint256 _duration
    ) {
        require(
            _creator != address(0),
            "Auction:: creator is 0x0"
        );
        require(
            _beneficiary != address(0),
            "Auction:: beneficiary is 0x0"
        );
        require(
            _auctionToken != address(0),
            "Auction:: auctionToken is 0x0"
        );
        auctionHouseService = msg.sender;
        creator = _creator;
        name = _name;
        info = _info;
        beneficiary = _beneficiary;
        auctionToken = _auctionToken;
        minBid = _minBid;
        createdAt = block.timestamp;
        endTime = block.timestamp + _duration;
    }

    //------------------------
    //  MODIFIERS
    //------------------------
    modifier auctionActive() {
        require(
            block.timestamp <= endTime,
            "Auction:: auction expired"
        );
        _;
    }

    //---------------------------
    //  IAuction IMPL
    //---------------------------
    function highestBid() external view override returns (Bid memory) {
        return Bid(
            highestBidderAddress,
            highestBidderAmount,
            highestBidderTimestamp
        );
    }
    function allBids() external view override returns (Bid[] memory) {
        return bids;
    }

    function bid(uint256 amount) external override auctionActive returns (bool) {
        require(
            amount > highestBidderAmount && amount >= minBid,
            "Auction:: bid not high enough"
        );
        IERC20(auctionToken).transferFrom(msg.sender, address(this), amount);
        if (highestBidderAmount != 0) {
            pendingReturns[highestBidderAddress] += highestBidderAmount;
        }
        highestBidderAddress = msg.sender;
        highestBidderAmount = amount;
        highestBidderTimestamp = block.timestamp;
        bids.push(Bid(
            msg.sender,
            amount,
            block.timestamp
        ));
        emit HighestBidIncreased(msg.sender, amount);
        return true;
    }

    function withdraw() external override returns (uint256) {
        uint256 amount = pendingReturns[msg.sender];
        if (amount > 0) {
            pendingReturns[msg.sender] = 0;
            IERC20(auctionToken).transfer(msg.sender, amount);
            emit Withdraw(msg.sender, amount);
        }
        return amount;
    }

    function auctionEnd() external override returns (uint256) {
        require(
            block.timestamp > endTime,
            "Auction:: auction still active"
        );
        require(
            !ended,
            "Auction:: already ended"
        );
        
        ended = true;
        emit AuctionEnded(highestBidderAddress, highestBidderAmount, auctionToken);

        uint256 beneficiaryAmount;
        IAuctionHouseService ahService = IAuctionHouseService(auctionHouseService);
        (uint256 numerator, uint256 denominator) = ahService.fee();
        if (highestBidderAmount > 0) {
            if (numerator == 0) {
                beneficiaryAmount = highestBidderAmount;
            } else {
                beneficiaryAmount = highestBidderAmount - highestBidderAmount * numerator / denominator;
            }
            IERC20(auctionToken).transfer(beneficiary, beneficiaryAmount);
        }

        return beneficiaryAmount;
    }

    function harvest() external override returns (uint256) {
        require(
            ended,
            "Auction:: not ended"
        );
        require(
            msg.sender == auctionHouseService,
            "Auction:: invalid caller"
        );
        
        uint256 funds = IERC20(auctionToken).balanceOf(address(this));
        if (funds > 0) {
            IERC20(auctionToken).transfer(
                IAuctionHouseService(auctionHouseService).owner(),
                funds
            );
        }

        emit Harvest(funds);
        return funds;
    }

}
