// Define the interface for the asset's percentage change over different timeframes
interface PercentageChange {
  hour: number;
  day: number;
  week: number;
  month: number;
  quarter: number;
  year: number;
}

// Define the interface for an individual chain
export interface Chain {
  id: string;
  code: string;
  coinName: string;
  buyRate: number;
  sellRate: number;
  walletAddress: string;
  isTopAsset: boolean;
  exchangeId: string;
  createdAt: string;
  updatedAt: string;
}

// Define the interface for links in the `otherData` object
interface Links {
  website?: string | null;
  whitepaper?: string | null;
  twitter?: string | null;
  reddit?: string | null;
  telegram?: string | null;
  discord?: string | null;
  medium?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  youtube?: string | null;
  linkedin?: string | null;
  twitch?: string | null;
  spotify?: string | null;
  naver?: string | null;
  wechat?: string | null;
  soundcloud?: string | null;
}

// Define the interface for the otherData object
export interface OtherData {
  name: string;
  symbol: string;
  rank: number;
  age: number;
  color: string;
  png32: string;
  png64: string;
  webp32: string;
  webp64: string;
  exchanges: number;
  markets: number;
  pairs: number;
  categories: string[];
  allTimeHighUSD: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number | null;
  links: Links;
  code: string;
  rate: number;
  volume: number;
  cap: number;
  delta: PercentageChange;
}

// Define the main interface for each asset in the data array
export interface Asset {
  id: string;
  buyRate: number;
  sellRate: number;
  isTopAsset: boolean;
  chains: Chain[];
  name: string;
  percentageChange: PercentageChange;
  symbol: string;
  code: string;
  webp64: string;
  allTimeHighUSD: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number | null;
  rank: number;
  rate: number;
  volume: number;
  age: number;
  color: string;
  cap: number;
  otherData: OtherData;
}

// Define the overall structure of the data response
export interface coinApiResponse {
  data: Asset[];
}

export interface Trade {
  id: string;
  coinAmount: number;
  localAmount: number;
  walletAddress: string;
  userId: string;
  chainId: string;
  tradeType: string;
  createdAt: string;
  updatedAt: string;
  transactionId: string;
  chain: Chainn;
  bank: {
    id: string;
    bankName: string;
    accountNumber: string;
    bankUserName: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface Chainn {
  id: string;
  code: string;
  coinName: string;
  buyRate: number;
  sellRate: number;
  walletAddress: string;
  isTopAsset: false;
  exchangeId: string;
  createdAt: string;
  updatedAt: string;
  exchange: Exchange;
}

interface Exchange {
  id: string;
  code: string;
  coinName: string;
  buyRate: number;
  sellRate: number;
  isTopAsset: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  transactionId: string;
  amount: number;
  status: string;
  type: string;
  walletId: string | null;
  createdAt: string;
  updatedAt: string;
  trade: Trade;
  wallet: any | null; // Replace `any` with the actual type if you have one
}

export interface TransactionsResponse {
  transactions: Transaction[];
}

export type User = {
  id: string;
  email: string;
  userName: string;
  password: string;
  phoneNumber: string | null;
  fullName: string | null;
  isVerified: boolean;
  isDeleted: boolean;
  isBlocked: boolean;
  profilePicture: string;
  userType: "Moderator" | "Admin" | "User";
  otp: string | null;
  pin: string | null;
  tokenExpirationTime: string | null;
  createdAt: string;
  updatedAt: string;
}[];
