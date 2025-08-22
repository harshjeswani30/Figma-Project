import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.nftlanding.tsx'
import '../index.css'
import { injectFonts, preloadFonts } from './assets/fonts/fonts'
import { loadFonts, debugFonts } from './utils/fontLoader'

// Preload and inject custom fonts
preloadFonts();
injectFonts();

// Load fonts with fallback handling
loadFonts();

// Debug fonts in development
if (import.meta.env.DEV) {
  setTimeout(debugFonts, 1000);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)