
import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { FLIGHTS } from '../constants';
import { Plane, QrCode, ExternalLink, Calendar, MapPin, Sparkles, Timer, ArrowRight, Luggage } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2026-01-12T00:00:00');
    const now = new Date();
    const diffTime = targetDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays > 0 ? diffDays : 0);
  }, []);

  return (
    <div className="space-y-8 pb-24 animate-fade-in">
      
      {/* Countdown Section */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold text-white/90 tracking-wide flex items-center gap-2">
            <Timer size={18} className="text-cyan-400" /> 旅程倒數
          </h2>
        </div>

        {/* Shortened Countdown Widget */}
        <GlassCard className="!p-0 overflow-hidden relative group h-[120px] flex items-center border-white/10 shadow-lg shadow-cyan-900/10">
           {/* Background Ambient Glows */}
           <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[80px] animate-pulse pointer-events-none" />
           <div className="absolute bottom-[-50%] left-[-10%] w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
           
           {/* Glass Reflection */}
           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

           <div className="relative z-10 w-full px-6 flex items-center justify-between">
              
              {/* Left: Label */}
              <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-2 opacity-80">
                   <Sparkles size={14} className="text-cyan-300" />
                   <span className="text-xs font-bold tracking-widest text-cyan-100 uppercase">距離啟程</span>
                 </div>
                 <div className="flex items-center gap-4 text-[10px] text-white/50 mt-1">
                    <span className="flex items-center gap-1"><MapPin size={10} /> 日本東北</span>
                    <span className="w-[1px] h-2 bg-white/20"></span>
                    <span className="flex items-center gap-1 font-mono"><Calendar size={10} /> 2026.01.12</span>
                 </div>
              </div>

              {/* Right: Big Number */}
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-thin text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] font-sans tracking-tighter leading-none">
                  {daysLeft}
                </span>
                <span className="text-xs font-bold tracking-[0.3em] text-white/40 mb-1">DAYS</span>
              </div>
           </div>
        </GlassCard>
      </section>

      {/* Flight Info Section */}
      <section>
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold text-white/90 tracking-wide flex items-center gap-2">
            <Plane size={18} className="text-cyan-400" /> 航班資訊
          </h2>
        </div>
        
        <div className="space-y-4">
          {FLIGHTS.map((flight, index) => {
            const isDepart = flight.type === 'Depart';
            const originParts = flight.from.split(' ');
            const destParts = flight.to.split(' ');
            const [departTime, arriveTime] = flight.time.split('-').map(t => t.trim());
            const duration = flight.time.includes('?') ? '4h 00m' : '約 3.5小時';
            
            // Soft Liquid Glass Colors
            const themeColor = isDepart ? 'text-cyan-200' : 'text-purple-200';
            const gradientBg = isDepart 
                ? 'bg-gradient-to-br from-cyan-400/10 via-white/5 to-transparent' 
                : 'bg-gradient-to-br from-purple-400/10 via-white/5 to-transparent';
            const glowColor = isDepart ? 'shadow-[0_8px_32px_rgba(6,182,212,0.15)]' : 'shadow-[0_8px_32px_rgba(168,85,247,0.15)]';
            const borderColor = isDepart ? 'border-cyan-400/20' : 'border-purple-400/20';
            
            return (
              <GlassCard key={index} className={`!p-0 relative overflow-hidden group transition-all duration-500 border ${borderColor} hover:border-white/30 ${glowColor}`}>
                
                {/* Soft Liquid Background Effect */}
                <div className={`absolute inset-0 ${gradientBg} opacity-80`} />
                
                {/* Glossy Top Edge Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
                
                {/* Ambient Blur Orb */}
                <div className={`absolute -right-10 -top-10 w-48 h-48 rounded-full blur-[70px] opacity-20 pointer-events-none ${isDepart ? 'bg-cyan-400' : 'bg-purple-400'}`} />

                {/* Content Container */}
                <div className="p-6 relative z-10 flex flex-col gap-6">
                   
                   {/* Header: Type, Airline & Date */}
                   <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <div className="flex items-center gap-3">
                         <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md shadow-sm ${isDepart ? 'bg-cyan-950/40 text-cyan-200 border-cyan-500/30' : 'bg-purple-950/40 text-purple-200 border-purple-500/30'}`}>
                            {isDepart ? '去程航班' : '回程航班'}
                         </span>
                         <span className="text-sm font-bold text-white/90 tracking-wide drop-shadow-sm">{flight.airline}</span>
                      </div>
                      <div className="text-xs text-white/60 font-mono flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                         <Calendar size={12} className="text-white/40" /> {flight.date}
                      </div>
                   </div>

                   {/* Main Route Section */}
                   <div className="flex items-center justify-between relative">
                      
                      {/* Origin */}
                      <div className="flex flex-col items-start w-1/4">
                         <span className="text-4xl font-black text-white leading-none tracking-tighter drop-shadow-md">{originParts[0]}</span>
                         <span className="text-xs text-white/50 mt-1 font-medium">{originParts[1]}</span>
                         <span className={`text-lg font-bold font-mono mt-2 ${themeColor}`}>{departTime}</span>
                         <span className="text-[10px] text-white/30 border border-white/10 px-1.5 rounded mt-1 bg-white/5">{originParts[2]}</span>
                      </div>

                      {/* Center: Flight Number & Graphic */}
                      <div className="flex flex-col items-center justify-center flex-1 min-w-[180px] px-2 relative">
                         
                         {/* Flight Number - Reduced Size (2xl), No Italics */}
                         <div className={`text-2xl font-black tracking-wider drop-shadow-md mb-3 z-10 ${themeColor}`}>
                            {flight.flightNumber}
                         </div>
                         
                         {/* Path Graphic */}
                         <div className="w-full flex items-center gap-3 opacity-80">
                            {/* Start Dot */}
                            <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                            
                            {/* Line & Plane */}
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent relative">
                               {/* Plane Icon with Soft Gradient & Highlight - Size Unchanged */}
                               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 rounded-full border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-md ${isDepart ? 'bg-gradient-to-br from-cyan-500/30 to-black/20' : 'bg-gradient-to-br from-purple-500/30 to-black/20'}`}>
                                  {/* Inner subtle glow ring */}
                                  <div className="absolute inset-0 rounded-full border border-white/10" />
                                  <Plane size={14} className={`text-white drop-shadow-md ${!isDepart ? '-scale-x-100' : ''}`} />
                                </div>
                            </div>
                            
                            {/* End Dot */}
                            <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                         </div>

                         {/* Duration Text */}
                         <span className="text-xs text-white/50 mt-3 font-medium tracking-widest uppercase">{duration}</span>
                      </div>

                      {/* Destination */}
                      <div className="flex flex-col items-end w-1/4 text-right">
                         <span className="text-4xl font-black text-white leading-none tracking-tighter drop-shadow-md">{destParts[0]}</span>
                         <span className="text-xs text-white/50 mt-1 font-medium">{destParts[1]}</span>
                         <span className={`text-lg font-bold font-mono mt-2 ${themeColor}`}>{arriveTime}</span>
                         <span className="text-[10px] text-white/30 border border-white/10 px-1.5 rounded mt-1 bg-white/5">{destParts[2]}</span>
                      </div>
                   </div>

                </div>

                {/* Footer Strip */}
                <div className="bg-gradient-to-r from-black/10 via-white/5 to-black/10 border-t border-white/5 px-6 py-3 flex justify-between items-center text-[10px] text-white/40 font-medium tracking-wider">
                   <div className="flex items-center gap-2">
                      <Luggage size={12} className="text-white/30" />
                      <span>託運: 20KG</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Economy</span>
                   </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Quick Links Section */}
      <section>
        <h2 className="text-lg font-semibold text-white/90 mb-4 px-2 tracking-wide flex items-center gap-2">
           <ExternalLink size={18} className="text-cyan-400" /> 快速連結
        </h2>
        <a 
          href="https://www.vjw.digital.go.jp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block group"
        >
          <GlassCard className="flex items-center justify-between active:scale-[0.98] transition-all hover:bg-white/10 border-white/10 group-hover:border-pink-500/30">
            <div className="flex items-center space-x-4">
              <div className="bg-pink-500/10 p-3.5 rounded-2xl text-pink-400 border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:scale-110 transition-transform">
                <QrCode size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-pink-200 transition-colors">Visit Japan Web</h3>
                <p className="text-xs text-white/40 mt-0.5">入境審查、海關申報 QR Code</p>
              </div>
            </div>
            <div className="bg-white/5 p-2 rounded-full">
               <ArrowRight size={16} className="text-white/30 group-hover:text-pink-300 transition-colors" />
            </div>
          </GlassCard>
        </a>
      </section>
    </div>
  );
};
