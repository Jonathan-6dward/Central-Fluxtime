import React, { useState } from 'react';
import { 
  ShoppingBag, TrendingUp, BarChart2, FileText, Video, Tag, Target, 
  Zap, AlertCircle, CheckCircle2, Package, Search, ArrowRight,
  Copy, RefreshCw, Layers, DollarSign, Globe, Megaphone, Smartphone
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

// Mock Data for the Catalog
const products = [
  { 
    id: 1, 
    name: "Galaxy Projector 2.0", 
    price: "$34.99", 
    image: "https://source.unsplash.com/random/300x300?galaxy&sig=1",
    status: "Viral", 
    score: 98,
    origin: "TikTok",
    trend: "Exploding",
    saturation: "Medium"
  },
  { 
    id: 2, 
    name: "Ergonomic Neck Cloud", 
    price: "$29.95", 
    image: "https://source.unsplash.com/random/300x300?health&sig=2",
    status: "Stable", 
    score: 85,
    origin: "Facebook",
    trend: "Steady",
    saturation: "High"
  },
  { 
    id: 3, 
    name: "Smart Plant Sensor", 
    price: "$19.00", 
    image: "https://source.unsplash.com/random/300x300?plant&sig=3",
    status: "Rising", 
    score: 92,
    origin: "Instagram",
    trend: "Growth",
    saturation: "Low"
  },
  { 
    id: 4, 
    name: "Portable Blender X", 
    price: "$45.00", 
    image: "https://source.unsplash.com/random/300x300?blender&sig=4",
    status: "Falling", 
    score: 60,
    origin: "Youtube",
    trend: "Decline",
    saturation: "Oversaturated"
  }
];

// Mock Data for Lifecycle Chart
const lifecycleData = [
  { name: 'W1', value: 20 },
  { name: 'W2', value: 45 },
  { name: 'W3', value: 75 },
  { name: 'W4', value: 95 },
  { name: 'W5', value: 100 },
  { name: 'W6', value: 85 },
  { name: 'W7', value: 90 },
];

const EcommerceBoost = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(products[0]);
  const [activeTab, setActiveTab] = useState<'analysis' | 'sales' | 'content'>('analysis');

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-8 h-8 rounded bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                <ShoppingBag size={18} />
             </div>
             <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">FluxProductPulse</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight font-display">Product Intelligence</h1>
          <p className="text-gray-400 mt-2">Hub de inteligência de produtos e otimização de conversão.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-4 py-2 bg-[#111815] border border-white/10 rounded-xl text-white text-sm font-bold flex items-center gap-2 hover:border-yellow-400 transition-colors">
              <Search size={16} className="text-yellow-400"/> New Product Scan
           </button>
        </div>
      </div>

      {/* KPI Cards (Product Focused) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Produtos Monitorados', val: '142', icon: Package, color: 'text-blue-400' },
          { label: 'Oportunidades Virais', val: '12', icon: Zap, color: 'text-yellow-400' },
          { label: 'Nível de Saturação', val: 'Médio', icon: AlertCircle, color: 'text-orange-400' },
          { label: 'Margem Média', val: '65%', icon: DollarSign, color: 'text-green-400' },
        ].map((stat, i) => (
          <div key={i} className="glassmorphism p-4 rounded-xl flex items-center gap-4 border border-white/10 bg-[#111]">
             <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
               <stat.icon size={20} />
             </div>
             <div>
               <p className="text-xs text-gray-400 font-bold uppercase">{stat.label}</p>
               <p className="text-xl font-black text-white">{stat.val}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left: Product Catalog */}
        <div className="lg:col-span-1 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                 <Layers size={20} className="text-yellow-400"/> Catálogo
              </h2>
              <button className="text-xs text-yellow-400 font-bold hover:underline">Ver Todos</button>
           </div>

           <div className="space-y-3">
              {products.map((product) => (
                 <div 
                    key={product.id} 
                    onClick={() => setSelectedProduct(product)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-4 group ${
                       selectedProduct.id === product.id 
                       ? 'bg-yellow-400/10 border-yellow-400/50' 
                       : 'bg-[#111] border-white/5 hover:bg-white/10'
                    }`}
                 >
                    <div className="w-16 h-16 rounded-lg bg-gray-700 overflow-hidden shrink-0">
                       <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="flex justify-between items-start mb-1">
                          <h3 className="text-sm font-bold text-white truncate">{product.name}</h3>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                             product.status === 'Viral' ? 'bg-green-500/20 text-green-400' :
                             product.status === 'Falling' ? 'bg-red-500/20 text-red-400' :
                             'bg-blue-500/20 text-blue-400'
                          }`}>
                             {product.status}
                          </span>
                       </div>
                       <p className="text-xs text-gray-400">Score: <span className="text-white font-bold">{product.score}</span> • {product.price}</p>
                       <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <Globe size={10}/> Origem: {product.origin}
                       </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                       <ArrowRight size={16} className="text-yellow-400"/>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Right: Intelligence Hub (Deep Analysis) */}
        <div className="lg:col-span-2 glassmorphism rounded-2xl border border-white/10 overflow-hidden bg-[#111815]">
           {/* Product Header */}
           <div className="p-6 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-black/20">
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-xl bg-gray-700 overflow-hidden border border-white/10">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h2 className="text-2xl font-black text-white font-display">{selectedProduct.name}</h2>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                       <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">{selectedProduct.price}</span>
                       <span className="text-gray-500">|</span>
                       <span className="text-yellow-400 font-bold flex items-center gap-1"><Zap size={12}/> Trend Score: {selectedProduct.score}/100</span>
                    </p>
                 </div>
              </div>
              <div className="flex gap-2">
                 <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white hover:bg-white/10 transition-colors">
                    Ver no AliExpress
                 </button>
                 <button className="px-4 py-2 bg-yellow-400 text-black border border-yellow-400 rounded-lg text-xs font-bold hover:bg-yellow-300 transition-colors flex items-center gap-2">
                    <Package size={14}/> Importar Loja
                 </button>
              </div>
           </div>

           {/* Tabs */}
           <div className="flex border-b border-white/10 bg-white/5">
              <button 
                 onClick={() => setActiveTab('analysis')}
                 className={`flex-1 py-4 text-sm font-bold text-center border-b-2 transition-colors flex items-center justify-center gap-2 ${
                    activeTab === 'analysis' ? 'border-yellow-400 text-yellow-400 bg-yellow-400/5' : 'border-transparent text-gray-400 hover:text-white'
                 }`}
              >
                 <BarChart2 size={16}/> Deep Analysis
              </button>
              <button 
                 onClick={() => setActiveTab('sales')}
                 className={`flex-1 py-4 text-sm font-bold text-center border-b-2 transition-colors flex items-center justify-center gap-2 ${
                    activeTab === 'sales' ? 'border-yellow-400 text-yellow-400 bg-yellow-400/5' : 'border-transparent text-gray-400 hover:text-white'
                 }`}
              >
                 <FileText size={16}/> Sales Kit Generator
              </button>
              <button 
                 onClick={() => setActiveTab('content')}
                 className={`flex-1 py-4 text-sm font-bold text-center border-b-2 transition-colors flex items-center justify-center gap-2 ${
                    activeTab === 'content' ? 'border-yellow-400 text-yellow-400 bg-yellow-400/5' : 'border-transparent text-gray-400 hover:text-white'
                 }`}
              >
                 <Megaphone size={16}/> Content Strategy
              </button>
           </div>

           {/* Content Area */}
           <div className="p-6 min-h-[400px]">
              
              {/* TAB 1: Deep Analysis */}
              {activeTab === 'analysis' && (
                 <div className="space-y-8 animate-fade-in-up">
                    
                    {/* Charts & Metrics Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 flex items-center gap-2">
                             <TrendingUp size={16} className="text-yellow-400"/> Ciclo de Vida da Trend
                          </h3>
                          <div className="h-40 w-full">
                             <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={lifecycleData}>
                                   <defs>
                                      <linearGradient id="colorCycle" x1="0" y1="0" x2="0" y2="1">
                                         <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3}/>
                                         <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                                      </linearGradient>
                                   </defs>
                                   <Tooltip contentStyle={{backgroundColor: '#111815', border: '1px solid #333', borderRadius: '8px'}} />
                                   <Area type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2} fill="url(#colorCycle)" />
                                </AreaChart>
                             </ResponsiveContainer>
                          </div>
                          <div className="mt-2 text-center">
                             <span className="text-xs text-white bg-green-500/20 px-2 py-1 rounded border border-green-500/30">Fase Atual: Crescimento Exponencial</span>
                          </div>
                       </div>

                       <div className="space-y-4">
                          <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                             <div>
                                <p className="text-xs text-gray-400 uppercase font-bold">Competitividade</p>
                                <p className="text-lg font-bold text-white">Baixa (Blue Ocean)</p>
                             </div>
                             <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <CheckCircle2 size={20}/>
                             </div>
                          </div>
                          <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                             <div>
                                <p className="text-xs text-gray-400 uppercase font-bold">Saturação</p>
                                <p className="text-lg font-bold text-white">{selectedProduct.saturation}</p>
                             </div>
                             <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                                <AlertCircle size={20}/>
                             </div>
                          </div>
                          <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                             <div>
                                <p className="text-xs text-gray-400 uppercase font-bold">Marketplace Score</p>
                                <p className="text-lg font-bold text-white">9.2/10</p>
                             </div>
                             <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <Target size={20}/>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* AI Insights */}
                    <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20">
                       <h3 className="text-sm font-bold text-blue-400 uppercase mb-2 flex items-center gap-2">
                          <Zap size={16}/> IA Insight
                       </h3>
                       <p className="text-sm text-gray-300 leading-relaxed">
                          Este produto está viralizando no TikTok com a hashtag #bedroomgoals. A demanda aumentou 45% na última semana.
                          Recomendamos focar em vídeos curtos mostrando o efeito visual noturno.
                          <br/><br/>
                          <strong>Oportunidade:</strong> Venda como "presente para namorado(a)" ou "decoração gamer".
                       </p>
                    </div>
                 </div>
              )}

              {/* TAB 2: Sales Kit Generator */}
              {activeTab === 'sales' && (
                 <div className="space-y-6 animate-fade-in-up">
                    <div className="flex justify-between items-center">
                       <h3 className="text-white font-bold">Gerador de Copywriting (IA)</h3>
                       <button className="text-xs text-yellow-400 flex items-center gap-1 hover:underline">
                          <RefreshCw size={12}/> Regenerar
                       </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase">Hook (Gancho)</label>
                          <div className="bg-black/40 border border-white/10 rounded-xl p-4 relative group">
                             <p className="text-sm text-white pr-8">
                                "Pare de olhar para um teto entediante! Transforme seu quarto em uma galáxia inteira em segundos... 🌌✨"
                             </p>
                             <button className="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-white bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                <Copy size={14}/>
                             </button>
                          </div>
                       </div>

                       <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase">Título do Produto (SEO)</label>
                          <div className="bg-black/40 border border-white/10 rounded-xl p-4 relative group">
                             <p className="text-sm text-white pr-8">
                                "Projetor Galáxia 360° - Luz Noturna Estrelada para Quarto Gamer & Decoração (Controle Remoto)"
                             </p>
                             <button className="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-white bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                <Copy size={14}/>
                             </button>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-bold text-gray-400 uppercase">Descrição de Venda (Persuasiva)</label>
                       <div className="bg-black/40 border border-white/10 rounded-xl p-4 relative group">
                          <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line pr-8">
                             Você já imaginou dormir sob as estrelas todas as noites? 🌠
                             <br/><br/>
                             Conheça o <strong>Galaxy Projector 2.0</strong>, a maneira mais fácil de mudar a vibe do seu ambiente.
                             <br/>
                             ✅ <strong>Efeito Imersivo:</strong> 10 modos de cores nebula.<br/>
                             ✅ <strong>Relaxamento Total:</strong> Perfeito para dormir, meditar ou assistir filmes.<br/>
                             ✅ <strong>Controle Total:</strong> Ajuste brilho e velocidade pelo controle.<br/>
                             <br/>
                             🔥 <em>Oferta por tempo limitado: 50% OFF + Frete Grátis!</em>
                          </p>
                          <button className="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-white bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                             <Copy size={14}/>
                          </button>
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-bold text-gray-400 uppercase">Script para Vídeo (TikTok/Reels)</label>
                       <div className="bg-black/40 border border-white/10 rounded-xl p-4 relative group">
                          <p className="text-sm text-gray-300 leading-relaxed font-mono text-xs pr-8">
                             [Cena 1: Quarto escuro, teto normal]<br/>
                             Texto na tela: "Meu quarto antes..."<br/>
                             (0:00-0:02)<br/><br/>
                             [Cena 2: Acende o projetor, explosão de cores]<br/>
                             Texto na tela: "Meu quarto AGORA! 😱"<br/>
                             (0:02-0:05)<br/><br/>
                             [Cena 3: Close no produto + pessoa relaxando]<br/>
                             Narração: "Esse projetor cria uma vibe incrível para filmes ou games."<br/>
                             (0:05-0:10)<br/><br/>
                             [Cena 4: CTA]<br/>
                             Texto: "Link na Bio - 50% OFF"<br/>
                             (0:10-0:12)
                          </p>
                          <button className="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-white bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                             <Copy size={14}/>
                          </button>
                       </div>
                    </div>
                 </div>
              )}

              {/* TAB 3: Content Strategy */}
              {activeTab === 'content' && (
                 <div className="space-y-6 animate-fade-in-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-4">
                          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                             <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <Tag size={16} className="text-yellow-400"/> Hashtags Otimizadas
                             </h3>
                             <div className="flex flex-wrap gap-2">
                                {['#galaxyprojector', '#roomdecor', '#gamerroom', '#tiktokmademebuyit', '#vibes', '#astronomy', '#giftideas'].map(tag => (
                                   <span key={tag} className="px-2 py-1 bg-black/40 border border-white/10 rounded text-xs text-blue-300">
                                      {tag}
                                   </span>
                                ))}
                                <button className="px-2 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded text-xs text-yellow-400 hover:bg-yellow-400/20">
                                   + Copiar Todas
                                </button>
                             </div>
                          </div>

                          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                             <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <Target size={16} className="text-red-400"/> Chamadas para Ação (CTA)
                             </h3>
                             <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                                <li>"Clique em Saiba Mais para transformar seu quarto!"</li>
                                <li>"Marque alguém que precisa disso 👇"</li>
                                <li>"Estoque acabando! Garanta o seu no link da bio."</li>
                             </ul>
                          </div>
                       </div>

                       <div className="p-4 bg-white/5 rounded-xl border border-white/10 h-full">
                          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                             <Smartphone size={16} className="text-purple-400"/> Sugestões de Conteúdo
                          </h3>
                          <div className="space-y-4">
                             <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                                <div className="p-2 bg-pink-500/10 text-pink-500 rounded-lg"><Video size={16}/></div>
                                <div>
                                   <p className="text-sm font-bold text-white">Unboxing ASMR</p>
                                   <p className="text-xs text-gray-500">Sem fala, apenas sons da embalagem e do clique ao ligar.</p>
                                </div>
                             </div>
                             <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><Video size={16}/></div>
                                <div>
                                   <p className="text-sm font-bold text-white">Reaction Video</p>
                                   <p className="text-xs text-gray-500">Filme a reação de alguém entrando no quarto iluminado.</p>
                                </div>
                             </div>
                             <div className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                                <div className="p-2 bg-green-500/10 text-green-500 rounded-lg"><Video size={16}/></div>
                                <div>
                                   <p className="text-sm font-bold text-white">Setup Gamer Tour</p>
                                   <p className="text-xs text-gray-500">Mostre como o produto melhora o setup de jogos.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              )}

           </div>
        </div>

      </div>
    </div>
  );
};

export default EcommerceBoost;