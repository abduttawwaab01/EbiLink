'use client';

import { useState } from 'react';
import { MessageBubble } from '../../components/MessageBubble';

export default function MessagingPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Welcome to the family! How are you settling in?', time: '10:30 AM', own: false },
    { text: 'Thank you, everyone has been so welcoming.', time: '10:32 AM', own: true },
    { text: 'We are planning the reunion — please share your ideas!', time: '11:00 AM', own: false },
  ]);

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), own: true }]);
    setInput('');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 via-emerald-50/10 to-cream-100 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient-emerald mb-2">Family Conversations</h1>
        <p className="text-emerald-800/40 mb-10">Private messaging with rich interactions.</p>
        <div className="glass-card rounded-[30px] p-6 md:p-8 shadow-2xl min-h-[520px] flex flex-col">
          <div className="flex-1 space-y-5 overflow-y-auto mb-6">
            {messages.map((m, i) => (
              <MessageBubble key={i} message={{ text: m.text, time: m.time }} isOwn={m.own} />
            ))}
          </div>
          <div className="flex gap-3">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Write something beautiful..." className="flex-1 rounded-full px-6 py-4 bg-white/80 border border-emerald-900/5 focus:outline-none focus:ring-2 focus:ring-gold-400/30 text-sm shadow-inner" />
            <button onClick={send} className="rounded-full px-7 py-4 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white font-extrabold hover:brightness-110 transition shadow-lg shadow-emerald-900/20">Send</button>
          </div>
        </div>
      </div>
    </main>
  );
}
