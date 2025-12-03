import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white/[0.08] 
        backdrop-blur-xl 
        border border-white/20 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
        rounded-3xl 
        p-5
        text-white
        transition-all duration-300
        hover:bg-white/15
        ${className}
      `}
    >
      {/* Glossy reflection effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};