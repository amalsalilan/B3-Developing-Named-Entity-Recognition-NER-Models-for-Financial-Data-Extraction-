import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, X, Plus, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm CAG (Contextual AI Guide), your financial document assistant. I can help you analyze documents, extract entities, perform sentiment analysis, and much more. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setIsLoading(true);
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "I understand. To help you better, could you please upload a document first? I can analyze PDF, DOCX, TXT and other formats to extract financial entities, analyze sentiment, or identify key clauses.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Chat cleared. Hello! I'm CAG, your financial document assistant. How can I help?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-horizon-light dark:bg-horizon-dark transition-colors duration-300 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-horizon-primary to-horizon-accent.blue text-white py-6 px-6 shadow-xl"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">CAG - Contextual AI Guide</h1>
              <p className="text-white/80">Your intelligent financial document assistant</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chat Area */}
      <div className="flex-grow flex flex-col max-w-4xl mx-auto w-full">
        {/* Messages Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-grow overflow-y-auto p-6 space-y-4"
        >
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: message.sender === 'user' ? 20 : -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "flex",
                message.sender === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-md px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm",
                  message.sender === 'user'
                    ? "bg-gradient-to-br from-horizon-primary to-horizon-accent.blue text-white"
                    : "bg-white dark:bg-horizon-secondary/50 border border-gray-200 dark:border-white/10"
                )}
              >
                <p className={cn(
                  "leading-relaxed font-medium",
                  message.sender === 'user' ? "text-white" : "text-slate-700 dark:text-slate-700"
                )}>
                  {message.text}
                </p>
                <span className={cn(
                  "text-xs mt-2 block",
                  message.sender === 'user'
                    ? "text-white/70"
                    : "text-gray-600 dark:text-gray-400"
                )}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white dark:bg-horizon-secondary/50 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 shadow-lg">
                <div className="flex gap-2">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 bg-horizon-primary rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-horizon-primary rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-horizon-primary rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Input Area */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-200 dark:border-white/10 p-6 bg-white/50 dark:bg-horizon-secondary/20 backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask me anything about your documents... (Shift+Enter for new line)"
                className="flex-grow px-4 py-3 rounded-2xl border border-gray-300 dark:border-white/20 bg-white dark:bg-horizon-dark text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-horizon-primary dark:focus:ring-horizon-accent.blue resize-none"
                rows="3"
              />
              <div className="flex flex-col gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-3 rounded-full bg-gradient-horizon text-white shadow-lg hover:shadow-horizon-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Send message"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClearChat}
                  className="p-3 rounded-full bg-gray-200 dark:bg-horizon-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-horizon-secondary/70 transition-colors"
                  title="Clear chat"
                >
                  <Trash2 className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              <p className="w-full text-sm text-gray-600 dark:text-gray-400 mb-2">Quick actions:</p>
              {[
                "Upload a document",
                "Analyze sentiment",
                "Extract entities",
                "Find clauses",
                "Generate report"
              ].map((action, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setInputValue(action)}
                  className="px-3 py-1 rounded-full bg-horizon-primary/10 dark:bg-horizon-primary/20 text-horizon-primary dark:text-horizon-accent.blue border border-horizon-primary/30 dark:border-horizon-primary/40 hover:bg-horizon-primary/20 dark:hover:bg-horizon-primary/30 transition-colors text-xs font-medium"
                >
                  {action}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
