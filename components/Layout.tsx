import React from 'react';
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
  X
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
    { path: '/news-analyzer', label: 'News Analyzer Pro', icon: Newspaper },
    { path: '/flownews', label: 'FlowNews AI', icon: Share2 },
    { path: '/osint', label: 'OSINT Tools', icon: Search },
    { path: '/creator-studio', label: 'Creator Studio', icon: Video },
    { path: '/automations', label: 'Automations IA', icon: Bot },
    { path: '/ecommerce', label: 'Ecommerce Boost', icon: ShoppingCart },
    { path: '/admin', label: 'Admin Panel', icon: ShieldAlert },
    { path: '/settings', label: 'Configurações', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-background-dark overflow-hidden font-sans text-gray-200">
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
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#101815]/90 backdrop-blur-xl border-r border-white/10 
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 p-6 border-b border-white/10">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold">
              F
            </div>
            <div>
              <h1 className="text-white font-bold tracking-tight">FLUXTIME</h1>
              <p className="text-xs text-gray-400">Digital Ecosystem</p>
            </div>
            <button 
              className="ml-auto lg:hidden text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary/20 text-primary font-medium'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon size={20} className={isActive(item.path) ? "stroke-[2.5px]" : "stroke-[2px]"} />
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full bg-cover bg-center border border-white/20"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANzos7Bi-GNJl-8Kon_1q3ma06kUDS9kYJ4RKLUd4PFykEPIn4sHA1h5tO89iX91P3NnIByj67F6VfFk5E_YAdC6ot-pwxP-C_KjLkuEcxv6mWZj8Vsf_lbnSgdK672Kk95xU_LHk3Ai-Q9EUptMqvSKUcN8FaAXEKZMzMUUhvO_YuVy68T6raRIvAeoI108ydGn6lHQ7aIwGslrUgXp6nCkBytZ935SmBipLB6ZcMG5CMGegcb6Dmqs36-N9F8otG8uKaEbT68YE")' }}
              />
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-white truncate">Olivia Rhye</p>
                <p className="text-xs text-gray-500 truncate">olivia@fluxtime.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-dark bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1f2e28] via-background-dark to-background-dark">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 bg-background-dark">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white"
          >
            <Menu size={24} />
          </button>
          <span className="font-bold text-white">FLUXTIME</span>
          <div className="w-6" /> {/* Spacer */}
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;