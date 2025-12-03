
import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { FLIGHTS } from '../constants';
import { Plane, QrCode, ExternalLink, Calendar, MapPin, Sparkles, Timer, ArrowRight, Luggage, Clock } from 'lucide-react';

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
      
      {/* Countdown Section - Added margin-top for spacing */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold text-white/90 tracking-wide flex items-center gap-2">
            <Timer size={18} className="text-cyan-400" /> 旅程倒數
          </h2>
        </div>

        {/* Redesigned Minimalist Liquid Glass Countdown */}
        <GlassCard className="!p-0 overflow-hidden relative group min-h-[200px] flex flex-col items-center justify-center border-white/10 shadow-2xl shadow-cyan-900/20">
           {/* Background Ambient Glows */}
           <div className="absolute top-[-50%] right-[-20%] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
           <div className="absolute bottom-[-50%] left-[-20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
           
           {/* Glass Reflection */}
           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

           <div className="relative z-10 w-full p-8 flex flex-col items-center">
              
              <div className="flex items-center gap-2 mb-2 opacity-70">
                <Sparkles size={14} className="text-cyan-300" />
                <span className="text-xs font-medium tracking-[0.2em] text-cyan-100 uppercase">距離啟程</span>
              </div>

              {/* Main Number */}
              <div className="relative flex flex-col items-center">
                <span className="text-[6rem] leading-none font-thin text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] font-sans tracking-tight">
                  {daysLeft}
                </span>
                <span className="text-sm font-bold tracking-[0.5em] text-white/40 mt-[-10px] ml-2">DAYS</span>
              </div>

              {/* Divider */}
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-6" />

              {/* Details */}
              <div className="flex items-center gap-6 text-sm text-white/80">
                 <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-cyan-500/20 text-cyan-300">
                      <MapPin size={12} />
                    </div>
                    <span className="font-medium tracking-wide">日本東北</span>
                 </div>
                 <div className="w-[1px] h-3 bg-white/20"></div>
                 <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-purple-500/20 text-purple-300">
                      <Calendar size={12} />
                    </div>
                    <span className="font-medium tracking-wide font-mono">2026.01.12</span>
                 </div>
              </div>
           </div>
        </GlassCard>
      </section>

      {/* Flight Info Section - Redesigned for Bigger Flight Number */}
      <section>
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold text-white/90 tracking-wide flex items-center gap-2">
            <Plane size={18} className="text-cyan-400" /> 航班資訊
          </h2>
        </div>
        
        <div className="space-y-5">
          {FLIGHTS.map((flight, index) => {
            const isDepart = flight.type === 'Depart';
            const originParts = flight.from.split(' ');
            const destParts = flight.to.split(' ');
            const [departTime, arriveTime] = flight.time.split('-').map(t => t.trim());
            
            // Calculate duration roughly based on time string for display
            // IT216: 00:10 - 04:00 (3h 50m)
            // CI101: 14:35 - 17:45 (3h 10m + 1h time diff? Approx 4h)
            const durationDisplay = isDepart ? '約 3h 50m' : '約 4h 10m';
            
            return (
              <GlassCard key={index} className="!p-0 relative overflow-hidden group hover:bg-white/10 transition-all duration-500 border-white/10">
                {/* Background ambient light */}
                <div className={`absolute -right-10 -top-24 w-72 h-72 rounded-full blur-[80px] opacity-[0.15] transition-all duration-500 ${isDepart ? 'bg-cyan-400' : 'bg-purple-400'} group-hover:opacity-25`} />
                <div className={`absolute -left-10 -bottom-24 w-72 h-72 rounded-full blur-[80px] opacity-[0.05] transition-all duration-500 ${isDepart ? 'bg-cyan-600' : 'bg-purple-600'} group-hover:opacity-15`} />
                
                {/* Content Container */}
                <div className="p-6 relative z-10 flex flex-col gap-6">
                   
                   {/* Header: Airline Name & Date */}
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center border backdrop-blur-md ${isDepart ? 'bg-cyan-500/10 border-cyan-400/20 text-cyan-300' : 'bg-purple-500/10 border-purple-400/20 text-purple-300'}`}>
                            <Plane size={14} className={!isDepart ? 'rotate-180' : ''} />
                         </div>
                         <div>
                            <div className="text-sm font-bold text-white tracking-wide">{flight.airline}</div>
                            <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded w-fit mt-0.5 border ${isDepart ? 'bg-cyan-500/10 text-cyan-200 border-cyan-500/20' : 'bg-purple-500/10 text-purple-200 border-purple-500/20'}`}>
                                {isDepart ? '去程航班' : '回程航班'}
                            </div>
                         </div>
                      </div>
                      <div className="text-xs text-white/50 font-mono flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                         <Calendar size={12} /> {flight.date}
                      </div>
                   </div>

                   {/* Main Section: Route with HUGE Flight Number */}
                   <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                      
                      {/* Origin */}
                      <div className="flex flex-col items-start">
                         <span className="text-4xl font-black text-white leading-none tracking-tight">{originParts[0]}</span>
                         <span className="text-[10px] text-white/40 mt-1 uppercase tracking-wider">{originParts[1]}</span>
                         <div className={`text-xl font-bold font-mono mt-2 flex items-baseline gap-1 ${isDepart ? 'text-cyan-300' : 'text-purple-300'}`}>
                            {departTime}
                         </div>
                         <span className="text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded mt-1 border border-white/5">{originParts[2]}</span>
                      </div>

                      {/* Center: Flight Number & Graphic */}
                      <div className="flex flex-col items-center justify-center px-2 min-w-[140px]">
                         {/* Adjusted Flight Number: Smaller Font (text-2xl), No Italic */}
                         <div className={`text-2xl font-black tracking-tight z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] ${isDepart ? 'text-cyan-400' : 'text-fuchsia-400'}`}>
                            {flight.flightNumber}
                         </div>
                         
                         {/* Path Graphic */}
                         <div className="w-full flex items-center gap-2 opacity-50 mt-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-white/40 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent relative">
                               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${!isDepart ? '-scale-x-100' : ''}`}>
                                  <Plane size={12} className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" fill="currentColor" />
                               </div>
                            </div>
                            <div className="h-1.5 w-1.5 rounded-full bg-white/40 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                         </div>
                         <span className="text-xs text-white/30 mt-1.5 font-mono tracking-widest">{durationDisplay}</span>
                      </div>

                      {/* Destination */}
                      <div className="flex flex-col items-end text-right">
                         <span className="text-4xl font-black text-white leading-none tracking-tight">{destParts[0]}</span>
                         <span className="text-[10px] text-white/40 mt-1 uppercase tracking-wider">{destParts[1]}</span>
                         <div className={`text-xl font-bold font-mono mt-2 flex items-baseline gap-1 ${isDepart ? 'text-cyan-300' : 'text-purple-300'}`}>
                            {arriveTime}
                         </div>
                         <span className="text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded mt-1 border border-white/5">{destParts[2]}</span>
                      </div>
                   </div>

                </div>

                {/* Footer Strip */}
                <div className="bg-black/20 border-t border-white/5 px-6 py-3 flex justify-between items-center text-[10px] text-white/40 font-medium tracking-wider">
                   <div className="flex items-center gap-1.5">
                      <Luggage size={12} className="text-white/60" />
                      <span>託運行李: 20KG</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${isDepart ? 'bg-cyan-500' : 'bg-purple-500'}`}></div>
                      <span>經濟艙 Economy</span>
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
