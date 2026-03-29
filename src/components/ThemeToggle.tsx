import { Sun, Moon } from 'lucide-react';
import { Button } from './Button';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <Button 
      variant="ghost" 
      onClick={toggleTheme} 
      className="p-3 rounded-full"
      aria-label="Alternar modo claro/escuro"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-dark-primary" />
      ) : (
        <Sun className="w-5 h-5 text-dark-accent" />
      )}
    </Button>
  );
}
