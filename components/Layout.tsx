import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  Newspaper, 
  Share2, 
  Search, 
  Video, 
  Bot, 
  ShoppingCart, 
  Settings, 
  ShieldAlert,
  Menu,
  X,
  Radar,
  Globe,
  ChevronDown,
  Crown,
  Clapperboard
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [currentLang, setCurrentLang] = useState('PT-BR');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // New Flux Ecosystem Naming Convention
  const navItems = [
    { path: '/dashboard', label: 'FluxBoard', icon: LayoutGrid },
    { path: '/sint', label: 'FluxTrend', icon: Radar },
    { path: '/news-analyzer', label: 'FluxPulse', icon: Newspaper },
    { path: '/flownews', label: 'FluxNewsFlow', icon: Share2 },
    { path: '/osint', label: 'FluxIntel', icon: Search },
    { path: '/creator-studio', label: 'FluxCreator', icon: Video },
    { path: '/reactor', label: 'FluxVideoSpark', icon: Clapperboard },
    { path: '/automations', label: 'FluxAuto', icon: Bot },
    { path: '/ecommerce', label: 'FluxProductPulse', icon: ShoppingCart },
    { path: '/admin', label: 'FluxControl', icon: ShieldAlert },
    { path: '/settings', label: 'FluxSettings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-background-dark overflow-hidden font-sans text-gray-200 selection:bg-flux-cyan selection:text-black">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0A0A0A] border-r border-white/5 
          transform transition-transform duration-300 ease-in-out flex flex-col
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex items-center gap-3 p-6 border-b border-white/5">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <div>
            <h1 className="text-white font-bold tracking-tight font-display">FLUXTIME</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Ecosystem</p>
          </div>
          <button 
            className="ml-auto lg:hidden text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-white/10 text-white font-medium shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={18} className={`transition-colors ${isActive(item.path) ? "text-flux-cyan" : "text-gray-500 group-hover:text-white"}`} />
              <span className="text-sm">{item.label}</span>
              {isActive(item.path) && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-flux-cyan shadow-[0_0_5px_#00E1FF]"></div>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 bg-[#0D0F15]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div 
                className="w-10 h-10 rounded-full bg-cover bg-center border border-white/10"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANzos7Bi-GNJl-8Kon_1q3ma06kUDS9kYJ4RKLUd4PFykEPIn4sHA1h5tO89iX91P3NnIByj67F6VfFk5E_YAdC6ot-pwxP-C_KjLkuEcxv6mWZj8Vsf_lbnSgdK672Kk95xU_LHk3Ai-Q9EUptMqvSKUcN8FaAXEKZMzMUUhvO_YuVy68T6raRIvAeoI108ydGn6lHQ7aIwGslrUgXp6nCkBytZ935SmBipLB6ZcMG5CMGegcb6Dmqs36-N9F8otG8uKaEbT68YE")' }}
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black"></div>
              </div>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate flex items-center gap-1">
                Olivia Rhye <Crown size={10} className="text-yellow-400 fill-yellow-400" />
              </p>
              <p className="text-xs text-gray-500 truncate">Agency Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#0A0A0A]">
        {/* Top Header (Global) */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-40">
           <div className="flex items-center gap-4 lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="text-white"><Menu size={24} /></button>
              <span className="font-bold text-white font-display">FLUXTIME</span>
           </div>

           <div className="hidden lg:block">
              {/* Breadcrumbs or Page Title could go here */}
           </div>

           <div className="flex items-center gap-4 ml-auto">
              {/* Premium Status */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                 <Crown size={14} className="text-yellow-400" />
                 <span className="text-xs text-gray-300 font-medium">Pro Plan</span>
                 <span className="text-xs text-gray-600">|</span>
                 <span className="text-xs text-flux-cyan font-bold">850 Créditos</span>
              </div>

              {/* Language Selector */}
              <div className="relative">
                 <button 
                   onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                   className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                 >
                    <Globe size={18} />
                    <span className="uppercase">{currentLang}</span>
                    <ChevronDown size={14} />
                 </button>

                 {isLangMenuOpen && (
                   <div className="absolute top-full right-0 mt-2 w-32 bg-[#111815] border border-white/10 rounded-lg shadow-xl py-1 z-50">
                      {['PT-BR', 'EN-US', 'ES'].map(lang => (
                        <button
                          key={lang}
                          onClick={() => { setCurrentLang(lang); setIsLangMenuOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-white/5 ${currentLang === lang ? 'text-flux-cyan' : 'text-gray-400'}`}
                        >
                           {lang}
                        </button>
                      ))}
                   </div>
                 )}
              </div>
           </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;