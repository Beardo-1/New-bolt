import React, { useState, useEffect } from 'react';
import { Menu, X, User, Search, Heart, ShoppingCart, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import ThemeToggle from '../common/ThemeToggle';
import LanguageToggle from '../common/LanguageToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be connected to your auth system

  // Handle scroll effect for transparent to solid header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle this when implementing real authentication
  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-neutral-900 shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Al Fauzan
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="/" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              Home
            </a>
            <a href="/properties" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              Properties
            </a>
            <a href="/auctions" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              Auctions
            </a>
            <a href="/about" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              About
            </a>
            <a href="/contact" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              Contact
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-1">
            <ThemeToggle />
            <LanguageToggle />
            
            {/* Action buttons */}
            <div className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" aria-label="Search">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="sm" aria-label="Favorites">
                <Heart size={20} />
              </Button>
              {isLoggedIn ? (
                <>
                  <Button variant="ghost" size="sm" aria-label="Messages">
                    <MessageSquare size={20} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={toggleAuth}
                    aria-label="User account"
                  >
                    <User size={20} />
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={toggleAuth}>
                    Log In
                  </Button>
                  <Button variant="primary" size="sm" onClick={toggleAuth}>
                    Register
                  </Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-2 pb-3 border-b border-neutral-200 dark:border-neutral-700">
            <a href="/" className="px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              Home
            </a>
            <a href="/properties" className="px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              Properties
            </a>
            <a href="/auctions" className="px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              Auctions
            </a>
            <a href="/about" className="px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              About
            </a>
            <a href="/contact" className="px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 space-y-2">
            {isLoggedIn ? (
              <>
                <a href="/dashboard\" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
                  Dashboard
                </a>
                <a href="/favorites" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
                  Favorites
                </a>
                <a href="/messages" className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
                  Messages
                </a>
                <button
                  onClick={toggleAuth}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button fullWidth variant="outline" onClick={toggleAuth}>
                  Log In
                </Button>
                <Button fullWidth variant="primary" onClick={toggleAuth}>
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;