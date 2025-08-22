import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../theme/theme';
import { LandingPageRootProps } from '../../types/interfaces';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import NFTCollection from '../NFTCollection/NFTCollection';
import LeaderboardTable from '../LeaderboardTable/LeaderboardTable';
import Footer from '../Footer/Footer';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column'
}));

const NFTLandingPage: React.FC<LandingPageRootProps> = ({
  collections,
  leaderboard,
  technicalData,
  onConnectWallet,
  onStartGame,
  onBuyMint
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageContainer>
        <Header onConnectWallet={onConnectWallet} />
        
        <HeroSection 
          technicalData={technicalData}
          onStartGame={onStartGame}
        />
        
        <NFTCollection 
          collections={collections}
          onBuyMint={onBuyMint}
        />
        
        <LeaderboardTable teams={leaderboard} />
        
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

export default NFTLandingPage;