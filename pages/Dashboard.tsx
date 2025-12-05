import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Radar, Video, Bot, Zap, ArrowRight, Activity, 
  Sparkles, Layers, TrendingUp, Cpu, LayoutGrid, CheckCircle2,
  Flame, ShoppingBag, Search, ShieldAlert
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-10 animate-fade-in-up">
      
      {/* 1. HERO: FluxBoard Overview */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight font-display mb-2">
            FluxBoard <span className="text-neon-blue">OS</span>
          </h1>
          <p className="text-gray-400">Hub Central de Inteligência e Controle.</p>
        </div>
        <div className="flex gap-4">
           {/* Health Score Widget */}
           <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
              <Activity size={20} className="text-green-400" />
              <div>
                 <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Health Score</p>
                 <p className="text-lg font-black text-white leading-none">98%</p>
              </div>
           </div>
        </div>
      </div>

      {/* 2. System Status & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="glassmorphism p-4 rounded-xl border border-white/10 flex items-center gap-4">
            <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue">
               <Flame size={20}/>
            </div>
            <div>
               <p className="text-xs font-bold text-gray-500 uppercase">FluxTrend</p>
               <p className="text-white font-bold">3 Virais Detectados</p>
            </div>
         </div>
         <div className="glassmorphism p-4 rounded-xl border border-white/10 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
               <Bot size={20}/>
            </div>
            <div>
               <p className="text-xs font-bold text-gray-500 uppercase">FluxAuto</p>
               <p className="text-white font-bold">5 Automações Ativas</p>
            </div>
         </div>
         <div className="glassmorphism p-4 rounded-xl border border-white/10 flex items-center gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-500">
               <ShoppingBag size={20}/>
            </div>
            <div>
               <p className="text-xs font-bold text-gray-500 uppercase">FluxProduct</p>
               <p className="text-white font-bold">12 Produtos Quentes</p>
            </div>
         </div>
         <div className="glassmorphism p-4 rounded-xl border border-white/10 flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
               <Search size={20}/>
            </div>
            <div>
               <p className="text-xs font-bold text-gray-500 uppercase">FluxIntel</p>
               <p className="text-white font-bold">4 Concorrentes</p>
            </div>
         </div>
      </div>

      {/* 3. CORE: Intelligent Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* FluxTrend Highlight */}
         <Link to="/sint" className="col-span-1 lg:col-span-2 group relative p-8 rounded-2xl border border-neon-blue/30 bg-gradient-to-br from-neon-blue/5 to-transparent hover:bg-neon-blue/10 transition-all duration-300">
            <div className="absolute top-4 right-4 p-2 bg-neon-blue/20 rounded-full text-neon-blue group-hover:scale-110 transition-transform">
               <Radar size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">FluxTrend Radar</h3>
            <p className="text-gray-400 max-w-md mb-6">
               Oportunidade Viral: <span className="text-white font-bold">#AIRevolution</span> com crescimento de <span className="text-green-400">+450%</span> nas últimas 24h.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-neon-blue group-hover:translate-x-2 transition-transform">
               Explorar Tendências <ArrowRight size={16} />
            </div>
         </Link>

         {/* FluxPulse Highlight */}
         <Link to="/news-analyzer" className="p-8 rounded-2xl border border-white/10 bg-[#111] hover:border-white/20 transition-all group flex flex-col justify-between">
            <div>
               <div className="flex justify-between items-start mb-4">
                  <TrendingUp size={24} className="text-purple-400" />
                  <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">FluxPulse</span>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Mercado Global</h3>
               <p className="text-gray-400 text-sm">Volume de busca aumentando em Tech & Crypto.</p>
            </div>
            <div className="mt-4 w-full bg-white/5 h-1 rounded-full overflow-hidden">
               <div className="w-3/4 h-full bg-purple-500"></div>
            </div>
         </Link>
      </div>

      {/* 4. ACTIONS: Create & Automate */}
      <section className="space-y-4">
         <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-purple shadow-neon-purple"></span>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Estúdio de Criação</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/creator-studio" className="p-6 rounded-2xl border border-white/10 bg-[#111] hover:border-neon-purple/50 hover:bg-neon-purple/5 transition-all group">
               <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-neon-purple/20 group-hover:text-neon-purple transition-colors">
                  <Sparkles size={24} />
               </div>
               <h3 className="text-lg font-bold text-white">FluxCreator</h3>
               <p className="text-sm text-gray-400 mt-1">Crie posts e stories com IA.</p>
            </Link>

            <Link to="/reactor" className="p-6 rounded-2xl border border-white/10 bg-[#111] hover:border-pink-500/50 hover:bg-pink-500/5 transition-all group">
               <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-pink-500/20 group-hover:text-pink-500 transition-colors">
                  <Video size={24} />
               </div>
               <h3 className="text-lg font-bold text-white">FluxVideoSpark</h3>
               <p className="text-sm text-gray-400 mt-1">Gere vídeos curtos automáticos.</p>
            </Link>

            <Link to="/flownews" className="p-6 rounded-2xl border border-white/10 bg-[#111] hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
               <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-blue-500/20 group-hover:text-blue-500 transition-colors">
                  <Layers size={24} />
               </div>
               <h3 className="text-lg font-bold text-white">FluxNewsFlow</h3>
               <p className="text-sm text-gray-400 mt-1">Pipeline de notícias automático.</p>
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Dashboard;