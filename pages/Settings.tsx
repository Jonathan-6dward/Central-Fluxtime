import React from 'react';
import { Settings as SettingsIcon, User, Lock, Save, Camera } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
           <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-gray-500/20 flex items-center justify-center text-gray-400">
                <SettingsIcon size={18} />
             </div>
             <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">System Config</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Configurações</h1>
          <p className="text-gray-400 mt-2">Gerencie seu perfil e preferências do ecossistema.</p>
        </div>
      </div>

      {/* User Card */}
      <div className="glassmorphism p-8 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#111815]">
        <div className="flex items-center gap-6">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-cover bg-center border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANzos7Bi-GNJl-8Kon_1q3ma06kUDS9kYJ4RKLUd4PFykEPIn4sHA1h5tO89iX91P3NnIByj67F6VfFk5E_YAdC6ot-pwxP-C_KjLkuEcxv6mWZj8Vsf_lbnSgdK672Kk95xU_LHk3Ai-Q9EUptMqvSKUcN8FaAXEKZMzMUUhvO_YuVy68T6raRIvAeoI108ydGn6lHQ7aIwGslrUgXp6nCkBytZ935SmBipLB6ZcMG5CMGegcb6Dmqs36-N9F8otG8uKaEbT68YE")' }}></div>
            <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <Camera className="text-white" size={24} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Olivia Rhye</h3>
            <p className="text-gray-400">olivia@fluxtime.com</p>
            <div className="mt-2 flex gap-2">
               <span className="text-xs font-bold bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/30">Admin</span>
               <span className="text-xs font-bold bg-white/10 text-gray-300 px-2 py-0.5 rounded border border-white/10">Pro Plan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="glassmorphism p-8 rounded-xl space-y-8 border border-white/10 bg-[#111815]">
        <div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <User size={20} className="text-primary"/> Informações Básicas
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-xs font-bold text-gray-400 uppercase">Nome Completo</label>
               <input type="text" defaultValue="Olivia Rhye" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
             </div>
             <div className="space-y-2">
               <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
               <input type="email" defaultValue="olivia@fluxtime.com" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
             </div>
           </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <Lock size={20} className="text-primary"/> Segurança
           </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Senha Atual</label>
              <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Nova Senha</label>
              <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all flex items-center gap-2">
            <Save size={18} /> Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;