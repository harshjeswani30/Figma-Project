// Import custom fonts
import atomosFont from './Atomos Regular.ttf';
import voltecFont from './Voltec Free Version.otf';
import megatonFont from './Megaton.ttf';

// Create font face declarations with fallbacks
export const fontFaces = `
  @font-face {
    font-family: 'Atomos';
    src: url('${atomosFont}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Voltec';
    src: url('${voltecFont}') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Megaton';
    src: url('${megatonFont}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

// Alternative approach using CSS-in-JS with fallback handling
export const injectFonts = () => {
  try {
    const style = document.createElement('style');
    style.textContent = fontFaces;
    document.head.appendChild(style);
    
    // Add fallback fonts to CSS custom properties
    document.documentElement.style.setProperty('--font-atomos', "'Atomos', 'Orbitron', monospace");
    document.documentElement.style.setProperty('--font-voltec', "'Voltec', 'Press Start 2P', monospace");
    document.documentElement.style.setProperty('--font-megaton', "'Megaton', 'Exo 2', monospace");
  } catch (error) {
    console.warn('Failed to inject custom fonts, using fallbacks:', error);
  }
};

// Preload fonts for better performance
export const preloadFonts = () => {
  const fonts = [
    { href: atomosFont, type: 'font/ttf' },
    { href: voltecFont, type: 'font/otf' },
    { href: megatonFont, type: 'font/ttf' }
  ];

  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font.href;
    link.as = 'font';
    link.type = font.type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};
