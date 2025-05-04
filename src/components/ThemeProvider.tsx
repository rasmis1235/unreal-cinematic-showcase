
import { createContext, useState, useEffect, useContext } from 'react';
import { playSoundEffect } from '@/utils/animationUtils';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDragging: boolean;
  handleDragStart: () => void;
  handleDragEnd: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  isDragging: false,
  handleDragStart: () => {},
  handleDragEnd: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light-mode', savedTheme === 'light');
    }
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
    playSoundEffect('/switch-start.mp3', 0.2);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    toggleTheme();
    playSoundEffect('/switch-end.mp3', 0.3);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light-mode', newTheme === 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDragging, handleDragStart, handleDragEnd }}>
      {children}
    </ThemeContext.Provider>
  );
};
