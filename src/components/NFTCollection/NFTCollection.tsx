import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NFTCollection as NFTCollectionType } from '../../types/interfaces';
import NFTCard from '../NFTCard/NFTCard';

const CollectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4, 0),
  position: 'relative'
}));

const CollectionHeader = styled(Box)(({ theme }) => ({
  border: 'none',
  padding: theme.spacing(2, 0),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  overflow: 'hidden'
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-megaton, Megaton, Exo 2, monospace)',
  fontSize: '24px',
  fontWeight: 400,
  letterSpacing: '0.60px',
  color: theme.palette.text.primary,
  whiteSpace: 'nowrap',
  transition: 'transform 0.1s ease-out'
}));



const TopRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '0px',
  padding: '0px',
  '& > *': {
    borderRight: 'none',
    borderBottom: 'none'
  }
});

const BottomRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '0px',
  padding: '0px',
  '& > *': {
    borderRight: 'none',
    borderBottom: 'none'
  }
});

interface NFTCollectionProps {
  collections: NFTCollectionType[];
  onBuyMint?: (collectionId: number) => void;
}

const NFTCollection: React.FC<NFTCollectionProps> = ({ collections, onBuyMint }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const topRowCollections = collections.slice(0, 4);
  const bottomRowCollections = collections.slice(4, 8);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform based on scroll position
  // Positive scroll moves text left, negative scroll moves text right
  const textTransform = `translateX(${-scrollPosition * 0.5}px)`;

  return (
    <CollectionContainer>
      <CollectionHeader>
        <HeaderText style={{ transform: textTransform }}>
          NEW COLLECTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW COLLECTION
        </HeaderText>
      </CollectionHeader>
      
      <Box sx={{ border: 'none', padding: '0px' }}>
        <TopRow>
          {topRowCollections.map((collection) => (
            <NFTCard 
              key={collection.id} 
              collection={collection} 
              onBuyMint={onBuyMint}
            />
          ))}
        </TopRow>
        
        <BottomRow>
          {bottomRowCollections.map((collection) => (
            <NFTCard 
              key={collection.id} 
              collection={collection} 
              onBuyMint={onBuyMint}
            />
          ))}
        </BottomRow>
      </Box>
    </CollectionContainer>
  );
};

export default NFTCollection;