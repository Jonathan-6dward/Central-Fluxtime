import React, { useState, useEffect } from 'react';
import { 
  Search, CheckCircle2, Settings, Download, 
  FileJson, FileSpreadsheet, FileText, Copy, 
  Instagram, Facebook, Youtube, Video, 
  ChevronDown, ChevronUp, Calendar, Clock, 
  Image, Film, PlayCircle, Layers, Shield,
  Hash, MapPin, MessageCircle, Heart, User,
  Terminal, Grid, List as ListIcon, Eye,
  AlertTriangle, Check, Archive, Target
} from 'lucide-react';

type Platform = 'instagram' | 'facebook' | 'tiktok' | 'youtube';
type ResultTab = 'json' | 'list' | 'media';

const OsintTools = () => {
  const [activeView, setActiveView] = useState<'scraper' | 'competitors'>('scraper');
  const [target, setTarget] = useState('');
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [contentType, setContentType] = useState<string>('Desconhecido');
  const [isCollecting, setIsCollecting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [resultTab, setResultTab] = useState<ResultTab>('json');
  const [hasResults, setHasResults] = useState(false);
  const [videoQuality, setVideoQuality] = useState('best');

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
    <div className="max-w-7xl mx-auto space-y-8 pb-20 font-sans">
      {/* 1. Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Shield size={18} />
             </div>
             <span className="text-xs font-bold text-purple-500 tracking-widest uppercase">FluxIntel</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Intelligence & OSINT</h1>
          <p className="text-gray-400 mt-1">Universal Scraper & Radar de Concorrentes.</p>
        </div>
        
        {/* View Switcher */}
        <div className="bg-white/5 p-1 rounded-lg flex gap-1 border border-white/10">
           <button 
             onClick={() => setActiveView('scraper')}
             className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeView === 'scraper' ? 'bg-purple-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
           >
              Universal Scraper
           </button>
           <button 
             onClick={() => setActiveView('competitors')}
             className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeView === 'competitors' ? 'bg-purple-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
           >
              Radar de Concorrentes
           </button>
        </div>
      </div>

      {activeView === 'competitors' ? (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            <div className="p-8 border border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-center opacity-50 min-h-[400px]">
               <Target size={48} className="text-gray-500 mb-4" />
               <h3 className="text-xl font-bold text-white">Radar de Concorrentes</h3>
               <p className="text-gray-400">Adicione perfis para monitorar crescimento, estratégias e produtos.</p>
               <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-xl font-bold">Adicionar Concorrente</button>
            </div>
            <div className="space-y-4">
               {/* Mock Competitors */}
               {[1, 2, 3].map(i => (
                  <div key={i} className="glassmorphism p-6 rounded-xl border border-white/10 bg-[#111] flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                        <div>
                           <p className="font-bold text-white">Competitor {i}</p>
                           <p className="text-xs text-gray-500">@competitor_official</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="text-green-400 font-bold text-sm">+12% Growth</p>
                        <p className="text-xs text-gray-500">Last 7d</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      ) : (
         <>
            {/* 2. Target Selection */}
            <section className="glassmorphism p-8 rounded-2xl border border-white/10 bg-[#111]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Search className="text-purple-500" size={20}/> Selecione o Alvo
              </h2>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    placeholder="https://instagram.com/usuario | @usuario | link do vídeo"
                    className="w-full h-14 bg-black/40 border border-white/20 rounded-xl pl-5 pr-4 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-lg"
                  />
                  {platform && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                      <PlatformIcon p={platform} size={18} />
                      <div className="h-4 w-[1px] bg-white/20"></div>
                      <span className="text-xs font-bold text-white uppercase">{contentType}</span>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-purple-500 bg-purple-500/10 px-1.5 py-0.5 rounded">
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
                  <User className="text-purple-500" size={20} />
                  <h3 className="font-bold text-white">Metadados do Perfil</h3>
                </div>
                <div className="space-y-3 flex-1">
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Username / ID
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Biografia
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Foto de Perfil (HD)
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Status (Priv/Verif)
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Contadores (Seg/Post)
                  </label>
                </div>
              </section>

              {/* B. Feed Content */}
              <section className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                  <Grid className="text-purple-500" size={20} />
                  <h3 className="font-bold text-white">Conteúdo do Feed</h3>
                </div>
                <div className="space-y-3 flex-1">
                   <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Legendas (Captions)
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Hashtags & Tags
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Geolocalização
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Métricas (Likes/Views)
                  </label>
                  <div className="pt-2 border-t border-white/5">
                    <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group mb-2">
                      <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                      Coletar Comentários
                    </label>
                    <div className="flex items-center gap-2">
                       <span className="text-xs text-gray-500">Limite:</span>
                       <input type="number" defaultValue={50} className="w-20 bg-black/40 border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-purple-500 outline-none" />
                    </div>
                  </div>
                </div>
              </section>

              {/* C. Stories */}
              <section className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                  <Layers className="text-purple-500" size={20} />
                  <h3 className="font-bold text-white">Stories & Highlights</h3>
                </div>
                <div className="space-y-3 flex-1">
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    URLs das Mídias
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
                    Timestamps
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-600 bg-black/40 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" />
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

              {/* D. Downloads (Enhanced) */}
              <section className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                  <Download className="text-purple-500" size={20} />
                  <h3 className="font-bold text-white">Downloads</h3>
                </div>
                <div className="grid grid-cols-1 gap-3 flex-1 content-start">
                   
                   {/* General Media Checks */}
                   <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-sm text-gray-300 flex items-center gap-2"><Image size={16}/> Fotos</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
                      </label>
                   </div>
                   
                   <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-sm text-gray-300 flex items-center gap-2"><Film size={16}/> Vídeos</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
                      </label>
                   </div>

                   <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-sm text-gray-300 flex items-center gap-2"><PlayCircle size={16}/> Stories</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
                      </label>
                   </div>

                   {/* Video Quality (Youtube/TikTok specific) */}
                   {(platform === 'youtube' || platform === 'tiktok') && (
                      <div className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-2">
                         <span className="text-xs font-bold text-gray-400 uppercase">Qualidade de Vídeo</span>
                         <select 
                            value={videoQuality}
                            onChange={(e) => setVideoQuality(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-2 py-1 text-sm text-white focus:border-purple-500 outline-none"
                         >
                            <option value="best">Melhor Disponível (Max)</option>
                            <option value="8k">8K Ultra HD</option>
                            <option value="4k">4K UHD</option>
                            <option value="1080p">1080p Full HD</option>
                            <option value="720p">720p HD</option>
                            <option value="480p">480p</option>
                            <option value="audio">Apenas Áudio (MP3)</option>
                         </select>
                      </div>
                   )}

                   {/* ZIP Toggle */}
                   <div className="mt-2 pt-2 border-t border-white/10">
                      <div className="flex items-center justify-between p-2">
                         <span className="text-sm text-purple-500 font-bold flex items-center gap-2"><Archive size={16}/> Baixar tudo em ZIP</span>
                         <label className="relative inline-flex items-center cursor-pointer">
                           <input type="checkbox" defaultChecked className="sr-only peer" />
                           <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
                         </label>
                      </div>
                   </div>
                </div>
              </section>

            </div>

            {/* 6. Action Button */}
            <div className="pt-4">
              <button 
                onClick={handleCollect}
                disabled={!target || isCollecting}
                className="w-full h-20 bg-purple-500 text-white text-lg font-black uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center gap-1 relative overflow-hidden group"
              >
                {isCollecting ? (
                  <div className="relative z-10 flex flex-col items-center gap-2 w-full">
                     <div className="flex items-center gap-3">
                       <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                       <span>Coletando Dados... {progress}%</span>
                     </div>
                     {/* Progress Bar Background */}
                     <div className="absolute bottom-0 left-0 h-1 bg-black/20 w-full">
                        <div className="h-full bg-white transition-all duration-300" style={{ width: `${progress}%` }}></div>
                     </div>
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
              
              {/* Progress Bar Click Action (Post-Collection) */}
              {hasResults && !isCollecting && (
                 <div 
                   onClick={() => document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' })}
                   className="mt-2 h-2 w-full bg-purple-500/20 rounded-full cursor-pointer hover:h-4 transition-all flex items-center justify-center group"
                 >
                    <div className="h-full w-full bg-purple-500 rounded-full"></div>
                    <span className="absolute text-[10px] font-bold text-white opacity-0 group-hover:opacity-100">Coleta Concluída - Ver Resultados</span>
                 </div>
              )}
            </div>

            {/* 7. Results Area */}
            {hasResults && (
              <section id="results-section" className="glassmorphism rounded-xl overflow-hidden border border-white/10 animate-fade-in-up scroll-mt-20">
                <div className="bg-black/40 border-b border-white/10 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <h3 className="font-bold text-white text-lg flex items-center gap-2">
                    <CheckCircle2 className="text-purple-500" /> Resultados da Coleta
                  </h3>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white font-medium flex items-center gap-2 transition-colors">
                       <FileJson size={16} /> JSON
                    </button>
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white font-medium flex items-center gap-2 transition-colors">
                       <FileSpreadsheet size={16} /> CSV
                    </button>
                    <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-sm text-purple-500 font-bold flex items-center gap-2 transition-colors">
                       <Download size={16} /> ZIP
                    </button>
                  </div>
                </div>

                <div className="border-b border-white/10">
                  <div className="flex">
                    <button 
                      onClick={() => setResultTab('json')}
                      className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${resultTab === 'json' ? 'border-purple-500 text-purple-500 bg-purple-500/5' : 'border-transparent text-gray-400 hover:text-white'}`}
                    >
                      <Terminal size={16} /> Dados Brutos (JSON)
                    </button>
                    <button 
                      onClick={() => setResultTab('list')}
                      className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${resultTab === 'list' ? 'border-purple-500 text-purple-500 bg-purple-500/5' : 'border-transparent text-gray-400 hover:text-white'}`}
                    >
                      <ListIcon size={16} /> Lista de Conteúdos
                    </button>
                    <button 
                      onClick={() => setResultTab('media')}
                      className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${resultTab === 'media' ? 'border-purple-500 text-purple-500 bg-purple-500/5' : 'border-transparent text-gray-400 hover:text-white'}`}
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
                                <button className="text-purple-500 hover:underline flex items-center gap-1 text-xs font-bold">
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
                                <button className="p-2 bg-black/50 rounded-full text-white hover:bg-purple-500 hover:text-white transition-colors">
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
         </>
      )}

    </div>
  );
};

export default OsintTools;