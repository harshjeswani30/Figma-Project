import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(3, 4),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
}));

const ConnectWalletButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
  fontFamily: 'Orbitron',
  fontSize: '12px',
  fontWeight: 800,
  letterSpacing: '0.60px',
  padding: theme.spacing(1, 2),
  borderRadius: 0,
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.main
  }
}));

interface HeaderProps {
  onConnectWallet?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onConnectWallet }) => {
  return (
    <HeaderContainer>
      <Typography variant="h5" color="text.primary">
        Exyz
      </Typography>
      
      <Typography variant="h5" color="text.primary">
        Leaderboard
      </Typography>
      
      <ConnectWalletButton 
        variant="outlined" 
        onClick={onConnectWallet}
      >
        CONNECT WALLET
      </ConnectWalletButton>
    </HeaderContainer>
  );
};

export default Header;