import { TeamRank, TokenType, CollectionStatus } from '../types/enums';
// Data for NFT collections
export const mockCollections = [
  {
    id: 1,
    status: CollectionStatus.NEW as const,
    image: "/images/nft-placeholder.png",
    price: 20,
    token: TokenType.SOL as const,
    isFeatured: true
  },
  {
    id: 2,
    status: CollectionStatus.NEW as const,
    image: "/images/nft-placeholder.png",
    price: 15,
    token: TokenType.SOL as const
  },
  {
    id: 3,
    status: CollectionStatus.NEW as const,
    image: "/images/nft-placeholder.png",
    price: 25,
    token: TokenType.SOL as const
  },
  {
    id: 4,
    status: CollectionStatus.NEW as const,
    image: "/images/nft-placeholder.png",
    price: 18,
    token: TokenType.SOL as const
  },
  {
    id: 5,
    status: CollectionStatus.NEW as const,
    image: "/images/nft-placeholder.png",
    price: 22,
    token: TokenType.SOL as const
  },
  {
    id: 6,
    status: CollectionStatus.NEW as const,
    image: "/images/nft-placeholder.png",
    price: 30,
    token: TokenType.SOL as const
  },
  {
    id: 7,
    status: CollectionStatus.NEW as const,
    image: "/images/nft-placeholder.png",
    price: 12,
    token: TokenType.SOL as const
  },
  {
    id: 8,
    status: CollectionStatus.NEW as const,
    image: "/images/nft-placeholder.png",
    price: 28,
    token: TokenType.SOL as const
  }
];

// Data for leaderboard teams
export const mockLeaderboard = [
  {
    id: 1,
    rank: 1,
    teamName: "REalTech",
    logo: "/images/image2.png",
    score: 17,
    reward: null
  },
  {
    id: 2,
    rank: 2,
    teamName: "PYSCHO",
    subtitle: "Azov",
    logo: "/images/image 1.png",
    score: 15,
    reward: 30,
    token: TokenType.SOL as const
  },
  {
    id: 3,
    rank: 3,
    teamName: "SSTS",
    logo: "/images/ssts-logo.svg",
    score: 8,
    reward: 25,
    token: TokenType.SOL as const
  },
  {
    id: 4,
    rank: 4,
    teamName: "38th AAMR",
    logo: "/images/aamr-wasp-shield.png",
    score: 11,
    reward: 25,
    token: TokenType.SOL as const
  }
];

// Data for hero section technical overlay
export const mockTechnicalData = {
  displayResolution: "1707 x 979",
  date: new Date("2025-08-10"),
  fps: 67.90,
  time: new Date(),
  version: "01.08.84",
  system: "win11 Chrome/138.0.0.0",
  evoVersion: "Alpha",
  logValue: 74.906
};

// Root component props
export const mockRootProps = {
  collections: mockCollections,
  leaderboard: mockLeaderboard,
  technicalData: mockTechnicalData
};