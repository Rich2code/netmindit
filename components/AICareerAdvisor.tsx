import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { SectionId, ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AICareerAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm your NetMind AI Advisor. Not sure which tech career is right for you? Tell me about your interests or background, and I'll suggest the perfect course!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const stream = sendMessageToGemini(userMessage);
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]); // Add placeholder

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I had trouble processing that. Please try again.", isError: true }]);
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
    <section id={SectionId.ADVISOR} className="py-20 bg-gradient-to-br from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Google Gemini
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Unsure where to start?</h2>
            <p className="text-lg text-slate-600">
              Our AI Career Advisor can analyze your interests and skills to recommend the best guaranteed-job path for you.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-2">Try asking:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="cursor-pointer hover:text-brand-600" onClick={() => setInput("I have no coding experience. What should I do?")}>"I have no coding experience. What should I do?"</li>
                <li className="cursor-pointer hover:text-brand-600" onClick={() => setInput("I'm interested in hacking and security.")}>"I'm interested in hacking and security."</li>
                <li className="cursor-pointer hover:text-brand-600" onClick={() => setInput("What is the salary for an Azure Architect?")}>"What is the salary for an Azure Architect?"</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
              {/* Header */}
              <div className="bg-slate-900 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold">NetMind AI Advisor</h3>
                  <p className="text-brand-200 text-xs flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl p-4 ${
                      msg.role === 'user' 
                        ? 'bg-brand-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
                    }`}>
                      <div className="flex items-center gap-2 mb-1 opacity-75 text-xs">
                        {msg.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                        <span className="capitalize">{msg.role === 'model' ? 'Advisor' : 'You'}</span>
                      </div>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === 'user' && (
                  <div className="flex justify-start">
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 flex items-center gap-2">
                       <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                       <span className="text-sm text-slate-500">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question here..."
                    className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-brand-600 text-white p-2 rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AICareerAdvisor;