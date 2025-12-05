import React from 'react';
import { CheckCircle2, AlertTriangle, Rss, ArrowRight, BrainCircuit, Share2, Settings, Plus } from 'lucide-react';

const FlowNews = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Share2 size={18} />
             </div>
             <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">FluxNewsFlow</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">News Automation</h1>
          <p className="text-gray-400 mt-2">Pipeline automático: Fontes → Inteligência → Distribuição.</p>
        </div>
        <button className="px-6 py-2.5 bg-blue-500 text-black font-bold rounded-xl hover:bg-blue-400 transition-colors flex items-center gap-2">
           <Plus size={18} /> Novo Pipeline
        </button>
      </div>

      {/* Pipeline Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
         {/* Connector Lines (Desktop) */}
         <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-green-500/20 -z-10 -translate-y-1/2"></div>

         {/* Step 1: Sources */}
         <div className="glassmorphism p-6 rounded-xl border border-blue-500/20 bg-[#111815] relative group">
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#111815] border border-white/10 rounded-full flex items-center justify-center z-10 hidden lg:flex">
               <ArrowRight size={12} className="text-gray-500" />
            </div>
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Rss size={20} /></div>
               <h3 className="text-lg font-bold text-white">1. Fontes de Dados</h3>
            </div>
            <div className="space-y-3">
               <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
                  <span className="text-sm text-gray-300">TechCrunch RSS</span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
               </div>
               <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
                  <span className="text-sm text-gray-300">Twitter: @OpenAI</span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
               </div>
               <div className="p-3 border border-dashed border-white/20 rounded-lg text-center text-xs text-gray-500 hover:border-blue-500/50 hover:text-blue-400 cursor-pointer transition-colors">
                  + Adicionar Fonte
               </div>
            </div>
         </div>

         {/* Step 2: Processing */}
         <div className="glassmorphism p-6 rounded-xl border border-blue-400/20 bg-[#111815] relative">
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#111815] border border-white/10 rounded-full flex items-center justify-center z-10 hidden lg:flex">
               <ArrowRight size={12} className="text-gray-500" />
            </div>
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-blue-400/10 rounded-lg text-blue-400"><BrainCircuit size={20} /></div>
               <h3 className="text-lg font-bold text-white">2. Processamento IA</h3>
            </div>
            <div className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Resumo Inteligente</span>
                  <span className="text-blue-400 font-bold">Ativo</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Análise de Sentimento</span>
                  <span className="text-blue-400 font-bold">Ativo</span>
               </div>
               <div className="h-px bg-white/10"></div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Status</span>
                  <span className="flex items-center gap-2 text-blue-400 font-bold text-xs bg-blue-400/10 px-2 py-1 rounded">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div> Processando
                  </span>
               </div>
            </div>
         </div>

         {/* Step 3: Distribution */}
         <div className="glassmorphism p-6 rounded-xl border border-green-500/20 bg-[#111815]">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-green-500/10 rounded-lg text-green-400"><Share2 size={20} /></div>
               <h3 className="text-lg font-bold text-white">3. Distribuição</h3>
            </div>
            <div className="space-y-3">
               <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
                  <span className="text-sm text-gray-300">Canal Telegram</span>
                  <span className="text-xs text-green-400 font-bold">Enviado (12)</span>
               </div>
               <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
                  <span className="text-sm text-gray-300">FluxCreator Draft</span>
                  <span className="text-xs text-yellow-400 font-bold">Pendente (3)</span>
               </div>
               <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-white transition-colors">
                  Configurar Destinos
               </button>
            </div>
         </div>
      </div>

      {/* Unified Activity Log */}
      <div className="glassmorphism rounded-xl border border-white/10 overflow-hidden">
         <div className="p-4 bg-black/20 border-b border-white/10 flex justify-between items-center">
            <h3 className="font-bold text-white">Log de Execução</h3>
            <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
               <Settings size={14} /> Configurar Alertas
            </button>
         </div>
         <div className="p-0">
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                     <div className={`p-2 rounded bg-white/5 ${i === 2 ? 'text-yellow-400' : 'text-blue-400'}`}>
                        {i === 2 ? <AlertTriangle size={16} /> : <CheckCircle2 size={16} />}
                     </div>
                     <div>
                        <p className="text-sm font-bold text-white">Notícia Processada: "AI Breakthrough in Medicine"</p>
                        <p className="text-xs text-gray-500">Origem: TechCrunch • Destino: Telegram</p>
                     </div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">10:4{i} AM</span>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default FlowNews;