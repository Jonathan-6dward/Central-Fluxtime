import React from 'react';
import { Search, Play, Pause, Edit, Bot, Zap, Plus, ArrowRight, Activity, Clock } from 'lucide-react';

const Automations = () => {
  const workflows = [
    { title: "Secretária Automatizada", desc: "Gerencia agendamentos via WhatsApp/Email.", icon: Bot, status: "active", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
    { title: "Monitoramento de FluxPulse", desc: "FluxPulse -> Resumo -> Telegram.", icon: Zap, status: "active", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { title: "FluxIntel -> CRM", desc: "Salva leads coletados no banco de dados.", icon: Search, status: "paused", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
    { title: "FluxProduct Alert", desc: "Notifica queda de estoque.", icon: Activity, status: "error", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-emerald-400/20 flex items-center justify-center text-emerald-400">
                <Bot size={18} />
             </div>
             <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">FluxAuto</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Workflow Engine (n8n)</h1>
          <p className="text-gray-400 mt-2">Gerencie fluxos inteligentes integrados ao ecossistema.</p>
        </div>
        <button className="px-6 py-2.5 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center gap-2">
           <Plus size={18} /> Criar Novo Fluxo
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
           <input 
            type="text" 
            placeholder="Pesquisar automações..." 
            className="w-full h-12 bg-[#111815] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 transition-all"
           />
        </div>
        <div className="flex gap-2">
          <button className="h-12 px-6 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/50 font-bold text-sm">Todos</button>
          <button className="h-12 px-6 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/5 font-bold text-sm">Ativos</button>
          <button className="h-12 px-6 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/5 font-bold text-sm">Pausados</button>
        </div>
      </div>

      {/* Workflows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workflows.map((wf, idx) => (
          <div key={idx} className={`glassmorphism p-6 rounded-xl border ${wf.border} hover:bg-white/5 transition-all group relative overflow-hidden`}>
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
               <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide flex items-center gap-1.5 ${
                 wf.status === 'active' ? 'bg-green-500/20 text-green-400' :
                 wf.status === 'paused' ? 'bg-yellow-500/20 text-yellow-400' :
                 'bg-red-500/20 text-red-400'
               }`}>
                 <div className={`w-1.5 h-1.5 rounded-full ${
                   wf.status === 'active' ? 'bg-green-400 animate-pulse' :
                   wf.status === 'paused' ? 'bg-yellow-400' :
                   'bg-red-400'
                 }`}></div>
                 {wf.status === 'active' ? 'Rodando' : wf.status === 'paused' ? 'Pausado' : 'Erro'}
               </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
               <div className={`p-4 rounded-xl ${wf.bg} ${wf.color}`}>
                  <wf.icon size={24} />
               </div>
               <div className="mt-1">
                  <h3 className="text-xl font-bold text-white leading-tight">{wf.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{wf.desc}</p>
               </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
               <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Clock size={12}/> Última exec: 10m atrás</span>
                  <span className="flex items-center gap-1"><Zap size={12}/> 1.2k Runs</span>
               </div>
               <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                     <Edit size={16} />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                     {wf.status === 'active' ? <Pause size={16} /> : <Play size={16} />}
                  </button>
               </div>
            </div>
          </div>
        ))}

        {/* Create New Card */}
        <button className="glassmorphism p-6 rounded-xl border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-gray-500 hover:text-emerald-500 min-h-[200px]">
           <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <Plus size={24} />
           </div>
           <span className="font-bold">Criar Automação Customizada</span>
        </button>
      </div>
    </div>
  );
};

export default Automations;