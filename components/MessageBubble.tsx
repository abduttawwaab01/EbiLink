export function MessageBubble({ message, isOwn }: { message: { text: string; time: string }; isOwn?: boolean }) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div className={`relative max-w-[75%] rounded-[24px] px-5 py-4 text-sm leading-relaxed shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isOwn ? 'bg-gradient-to-br from-emerald-700 to-emerald-800 text-cream-50 rounded-br-md' : 'glass-card text-emerald-950 rounded-bl-md'}`}>
        <p>{message.text}</p>
        <div className={`text-[10px] mt-2 font-medium ${isOwn ? 'text-cream-100/40' : 'text-emerald-800/30'}`}>{message.time}</div>
      </div>
    </div>
  );
}
