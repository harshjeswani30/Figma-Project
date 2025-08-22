// Cyberpunk gaming theme with neon colors and futuristic typography
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fcff3e', // Neon yellow for primary actions
      contrastText: '#000000'
    },
    secondary: {
      main: '#ff6348', // Orange-red for secondary elements
      contrastText: '#ffffff'
    },
    background: {
      default: '#00120a', // Dark green background
      paper: '#000d18' // Darker blue-green for surfaces
    },
    text: {
      primary: '#ffffff',
      secondary: '#95ff00' // Neon green for accents
    },
    error: {
      main: '#ff6348'
    },
    success: {
      main: '#95ff00'
    },
    grey: {
      100: '#292929',
      200: '#ffffff',
      300: '#cccccc',
      400: '#999999',
      500: '#666666',
      600: '#333333',
      700: '#1a1a1a',
      800: '#0d0d0d',
      900: '#000000'
    }
  },
  typography: {
    fontFamily: 'Orbitron, Voltec, Atomos, "Press Start 2P", sans-serif',
    h1: {
      fontFamily: 'Atomos',
      fontSize: '84px',
      fontWeight: 400,
      lineHeight: '80px',
      textTransform: 'capitalize'
    },
    h2: {
      fontFamily: 'Atomos',
      fontSize: '96px',
      fontWeight: 400,
      letterSpacing: '0.60px'
    },
    h3: {
      fontFamily: 'Voltec',
      fontSize: '32.14px',
      fontWeight: 400,
      letterSpacing: '-0.54px',
      lineHeight: '19.98px',
      textTransform: 'uppercase'
    },
    h4: {
      fontFamily: 'Voltec',
      fontSize: '28px',
      fontWeight: 400,
      lineHeight: '30px'
    },
    h5: {
      fontFamily: 'Voltec',
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: '1.92px',
      lineHeight: '24.33px',
      textTransform: 'capitalize'
    },
    h6: {
      fontFamily: 'Megaton',
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: '0.60px'
    },
    body1: {
      fontFamily: 'Press Start 2P',
      fontSize: '18px',
      fontWeight: 400,
      letterSpacing: '-0.54px',
      textTransform: 'uppercase'
    },
    body2: {
      fontFamily: 'Atomos',
      fontSize: '19.55px',
      fontWeight: 400,
      letterSpacing: '0.49px'
    },
    button: {
      fontFamily: 'Orbitron',
      fontSize: '11px',
      fontWeight: 800,
      textTransform: 'uppercase'
    },
    caption: {
      fontFamily: 'Orbitron',
      fontSize: '8px',
      fontWeight: 400,
      letterSpacing: '0.64px',
      textTransform: 'capitalize'
    },
    overline: {
      fontFamily: 'Orbitron',
      fontSize: '12px',
      fontWeight: 800,
      letterSpacing: '0.60px'
    }
  },
  shape: {
    borderRadius: 11
  }
});

export default theme;