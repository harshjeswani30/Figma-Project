import { CollectionStatus, TokenType } from './enums';

// Props types (data passed to components)
export interface NFTCollection {
  id: number;
  status: CollectionStatus;
  image: string;
  price?: number;
  token?: TokenType;
  isFeatured?: boolean;
}

export interface LeaderboardTeam {
  id: number;
  rank: number;
  teamName: string;
  subtitle?: string;
  logo: string;
  score: number;
  reward?: number | null;
  token?: TokenType;
}

export interface TechnicalData {
  displayResolution: string;
  date: Date;
  fps: number;
  time: Date;
  version: string;
  system: string;
  evoVersion: string;
  logValue: number;
}

export interface LandingPageProps {
  collections: NFTCollection[];
  leaderboard: LeaderboardTeam[];
  technicalData: TechnicalData;
}

// Root component props interface
export interface LandingPageRootProps {
  collections: NFTCollection[];
  leaderboard: LeaderboardTeam[];
  technicalData: TechnicalData;
  onConnectWallet?: () => void;
  onStartGame?: () => void;
  onBuyMint?: (collectionId: number) => void;
}