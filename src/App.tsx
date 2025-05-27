import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AuctionsPage from './pages/AuctionsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple route handling (in a real app, this would use a router)
  const handleRouteChange = () => {
    const path = window.location.pathname;
    
    if (path.includes('/properties')) {
      setCurrentPage('properties');
    } else if (path.includes('/auctions')) {
      setCurrentPage('auctions');
    } else {
      setCurrentPage('home');
    }
  };

  // Add event listener for route changes
  React.useEffect(() => {
    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange();
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Handle internal navigation
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = anchor.getAttribute('href') || '/';
        window.history.pushState({}, '', href);
        handleRouteChange();
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'properties':
        return <PropertiesPage />;
      case 'auctions':
        return <AuctionsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;