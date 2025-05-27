import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from '../features/Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Layout;