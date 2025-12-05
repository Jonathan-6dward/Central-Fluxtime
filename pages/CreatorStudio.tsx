import React from 'react';
import { Bold, Italic, List, Link as LinkIcon, Sparkles, Send, Clapperboard, Captions, Heart, MessageCircle, Share } from 'lucide-react';

const CreatorStudio = () => {
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black text-white">Creator Studio</h1>
        <button className="px-6 py-2 bg-primary text-black font-bold rounded-lg hover:bg-opacity-90">
          Publish
        </button>
      </div>

      <div className="flex gap-8 h-full">
        {/* Left Column: Editor */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-8 border-b border-white/10">
            <button className="pb-3 pt-4 px-2 border-b-2 border-primary text-primary font-bold flex items-center gap-2">
               Text Editor
            </button>
            <button className="pb-3 pt-4 px-2 border-b-2 border-transparent text-gray-400 hover:text-white font-bold flex items-center gap-2">
               Video Editor
            </button>
          </div>

          <div className="flex-1 rounded-xl bg-[#1b2723] border border-[#3b544a] flex flex-col">
            <div className="p-4 bg-[#151f1c] rounded-t-xl border-b border-[#3b544a] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxvmiXDVtEGsxloQCy5YXKgRj5bGf_8HOTKtEeT26gnfsOJTxXclkgWnGol3pYvaQJzNuXedGOg3ArGnb8l_6WU1M0aVwH6tFf6qcYnpQumBJ8FMJBqjdE-jrtYfQQ2Sgw06DRr9BPOsnyWu8kum1u3hvoREV83j6I4FzLgfvb5TRWQq0ylY6ORrekdU8L-1jHeHy8RbOP20eJbJbCGeI68fdjkXvPwtny-omrxRRGQzXjDiJqwjIwXOmhM2-T6wdIs3pq7hWza4s")'}} />
              <span className="text-gray-400 text-sm">Drafting as Olivia Rhye</span>
            </div>
            
            <textarea 
              className="flex-1 bg-transparent border-none p-4 text-white resize-none focus:ring-0 placeholder:text-gray-600 text-lg"
              placeholder="Write your script or post caption here..."
            />

            <div className="p-4 bg-[#151f1c] rounded-b-xl border-t border-[#3b544a] flex justify-between items-center">
              <div className="flex gap-1">
                 {[Bold, Italic, List, LinkIcon, Sparkles].map((Icon, i) => (
                   <button key={i} className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md">
                     <Icon size={18} />
                   </button>
                 ))}
              </div>
              <button className="px-4 py-1.5 bg-primary/20 text-primary text-sm font-bold rounded-lg hover:bg-primary/30">
                Save Draft
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 h-12 bg-primary text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90">
              <Send size={18} /> Generate Post
            </button>
            <button className="flex-1 h-12 bg-primary text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90">
              <Clapperboard size={18} /> Generate Short Video
            </button>
            <button className="flex-1 h-12 bg-primary text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90">
              <Captions size={18} /> Automatic Caption
            </button>
          </div>
        </div>

        {/* Right Column: Preview & Integrations */}
        <div className="w-80 flex-shrink-0 flex flex-col gap-6">
          <div className="rounded-xl border border-[#3b544a] bg-[#1b2723] p-4">
            <h3 className="text-lg font-bold text-white mb-4">Integrations</h3>
            <div className="space-y-3">
              {[
                { name: 'Instagram', color: 'from-purple-500 to-pink-500', active: true },
                { name: 'Google Sheets', color: 'bg-green-600', active: false },
                { name: 'Telegram', color: 'bg-blue-500', active: true }
              ].map((app) => (
                <div key={app.name} className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                   <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-md ${app.color} bg-gradient-to-br flex items-center justify-center`}>
                       <div className="w-4 h-4 bg-white rounded-sm opacity-50" />
                     </div>
                     <span className="text-sm font-medium text-white">{app.name}</span>
                   </div>
                   <div className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${app.active ? 'bg-primary' : 'bg-gray-600'}`}>
                     <div className={`w-4 h-4 rounded-full bg-white transition-transform ${app.active ? 'translate-x-4' : ''}`} />
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Preview</h3>
            <div className="rounded-xl border border-primary/30 p-1 bg-white/5 backdrop-blur-xl">
               <div className="aspect-[9/16] w-full rounded-lg bg-[#1b2723] p-4 flex flex-col justify-between relative overflow-hidden">
                 <div className="flex items-center gap-2 z-10">
                   <div className="w-8 h-8 rounded-full bg-gray-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBANrBE2PieZ7uqySvJ3DgysfcNvqNqDGi2I_PHV9E8geYjpKFe01sUWj6izQIXzg63k6OCKtD7eZ5Q1PhsyEBSB3m_tRz-F1oN0zbaIm_-AfS4vI0CuC280oS569kJXoPVDjsouUnyoZhf-sNTAg_Wfb7ocBt8sP1AVBase8qGxC29DRNewxqNt4d8L_Gl6WYhHxFi9aoJwqlwu-A3FS_25ihP2sZZkYDR_-kMn4X3B-2eeKlntVhZUiBjIGOyPzw0S1uGYogDEt0")' }}></div>
                   <span className="text-sm font-semibold text-white">your_username</span>
                 </div>
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                 </div>

                 <div className="z-10 flex flex-col gap-4">
                   <div className="flex justify-end flex-col gap-4 absolute right-0 bottom-20">
                      <Heart className="text-white" />
                      <MessageCircle className="text-white" />
                      <Share className="text-white" />
                   </div>
                   <p className="text-xs text-gray-400">Your content preview will appear here...</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorStudio;