import React from 'react';
import { TableRow, TableCell, Avatar, Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LeaderboardTeam } from '../../types/interfaces';
import { formatTokenAmount } from '../../utils/formatters';
import SkullIcon1 from '../icons/SkullIcon1';
import SkullIcon2 from '../icons/SkullIcon2';
import SkullIcon3 from '../icons/SkullIcon3';
import SkullIcon4 from '../icons/SkullIcon4';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: `4px solid ${theme.palette.secondary.main}`,
  paddingLeft: '0px',
  paddingBottom: '10px'
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 'none',
  padding: theme.spacing(2, 2, 3, 2),
  backgroundColor: 'transparent'
}));

const TeamName = styled(Typography)(({ theme }) => ({
  fontFamily: 'Voltec',
  fontSize: '32.14px',
  fontWeight: 400,
  letterSpacing: '-0.54px',
  lineHeight: '19.98px',
  textTransform: 'uppercase',
  color: theme.palette.text.primary
}));

const TeamSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Voltec',
  fontSize: '32.14px',
  fontWeight: 400,
  letterSpacing: '-0.54px',
  lineHeight: '19.98px',
  textTransform: 'uppercase',
  color: theme.palette.text.primary
}));

const ScoreText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Press Start 2P',
  fontSize: '18px',
  fontWeight: 400,
  letterSpacing: '-0.54px',
  textTransform: 'uppercase',
  color: theme.palette.text.primary
}));

const RewardText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Press Start 2P',
  fontSize: '18px',
  fontWeight: 400,
  letterSpacing: '6px',
  textTransform: 'uppercase',
  color: theme.palette.text.primary
}));

interface LeaderboardRowProps {
  team: LeaderboardTeam;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ team }) => {
  const getSkullIcon = (rank: number) => {
    const iconProps = { width: 40, height: 40, color: '#ffffff' };
    
    switch (rank) {
      case 1:
        return <SkullIcon1 {...iconProps} />;
      case 2:
        return <SkullIcon2 {...iconProps} />;
      case 3:
        return <SkullIcon3 {...iconProps} />;
      case 4:
        return <SkullIcon4 {...iconProps} />;
      default:
        return <SkullIcon1 {...iconProps} />;
    }
  };

  return (
    <StyledTableRow>
      <StyledTableCell>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar 
            src={team.logo} 
            alt={team.teamName}
            sx={{ width: 36, height: 68, borderRadius: 0 }}
          />
          <Stack direction="column" spacing={1} sx={{ marginLeft: '80px' }}>
            <TeamName>{team.teamName}</TeamName>
            {team.subtitle && (
              <TeamSubtitle>{team.subtitle}</TeamSubtitle>
            )}
          </Stack>
        </Stack>
      </StyledTableCell>
      
      <StyledTableCell align="center" sx={{ paddingLeft: '20px' }}>
        <Stack direction="row" spacing={4} alignItems="center">
          <Typography 
            sx={{ 
              color: 'white', 
              fontSize: '18px', 
              fontFamily: 'Press Start 2P',
              fontWeight: 400
            }}
          >
            {team.score}
          </Typography>
          {getSkullIcon(team.rank)}
        </Stack>
      </StyledTableCell>
      
      <StyledTableCell align="right" sx={{ paddingRight: '60px' }}>
        {team.reward && team.token && (
          <RewardText>
            {formatTokenAmount(team.reward, team.token)}
          </RewardText>
        )}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default LeaderboardRow;