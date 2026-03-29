import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = '', delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass border border-light-bg/20 dark:border-dark-bg/20 rounded-2xl overflow-hidden shadow-xl bg-white/50 dark:bg-dark-bg/50 backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
}
