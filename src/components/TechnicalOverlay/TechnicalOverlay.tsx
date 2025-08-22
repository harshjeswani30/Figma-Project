import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TechnicalData } from '../../types/interfaces';
import { formatDateTime, formatTime } from '../../utils/formatters';

const OverlayContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: theme.spacing(2),
  pointerEvents: 'none',
  zIndex: 1
}));

const TechText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Orbitron',
  fontSize: '8px',
  fontWeight: 400,
  letterSpacing: '0.64px',
  textTransform: 'capitalize',
  color: theme.palette.text.primary
}));

const TechTextGreen = styled(Typography)(({ theme }) => ({
  fontFamily: 'Orbitron',
  fontSize: '8px',
  fontWeight: 400,
  letterSpacing: '0.64px',
  textTransform: 'capitalize',
  color: '#21E786'
}));

interface TechnicalOverlayProps {
  data: TechnicalData;
}

const TechnicalOverlay: React.FC<TechnicalOverlayProps> = ({ data }) => {
  return (
    <OverlayContainer>
      {/* Top Left Corner */}
      <Stack 
        direction="column" 
        spacing={0.5}
        sx={{ position: 'absolute', top: 140, left: 150 }}
      >
        <TechText>DSP: <span style={{ color: '#21E786' }}>{data.displayResolution}</span></TechText>
        <TechText>FPS: <span style={{ color: '#21E786' }}>{data.fps}</span></TechText>
      </Stack>

      {/* Top Right Corner */}
      <Stack 
        direction="column" 
        spacing={0.5}
        sx={{ position: 'absolute', top: 140, right: 160, textAlign: 'right' }}
      >
        <TechText><span style={{ color: '#21E786' }}>{formatDateTime(data.date)}</span> :DATE</TechText>
        <TechText><span style={{ color: '#21E786' }}>{formatTime(data.time)}</span> :TIME</TechText>
      </Stack>

      {/* Bottom Left Corner */}
      <Stack 
        direction="column" 
        spacing={0.5}
        sx={{ position: 'absolute', bottom: 330, left: 150 }}
      >
        <TechText>EVO: <span style={{ color: '#21E786' }}>{data.evoVersion}</span></TechText>
        <TechText>VERS: <span style={{ color: '#21E786' }}>{data.version}</span></TechText>
      </Stack>

      {/* Separate ///: 0.20 text */}
      <Box sx={{ position: 'absolute', bottom: 600, left: 150 }}>
        <TechText>///: <span style={{ color: '#21E786' }}>0.20</span></TechText>
      </Box>

      {/* Bottom Right Corner */}
      <Stack 
        direction="column" 
        spacing={0.5}
        sx={{ position: 'absolute', bottom: 330, right: 130, textAlign: 'right' }}
      >
        <TechText><span style={{ color: '#21E786' }}>{data.logValue}</span> :LOG</TechText>
        <TechText><span style={{ color: '#21E786' }}>{data.system}</span> :sYS</TechText>
      </Stack>

      {/* Separate 0.49 :\\ text */}
      <Box sx={{ position: 'absolute', bottom: 600, right: 160 }}>
        <TechText><span style={{ color: '#21E786' }}>0.49</span> :\\</TechText>
      </Box>
    </OverlayContainer>
  );
};

export default TechnicalOverlay;