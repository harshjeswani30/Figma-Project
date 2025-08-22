import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3, 8)
}));

const FooterDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  height: '1px',
  border: 'none'
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Voltec',
  fontSize: '15px',
  fontWeight: 400,
  textTransform: 'uppercase',
  color: theme.palette.text.secondary
}));

const Footer: React.FC = () => {
  return (
    <>
      <FooterDivider />
      <FooterContainer>
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
          sx={{ py: 1 }}
        >
          <CopyrightText>
            / © WEBTHREE 2024
          </CopyrightText>
          
          <CopyrightText>
            / ALL RIGHTS RESERVED
          </CopyrightText>
        </Stack>
      </FooterContainer>
      <FooterDivider />
    </>
  );
};

export default Footer;