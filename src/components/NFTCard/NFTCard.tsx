import React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NFTCollection } from '../../types/interfaces';
import { formatTokenAmount } from '../../utils/formatters';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '3px solid #333',
  borderRadius: 0,
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  height: '100%',
  minHeight: '400px',
  '&:hover': {
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
    '& .hover-overlay': {
      opacity: 1,
      visibility: 'visible'
    }
  }
}));

const NFTImage = styled(CardMedia)({
  height: '100%',
  minHeight: '400px',
  objectFit: 'cover',
  width: '100%'
});



const HoverOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
  zIndex: 2
}));

const BuyButton = styled(Typography)(({ theme }) => ({
  fontFamily: 'Atomos',
  fontSize: '19.55px',
  fontWeight: 400,
  letterSpacing: '0.49px',
  color: theme.palette.text.primary,
  cursor: 'pointer'
}));

const PriceText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Atomos',
  fontSize: '19.55px',
  fontWeight: 400,
  letterSpacing: '0.49px',
  color: theme.palette.text.primary
}));

interface NFTCardProps {
  collection: NFTCollection;
  onBuyMint?: (collectionId: number) => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ collection, onBuyMint }) => {
  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onBuyMint) {
      onBuyMint(collection.id);
    }
  };

  return (
    <StyledCard>
      <NFTImage
        image="https://placehold.co/360x526"
        title={`NFT Collection ${collection.id}`}
      />
      
      {/* Hover overlay for all cards */}
      {collection.price && collection.token && (
        <HoverOverlay className="hover-overlay">
          <BuyButton onClick={handleBuyClick}>
            BUY MINT
          </BuyButton>
          <PriceText>
            {formatTokenAmount(collection.price, collection.token)}
          </PriceText>
        </HoverOverlay>
      )}
    </StyledCard>
  );
};

export default NFTCard;