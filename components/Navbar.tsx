import React from 'react';
import { Home, Map, CheckSquare, Info } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', icon: Home, label: '首頁' },
    { id: 'itinerary', icon: Map, label: '行程' },
    { id: 'checklist', icon: CheckSquare, label: '清單' },
    { id: 'info', icon: Info, label: '資訊' },
  ];

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <div className="
        flex justify-around items-center 
        bg-white/[0.08] backdrop-blur-xl
        border border-white/20 
        rounded-[2rem] h-16
        shadow-2xl shadow-black/50
      ">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex flex-col items-center justify-center w-full h-full space-y-1
                transition-all duration-300 relative
                ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-200'}
              `}
            >
              {isActive && (
                <div className="absolute -top-1 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,0.8)]"></div>
              )}
              <item.icon 
                size={24} 
                strokeWidth={isActive ? 2.5 : 2} 
                className={`transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : ''}`}
              />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};