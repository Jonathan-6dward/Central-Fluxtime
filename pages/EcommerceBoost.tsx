import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { Search, Bell, TrendingUp, TrendingDown, Sparkles, ShieldCheck, Zap, ShoppingCart, Video, Search as SearchIcon } from 'lucide-react';

const data = [
  { name: 'Mon', sales: 4000, perf: 2400 },
  { name: 'Tue', sales: 3000, perf: 1398 },
  { name: 'Wed', sales: 2000, perf: 9800 },
  { name: 'Thu', sales: 2780, perf: 3908 },
  { name: 'Fri', sales: 1890, perf: 4800 },
  { name: 'Sat', sales: 2390, perf: 3800 },
  { name: 'Sun', sales: 3490, perf: 4300 },
];

const EcommerceBoost = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                <ShoppingCart size={18} />
             </div>
             <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">Sales Intelligence</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Ecommerce Boost</h1>
          <p className="text-gray-400 mt-2">Insights de vendas e monitoramento de concorrentes.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-4 py-2 bg-[#111815] border border-white/10 rounded-xl text-white text-sm font-bold flex items-center gap-2 hover:border-yellow-400 transition-colors">
              <SearchIcon size={16} className="text-yellow-400"/> Scan Competitors (OSINT)
           </button>
           <button className="px-4 py-2 bg-[#111815] border border-white/10 rounded-xl text-white text-sm font-bold flex items-center gap-2 hover:border-pink-400 transition-colors">
              <Video size={16} className="text-pink-400"/> Create Ads (Creator)
           </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glassmorphism p-6 rounded-xl space-y-2 border border-white/10">
          <p className="text-gray-400 font-bold text-sm uppercase">Total Sales</p>
          <p className="text-4xl font-black text-white">$124,530</p>
          <p className="text-green-400 text-sm font-bold flex items-center gap-1"><TrendingUp size={16}/> +5.2%</p>
        </div>
        <div className="glassmorphism p-6 rounded-xl space-y-2 border border-white/10">
          <p className="text-gray-400 font-bold text-sm uppercase">Conversion Rate</p>
          <p className="text-4xl font-black text-white">3.45%</p>
          <p className="text-red-400 text-sm font-bold flex items-center gap-1"><TrendingDown size={16}/> -0.8%</p>
        </div>
        <div className="glassmorphism p-6 rounded-xl space-y-2 border border-white/10">
          <p className="text-gray-400 font-bold text-sm uppercase">Avg. Order Value</p>
          <p className="text-4xl font-black text-white">$85.60</p>
          <p className="text-green-400 text-sm font-bold flex items-center gap-1"><TrendingUp size={16}/> +2.1%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Chart 1 */}
         <div className="glassmorphism p-6 rounded-xl flex flex-col h-80 border border-white/10 lg:col-span-2">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Zap className="text-yellow-400" size={18}/> Sales Performance</h3>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{backgroundColor: '#111815', border: '1px solid #333', borderRadius: '8px'}} />
                  <Area type="monotone" dataKey="sales" stroke="#fbbf24" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Radial Stat */}
         <div className="glassmorphism p-6 rounded-xl flex flex-col h-80 items-center justify-center relative border border-white/10">
            <h3 className="text-white font-bold absolute top-6 left-6 flex items-center gap-2"><ShieldCheck className="text-emerald-400" size={18}/> Health Score</h3>
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" className="stroke-white/5 fill-none stroke-[12]" />
                <circle cx="96" cy="96" r="80" className="stroke-emerald-400 fill-none stroke-[12]" strokeDasharray="502" strokeDashoffset="50" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white font-black text-4xl">92</span>
                <span className="text-emerald-400 text-sm font-bold uppercase">Excellent</span>
              </div>
            </div>
         </div>
      </div>

      {/* Action Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glassmorphism p-6 rounded-xl space-y-4 border border-white/10 hover:border-primary/50 transition-colors group">
          <div className="flex items-center gap-3">
             <div className="p-2 rounded-lg bg-primary/10 text-primary"><Sparkles size={20}/></div>
             <h3 className="text-white text-lg font-bold">AI Recommendations</h3>
          </div>
          <p className="text-sm text-gray-400">Engine powered by OSINT data to boost cross-sells.</p>
          <button className="w-full py-3 rounded-xl bg-white/5 text-white font-bold hover:bg-primary hover:text-black transition-all">Configure</button>
        </div>
        <div className="glassmorphism p-6 rounded-xl space-y-4 border border-white/10 hover:border-red-400/50 transition-colors group">
          <div className="flex items-center gap-3">
             <div className="p-2 rounded-lg bg-red-400/10 text-red-400"><ShieldCheck size={20}/></div>
             <h3 className="text-white text-lg font-bold">Security Audit</h3>
          </div>
          <p className="text-sm text-gray-400">Scan store for vulnerabilities and leaks.</p>
          <button className="w-full py-3 rounded-xl bg-white/5 text-white font-bold hover:bg-red-400 hover:text-black transition-all">Run Audit</button>
        </div>
        <div className="glassmorphism p-6 rounded-xl space-y-4 border border-white/10 hover:border-yellow-400/50 transition-colors group">
          <div className="flex items-center gap-3">
             <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400"><Zap size={20}/></div>
             <h3 className="text-white text-lg font-bold">Speed Optimization</h3>
          </div>
          <p className="text-sm text-gray-400">Image compression and code minification.</p>
          <button className="w-full py-3 rounded-xl bg-white/5 text-white font-bold hover:bg-yellow-400 hover:text-black transition-all">Optimize</button>
        </div>
      </div>
    </div>
  );
};

export default EcommerceBoost;