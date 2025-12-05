import React from 'react';
import { Search, Plus, Edit, Trash2, Shield, Users, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'W1', value: 4000 },
  { name: 'W2', value: 3000 },
  { name: 'W3', value: 5000 },
  { name: 'W4', value: 2780 },
  { name: 'W5', value: 1890 },
  { name: 'W6', value: 6390 },
  { name: 'W7', value: 3490 },
];

const AdminPanel = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-400">
                <Shield size={18} />
             </div>
             <span className="text-xs font-bold text-red-400 tracking-widest uppercase">System Administration</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Painel Admin</h1>
          <p className="text-gray-400 mt-2">Gestão global de usuários, receita e sistema.</p>
        </div>
        <div className="w-full md:w-80 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input type="text" placeholder="Pesquisa global..." className="w-full bg-[#111815] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-red-400 transition-colors" />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Receita Total', val: '$1.2M', change: '+5.4%', icon: DollarSign, color: 'text-green-400' },
          { label: 'MRR', val: '$98k', change: '+2.1%', icon: TrendingUp, color: 'text-blue-400' },
          { label: 'Usuários Ativos', val: '15.7k', change: '+128', icon: Users, color: 'text-purple-400' },
          { label: 'Instâncias IA', val: '2.1k', change: '+3.5%', icon: Activity, color: 'text-yellow-400' },
        ].map((stat, i) => (
          <div key={i} className="glassmorphism p-6 rounded-xl border border-white/10">
             <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                   <stat.icon size={20} />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase">Last 30d</span>
             </div>
            <p className="text-gray-400 font-medium text-sm">{stat.label}</p>
            <p className="text-3xl font-black text-white tracking-tight">{stat.val}</p>
            <p className="text-green-400 font-bold text-sm mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glassmorphism p-6 rounded-xl flex flex-col h-[350px] border border-white/10">
          <h3 className="text-lg font-bold text-white mb-6">Crescimento da Receita</h3>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip contentStyle={{backgroundColor: '#111815', border: '1px solid #333', borderRadius: '8px'}} />
                <Area type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glassmorphism p-6 rounded-xl h-[350px] flex flex-col border border-white/10">
           <h3 className="text-lg font-bold text-white mb-6">Estatísticas de Uso (Sessões)</h3>
           <div className="flex items-end justify-between flex-1 gap-4 px-4 pb-4">
              {[60, 40, 75, 55, 80, 45, 90].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-3 flex-1 h-full justify-end group">
                   <div className="w-full bg-white/5 rounded-t-lg group-hover:bg-red-400 transition-colors duration-500 relative" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                         {h}k
                      </div>
                   </div>
                   <span className="text-xs text-gray-500 font-bold">W{i + 1}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="glassmorphism rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
          <h2 className="text-xl font-bold text-white">Gerenciamento de Usuários</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-sm border border-white/10 transition-colors">
            <Plus size={16} /> Adicionar Usuário
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5">
              <tr>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Nome</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Email</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Função</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Developer', status: 'Ativo', statusColor: 'text-green-400 bg-green-500/10 border-green-500/20' },
                { name: 'Bob Williams', email: 'bob.w@example.com', role: 'Investor', status: 'Ativo', statusColor: 'text-green-400 bg-green-500/10 border-green-500/20' },
                { name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'User', status: 'Inativo', statusColor: 'text-red-400 bg-red-500/10 border-red-500/20' },
              ].map((user, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                     <div className="font-bold text-white">{user.name}</div>
                  </td>
                  <td className="p-4 text-gray-400 text-sm font-mono">{user.email}</td>
                  <td className="p-4 text-gray-300 text-sm">{user.role}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded border ${user.statusColor}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 flex justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"><Edit size={16}/></button>
                    <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-white/10 rounded-lg transition-colors"><Trash2 size={16}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;