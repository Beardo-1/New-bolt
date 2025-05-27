import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../../types';
import PropertyCard from './PropertyCard';

interface PropertySliderProps {
  properties: Property[];
  title: string;
  onPropertyClick?: (id: string) => void;
}

const PropertySlider: React.FC<PropertySliderProps> = ({
  properties,
  title,
  onPropertyClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const visibleCount = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  };
  
  const nextSlide = () => {
    if (currentIndex < properties.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous properties"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= properties.length - visibleCount.sm}
            className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next properties"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="min-w-full sm:min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] xl:min-w-[calc(100%/4)] px-3"
            >
              <PropertyCard
                property={property}
                onClick={() => onPropertyClick && onPropertyClick(property.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySlider;