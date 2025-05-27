import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import Button from '../common/Button';
import { ChatMessage } from '../../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      userId: 'system',
      content: 'Hello! I\'m Al Fauzan\'s AI assistant. How can I help you with your real estate needs today?',
      isAI: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      userId: 'user',
      content: input,
      isAI: false,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response (in a real app, this would call your backend)
    setTimeout(() => {
      const aiResponses = [
        "I'd be happy to help you find the perfect property. Could you tell me what area you're interested in?",
        "Our latest properties are in Riyadh, Jeddah, and Dammam. Would you like to see some options?",
        "We have several properties that might match your criteria. You can view them in the Properties section of our website.",
        "Our auction system allows you to bid on premium properties. Check the Auctions page for more details.",
        "For more personalized assistance, you can register for an account and access our full suite of services.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        userId: 'system',
        content: randomResponse,
        isAI: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105"
          aria-label="Open chat assistant"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-neutral-800 rounded-lg shadow-xl z-50 flex flex-col overflow-hidden">
          {/* Chat header */}
          <div className="bg-primary-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">AI Property Assistant</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-neutral-200"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-grow p-4 overflow-y-auto bg-neutral-50 dark:bg-neutral-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.isAI ? 'text-left' : 'text-right'
                }`}
              >
                <div
                  className={`inline-block max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isAI
                      ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200'
                      : 'bg-primary-500 text-white'
                  }`}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-grow p-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
              />
              <Button
                type="submit"
                variant="primary"
                aria-label="Send message"
                className="px-3"
              >
                <Send size={20} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;