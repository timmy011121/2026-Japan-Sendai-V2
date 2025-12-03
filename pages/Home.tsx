
import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { FLIGHTS } from '../constants';
import { Plane, QrCode, ExternalLink, Calendar, MapPin, Sparkles, Clock, ArrowRight } from 'lucide-react';

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

      <section>
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold text-white/90 tracking-wide flex items-center gap-2">
            <Plane size={18} className="text-cyan-400" /> 航班資訊
          </h2>
        </div>
        
        <div className="space-y-4">
          {FLIGHTS.map((flight, index) => (
            <GlassCard key={index} className="group hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-5">
                <div className="flex flex-col">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full w-fit mb-2 border ${flight.type === 'Depart' ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' : 'bg-purple-500/10 text-purple-300 border-purple-500/20'}`}>
                    {flight.type === 'Depart' ? '去程' : '回程'}
                  </span>
                  <span className="text-xl font-bold tracking-wider text-white">{flight.airline}</span>
                  <span className="text-xs text-white/40 font-mono mt-0.5">{flight.flightNumber}</span>
                </div>
                <div className="text-right">
                  <span className="block text-lg font-bold font-mono">{flight.date}</span>
                  <span className="text-xs text-white/40">{flight.terminal}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between relative px-2">
                <div className="z-10 text-left">
                  <div className="text-3xl font-black text-white/90 tracking-tight">{flight.from.split(' ')[0]}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">{flight.from.split(' ')[1]}</div>
                </div>
                
                {/* Flight path visualization */}
                <div className="flex-1 px-4 flex flex-col items-center relative top-1">
                  <div className="text-[10px] text-cyan-400 mb-2 font-mono">{flight.time.split('-')[1].trim().replace(':','h') === '?' ? '4h 00m' : '約 3.5h'}</div>
                  <div className="w-full h-[1px] bg-white/10 relative">
                    <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000] border border-cyan-500/50 rounded-full p-1.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                       <Plane size={12} className="text-cyan-400 transform rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="z-10 text-right">
                  <div className="text-3xl font-black text-white/90 tracking-tight">{flight.to.split(' ')[0]}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">{flight.to.split(' ')[1]}</div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center bg-black/20 rounded-2xl p-4 backdrop-blur-md border border-white/5">
                <div className="text-center w-full border-r border-white/5">
                   <div className="flex items-center justify-center gap-1.5 mb-1">
                      <Clock size={10} className="text-white/30" />
                      <span className="text-[10px] text-white/40">起飛</span>
                   </div>
                   <span className="block text-xl font-bold font-mono text-white/90">{flight.time.split('-')[0]}</span>
                </div>
                <div className="text-center w-full">
                   <div className="flex items-center justify-center gap-1.5 mb-1">
                      <Clock size={10} className="text-white/30" />
                      <span className="text-[10px] text-white/40">抵達</span>
                   </div>
                   <span className="block text-xl font-bold font-mono text-white/90">{flight.time.split('-')[1]}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

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
