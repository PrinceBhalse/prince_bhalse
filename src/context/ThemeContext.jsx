import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const THEMES = {
  midnight: {
    id: 'midnight',
    name: 'Midnight',
    emoji: '🌙',
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
  sakura: {
    id: 'sakura',
    name: 'Sakura',
    emoji: '🌸',
    colors: {
      '--primary': '#ec4899',
      '--primary-hover': '#db2777',
      '--primary-rgb': '236, 72, 153',
      '--bg': '#1a0a14',
      '--bg-secondary': '#2d1224',
      '--text': '#fdf2f8',
      '--text-muted': '#d4a0bf',
      '--card-bg': 'rgba(45, 18, 36, 0.7)',
      '--border': 'rgba(236, 72, 153, 0.15)',
      '--nav-bg': 'rgba(26, 10, 20, 0.85)',
      '--scrollbar-track': '#1a0a14',
      '--scrollbar-thumb': '#ec4899',
      '--scrollbar-thumb-hover': '#db2777',
      '--shadow-color': 'rgba(0, 0, 0, 0.4)',
      '--glow-color': 'rgba(236, 72, 153, 0.15)',
    }
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean',
    emoji: '🌊',
    colors: {
      '--primary': '#06b6d4',
      '--primary-hover': '#0891b2',
      '--primary-rgb': '6, 182, 212',
      '--bg': '#031b24',
      '--bg-secondary': '#0a2d3d',
      '--text': '#ecfeff',
      '--text-muted': '#7dd3e8',
      '--card-bg': 'rgba(10, 45, 61, 0.7)',
      '--border': 'rgba(6, 182, 212, 0.15)',
      '--nav-bg': 'rgba(3, 27, 36, 0.85)',
      '--scrollbar-track': '#031b24',
      '--scrollbar-thumb': '#06b6d4',
      '--scrollbar-thumb-hover': '#0891b2',
      '--shadow-color': 'rgba(0, 0, 0, 0.4)',
      '--glow-color': 'rgba(6, 182, 212, 0.15)',
    }
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    emoji: '🌿',
    colors: {
      '--primary': '#22c55e',
      '--primary-hover': '#16a34a',
      '--primary-rgb': '34, 197, 94',
      '--bg': '#071209',
      '--bg-secondary': '#122318',
      '--text': '#f0fdf4',
      '--text-muted': '#86d99f',
      '--card-bg': 'rgba(18, 35, 24, 0.7)',
      '--border': 'rgba(34, 197, 94, 0.15)',
      '--nav-bg': 'rgba(7, 18, 9, 0.85)',
      '--scrollbar-track': '#071209',
      '--scrollbar-thumb': '#22c55e',
      '--scrollbar-thumb-hover': '#16a34a',
      '--shadow-color': 'rgba(0, 0, 0, 0.4)',
      '--glow-color': 'rgba(34, 197, 94, 0.15)',
    }
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset',
    emoji: '🌅',
    colors: {
      '--primary': '#f59e0b',
      '--primary-hover': '#d97706',
      '--primary-rgb': '245, 158, 11',
      '--bg': '#1a0f03',
      '--bg-secondary': '#2d1c0a',
      '--text': '#fffbeb',
      '--text-muted': '#d4a85c',
      '--card-bg': 'rgba(45, 28, 10, 0.7)',
      '--border': 'rgba(245, 158, 11, 0.15)',
      '--nav-bg': 'rgba(26, 15, 3, 0.85)',
      '--scrollbar-track': '#1a0f03',
      '--scrollbar-thumb': '#f59e0b',
      '--scrollbar-thumb-hover': '#d97706',
      '--shadow-color': 'rgba(0, 0, 0, 0.4)',
      '--glow-color': 'rgba(245, 158, 11, 0.15)',
    }
  },
};

const THEME_ORDER = ['midnight', 'sakura', 'ocean', 'forest', 'sunset'];

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    try {
      return localStorage.getItem('prince-theme') || 'midnight';
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
