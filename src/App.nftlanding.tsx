import React from 'react';
import NFTLandingPage from './components/NFTLandingPage/NFTLandingPage';
import { mockRootProps } from './data/nftLandingMockData';

const App: React.FC = () => {
  const handleConnectWallet = () => {
    console.log('Connect wallet clicked');
  };

  const handleStartGame = () => {
    console.log('Start game clicked');
  };

  const handleBuyMint = (collectionId: number) => {
    console.log('Buy mint clicked for collection:', collectionId);
  };

  return (
    <NFTLandingPage
      {...mockRootProps}
      onConnectWallet={handleConnectWallet}
      onStartGame={handleStartGame}
      onBuyMint={handleBuyMint}
    />
  );
};

export default App;