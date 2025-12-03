
import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { INITIAL_CHECKLIST } from '../constants';
import { ChecklistItem } from '../types';
import { Check, CheckCircle2, Circle, Trash2 } from 'lucide-react';

export const ChecklistPage: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  
  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('japan_trip_checklist');
    if (saved) {
      setItems(JSON.parse(saved));
    } else {
      setItems(INITIAL_CHECKLIST);
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('japan_trip_checklist', JSON.stringify(items));
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const clearAllChecked = () => {
    if (window.confirm('確定要清除所有已選取的項目嗎？')) {
      setItems(prev => prev.map(item => ({ ...item, checked: false })));
    }
  };

  const categories = Array.from(new Set(items.map(i => i.category)));
  const progress = Math.round((items.filter(i => i.checked).length / items.length) * 100);
  const hasCheckedItems = items.some(i => i.checked);

  return (
    <div className="pb-24 space-y-6 animate-fade-in">
      <header className="px-2 pt-4">
        <div className="flex justify-between items-end mb-2">
           <h1 className="text-3xl font-bold">行前準備</h1>
           {hasCheckedItems && (
             <button 
               onClick={clearAllChecked}
               className="text-xs text-red-300 bg-red-500/10 px-3 py-1.5 rounded-full hover:bg-red-500/20 transition flex items-center gap-1 border border-red-500/20"
             >
               <Trash2 size={12} /> 清除已選
             </button>
           )}
        </div>
        
        {/* Progress Bar */}
        <div className="bg-white/10 h-4 rounded-full overflow-hidden border border-white/10 relative">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-right text-xs text-cyan-300 mt-1 font-mono">{progress}% 完成</div>
      </header>

      {categories.map(category => (
        <div key={category} className="space-y-3">
          <h3 className="px-2 text-sm font-bold text-white/50 uppercase tracking-wider">{category}</h3>
          <div className="space-y-2">
            {items.filter(i => i.category === category).map(item => (
              <GlassCard 
                key={item.id} 
                className={`!p-4 flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-all ${item.checked ? 'opacity-50 grayscale' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center border transition-colors
                  ${item.checked ? 'bg-green-500 border-green-500 text-white' : 'border-white/30 text-transparent'}
                `}>
                  <Check size={14} strokeWidth={4} />
                </div>
                <span className={`flex-1 text-base font-medium ${item.checked ? 'line-through text-white/40' : 'text-white'}`}>
                  {item.text}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
