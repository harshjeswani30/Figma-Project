export const formatTokenAmount = (amount: number, token: string): string => {
  return `${amount} ${token}`;
};

export const formatRank = (rank: number): string => {
  return rank.toString();
};

export const formatTeamName = (name: string): string => {
  return name.toUpperCase();
};

export const formatDateTime = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit', 
    year: 'numeric'
  });
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
};