import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const THEMES = {
  midnight: {
    id: 'midnight',
    name: 'Midnight',
    emoji: '🌙',
    subtitle: 'Classic Dark & Glass',
    description: 'Default dark space theme with royal indigo accents, smooth glass cards, and soft ambient glows.',
    colors: {
      '--primary': '#6366f1',
      '--primary-hover': '#4f46e5',
      '--primary-rgb': '99, 102, 241',
      '--bg': '#030712',
      '--bg-secondary': '#0f1729',
      '--text': '#f9fafb',
      '--text-muted': '#9ca3af',
      '--card-bg': 'rgba(17, 24, 39, 0.7)',
      '--border': 'rgba(255, 255, 255, 0.1)',
      '--nav-bg': 'rgba(3, 7, 18, 0.85)',
      '--scrollbar-track': '#030712',
      '--scrollbar-thumb': '#6366f1',
      '--scrollbar-thumb-hover': '#4f46e5',
      '--shadow-color': 'rgba(0, 0, 0, 0.4)',
      '--glow-color': 'rgba(99, 102, 241, 0.15)',
    }
  },
  'neo-brutalism': {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism',
    emoji: '⚡',
    subtitle: 'Bold, Sharp & High-Contrast',
    description: 'Bright solid colors, thick 3px black borders, sharp edges, oversized typography, and noticeable solid shadows.',
    colors: {
      '--primary': '#ffe600',
      '--primary-hover': '#ffd600',
      '--primary-rgb': '255, 230, 0',
      '--bg': '#fffdf5',
      '--bg-secondary': '#f4f0e6',
      '--text': '#000000',
      '--text-muted': '#2d3748',
      '--card-bg': '#ffffff',
      '--border': '#000000',
      '--nav-bg': '#ffffff',
      '--scrollbar-track': '#fffdf5',
      '--scrollbar-thumb': '#000000',
      '--scrollbar-thumb-hover': '#ffe600',
      '--shadow-color': '#000000',
      '--glow-color': 'rgba(255, 230, 0, 0.5)',
    }
  },
  glassmorphism: {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    emoji: '💎',
    subtitle: 'Frosted Glass & Layered Depth',
    description: 'Semi-transparent frosted glass surfaces, deep background blur, subtle specular borders, and soft floating shadows.',
    colors: {
      '--primary': '#38bdf8',
      '--primary-hover': '#0ea5e9',
      '--primary-rgb': '56, 189, 248',
      '--bg': '#0a0a23',
      '--bg-secondary': '#131338',
      '--text': '#ffffff',
      '--text-muted': '#cbd5e1',
      '--card-bg': 'rgba(255, 255, 255, 0.12)',
      '--border': 'rgba(255, 255, 255, 0.28)',
      '--nav-bg': 'rgba(10, 10, 35, 0.72)',
      '--scrollbar-track': '#0a0a23',
      '--scrollbar-thumb': '#8b5cf6',
      '--scrollbar-thumb-hover': '#38bdf8',
      '--shadow-color': 'rgba(0, 0, 0, 0.45)',
      '--glow-color': 'rgba(56, 189, 248, 0.35)',
    }
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk UI',
    emoji: '🤖',
    subtitle: 'Futuristic Neon & HUD Grid',
    description: 'Dystopian dark canvas, digital grid, neon electric blue, purple, pink, and green, glowing borders, and angled shapes.',
    colors: {
      '--primary': '#fcee0a',
      '--primary-hover': '#e6d700',
      '--primary-rgb': '252, 238, 10',
      '--bg': '#06060c',
      '--bg-secondary': '#0e0f1e',
      '--text': '#fefefe',
      '--text-muted': '#00f0ff',
      '--card-bg': 'rgba(12, 13, 24, 0.95)',
      '--border': '#00f0ff',
      '--nav-bg': 'rgba(6, 6, 12, 0.96)',
      '--scrollbar-track': '#06060c',
      '--scrollbar-thumb': '#ff0055',
      '--scrollbar-thumb-hover': '#00f0ff',
      '--shadow-color': 'rgba(0, 240, 255, 0.4)',
      '--glow-color': 'rgba(252, 238, 10, 0.5)',
    }
  },
  aurora: {
    id: 'aurora',
    name: 'Aurora UI',
    emoji: '🌌',
    subtitle: 'Northern Lights & Fluid Glow',
    description: 'Northern Lights aesthetic with smooth flowing gradients blending blue, purple, pink, green, and cyan with soft lighting.',
    colors: {
      '--primary': '#10b981',
      '--primary-hover': '#059669',
      '--primary-rgb': '16, 185, 129',
      '--bg': '#020b14',
      '--bg-secondary': '#051824',
      '--text': '#f0fdf4',
      '--text-muted': '#6ee7b7',
      '--card-bg': 'rgba(4, 28, 38, 0.75)',
      '--border': 'rgba(16, 185, 129, 0.4)',
      '--nav-bg': 'rgba(2, 11, 20, 0.88)',
      '--scrollbar-track': '#020b14',
      '--scrollbar-thumb': '#10b981',
      '--scrollbar-thumb-hover': '#8b5cf6',
      '--shadow-color': 'rgba(0, 0, 0, 0.5)',
      '--glow-color': 'rgba(16, 185, 129, 0.35)',
    }
  }
};

const THEME_ORDER = ['midnight', 'neo-brutalism', 'glassmorphism', 'cyberpunk', 'aurora'];

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem('prince-theme');
      if (saved && THEMES[saved]) return saved;
      return 'midnight';
    } catch {
      return 'midnight';
    }
  });

  const theme = THEMES[themeId] || THEMES.midnight;

  const applyTheme = useCallback((t) => {
    const root = document.documentElement;
    Object.entries(t.colors).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });
    root.setAttribute('data-ui-theme', t.id);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem('prince-theme', themeId);
    } catch {
      // Ignore
    }
  }, [themeId, theme, applyTheme]);

  const setTheme = useCallback((id) => {
    if (THEMES[id]) setThemeId(id);
  }, []);

  const cycleTheme = useCallback(() => {
    const currentIndex = THEME_ORDER.indexOf(themeId);
    const nextIndex = (currentIndex + 1) % THEME_ORDER.length;
    setThemeId(THEME_ORDER[nextIndex]);
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{
      theme,
      themeId,
      setTheme,
      cycleTheme,
      themes: THEMES,
      themeOrder: THEME_ORDER,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
