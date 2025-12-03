import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import { ItineraryPage } from './pages/Itinerary';
import { ChecklistPage } from './pages/Checklist';
import { InfoPage } from './pages/Info';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'itinerary': return <ItineraryPage />;
      case 'checklist': return <ChecklistPage />;
      case 'info': return <InfoPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden font-sans selection:bg-cyan-500/30">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 bg-[#0a0a0a]">
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-cyan-900/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Noise Texture (Optional for glass realism) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-md mx-auto min-h-screen p-4 flex flex-col">
        {/* Global Header */}
        <header className="px-2 pt-4 pb-2">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            日本東北之旅
          </h1>
          <p className="text-white/60 text-lg">2026 冬季</p>
        </header>

        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;