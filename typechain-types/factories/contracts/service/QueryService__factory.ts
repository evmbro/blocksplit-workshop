/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  QueryService,
  QueryServiceInterface,
} from "../../../contracts/service/QueryService";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "auctionAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "bidder",
        type: "address",
      },
    ],
    name: "getAuctionDetailsData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "auctionHouseAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "info",
            type: "string",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "address",
            name: "auctionToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minBid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endsAt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "highestBidderAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "highestBidderAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "bidder",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            internalType: "struct IAuction.Bid[]",
            name: "allBids",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "pendingReturnsAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "closed",
            type: "bool",
          },
        ],
        internalType: "struct IQueryService.AuctionDetailsData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auctionHouseServiceAddress",
        type: "address",
      },
    ],
    name: "getAuctionHouseData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "info",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "currentFeeNumerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentFeeDenominator",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "address",
                name: "contractAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "createdAt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endsAt",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "paymentToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "highestBid",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "closed",
                type: "bool",
              },
            ],
            internalType: "struct IQueryService.AuctionListItemData[]",
            name: "auctions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
              },
            ],
            internalType: "struct IQueryService.ProtocolFeeData[]",
            name: "totalFees",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
              },
            ],
            internalType: "struct IQueryService.ProtocolFeeData[]",
            name: "totalFeesToHarvest",
            type: "tuple[]",
          },
          {
            internalType: "address[]",
            name: "auctionsToHarvest",
            type: "address[]",
          },
        ],
        internalType: "struct IQueryService.AuctionHouseData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612789806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063141494931461003b578063febc94fa1461006b575b600080fd5b61005560048036038101906100509190611bf6565b61009b565b60405161006291906123da565b60405180910390f35b61008560048036038101906100809190611c48565b61101e565b60405161009291906123b8565b60405180910390f35b6100a361179f565b600082905060008173ffffffffffffffffffffffffffffffffffffffff1663be08cb796040518163ffffffff1660e01b815260040160006040518083038186803b1580156100f057600080fd5b505afa158015610104573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061012d9190611c84565b905060008151905060008167ffffffffffffffff811115610177577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156101b057816020015b61019d611817565b8152602001906001900390816101955790505b50905060005b828110156105b95760008482815181106101f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151905060008190506040518060e001604052808273ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561025957600080fd5b505afa15801561026d573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906102969190611d2f565b81526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1663cf09e0d06040518163ffffffff1660e01b815260040160206040518083038186803b1580156102fd57600080fd5b505afa158015610311573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103359190611d99565b81526020018273ffffffffffffffffffffffffffffffffffffffff16633197cbb66040518163ffffffff1660e01b815260040160206040518083038186803b15801561038057600080fd5b505afa158015610394573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b89190611d99565b81526020018273ffffffffffffffffffffffffffffffffffffffff166399fdb3206040518163ffffffff1660e01b815260040160206040518083038186803b15801561040357600080fd5b505afa158015610417573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043b9190611c1f565b73ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1663d57bde796040518163ffffffff1660e01b815260040160606040518083038186803b15801561049c57600080fd5b505afa1580156104b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d49190611d70565b6020015181526020018273ffffffffffffffffffffffffffffffffffffffff166312fa6feb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561052357600080fd5b505afa158015610537573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055b9190611d06565b1515815250848481518110610599577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250505080806105b190612656565b9150506101b6565b5060008473ffffffffffffffffffffffffffffffffffffffff1663cac003df6040518163ffffffff1660e01b815260040160006040518083038186803b15801561060257600080fd5b505afa158015610616573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061063f9190611c84565b905060008151905060008167ffffffffffffffff811115610689577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156106c257816020015b6106af611882565b8152602001906001900390816106a75790505b50905060005b8281101561082057600084828151811061070b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151905060405180604001604052808273ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1663027b6111846040518263ffffffff1660e01b8152600401610775919061239d565b60206040518083038186803b15801561078d57600080fd5b505afa1580156107a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c59190611d99565b815250838381518110610801577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525050808061081890612656565b9150506106c8565b506000805b86811015610a35576000888281518110610868577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519050600081905060008173ffffffffffffffffffffffffffffffffffffffff166399fdb3206040518163ffffffff1660e01b815260040160206040518083038186803b1580156108bf57600080fd5b505afa1580156108d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f79190611c1f565b905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401610934919061239d565b60206040518083038186803b15801561094c57600080fd5b505afa158015610960573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109849190611d99565b118015610a0b57508173ffffffffffffffffffffffffffffffffffffffff166312fa6feb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109d257600080fd5b505afa1580156109e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0a9190611d06565b5b15610a1f578480610a1b90612656565b9550505b5050508080610a2d90612656565b915050610825565b5060008167ffffffffffffffff811115610a78577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610aa65781602001602082028036833780820191505090505b50905060008267ffffffffffffffff811115610aeb577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610b2457816020015b610b11611882565b815260200190600190039081610b095790505b50905060005b88811015610e1b5760008a8281518110610b6d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519050600081905060008173ffffffffffffffffffffffffffffffffffffffff166399fdb3206040518163ffffffff1660e01b815260040160206040518083038186803b158015610bc457600080fd5b505afa158015610bd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfc9190611c1f565b9050600081905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401610c3e919061239d565b60206040518083038186803b158015610c5657600080fd5b505afa158015610c6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8e9190611d99565b9050600081118015610d1a57508373ffffffffffffffffffffffffffffffffffffffff166312fa6feb6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ce157600080fd5b505afa158015610cf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d199190611d06565b5b15610e035784888781518110610d59577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200182815250878781518110610df7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052505b50505050508080610e1390612656565b915050610b2a565b506000808b73ffffffffffffffffffffffffffffffffffffffff1663ddca3f436040518163ffffffff1660e01b8152600401604080518083038186803b158015610e6457600080fd5b505afa158015610e78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9c9190611dc2565b915091506040518061012001604052808d73ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ef257600080fd5b505afa158015610f06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2a9190611c1f565b73ffffffffffffffffffffffffffffffffffffffff1681526020018f73ffffffffffffffffffffffffffffffffffffffff1681526020018d73ffffffffffffffffffffffffffffffffffffffff1663370158ea6040518163ffffffff1660e01b815260040160006040518083038186803b158015610fa757600080fd5b505afa158015610fbb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610fe49190611d2f565b81526020018381526020018281526020018a8152602001878152602001848152602001858152509c50505050505050505050505050919050565b6110266118b2565b600083905060008173ffffffffffffffffffffffffffffffffffffffff1663d57bde796040518163ffffffff1660e01b815260040160606040518083038186803b15801561107357600080fd5b505afa158015611087573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ab9190611d70565b9050604051806101e001604052808373ffffffffffffffffffffffffffffffffffffffff166302d05d3f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156110ff57600080fd5b505afa158015611113573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111379190611c1f565b73ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16631dfca92e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111b457600080fd5b505afa1580156111c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ec9190611c1f565b73ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561124d57600080fd5b505afa158015611261573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061128a9190611d2f565b81526020018373ffffffffffffffffffffffffffffffffffffffff1663370158ea6040518163ffffffff1660e01b815260040160006040518083038186803b1580156112d557600080fd5b505afa1580156112e9573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906113129190611d2f565b81526020018373ffffffffffffffffffffffffffffffffffffffff166338af3eed6040518163ffffffff1660e01b815260040160206040518083038186803b15801561135d57600080fd5b505afa158015611371573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113959190611c1f565b73ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff166399fdb3206040518163ffffffff1660e01b815260040160206040518083038186803b1580156113f657600080fd5b505afa15801561140a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142e9190611c1f565b73ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16633e109a196040518163ffffffff1660e01b815260040160206040518083038186803b15801561148f57600080fd5b505afa1580156114a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c79190611d99565b81526020018373ffffffffffffffffffffffffffffffffffffffff1663cf09e0d06040518163ffffffff1660e01b815260040160206040518083038186803b15801561151257600080fd5b505afa158015611526573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154a9190611d99565b81526020018373ffffffffffffffffffffffffffffffffffffffff16633197cbb66040518163ffffffff1660e01b815260040160206040518083038186803b15801561159557600080fd5b505afa1580156115a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115cd9190611d99565b8152602001826000015173ffffffffffffffffffffffffffffffffffffffff168152602001826020015181526020018373ffffffffffffffffffffffffffffffffffffffff16634f50ef536040518163ffffffff1660e01b815260040160006040518083038186803b15801561164257600080fd5b505afa158015611656573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061167f9190611cc5565b81526020018373ffffffffffffffffffffffffffffffffffffffff166326b387bb876040518263ffffffff1660e01b81526004016116bd919061239d565b60206040518083038186803b1580156116d557600080fd5b505afa1580156116e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170d9190611d99565b81526020018373ffffffffffffffffffffffffffffffffffffffff166312fa6feb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561175857600080fd5b505afa15801561176c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117909190611d06565b15158152509250505092915050565b604051806101200160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b6040518060e0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b604051806101e00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160608152602001600081526020016000151581525090565b60006119c16119bc84612421565b6123fc565b905080838252602082019050828560208602820111156119e057600080fd5b60005b85811015611a1057816119f68882611ad9565b8452602084019350602083019250506001810190506119e3565b5050509392505050565b6000611a2d611a288461244d565b6123fc565b90508083825260208201905082856060860282011115611a4c57600080fd5b60005b85811015611a7c5781611a628882611b81565b845260208401935060608301925050600181019050611a4f565b5050509392505050565b6000611a99611a9484612479565b6123fc565b905082815260208101848484011115611ab157600080fd5b611abc8482856125f2565b509392505050565b600081359050611ad38161270e565b92915050565b600081519050611ae88161270e565b92915050565b600082601f830112611aff57600080fd5b8151611b0f8482602086016119ae565b91505092915050565b600082601f830112611b2957600080fd5b8151611b39848260208601611a1a565b91505092915050565b600081519050611b5181612725565b92915050565b600082601f830112611b6857600080fd5b8151611b78848260208601611a86565b91505092915050565b600060608284031215611b9357600080fd5b611b9d60606123fc565b90506000611bad84828501611ad9565b6000830152506020611bc184828501611be1565b6020830152506040611bd584828501611be1565b60408301525092915050565b600081519050611bf08161273c565b92915050565b600060208284031215611c0857600080fd5b6000611c1684828501611ac4565b91505092915050565b600060208284031215611c3157600080fd5b6000611c3f84828501611ad9565b91505092915050565b60008060408385031215611c5b57600080fd5b6000611c6985828601611ac4565b9250506020611c7a85828601611ac4565b9150509250929050565b600060208284031215611c9657600080fd5b600082015167ffffffffffffffff811115611cb057600080fd5b611cbc84828501611aee565b91505092915050565b600060208284031215611cd757600080fd5b600082015167ffffffffffffffff811115611cf157600080fd5b611cfd84828501611b18565b91505092915050565b600060208284031215611d1857600080fd5b6000611d2684828501611b42565b91505092915050565b600060208284031215611d4157600080fd5b600082015167ffffffffffffffff811115611d5b57600080fd5b611d6784828501611b57565b91505092915050565b600060608284031215611d8257600080fd5b6000611d9084828501611b81565b91505092915050565b600060208284031215611dab57600080fd5b6000611db984828501611be1565b91505092915050565b60008060408385031215611dd557600080fd5b6000611de385828601611be1565b9250506020611df485828601611be1565b9150509250929050565b6000611e0a8383611e5a565b60208301905092915050565b6000611e228383612281565b905092915050565b6000611e36838361231d565b60608301905092915050565b6000611e4e838361235f565b60408301905092915050565b611e63816125aa565b82525050565b611e72816125aa565b82525050565b6000611e83826124ea565b611e8d8185612555565b9350611e98836124aa565b8060005b83811015611ec9578151611eb08882611dfe565b9750611ebb83612521565b925050600181019050611e9c565b5085935050505092915050565b6000611ee1826124f5565b611eeb8185612566565b935083602082028501611efd856124ba565b8060005b85811015611f395784840389528151611f1a8582611e16565b9450611f258361252e565b925060208a01995050600181019050611f01565b50829750879550505050505092915050565b6000611f5682612500565b611f608185612577565b9350611f6b836124ca565b8060005b83811015611f9c578151611f838882611e2a565b9750611f8e8361253b565b925050600181019050611f6f565b5085935050505092915050565b6000611fb48261250b565b611fbe8185612588565b9350611fc9836124da565b8060005b83811015611ffa578151611fe18882611e42565b9750611fec83612548565b925050600181019050611fcd565b5085935050505092915050565b612010816125bc565b82525050565b600061202182612516565b61202b8185612599565b935061203b8185602086016125f2565b612044816126fd565b840191505092915050565b60006101e0830160008301516120686000860182611e5a565b50602083015161207b6020860182611e5a565b50604083015161208e6040860182611e5a565b50606083015184820360608601526120a68282612016565b915050608083015184820360808601526120c08282612016565b91505060a08301516120d560a0860182611e5a565b5060c08301516120e860c0860182611e5a565b5060e08301516120fb60e086018261238e565b5061010083015161211061010086018261238e565b5061012083015161212561012086018261238e565b5061014083015161213a610140860182611e5a565b5061016083015161214f61016086018261238e565b506101808301518482036101808601526121698282611f4b565b9150506101a08301516121806101a086018261238e565b506101c08301516121956101c0860182612007565b508091505092915050565b6000610120830160008301516121b96000860182611e5a565b5060208301516121cc6020860182611e5a565b50604083015184820360408601526121e48282612016565b91505060608301516121f9606086018261238e565b50608083015161220c608086018261238e565b5060a083015184820360a08601526122248282611ed6565b91505060c083015184820360c086015261223e8282611fa9565b91505060e083015184820360e08601526122588282611fa9565b9150506101008301518482036101008601526122748282611e78565b9150508091505092915050565b600060e083016000830151848203600086015261229e8282612016565b91505060208301516122b36020860182611e5a565b5060408301516122c6604086018261238e565b5060608301516122d9606086018261238e565b5060808301516122ec6080860182611e5a565b5060a08301516122ff60a086018261238e565b5060c083015161231260c0860182612007565b508091505092915050565b6060820160008201516123336000850182611e5a565b506020820151612346602085018261238e565b506040820151612359604085018261238e565b50505050565b6040820160008201516123756000850182611e5a565b506020820151612388602085018261238e565b50505050565b612397816125e8565b82525050565b60006020820190506123b26000830184611e69565b92915050565b600060208201905081810360008301526123d2818461204f565b905092915050565b600060208201905081810360008301526123f481846121a0565b905092915050565b6000612406612417565b90506124128282612625565b919050565b6000604051905090565b600067ffffffffffffffff82111561243c5761243b6126ce565b5b602082029050602081019050919050565b600067ffffffffffffffff821115612468576124676126ce565b5b602082029050602081019050919050565b600067ffffffffffffffff821115612494576124936126ce565b5b61249d826126fd565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006125b5826125c8565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156126105780820151818401526020810190506125f5565b8381111561261f576000848401525b50505050565b61262e826126fd565b810181811067ffffffffffffffff8211171561264d5761264c6126ce565b5b80604052505050565b6000612661826125e8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156126945761269361269f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b612717816125aa565b811461272257600080fd5b50565b61272e816125bc565b811461273957600080fd5b50565b612745816125e8565b811461275057600080fd5b5056fea2646970667358221220eff80da367483138bc01948d00da3aa93ebbe1abbdddd4ab602d674c5da58faf64736f6c63430008040033";

type QueryServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QueryServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class QueryService__factory extends ContractFactory {
  constructor(...args: QueryServiceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<QueryService> {
    return super.deploy(overrides || {}) as Promise<QueryService>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): QueryService {
    return super.attach(address) as QueryService;
  }
  override connect(signer: Signer): QueryService__factory {
    return super.connect(signer) as QueryService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QueryServiceInterface {
    return new utils.Interface(_abi) as QueryServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QueryService {
    return new Contract(address, _abi, signerOrProvider) as QueryService;
  }
}
