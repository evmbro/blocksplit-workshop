/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace IAuction {
  export type BidStruct = {
    bidder: string;
    amount: BigNumberish;
    timestamp: BigNumberish;
  };

  export type BidStructOutput = [string, BigNumber, BigNumber] & {
    bidder: string;
    amount: BigNumber;
    timestamp: BigNumber;
  };
}

export declare namespace IQueryService {
  export type AuctionDetailsDataStruct = {
    creator: string;
    contractAddress: string;
    auctionHouseAddress: string;
    name: string;
    info: string;
    beneficiary: string;
    auctionToken: string;
    minBid: BigNumberish;
    createdAt: BigNumberish;
    endsAt: BigNumberish;
    highestBidderAddress: string;
    highestBidderAmount: BigNumberish;
    allBids: IAuction.BidStruct[];
    pendingReturnsAmount: BigNumberish;
    closed: boolean;
  };

  export type AuctionDetailsDataStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    IAuction.BidStructOutput[],
    BigNumber,
    boolean
  ] & {
    creator: string;
    contractAddress: string;
    auctionHouseAddress: string;
    name: string;
    info: string;
    beneficiary: string;
    auctionToken: string;
    minBid: BigNumber;
    createdAt: BigNumber;
    endsAt: BigNumber;
    highestBidderAddress: string;
    highestBidderAmount: BigNumber;
    allBids: IAuction.BidStructOutput[];
    pendingReturnsAmount: BigNumber;
    closed: boolean;
  };

  export type AuctionListItemDataStruct = {
    name: string;
    contractAddress: string;
    createdAt: BigNumberish;
    endsAt: BigNumberish;
    paymentToken: string;
    highestBid: BigNumberish;
    closed: boolean;
  };

  export type AuctionListItemDataStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    boolean
  ] & {
    name: string;
    contractAddress: string;
    createdAt: BigNumber;
    endsAt: BigNumber;
    paymentToken: string;
    highestBid: BigNumber;
    closed: boolean;
  };

  export type ProtocolFeeDataStruct = {
    token: string;
    totalAmount: BigNumberish;
  };

  export type ProtocolFeeDataStructOutput = [string, BigNumber] & {
    token: string;
    totalAmount: BigNumber;
  };

  export type AuctionHouseDataStruct = {
    owner: string;
    contractAddress: string;
    info: string;
    currentFeeNumerator: BigNumberish;
    currentFeeDenominator: BigNumberish;
    auctions: IQueryService.AuctionListItemDataStruct[];
    totalFees: IQueryService.ProtocolFeeDataStruct[];
    totalFeesToHarvest: IQueryService.ProtocolFeeDataStruct[];
    auctionsToHarvest: string[];
  };

  export type AuctionHouseDataStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    IQueryService.AuctionListItemDataStructOutput[],
    IQueryService.ProtocolFeeDataStructOutput[],
    IQueryService.ProtocolFeeDataStructOutput[],
    string[]
  ] & {
    owner: string;
    contractAddress: string;
    info: string;
    currentFeeNumerator: BigNumber;
    currentFeeDenominator: BigNumber;
    auctions: IQueryService.AuctionListItemDataStructOutput[];
    totalFees: IQueryService.ProtocolFeeDataStructOutput[];
    totalFeesToHarvest: IQueryService.ProtocolFeeDataStructOutput[];
    auctionsToHarvest: string[];
  };
}

export interface QueryServiceInterface extends utils.Interface {
  functions: {
    "getAuctionDetailsData(address,address)": FunctionFragment;
    "getAuctionHouseData(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getAuctionDetailsData" | "getAuctionHouseData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAuctionDetailsData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuctionHouseData",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAuctionDetailsData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuctionHouseData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface QueryService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: QueryServiceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAuctionDetailsData(
      auctionAddress: string,
      bidder: string,
      overrides?: CallOverrides
    ): Promise<[IQueryService.AuctionDetailsDataStructOutput]>;

    getAuctionHouseData(
      auctionHouseServiceAddress: string,
      overrides?: CallOverrides
    ): Promise<[IQueryService.AuctionHouseDataStructOutput]>;
  };

  getAuctionDetailsData(
    auctionAddress: string,
    bidder: string,
    overrides?: CallOverrides
  ): Promise<IQueryService.AuctionDetailsDataStructOutput>;

  getAuctionHouseData(
    auctionHouseServiceAddress: string,
    overrides?: CallOverrides
  ): Promise<IQueryService.AuctionHouseDataStructOutput>;

  callStatic: {
    getAuctionDetailsData(
      auctionAddress: string,
      bidder: string,
      overrides?: CallOverrides
    ): Promise<IQueryService.AuctionDetailsDataStructOutput>;

    getAuctionHouseData(
      auctionHouseServiceAddress: string,
      overrides?: CallOverrides
    ): Promise<IQueryService.AuctionHouseDataStructOutput>;
  };

  filters: {};

  estimateGas: {
    getAuctionDetailsData(
      auctionAddress: string,
      bidder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuctionHouseData(
      auctionHouseServiceAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAuctionDetailsData(
      auctionAddress: string,
      bidder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuctionHouseData(
      auctionHouseServiceAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
