import React, { useState, useEffect } from 'react';
import { 
  Radar, Flame, TrendingUp, Activity, 
  FileText, Plus, Zap, ArrowUpRight, 
  Video, Bot, Search, ArrowRight, Clapperboard, Globe, Cpu, Loader2, CheckCircle2, AlertTriangle, ShoppingBag
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';

const SINT = () => {
  const [loading, setLoading] = useState(true);
  const [selectedNiche, setSelectedNiche] = useState('Tech');
  const [selectedTrend, setSelectedTrend] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const emergingTopics = [
    { id: 1, rank: 1, topic: "#AIRevolution", volume: "2.5M", status: "exploding", platform: "TikTok" },
    { id: 2, rank: 2, topic: "Crypto Regulation", volume: "1.2M", status: "high", platform: "X" },
    { id: 3, rank: 3, topic: "Sustainable Tech", volume: "980k", status: "stable", platform: "Google" },
  ];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
         <Loader2 className="w-12 h-12 text-neon-blue animate-spin mb-4" />
         <p className="text-gray-400 font-mono text-sm">Calibrando FluxTrend...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10 font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
         <div>
            <div className="flex items-center gap-2 mb-2">
               <span className="px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-bold uppercase tracking-wider">
                  FluxTime Ecosystem
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight font-display">
               FluxTrend Radar
            </h1>
            <p className="text-gray-400 mt-2 max-w-xl">
               Monitore tendências, viralize conteúdos e identifique produtos vencedores.
            </p>
         </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* LEFT: Trends List */}
         <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 mb-4">
               {['Tech', 'Finance', 'Lifestyle', 'Gaming'].map(niche => (
                  <button 
                     key={niche}
                     onClick={() => setSelectedNiche(niche)}
                     className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-all ${
                        selectedNiche === niche 
                        ? 'bg-neon-blue text-black border-neon-blue shadow-neon-blue' 
                        : 'bg-transparent border-white/10 text-gray-400 hover:text-white'
                     }`}
                  >
                     {niche}
                  </button>
               ))}
            </div>

            <div className="space-y-3">
               {emergingTopics.map((item) => (
                  <div 
                     key={item.id}
                     onClick={() => setSelectedTrend(item.id)}
                     className={`group p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                        selectedTrend === item.id 
                        ? 'bg-neon-blue/5 border-neon-blue/50' 
                        : 'bg-[#111] border-white/5 hover:border-white/20'
                     }`}
                  >
                     <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-6">
                           <span className="text-2xl font-black text-white/20 group-hover:text-neon-blue/50 transition-colors">#{item.rank}</span>
                           <div>
                              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{item.topic}</h3>
                              <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                                 <span className="flex items-center gap-1"><Globe size={12}/> {item.platform}</span>
                                 <span className="text-white/20">|</span>
                                 <span>{item.volume} buscas</span>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           {item.status === 'exploding' && (
                              <span className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded">
                                 <Flame size={12} /> VIRAL
                              </span>
                           )}
                           <ArrowRight size={20} className={`transform transition-transform ${selectedTrend === item.id ? 'translate-x-1 text-neon-blue' : 'text-gray-600'}`} />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* RIGHT: Quick Actions Panel */}
         <div className="glassmorphism p-6 rounded-2xl border border-white/10 bg-[#111] flex flex-col h-full sticky top-6">
            <h3 className="text-lg font-bold text-white font-display mb-6">Ações Rápidas (Flux)</h3>
            
            {selectedTrend ? (
               <div className="space-y-3 flex-1 animate-fade-in-up">
                  <div className="mb-6 p-4 bg-neon-blue/5 rounded-xl border border-neon-blue/10">
                     <p className="text-xs text-neon-blue font-bold uppercase mb-1">Target Selecionado</p>
                     <p className="text-white font-bold text-lg">{emergingTopics.find(t => t.id === selectedTrend)?.topic}</p>
                  </div>
                  
                  <Link to="/reactor" className="w-full py-4 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-between group transition-all">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-pink-500/20 rounded-lg text-pink-500"><Clapperboard size={18}/></div>
                        <div>
                           <p className="text-sm font-bold text-white">Gerar Vídeo Viral</p>
                           <p className="text-[10px] text-gray-500">FluxVideoSpark</p>
                        </div>
                     </div>
                     <ArrowUpRight size={16} className="text-gray-500 group-hover:text-pink-500" />
                  </Link>

                  <Link to="/creator-studio" className="w-full py-4 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-between group transition-all">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-neon-purple/20 rounded-lg text-neon-purple"><Video size={18}/></div>
                        <div>
                           <p className="text-sm font-bold text-white">Criar Post/Story</p>
                           <p className="text-[10px] text-gray-500">FluxCreator</p>
                        </div>
                     </div>
                     <ArrowUpRight size={16} className="text-gray-500 group-hover:text-neon-purple" />
                  </Link>

                  <Link to="/ecommerce" className="w-full py-4 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-between group transition-all">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500"><ShoppingBag size={18}/></div>
                        <div>
                           <p className="text-sm font-bold text-white">Produtos Relacionados</p>
                           <p className="text-[10px] text-gray-500">FluxProductPulse</p>
                        </div>
                     </div>
                     <ArrowUpRight size={16} className="text-gray-500 group-hover:text-yellow-500" />
                  </Link>

                  <Link to="/automations" className="w-full py-4 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-between group transition-all">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-500"><Bot size={18}/></div>
                        <div>
                           <p className="text-sm font-bold text-white">Monitorar Hashtag</p>
                           <p className="text-[10px] text-gray-500">FluxAuto (n8n)</p>
                        </div>
                     </div>
                     <Plus size={16} className="text-gray-500 group-hover:text-emerald-500" />
                  </Link>
               </div>
            ) : (
               <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
                  <Search size={48} className="text-gray-600 mb-4"/>
                  <p className="text-sm text-gray-400">Selecione uma tendência ao lado para ativar o painel de ação.</p>
               </div>
            )}
         </div>

      </div>
    </div>
  );
};

export default SINT;