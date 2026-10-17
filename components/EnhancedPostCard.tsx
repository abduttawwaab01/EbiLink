'use client';

import { useState } from 'react';

export function EnhancedPostCard({ post }: { post: { title: string; body: string; author: string; time: string; tags?: string[]; avatar: string } }) {
  const [liked, setLiked] = useState(false);
  const [love, setLove] = useState(false);
  const [reactionCount, setReactionCount] = useState(0);

  return (
    <article className="group relative glass-card rounded-[30px] p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Hologram border */}
      <div className="hologram-border absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-600 text-cream-50 text-[11px] font-extrabold flex items-center justify-center shadow-lg shadow-emerald-800/20">{post.avatar}</div>
        <div>
          <div className="text-sm font-extrabold text-emerald-950">{post.author}</div>
          <div className="text-[10px] text-emerald-800/30 font-medium">{post.time}</div>
        </div>
        <div className="ml-auto flex gap-2">
          {post.tags?.map(tag => (
            <span key={tag} className="text-[9px] px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-900/5 to-emerald-900/10 text-emerald-800 font-extrabold border border-emerald-900/10">{tag}</span>
          ))}
        </div>
      </div>
      <h3 className="font-extrabold text-xl text-emerald-950 mb-3 leading-tight relative z-10">{post.title}</h3>
      <p className="text-sm text-emerald-800/60 leading-relaxed mb-6 relative z-10">{post.body}</p>
      <div className="flex items-center gap-4 pt-4 border-t border-emerald-900/5 relative z-10">
        <button onClick={() => { setLiked(!liked); setReactionCount(prev => liked ? prev - 1 : prev + 1); }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition-all duration-300 ${liked ? 'bg-rose-400/10 text-rose-500 border border-rose-400/20' : 'bg-emerald-900/5 text-emerald-800 border border-emerald-900/5 hover:bg-rose-400/10 hover:text-rose-500'}`}>❤️ {liked ? 'Liked' : 'Like'}</button>
        <button onClick={() => { setLove(!love); setReactionCount(prev => love ? prev - 1 : prev + 1); }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition-all duration-300 ${love ? 'bg-gold-400/10 text-gold-500 border border-gold-400/20' : 'bg-emerald-900/5 text-emerald-800 border border-emerald-900/5 hover:bg-gold-400/10 hover:text-gold-500'}`}>✨ Love</button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-emerald-900/5 text-emerald-800 border border-emerald-900/5 hover:bg-amber-300/10 hover:text-amber-500 transition-all">🎉 Celebrate</button>
        <div className="ml-auto text-xs font-extrabold shimmer-text">{reactionCount} reactions</div>
      </div>
    </article>
  );
}
