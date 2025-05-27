import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../../types';

interface PropertyGridProps {
  properties: Property[];
  favorites?: string[];
  onFavoriteToggle?: (id: string) => void;
  onPropertyClick?: (id: string) => void;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  favorites = [],
  onFavoriteToggle,
  onPropertyClick,
}) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
          No properties found matching your criteria.
        </h3>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          isFavorite={favorites.includes(property.id)}
          onFavoriteToggle={onFavoriteToggle}
          onClick={() => onPropertyClick && onPropertyClick(property.id)}
        />
      ))}
    </div>
  );
};

export default PropertyGrid;