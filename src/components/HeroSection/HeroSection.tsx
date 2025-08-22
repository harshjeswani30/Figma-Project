import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TechnicalData } from '../../types/interfaces';
import TechnicalOverlay from '../TechnicalOverlay/TechnicalOverlay';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '1000px',
  background: `url('/images/cyberpunk-grid-background.svg') center/cover`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(8, 4),
  overflow: 'auto'
}));

const HeroContent = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '900px',
  zIndex: 2,
  gap: theme.spacing(6),
  marginTop: theme.spacing(-30)
}));



const VectorImage = styled('img')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 'auto',
  zIndex: 0
});

interface HeroSectionProps {
  technicalData: TechnicalData;
  onStartGame?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ technicalData, onStartGame }) => {
  return (
    <HeroContainer>
      <TechnicalOverlay data={technicalData} />
      
      <HeroContent>
        <Stack spacing={3} alignItems="center">
          <Typography 
            variant="h1" 
            sx={{ 
              color: 'black',
              fontFamily: 'Atomos',
              WebkitTextStroke: '2px white',
              textStroke: '2px white'
            }}
          >
            EXPLORE NFT COLLECTION
          </Typography>
          
          <Typography variant="h4" color="text.primary" sx={{ maxWidth: '813px' }}>
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, 
            metaverse-ready, and designed to benefit their holders.
          </Typography>
        </Stack>
        
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            background: `url('/images/Screenshot_2025-08-22_050125-removebg-preview.png') center/contain no-repeat`,
            padding: '20px 60px',
            minHeight: '60px',
            minWidth: '200px'
          }}
          onClick={onStartGame}
        >
          {/* Button text overlay */}
          <div style={{
            color: '#FCFF3E',
            fontSize: '11px',
            fontFamily: 'Orbitron',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            whiteSpace: 'nowrap',
            zIndex: 2,
            position: 'relative'
          }}>
            START GAME
          </div>
        </div>
      </HeroContent>
      
      <VectorImage src="/images/vector-group-node.svg" alt="" />
    </HeroContainer>
  );
};

export default HeroSection;