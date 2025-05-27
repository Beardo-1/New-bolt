import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import PropertyGrid from '../components/features/PropertyGrid';
import PropertyFilters from '../components/features/PropertyFilters';
import { Property, PropertyStatus, PropertyType } from '../types';
import { Search } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // In a real app, this would come from an API or local storage
    setFavorites([]);
  }, []);
  
  const handleFilterChange = (filters: {
    status: PropertyStatus | '';
    type: PropertyType | '';
    priceMin: number;
    priceMax: number;
    bedrooms: number;
    bathrooms: number;
    city: string;
  }) => {
    const filtered = properties.filter((property) => {
      // Status filter
      if (filters.status && property.status !== filters.status) {
        return false;
      }
      
      // Type filter
      if (filters.type && property.type !== filters.type) {
        return false;
      }
      
      // Price range filter
      if (property.price < filters.priceMin || property.price > filters.priceMax) {
        return false;
      }
      
      // Bedrooms filter
      if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) {
        return false;
      }
      
      // Bathrooms filter
      if (filters.bathrooms > 0 && property.bathrooms < filters.bathrooms) {
        return false;
      }
      
      // City filter
      if (filters.city && property.city !== filters.city) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProperties(filtered);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === '') {
      setFilteredProperties(properties);
      return;
    }
    
    const search = searchTerm.toLowerCase();
    const filtered = properties.filter(
      (property) =>
        property.title.toLowerCase().includes(search) ||
        property.description.toLowerCase().includes(search) ||
        property.location.toLowerCase().includes(search) ||
        property.city.toLowerCase().includes(search) ||
        property.type.toLowerCase().includes(search)
    );
    
    setFilteredProperties(filtered);
  };
  
  const handleFavoriteToggle = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };
  
  const handlePropertyClick = (id: string) => {
    // In a real app, this would use a router to navigate
    console.log('Navigating to property:', id);
  };
  
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Properties
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Browse our extensive collection of premium properties across Saudi Arabia. Use the filters to find the perfect property that meets your requirements.
        </p>
      </div>
      
      {/* Search Bar */}
      <form className="mb-8" onSubmit={handleSearch}>
        <div className="flex">
          <input
            type="text"
            placeholder="Search by location, property type, or keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-3 rounded-l-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Search size={24} />
          </button>
        </div>
      </form>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <div className="lg:w-1/4">
          <PropertyFilters onFilterChange={handleFilterChange} />
        </div>
        
        {/* Property Grid */}
        <div className="lg:w-3/4">
          <div className="mb-4 text-neutral-600 dark:text-neutral-400">
            Found {filteredProperties.length} properties
          </div>
          <PropertyGrid
            properties={filteredProperties}
            favorites={favorites}
            onFavoriteToggle={handleFavoriteToggle}
            onPropertyClick={handlePropertyClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;