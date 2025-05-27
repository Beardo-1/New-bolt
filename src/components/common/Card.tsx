import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick,
}) => {
  const baseStyles = 'bg-white dark:bg-neutral-800 rounded-lg overflow-hidden';
  const shadowStyles = hover 
    ? 'shadow-card transition-shadow hover:shadow-card-hover' 
    : 'shadow-card';
  const cursorStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div 
      className={`
        ${baseStyles}
        ${shadowStyles}
        ${cursorStyles}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-4 border-b border-neutral-200 dark:border-neutral-700 ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-4 border-t border-neutral-200 dark:border-neutral-700 ${className}`}>
    {children}
  </div>
);