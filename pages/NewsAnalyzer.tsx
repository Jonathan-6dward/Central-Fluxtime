import React, { useState } from 'react';
import { Settings, Play, RefreshCw, Archive, Plus, Newspaper, CheckCircle2, ArrowRight, Video, FileText } from 'lucide-react';

const NewsAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResults(true);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
                <Newspaper size={18} />
             </div>
             <span className="text-xs font-bold text-primary tracking-widest uppercase">Intelligence Engine</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">News Analyzer Pro</h1>
          <p className="text-gray-400 mt-2">Análise de sentimentos, extração de entidades e insights estratégicos.</p>
        </div>
      </div>

      {/* Input Section (Standardized) */}
      <section className="glassmorphism p-8 rounded-2xl border border-white/10 bg-[#111815]">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Newspaper className="text-primary" size={20}/> Fonte de Dados
        </h2>
        
        <div className="flex flex-col gap-4">
          <div className="relative">
            <textarea 
              placeholder="Cole URLs, textos ou palavras-chave para análise..."
              className="w-full h-32 bg-black/40 border border-white/20 rounded-xl p-4 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-base resize-none"
            />
          </div>
          
          <div className="flex flex-wrap gap-4 items-center justify-between">
             <div className="flex gap-2">
                {['Tech', 'Politics', 'Finance', 'Crypto', 'Global'].map(tag => (
                  <button key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm hover:text-primary hover:border-primary/50 transition-colors">
                    {tag}
                  </button>
                ))}
             </div>
             
             <div className="flex gap-3">
               <button className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                  <RefreshCw size={18} /> Comparar Fontes
               </button>
               <button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="px-8 py-3 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all flex items-center gap-2"
               >
                  {isAnalyzing ? 'Processando...' : <><Play size={18} fill="currentColor" /> Analisar Agora</>}
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {hasResults && (
        <div className="animate-fade-in-up space-y-6">
          <div className="flex items-center justify-between">
             <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="text-primary" /> Resultados da Análise
             </h3>
             <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#1b2723] border border-primary/20 text-white text-sm font-bold rounded-lg hover:bg-primary/20 transition-all flex items-center gap-2">
                   <Video size={16} className="text-primary"/> Enviar para Creator Studio
                </button>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Summary Card */}
            <div className="lg:col-span-2 glassmorphism p-6 rounded-xl border border-white/10 bg-black/20">
              <h3 className="text-lg font-bold text-white mb-4">Resumo Executivo</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                As fontes analisadas indicam uma forte tendência de crescimento no setor de IA Generativa. 
                O sentimento geral é <span className="text-primary font-bold">Positivo (82%)</span>, com foco em novas aplicações corporativas.
                Riscos regulatórios foram mencionados em 15% das fontes.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                 <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Entidades Detectadas</h4>
                 <div className="flex flex-wrap gap-2">
                    {['OpenAI', 'Microsoft', 'Regulation', 'Generative AI', 'NVIDIA'].map(e => (
                       <span key={e} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-medium">
                          {e}
                       </span>
                    ))}
                 </div>
              </div>
            </div>

            {/* Sentiment & Actions */}
            <div className="space-y-6">
               <div className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col items-center justify-center">
                  <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 self-start">Sentimento Global</h3>
                  <div className="relative w-40 h-40 mb-4">
                     <svg className="w-full h-full transform -rotate-90">
                        <circle cx="80" cy="80" r="70" className="stroke-white/10 fill-none stroke-[8]" />
                        <circle cx="80" cy="80" r="70" className="stroke-primary fill-none stroke-[8]" strokeDasharray="440" strokeDashoffset="80" strokeLinecap="round" />
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-3xl font-bold text-white">82%</span>
                       <span className="text-xs text-primary font-bold uppercase">Positivo</span>
                     </div>
                  </div>
               </div>

               <div className="glassmorphism p-6 rounded-xl border border-white/10 bg-black/20 space-y-3">
                  <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Ações Sugeridas</h3>
                  <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm font-bold text-white flex items-center justify-between px-4 group">
                     <span>Criar Post sobre o tema</span>
                     <ArrowRight size={16} className="text-gray-500 group-hover:text-primary" />
                  </button>
                  <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm font-bold text-white flex items-center justify-between px-4 group">
                     <span>Gerar Roteiro de Vídeo</span>
                     <ArrowRight size={16} className="text-gray-500 group-hover:text-primary" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAnalyzer;