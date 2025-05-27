import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { PropertyStatus, PropertyType } from '../../types';
import Button from '../common/Button';

interface FilterValues {
  status: PropertyStatus | '';
  type: PropertyType | '';
  priceMin: number;
  priceMax: number;
  bedrooms: number;
  bathrooms: number;
  city: string;
}

interface PropertyFiltersProps {
  onFilterChange: (filters: FilterValues) => void;
  className?: string;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  onFilterChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [filters, setFilters] = useState<FilterValues>({
    status: '',
    type: '',
    priceMin: 0,
    priceMax: 20000000,
    bedrooms: 0,
    bathrooms: 0,
    city: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      status: '',
      type: '',
      priceMin: 0,
      priceMax: 20000000,
      bedrooms: 0,
      bathrooms: 0,
      city: '',
    });
  };

  const applyFilters = () => {
    onFilterChange(filters);
    setIsOpen(false);
  };

  return (
    <div className={`bg-white dark:bg-neutral-800 rounded-lg shadow-card ${className}`}>
      <div className="p-4 flex justify-between items-center border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Hide filters' : 'Show filters'}
          leftIcon={isOpen ? <X size={16} /> : <Filter size={16} />}
        >
          {isOpen ? 'Hide' : 'Show'}
        </Button>
      </div>

      {isOpen && (
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Property Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={filters.status}
                onChange={handleInputChange}
                className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
              >
                <option value="">Any Status</option>
                <option value={PropertyStatus.FOR_SALE}>For Sale</option>
                <option value={PropertyStatus.FOR_RENT}>For Rent</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Property Type
              </label>
              <select
                id="type"
                name="type"
                value={filters.type}
                onChange={handleInputChange}
                className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
              >
                <option value="">Any Type</option>
                <option value={PropertyType.APARTMENT}>Apartment</option>
                <option value={PropertyType.VILLA}>Villa</option>
                <option value={PropertyType.LAND}>Land</option>
                <option value={PropertyType.COMMERCIAL}>Commercial</option>
                <option value={PropertyType.OFFICE}>Office</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                City
              </label>
              <select
                id="city"
                name="city"
                value={filters.city}
                onChange={handleInputChange}
                className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
              >
                <option value="">Any City</option>
                <option value="Riyadh">Riyadh</option>
                <option value="Jeddah">Jeddah</option>
                <option value="Dammam">Dammam</option>
                <option value="Al Khobar">Al Khobar</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Price Range (SAR)
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="priceMin"
                  placeholder="Min"
                  value={filters.priceMin}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                />
                <input
                  type="number"
                  name="priceMax"
                  placeholder="Max"
                  value={filters.priceMax}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bedrooms */}
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleInputChange}
                className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
              >
                <option value="0">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Bathrooms
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={filters.bathrooms}
                onChange={handleInputChange}
                className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
              >
                <option value="0">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <Button
              variant="outline"
              onClick={resetFilters}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              onClick={applyFilters}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyFilters;