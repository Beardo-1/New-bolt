export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  city: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  type: PropertyType;
  status: PropertyStatus;
  amenities: string[];
  images: string[];
  isFeatured: boolean;
  isAuction?: boolean;
  auctionDetails?: AuctionDetails;
  createdAt: Date;
}

export enum PropertyType {
  APARTMENT = 'apartment',
  VILLA = 'villa',
  LAND = 'land',
  COMMERCIAL = 'commercial',
  OFFICE = 'office',
}

export enum PropertyStatus {
  FOR_SALE = 'for_sale',
  FOR_RENT = 'for_rent',
  SOLD = 'sold',
  RENTED = 'rented',
}

export interface AuctionDetails {
  id: string;
  propertyId: string;
  startingPrice: number;
  currentBid: number;
  incrementAmount: number;
  startDate: Date;
  endDate: Date;
  status: AuctionStatus;
  bids: Bid[];
}

export enum AuctionStatus {
  UPCOMING = 'upcoming',
  LIVE = 'live',
  ENDED = 'ended',
  CANCELLED = 'cancelled',
}

export interface Bid {
  id: string;
  auctionId: string;
  userId: string;
  amount: number;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  savedProperties: string[];
  bids: string[];
  contracts: string[];
  createdAt: Date;
}

export enum UserRole {
  BUYER = 'buyer',
  SELLER = 'seller',
  ADMIN = 'admin',
}

export interface Contract {
  id: string;
  propertyId: string;
  buyerId: string;
  sellerId: string;
  status: ContractStatus;
  documents: string[];
  createdAt: Date;
  updatedAt: Date;
}

export enum ContractStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  SIGNED = 'signed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export interface Payment {
  id: string;
  contractId: string;
  amount: number;
  status: PaymentStatus;
  method: PaymentMethod;
  createdAt: Date;
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export enum PaymentMethod {
  BANK_TRANSFER = 'bank_transfer',
  CREDIT_CARD = 'credit_card',
  APPLE_PAY = 'apple_pay',
  STC_PAY = 'stc_pay',
  MADA = 'mada',
}

export interface ChatMessage {
  id: string;
  userId: string;
  content: string;
  isAI: boolean;
  timestamp: Date;
}