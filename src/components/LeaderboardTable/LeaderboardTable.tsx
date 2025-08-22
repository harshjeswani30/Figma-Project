import React from 'react';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableContainer, 
  Paper 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LeaderboardTeam } from '../../types/interfaces';
import LeaderboardRow from '../LeaderboardRow/LeaderboardRow';

const LeaderboardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4)
}));

const LeaderboardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Atomos',
  fontSize: '96px',
  fontWeight: 400,
  letterSpacing: '0.60px',
  color: theme.palette.text.primary,
  textAlign: 'center'
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: '11px',
  maxWidth: '900px',
  width: '85%',
  paddingLeft: '0px',
  marginBottom: '20px',
  '& .MuiTable-root': {
    backgroundColor: theme.palette.background.default
  }
}));

const StyledTable = styled(Table)({
  minWidth: 600,
  paddingBottom: '20px'
});

interface LeaderboardTableProps {
  teams: LeaderboardTeam[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ teams }) => {
  return (
    <LeaderboardContainer>
      <LeaderboardTitle>
        The LEAGUE
      </LeaderboardTitle>
      
      <StyledTableContainer>
        <StyledTable>
          <TableBody>
            {teams.map((team) => (
              <LeaderboardRow key={team.id} team={team} />
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </LeaderboardContainer>
  );
};

export default LeaderboardTable;