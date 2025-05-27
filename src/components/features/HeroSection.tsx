import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to search results
    console.log('Searching for:', searchTerm);
  };
  
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Luxury Property" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl">
          Find Your Dream Property in Saudi Arabia
        </h1>
        
        <p className="text-lg md:text-xl text-white mb-10 max-w-2xl">
          Discover premium properties and investment opportunities with Al Fauzan Real Estate
        </p>
        
        {/* Search Form */}
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-3xl bg-white dark:bg-neutral-800 rounded-lg p-3 md:p-4 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search by location, property type, or keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <Button
              type="submit"
              variant="primary"
              className="px-6"
              leftIcon={<Search size={20} />}
            >
              Search
            </Button>
          </div>
        </form>
        
        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a 
            href="/properties?type=villa" 
            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-colors"
          >
            Villas
          </a>
          <a 
            href="/properties?type=apartment" 
            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-colors"
          >
            Apartments
          </a>
          <a 
            href="/properties?type=commercial" 
            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-colors"
          >
            Commercial
          </a>
          <a 
            href="/auctions" 
            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-colors"
          >
            Auctions
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;