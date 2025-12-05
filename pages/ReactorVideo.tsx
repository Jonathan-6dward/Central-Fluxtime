import React, { useState } from 'react';
import { 
  Clapperboard, Play, Sparkles, Upload, Music, 
  Type, Layers, Download, Share2, Wand2, 
  ArrowRight, Mic, Video, LayoutTemplate
} from 'lucide-react';

const ReactorVideo = () => {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState('9:16');

  const handleGenerate = () => {
    setGenerating(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGenerating(false);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center text-pink-500">
                <Clapperboard size={18} />
             </div>
             <span className="text-xs font-bold text-pink-500 tracking-widest uppercase">FluxVideoSpark</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight font-display">Reactor Video</h1>
          <p className="text-gray-400 mt-2">Criação automática de Shorts, Reels e TikToks via IA.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold flex items-center gap-2 transition-colors">
              <Sparkles size={16} className="text-neon-blue"/> Import from FluxTrend
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-250px)] min-h-[600px]">
        
        {/* Left: Configuration */}
        <div className="lg:col-span-1 flex flex-col gap-6 h-full overflow-y-auto pr-2 custom-scrollbar">
           
           {/* Input Source */}
           <section className="glassmorphism p-6 rounded-2xl bg-[#111815] border border-white/10">
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 flex items-center gap-2">
                 <Type size={16}/> Entrada de Conteúdo
              </h3>
              <textarea 
                className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4 text-white text-sm placeholder:text-gray-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none resize-none"
                placeholder="Cole um roteiro, URL de notícia ou texto do FluxTrend..."
              ></textarea>
              <div className="flex gap-2 mt-3">
                 <button className="flex-1 py-2 bg-white/5 rounded-lg text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                    Gerar Roteiro IA
                 </button>
                 <button className="flex-1 py-2 bg-white/5 rounded-lg text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                    Usar Template
                 </button>
              </div>
           </section>

           {/* Settings */}
           <section className="glassmorphism p-6 rounded-2xl bg-[#111815] border border-white/10 space-y-6">
              
              {/* Format */}
              <div>
                 <h3 className="text-sm font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                    <LayoutTemplate size={16}/> Formato
                 </h3>
                 <div className="grid grid-cols-3 gap-2">
                    {['9:16', '16:9', '1:1'].map(fmt => (
                       <button 
                          key={fmt}
                          onClick={() => setSelectedFormat(fmt)}
                          className={`py-2 rounded-lg text-xs font-bold transition-all ${
                             selectedFormat === fmt 
                             ? 'bg-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)]' 
                             : 'bg-white/5 text-gray-400 hover:bg-white/10'
                          }`}
                       >
                          {fmt}
                       </button>
                    ))}
                 </div>
              </div>

              {/* Voice */}
              <div>
                 <h3 className="text-sm font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                    <Mic size={16}/> Narração (ElevenLabs)
                 </h3>
                 <select className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-pink-500">
                    <option>Adam (American Deep)</option>
                    <option>Rachel (British News)</option>
                    <option>Paulo (Portuguese BR)</option>
                 </select>
              </div>

              {/* Visual Style */}
              <div>
                 <h3 className="text-sm font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                    <Video size={16}/> Estilo Visual
                 </h3>
                 <div className="grid grid-cols-2 gap-2">
                    <button className="p-3 rounded-xl border border-pink-500/50 bg-pink-500/10 text-pink-400 text-xs font-bold text-left">
                       Cyberpunk
                    </button>
                    <button className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white text-xs font-bold text-left">
                       Minimalist
                    </button>
                    <button className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white text-xs font-bold text-left">
                       Documentary
                    </button>
                    <button className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white text-xs font-bold text-left">
                       Stock Footage
                    </button>
                 </div>
              </div>

           </section>

           {/* Generate Button */}
           <button 
              onClick={handleGenerate}
              disabled={generating}
              className="w-full py-4 bg-pink-500 text-white font-black uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
           >
              {generating ? (
                 <>Processando {progress}%...</>
              ) : (
                 <><Wand2 size={20}/> Gerar Vídeo</>
              )}
           </button>

        </div>

        {/* Center/Right: Preview & Timeline */}
        <div className="lg:col-span-2 flex flex-col gap-6 h-full">
           
           {/* Preview Area */}
           <div className="flex-1 glassmorphism rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center relative overflow-hidden group">
              
              {generating ? (
                 <div className="text-center">
                    <div className="w-16 h-16 border-4 border-pink-500/20 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-pink-500 font-bold animate-pulse">Renderizando Cenas...</p>
                 </div>
              ) : (
                 <>
                    {/* Placeholder content */}
                    <div className="text-center opacity-30 group-hover:opacity-50 transition-opacity">
                       <Play size={64} className="text-white mx-auto mb-4 fill-white" />
                       <p className="text-white font-display text-xl">Preview</p>
                    </div>
                    
                    {/* Fake UI Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-50">
                       <div className="flex flex-col gap-2">
                          <div className="w-32 h-4 bg-white/20 rounded"></div>
                          <div className="w-48 h-4 bg-white/20 rounded"></div>
                       </div>
                       <div className="flex flex-col gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/20"></div>
                          <div className="w-10 h-10 rounded-full bg-white/20"></div>
                       </div>
                    </div>
                 </>
              )}

           </div>

           {/* Timeline & Actions */}
           <div className="h-48 glassmorphism p-4 rounded-2xl bg-[#111815] border border-white/10 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-sm font-bold text-gray-400 uppercase flex items-center gap-2">
                    <Layers size={14}/> Timeline
                 </h3>
                 <div className="flex gap-2">
                    <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Music size={14} className="text-gray-400"/></button>
                    <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Type size={14} className="text-gray-400"/></button>
                 </div>
              </div>
              
              {/* Timeline Visual */}
              <div className="flex-1 bg-black/40 rounded-lg border border-white/5 relative overflow-hidden flex items-center px-2 gap-1">
                 {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="h-[80%] flex-1 bg-pink-500/20 border border-pink-500/30 rounded cursor-pointer hover:bg-pink-500/30 transition-colors relative group">
                       <span className="absolute bottom-1 left-1 text-[10px] text-pink-300 font-mono opacity-0 group-hover:opacity-100">Clip {i}</span>
                    </div>
                 ))}
                 <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-white shadow-[0_0_10px_white] z-10 cursor-ew-resize"></div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-4 flex justify-end gap-3">
                 <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-colors">
                    <Download size={16}/> Download
                 </button>
                 <button className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-xl text-sm font-bold text-green-400 flex items-center gap-2 transition-colors">
                    <Share2 size={16}/> Send to Automations
                 </button>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};

export default ReactorVideo;