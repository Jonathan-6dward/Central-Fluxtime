import React, { useState, useEffect } from 'react';
import { 
  Search, CheckCircle2, Settings, Download, 
  FileJson, FileSpreadsheet, FileText, Copy, 
  Instagram, Facebook, Youtube, Video, 
  ChevronDown, ChevronUp, Calendar, Clock, 
  Image, Film, PlayCircle, Layers, Shield,
  Hash, MapPin, MessageCircle, Heart, User,
  Terminal, Grid, List as ListIcon, Eye,
  AlertTriangle, Check
} from 'lucide-react';

type Platform = 'instagram' | 'facebook' | 'tiktok' | 'youtube';
type ResultTab = 'json' | 'list' | 'media';

const OsintTools = () => {
  const [target, setTarget] = useState('');
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [contentType, setContentType] = useState<string>('Desconhecido');
  const [isCollecting, setIsCollecting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [resultTab, setResultTab] = useState<ResultTab>('json');
  const [hasResults, setHasResults] = useState(false);

  // Auto-detect platform and content type
  useEffect(() => {
    if (!target) {
      setPlatform(null);
      setContentType('Desconhecido');
      return;
    }
    
    if (target.includes('instagram.com')) {
      setPlatform('instagram');
      setContentType(target.includes('/p/') || target.includes('/reel/') ? 'Post/Reel' : 'Perfil');
    } else if (target.includes('facebook.com')) {
      setPlatform('facebook');
      setContentType('Perfil/Página');
    } else if (target.includes('tiktok.com')) {
      setPlatform('tiktok');
      setContentType(target.includes('/video/') ? 'Vídeo' : 'Perfil');
    } else if (target.includes('youtube.com') || target.includes('youtu.be')) {
      setPlatform('youtube');
      setContentType(target.includes('watch') ? 'Vídeo' : 'Canal');
    }
  }, [target]);

  const handleCollect = () => {
    if (!target) return;
    setIsCollecting(true);
    setHasResults(false);
    setProgress(0);
    
    // Simulation of backend process
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCollecting(false);
          setHasResults(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const PlatformIcon = ({ p, size = 24 }: { p: Platform | null, size?: number }) => {
    switch (p) {
      case 'instagram': return <Instagram size={size} className="text-pink-500" />;
      case 'facebook': return <Facebook size={size} className="text-blue-500" />;
      case 'youtube': return <Youtube size={size} className="text-red-500" />;
      case 'tiktok': return <Video size={size} className="text-black dark:text-white" />;
      default: return <Search size={size} className="text-gray-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      {/* 1. Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
                <Shield size={18} />
             </div>
             <span className="text-xs font-bold text-primary tracking-widest uppercase">Universal Scraper</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">OSINT Tools</h1>
          <p className="text-gray-400 mt-1">Coleta inteligente para Instagram, Facebook, TikTok e YouTube.</p>
        </div>
      </div>

      {/* 2. Target Selection */}
      <section className="glassmorphism p-8 rounded-2xl border border-white/10 bg-[#111815]">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Search className="text-primary" size={20}/> Selecione o Alvo
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input 
              type="text" 
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="https://instagram.com/usuario | @usuario | link do vídeo"
              className="w-full h-14 bg-black/40 border border-white/20 rounded-xl pl-5 pr-4 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-lg"
            />
            {platform && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <PlatformIcon p={platform} size={18} />
                <div className="h-4 w-[1px] bg-white/20"></div>
                <span className="text-xs font-bold text-white uppercase">{contentType}</span>
                <div className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                  <CheckCircle2 size={10} /> DETECTADO
                </div>
              </div>
            )}
          </div>
          <button 
            className="h-14 px-8 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap"
            onClick={() => {}}
          >
            Detectar Plataforma
          </button>
        </div>
      </section>

      {/* 3. Collection Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* A. Profile Metadata */}
        <section className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
            <User className="text-primary" size={20} />
            <h3 className="font-bold text-white">Metadados do Perfil</h3>
          </div>
          <div className="space-y-3 flex-1">
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Username / ID
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Biografia
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Foto de Perfil (HD)
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Status (Priv/Verif)
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Contadores (Seg/Post)
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Última Atividade
            </label>
          </div>
        </section>

        {/* B. Feed Content */}
        <section className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
            <Grid className="text-primary" size={20} />
            <h3 className="font-bold text-white">Conteúdo do Feed</h3>
          </div>
          <div className="space-y-3 flex-1">
             <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Legendas (Captions)
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Hashtags & Tags
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Geolocalização
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Métricas (Likes/Views)
            </label>
            <div className="pt-2 border-t border-white/5">
              <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group mb-2">
                <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
                Coletar Comentários
              </label>
              <div className="flex items-center gap-2">
                 <span className="text-xs text-gray-500">Limite:</span>
                 <input type="number" defaultValue={50} className="w-20 bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-primary outline-none" />
              </div>
            </div>
          </div>
        </section>

        {/* C. Stories */}
        <section className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
            <Layers className="text-primary" size={20} />
            <h3 className="font-bold text-white">Stories & Highlights</h3>
          </div>
          <div className="space-y-3 flex-1">
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              URLs das Mídias
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Timestamps
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Contagem Visualizações
            </label>
            <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
              <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0" />
              Incluir Destaques
            </label>
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mt-auto">
               <p className="text-[10px] text-yellow-200 flex items-start gap-1 leading-tight">
                 <AlertTriangle size={10} className="mt-0.5 shrink-0" /> 
                 Apenas stories públicos disponíveis nas últimas 24h.
               </p>
            </div>
          </div>
        </section>

        {/* D. Downloads */}
        <section className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
            <Download className="text-primary" size={20} />
            <h3 className="font-bold text-white">Downloads</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 flex-1 content-start">
             <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                <span className="text-sm text-gray-300 flex items-center gap-2"><Image size={16}/> Fotos</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
             </div>
             <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                <span className="text-sm text-gray-300 flex items-center gap-2"><Film size={16}/> Vídeos/Reels</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
             </div>
             <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                <span className="text-sm text-gray-300 flex items-center gap-2"><PlayCircle size={16}/> Stories</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
             </div>
             <button className="mt-2 w-full py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors">
               ZIP (Mídias + Meta)
             </button>
          </div>
        </section>

      </div>

      {/* 4. Output Format */}
      <section className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20">
         <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide opacity-80">Formato de Saída</h3>
         <div className="flex flex-wrap gap-4">
            {['JSON', 'CSV', 'Texto Simples', 'Visualizar Apenas'].map((fmt, idx) => (
              <label key={fmt} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors border border-white/5">
                 <input type="radio" name="format" defaultChecked={idx === 0} className="text-primary bg-black/40 border-gray-600 focus:ring-primary" />
                 <span className="text-sm font-medium text-white">{fmt}</span>
              </label>
            ))}
         </div>
      </section>

      {/* 5. Advanced Settings (Collapsible) */}
      <div className="border border-white/10 rounded-xl overflow-hidden">
        <button 
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors text-left"
        >
          <span className="font-bold text-white flex items-center gap-2">
            <Settings className="text-primary" size={18} /> Ajustes Avançados
          </span>
          {showAdvanced ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
        </button>
        
        {showAdvanced && (
          <div className="p-6 bg-black/20 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="space-y-2">
               <label className="text-xs font-bold text-gray-400 uppercase">Limite de Posts</label>
               <input type="number" placeholder="Ex: 100" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary outline-none" />
             </div>
             <div className="space-y-2">
               <label className="text-xs font-bold text-gray-400 uppercase">Intervalo de Datas</label>
               <div className="flex gap-2">
                 <div className="relative flex-1">
                   <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                   <input type="text" placeholder="Início" className="w-full bg-black/40 border border-white/10 rounded-lg pl-8 pr-2 py-2 text-white text-sm focus:border-primary outline-none" />
                 </div>
                 <div className="relative flex-1">
                   <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                   <input type="text" placeholder="Fim" className="w-full bg-black/40 border border-white/10 rounded-lg pl-8 pr-2 py-2 text-white text-sm focus:border-primary outline-none" />
                 </div>
               </div>
             </div>
             <div className="space-y-2">
               <label className="text-xs font-bold text-gray-400 uppercase">Modo de Coleta</label>
               <div className="flex gap-2 p-1 bg-black/40 rounded-lg border border-white/10">
                 <button className="flex-1 py-1 bg-white/10 rounded text-xs font-bold text-white">Rápido</button>
                 <button className="flex-1 py-1 text-xs font-bold text-gray-500 hover:text-white">Completo</button>
               </div>
             </div>
             <div className="space-y-2">
               <label className="text-xs font-bold text-gray-400 uppercase">Agendamento</label>
               <div className="relative">
                 <Clock className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                 <input type="time" className="w-full bg-black/40 border border-white/10 rounded-lg pl-8 pr-2 py-2 text-white text-sm focus:border-primary outline-none" />
               </div>
             </div>
          </div>
        )}
      </div>

      {/* 6. Action Button */}
      <div className="pt-4">
        <button 
          onClick={handleCollect}
          disabled={!target || isCollecting}
          className="w-full h-16 bg-primary text-black text-lg font-black uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center gap-1"
        >
          {isCollecting ? (
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
              <span>Coletando Dados... {progress}%</span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Download size={24} strokeWidth={3} /> Iniciar Coleta
              </div>
              <span className="text-[10px] font-bold opacity-70 normal-case tracking-normal">O processo pode levar alguns minutos dependendo da quantidade de dados.</span>
            </>
          )}
        </button>
      </div>

      {/* 7. Results Area */}
      {hasResults && (
        <section className="glassmorphism rounded-xl overflow-hidden border border-white/10 animate-fade-in-up">
          <div className="bg-black/40 border-b border-white/10 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="font-bold text-white text-lg flex items-center gap-2">
              <CheckCircle2 className="text-primary" /> Resultados da Coleta
            </h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white font-medium flex items-center gap-2 transition-colors">
                 <FileJson size={16} /> JSON
              </button>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white font-medium flex items-center gap-2 transition-colors">
                 <FileSpreadsheet size={16} /> CSV
              </button>
              <button className="px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-sm text-primary font-bold flex items-center gap-2 transition-colors">
                 <Download size={16} /> ZIP
              </button>
            </div>
          </div>

          <div className="border-b border-white/10">
            <div className="flex">
              <button 
                onClick={() => setResultTab('json')}
                className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${resultTab === 'json' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                <Terminal size={16} /> Dados Brutos (JSON)
              </button>
              <button 
                onClick={() => setResultTab('list')}
                className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${resultTab === 'list' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                <ListIcon size={16} /> Lista de Conteúdos
              </button>
              <button 
                onClick={() => setResultTab('media')}
                className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${resultTab === 'media' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                <Image size={16} /> Pré-visualização Mídias
              </button>
            </div>
          </div>

          <div className="p-6 bg-[#0c1210]">
             {resultTab === 'json' && (
               <pre className="text-xs font-mono text-green-400 bg-black p-4 rounded-lg overflow-x-auto border border-white/10">
{`{
  "target": "${target}",
  "platform": "${platform}",
  "scraped_at": "${new Date().toISOString()}",
  "profile": {
    "username": "tech_innovator",
    "id": "84729102",
    "followers": 15420,
    "following": 420,
    "is_verified": true,
    "biography": "Exploring the future of AI & Automation 🚀 | Founder @FluxTime"
  },
  "metrics": {
    "total_posts": 1250,
    "engagement_rate": "4.2%",
    "avg_likes": 3500
  },
  "latest_posts": [
    {
      "id": "Cx892_LpK",
      "timestamp": 1716558600,
      "likes": 4200,
      "comments": 128,
      "caption": "The new era of OSINT tools is here. #tech #ai"
    }
  ]
}`}
               </pre>
             )}

             {resultTab === 'list' && (
               <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-700 rounded overflow-hidden">
                             <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://source.unsplash.com/random/100x100?tech&sig=${i})` }}></div>
                          </div>
                          <div>
                             <p className="text-sm font-bold text-white">Post ID: CX-{8293 + i}</p>
                             <p className="text-xs text-gray-500">24 Mai 2024 • 14:30</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-6 text-sm text-gray-400">
                          <span className="flex items-center gap-1"><Heart size={14} /> {1200 + i * 50}</span>
                          <span className="flex items-center gap-1"><MessageCircle size={14} /> {45 + i}</span>
                          <button className="text-primary hover:underline flex items-center gap-1 text-xs font-bold">
                             <Eye size={12} /> Ver
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
             )}

             {resultTab === 'media' && (
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <div key={i} className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group">
                       <img src={`https://source.unsplash.com/random/300x300?cyberpunk&sig=${i}`} alt="" className="w-full h-full object-cover group-hover:opacity-75 transition-opacity" />
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-black/50 rounded-full text-white hover:bg-primary hover:text-black transition-colors">
                             <Download size={16} />
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
             )}
          </div>
        </section>
      )}

    </div>
  );
};

export default OsintTools;
