import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Verifica log do local storage para persistir escolha do usuario
    const saved = localStorage.getItem('theme');
    if (saved) return saved as 'light' | 'dark';

    // Regra: "adicione também uma lógica de mudança de modo claro/escuro de acordo com o tempo/horário do dia"
    // "quando for acima de 18h da tarde, o modo automaticamente por padrão será escuro"
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6 ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
