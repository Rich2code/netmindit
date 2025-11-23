import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, Sparkles, MessageSquare } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

interface AICareerAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const AICareerAdvisor: React.FC<AICareerAdvisorProps> = ({ isOpen, onClose, onToggle }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your NetMind AI Advisor. \n\nI can help you find the perfect tech career with our job guarantee. What are you interested in?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const stream = sendMessageToGemini(userMessage);
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]); 

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble right now. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={onToggle}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-slate-900 hover:bg-slate-800'
        }`}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <div className="relative">
             <Bot className="w-8 h-8 text-white" />
             <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
          </div>
        )}
      </button>

      {/* Glass Chat Interface */}
      <div 
        className={`fixed bottom-28 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] rounded-[2rem] z-50 transform transition-all duration-500 ease-in-out origin-bottom-right shadow-2xl overflow-hidden flex flex-col border border-white/20 bg-white/70 backdrop-blur-2xl ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="relative px-6 py-5 border-b border-white/20 bg-white/30 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">NetMind AI</h3>
              <p className="text-xs text-slate-500 font-medium">Career Advisor • <span className="text-green-500">Online</span></p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] px-5 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-2xl rounded-tr-sm' 
                    : 'bg-white/80 backdrop-blur-sm text-slate-800 rounded-2xl rounded-tl-sm border border-white/50'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/50 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm border border-white/20 flex items-center gap-2">
                 <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                 <span className="text-xs text-slate-500 font-medium">Analyzing career paths...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/40 backdrop-blur-md border-t border-white/20">
          <div className="relative flex items-center gap-2 bg-white/60 rounded-full px-2 py-2 border border-white/40 shadow-inner focus-within:ring-2 focus-within:ring-brand-500/20 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about courses, salaries..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-slate-800 placeholder-slate-400 text-sm px-3"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            AI can make mistakes. Contact admissions for official info.
          </p>
        </div>
      </div>
    </>
  );
};

export default AICareerAdvisor;