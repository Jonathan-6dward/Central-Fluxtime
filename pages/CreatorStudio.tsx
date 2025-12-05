import React, { useState } from 'react';
import { 
  Bold, Italic, List, Link as LinkIcon, Sparkles, Send, 
  Clapperboard, Captions, Heart, MessageCircle, Share, 
  Database, FileText, Hash, BarChart2, ChevronDown, 
  ChevronUp, Wand2, Instagram, Sheet, Monitor, 
  Smartphone, Search, LayoutTemplate, Image, Brush, Video
} from 'lucide-react';

const mockOsintData = [
  { id: 1, source: 'Instagram', user: '@tech_guru', date: '2 hrs ago', type: 'Post', 
    stats: { likes: '12.5k', comments: 342 }, 
    caption: "The future of AI is here! 🚀 #tech #ai #future", 
    hashtags: ['#tech', '#ai', '#future', '#innovation']
  },
  { id: 2, source: 'TikTok', user: '@viral_trends', date: '5 hrs ago', type: 'Video',
    stats: { views: '1.2M', likes: '89k' },
    caption: "This hack changed my life 🤯 #lifehacks #diy",
    hashtags: ['#lifehacks', '#diy', '#viral']
  }
];

const CreatorStudio = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'video'>('text');
  const [selectedSource, setSelectedSource] = useState<number | null>(null);
  const [content, setContent] = useState('');
  const [showSourcePanel, setShowSourcePanel] = useState(true);
  const [previewMode, setPreviewMode] = useState<'post' | 'story'>('post');

  const insertText = (text: string) => {
    setContent(prev => prev + (prev ? '\n\n' : '') + text);
  };

  const activeData = mockOsintData.find(d => d.id === selectedSource);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-10 h-[calc(100vh-140px)] flex flex-col font-sans">
      {/* Header */}
      <div className="flex justify-between items-center shrink-0">
        <div>
           <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-neon-purple tracking-widest uppercase">FluxCreator Studio</span>
           </div>
           <h1 className="text-4xl font-black text-white font-display">Creator Studio</h1>
        </div>
        <button className="px-6 py-2 bg-neon-purple text-white font-bold rounded-xl hover:shadow-neon-purple transition-all">
          Publish Content
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        {/* Left Column: Editor & Sources */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          
          {/* Tabs */}
          <div className="flex gap-4 border-b border-white/10 shrink-0">
            <button 
              onClick={() => setActiveTab('text')}
              className={`pb-3 px-4 font-bold flex items-center gap-2 transition-colors border-b-2 ${activeTab === 'text' ? 'border-neon-purple text-neon-purple' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
               <FileText size={18} /> Editor de Texto
            </button>
            <button 
              onClick={() => setActiveTab('video')}
              className={`pb-3 px-4 font-bold flex items-center gap-2 transition-colors border-b-2 ${activeTab === 'video' ? 'border-neon-purple text-neon-purple' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
               <LayoutTemplate size={18} /> Templates
            </button>
          </div>

          {/* Data Source Panel */}
          <div className="rounded-xl bg-[#111] border border-white/10 shrink-0">
             <div 
               className="p-3 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors rounded-t-xl"
               onClick={() => setShowSourcePanel(!showSourcePanel)}
             >
                <div className="flex items-center gap-3">
                   <Database className="text-neon-blue" size={18} />
                   <span className="font-bold text-sm text-white">Importar do FluxTrend / FluxIntel</span>
                </div>
                {showSourcePanel ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
             </div>
             
             {showSourcePanel && (
               <div className="p-3 border-t border-white/10 bg-black/20">
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                     {mockOsintData.map(data => (
                       <button 
                         key={data.id}
                         onClick={() => setSelectedSource(data.id)}
                         className={`flex-shrink-0 p-3 rounded-lg border text-left w-64 transition-all ${selectedSource === data.id ? 'bg-neon-blue/10 border-neon-blue' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                       >
                          <div className="flex justify-between items-start mb-1">
                             <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${data.source === 'Instagram' ? 'bg-pink-500/20 text-pink-400' : 'bg-black text-white'}`}>{data.source}</span>
                             <span className="text-[10px] text-gray-500">{data.date}</span>
                          </div>
                          <p className="text-xs text-gray-300 line-clamp-2 mt-1">{data.caption}</p>
                       </button>
                     ))}
                  </div>
                  {activeData && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                       <button onClick={() => insertText(activeData.caption)} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-bold text-gray-300 hover:text-white border border-white/5 flex gap-2 items-center hover:bg-white/10 transition-colors">
                          <FileText size={12} className="text-neon-blue"/> Inserir Legenda
                       </button>
                       <button onClick={() => insertText(activeData.hashtags.join(' '))} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-bold text-gray-300 hover:text-white border border-white/5 flex gap-2 items-center hover:bg-white/10 transition-colors">
                          <Hash size={12} className="text-neon-blue"/> Inserir Hashtags
                       </button>
                       <button onClick={() => insertText(`Stats: ${activeData.stats.likes || activeData.stats.views}`)} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-bold text-gray-300 hover:text-white border border-white/5 flex gap-2 items-center hover:bg-white/10 transition-colors">
                          <BarChart2 size={12} className="text-neon-blue"/> Inserir Stats
                       </button>
                    </div>
                  )}
               </div>
             )}
          </div>

          {/* Main Editor */}
          <div className="flex-1 rounded-xl bg-[#111] border border-white/10 flex flex-col shadow-lg overflow-hidden min-h-[300px]">
            <div className="p-3 bg-black/40 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1">
                 {[Bold, Italic, List, LinkIcon].map((Icon, i) => (
                   <button key={i} className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                     <Icon size={16} />
                   </button>
                 ))}
                 <div className="w-px h-6 bg-white/10 mx-2"></div>
                 <button 
                   onClick={() => insertText("✨ Conteúdo gerado pela IA...")}
                   className="flex items-center gap-1.5 px-3 py-1 bg-neon-purple/10 text-neon-purple hover:bg-neon-purple/20 rounded-md text-xs font-bold transition-colors"
                 >
                    <Wand2 size={12} /> AI Magic Rewrite
                 </button>
              </div>
            </div>
            
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 bg-transparent border-none p-6 text-white resize-none focus:ring-0 placeholder:text-gray-600 text-lg leading-relaxed font-sans"
              placeholder="Comece a escrever ou importe dados do FluxTrend..."
            />
            
            <div className="p-3 bg-black/40 border-t border-white/5 flex justify-between items-center text-xs text-gray-500 font-mono">
              <div className="flex gap-4">
                 <span>{content.length} chars</span>
                 <span>{content.split(/\s+/).filter(w => w.length > 0).length} words</span>
              </div>
              <span>Draft saved</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
            <button className="h-12 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <Brush size={18} className="text-neon-blue" /> Gerar Imagem (DALL-E)
            </button>
            <button className="h-12 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <Captions size={18} className="text-neon-purple" /> Gerar Legenda Otimizada
            </button>
          </div>
        </div>

        {/* Right Column: Preview */}
        <div className="w-full lg:w-96 flex-shrink-0 flex flex-col gap-4">
          <div className="flex justify-between items-center">
             <h3 className="text-sm font-bold text-white uppercase tracking-widest">Preview</h3>
             <div className="flex gap-2 bg-black/40 p-1 rounded-lg border border-white/10">
                <button onClick={() => setPreviewMode('post')} className={`p-1.5 rounded ${previewMode === 'post' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><Monitor size={14}/></button>
                <button onClick={() => setPreviewMode('story')} className={`p-1.5 rounded ${previewMode === 'story' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><Smartphone size={14}/></button>
             </div>
          </div>
          
          <div className="flex-1 rounded-xl border border-white/10 p-1 bg-black/40 backdrop-blur-xl flex items-center justify-center">
             <div className={`w-full bg-[#111] rounded-lg overflow-hidden flex flex-col relative transition-all duration-300 border border-white/5 ${previewMode === 'story' ? 'aspect-[9/16]' : 'aspect-square'}`}>
               
               {/* Preview Mockup Header */}
               <div className="p-3 flex items-center gap-2 z-10 bg-gradient-to-b from-black/50 to-transparent">
                 <div className="w-8 h-8 rounded-full bg-gray-700 bg-cover bg-center border border-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBANrBE2PieZ7uqySvJ3DgysfcNvqNqDGi2I_PHV9E8geYjpKFe01sUWj6izQIXzg63k6OCKtD7eZ5Q1PhsyEBSB3m_tRz-F1oN0zbaIm_-AfS4vI0CuC280oS569kJXoPVDjsouUnyoZhf-sNTAg_Wfb7ocBt8sP1AVBase8qGxC29DRNewxqNt4d8L_Gl6WYhHxFi9aoJwqlwu-A3FS_25ihP2sZZkYDR_-kMn4X3B-2eeKlntVhZUiBjIGOyPzw0S1uGYogDEt0")' }}></div>
                 <span className="text-sm font-semibold text-white shadow-black drop-shadow-md">fluxtime_official</span>
               </div>
               
               {/* Content Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <Image size={48} className="text-gray-600"/>
               </div>
               
               {/* Footer for Post Mode */}
               {previewMode === 'post' && (
                 <div className="mt-auto p-3 bg-gradient-to-t from-black/80 to-transparent z-10">
                    <div className="flex gap-3 mb-2">
                       <Heart size={20} className="text-white" />
                       <MessageCircle size={20} className="text-white" />
                       <Share size={20} className="text-white" />
                    </div>
                    <p className="text-xs text-white/90 line-clamp-2">
                       <span className="font-bold mr-1">fluxtime_official</span> 
                       {content || "Sua legenda aparecerá aqui..."}
                    </p>
                 </div>
               )}

               {/* Overlay for Story Mode */}
               {previewMode === 'story' && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
                     <p className="text-xl font-bold text-white text-center drop-shadow-lg break-words">{content || "Texto do Story"}</p>
                  </div>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorStudio;