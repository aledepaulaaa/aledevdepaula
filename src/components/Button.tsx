import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}, ref) => {
  const baseClasses = "inline-flex gap-2 items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-dark-primary hover:bg-dark-primary/90 text-white shadow-lg shadow-dark-primary/30",
    accent: "bg-dark-accent hover:bg-dark-accent/90 text-dark-bg shadow-lg shadow-dark-accent/30",
    outline: "border-2 border-dark-primary dark:border-dark-accent text-dark-primary dark:text-dark-accent hover:bg-dark-primary/10",
    ghost: "hover:bg-dark-bg/5 dark:hover:bg-light-bg/10 text-light-fg dark:text-dark-fg"
  };

  const sizes = "px-6 py-3 text-base";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
