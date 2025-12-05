import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, Share2, Search, Video, Bot, ShoppingCart, 
  Activity, Zap, Clock, ArrowRight, CheckCircle2, AlertCircle 
} from 'lucide-react';

const Dashboard = () => {
  const tools = [
    { title: "News Analyzer Pro", desc: "Analyze news & intelligence.", icon: LayoutGrid, path: "/news-analyzer", color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
    { title: "FlowNews AI", desc: "Automated news pipelines.", icon: Share2, path: "/flownews", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { title: "OSINT Tools", desc: "Deep web scraping & data.", icon: Search, path: "/osint", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    { title: "Creator Studio", desc: "AI video & text creation.", icon: Video, path: "/creator-studio", color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20" },
    { title: "Automations IA", desc: "n8n workflow manager.", icon: Bot, path: "/automations", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
    { title: "Ecommerce Boost", desc: "Sales & competitor insights.", icon: ShoppingCart, path: "/ecommerce", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" }
  ];

  const recentActivity = [
    { module: 'OSINT', action: 'Coleta finalizada: @tech_guru', time: '2 min ago', status: 'success' },
    { module: 'Creator', action: 'Vídeo gerado: "AI Trends 2024"', time: '15 min ago', status: 'success' },
    { module: 'FlowNews', action: 'Feed processado: TechCrunch', time: '1h ago', status: 'success' },
    { module: 'Automations', action: 'Erro no fluxo: Email Sequence', time: '3h ago', status: 'error' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2">Central de Comando</h1>
          <p className="text-gray-400">Visão unificada do seu ecossistema digital.</p>
        </div>
        <div className="flex gap-4">
           <div className="px-4 py-2 rounded-lg bg-black/20 border border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-gray-300">Sistema Online</span>
           </div>
           <div className="px-4 py-2 rounded-lg bg-black/20 border border-white/10 flex items-center gap-2">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm font-bold text-gray-300">850 Créditos IA</span>
           </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Conteúdos Gerados', val: '1,240', icon: Video, color: 'text-pink-400' },
          { label: 'Dados Coletados', val: '85GB', icon: Search, color: 'text-purple-400' },
          { label: 'Automações Executadas', val: '15k', icon: Zap, color: 'text-emerald-400' },
          { label: 'Receita Estimada', val: '$12k', icon: Activity, color: 'text-primary' },
        ].map((stat, i) => (
          <div key={i} className="glassmorphism p-4 rounded-xl flex items-center gap-4">
             <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
               <stat.icon size={20} />
             </div>
             <div>
               <p className="text-xs text-gray-400 font-bold uppercase">{stat.label}</p>
               <p className="text-xl font-black text-white">{stat.val}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Modules Grid */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <LayoutGrid size={20} className="text-primary" /> Módulos Integrados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link 
                key={tool.title} 
                to={tool.path}
                className={`group relative p-6 rounded-xl border ${tool.border} ${tool.bg} hover:bg-opacity-20 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="text-white" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-black/20 flex items-center justify-center ${tool.color} shadow-lg`}>
                    <tool.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{tool.title}</h3>
                    <p className="text-sm text-gray-400">{tool.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-6">
           <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Clock size={20} className="text-primary" /> Atividade Recente
          </h2>
          <div className="glassmorphism rounded-xl p-4 space-y-4">
             {recentActivity.map((item, i) => (
               <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${item.status === 'success' ? 'bg-primary' : 'bg-red-500'}`} />
                  <div className="flex-1 min-w-0">
                     <p className="text-sm font-medium text-white truncate">{item.action}</p>
                     <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500 font-bold uppercase">{item.module}</span>
                        <span className="text-xs text-gray-600">{item.time}</span>
                     </div>
                  </div>
               </div>
             ))}
             <button className="w-full py-2 text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wide">
               Ver Log Completo
             </button>
          </div>

          {/* System Health */}
          <div className="glassmorphism rounded-xl p-6 border border-white/10 space-y-4">
             <h3 className="font-bold text-white text-sm uppercase tracking-wide">Status da API</h3>
             <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                   <span className="text-gray-400">Instagram Scraper</span>
                   <span className="text-primary flex items-center gap-1"><CheckCircle2 size={12}/> Online</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="text-gray-400">OpenAI Engine</span>
                   <span className="text-primary flex items-center gap-1"><CheckCircle2 size={12}/> Online</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="text-gray-400">Youtube API</span>
                   <span className="text-yellow-400 flex items-center gap-1"><AlertCircle size={12}/> Latency</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;