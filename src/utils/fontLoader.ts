// Font loading utility with fallback handling
export const loadFonts = async () => {
  try {
    console.log('Starting font loading process...');
    
    // Check if fonts are already loaded
    if (document.fonts && document.fonts.check) {
      const atomosLoaded = document.fonts.check('1em Atomos');
      const voltecLoaded = document.fonts.check('1em Voltec');
      const megatonLoaded = document.fonts.check('1em Megaton');

      console.log('Font availability check:', {
        Atomos: atomosLoaded,
        Voltec: voltecLoaded,
        Megaton: megatonLoaded
      });

      if (atomosLoaded && voltecLoaded && megatonLoaded) {
        console.log('All custom fonts are already loaded');
        return;
      }
    }

    // Wait for fonts to load
    if (document.fonts && document.fonts.ready) {
      console.log('Waiting for fonts to load...');
      await document.fonts.ready;
      console.log('Custom fonts loaded successfully');
    }

    // Fallback: if fonts don't load within 3 seconds, use system fonts
    setTimeout(() => {
      console.log('Font loading timeout, using fallbacks');
      const style = document.createElement('style');
      style.textContent = `
        :root {
          --font-atomos: 'Orbitron', monospace;
          --font-voltec: 'Press Start 2P', monospace;
          --font-megaton: 'Exo 2', monospace;
        }
      `;
      document.head.appendChild(style);
      console.log('Using fallback fonts');
    }, 3000);

  } catch (error) {
    console.warn('Font loading failed, using fallbacks:', error);
    // Immediately use fallbacks
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --font-atomos: 'Orbitron', monospace;
        --font-voltec: 'Press Start 2P', monospace;
        --font-megaton: 'Exo 2', monospace;
      }
    `;
    document.head.appendChild(style);
  }
};

// Check if a specific font is available
export const isFontAvailable = (fontFamily: string): boolean => {
  if (document.fonts && document.fonts.check) {
    return document.fonts.check(`1em ${fontFamily}`);
  }
  return false;
};

// Debug function to log current font status
export const debugFonts = () => {
  console.log('Current font variables:', {
    atomos: getComputedStyle(document.documentElement).getPropertyValue('--font-atomos'),
    voltec: getComputedStyle(document.documentElement).getPropertyValue('--font-voltec'),
    megaton: getComputedStyle(document.documentElement).getPropertyValue('--font-megaton')
  });
  
  if (document.fonts && document.fonts.check) {
    console.log('Font availability:', {
      Atomos: document.fonts.check('1em Atomos'),
      Voltec: document.fonts.check('1em Voltec'),
      Megaton: document.fonts.check('1em Megaton')
    });
  }
};
