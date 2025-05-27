import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Property, PropertyStatus } from '../../types';
import Card from '../common/Card';
import Badge from '../common/Badge';

interface PropertyCardProps {
  property: Property;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
  onClick?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite = false,
  onFavoriteToggle,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorite(!favorite);
    if (onFavoriteToggle) {
      onFavoriteToggle(property.id);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SAR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusVariant = (status: PropertyStatus) => {
    switch (status) {
      case PropertyStatus.FOR_SALE:
        return 'primary';
      case PropertyStatus.FOR_RENT:
        return 'secondary';
      case PropertyStatus.SOLD:
        return 'error';
      case PropertyStatus.RENTED:
        return 'warning';
      default:
        return 'neutral';
    }
  };

  const getStatusText = (status: PropertyStatus) => {
    switch (status) {
      case PropertyStatus.FOR_SALE:
        return 'For Sale';
      case PropertyStatus.FOR_RENT:
        return 'For Rent';
      case PropertyStatus.SOLD:
        return 'Sold';
      case PropertyStatus.RENTED:
        return 'Rented';
      default:
        return status;
    }
  };

  return (
    <Card 
      hover
      className="transition-all duration-300 h-full"
      onClick={onClick}
    >
      <div 
        className="relative h-64 w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Property Image */}
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-0 left-0 p-3 flex flex-col space-y-2">
          <Badge 
            variant={getStatusVariant(property.status)}
            size="md"
          >
            {getStatusText(property.status)}
          </Badge>
          
          {property.isAuction && (
            <Badge 
              variant="accent"
              size="md"
            >
              Auction
            </Badge>
          )}
          
          {property.isFeatured && (
            <Badge 
              variant="secondary"
              size="md"
            >
              Featured
            </Badge>
          )}
        </div>
        
        {/* Favorite Button */}
        <button
          className={`absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-colors ${
            favorite ? 'text-error-500' : 'text-neutral-400'
          }`}
          onClick={handleFavoriteClick}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={20} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-4">
        {/* Property Title */}
        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100 line-clamp-1">
          {property.title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center mb-3 text-neutral-600 dark:text-neutral-400">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}, {property.city}</span>
        </div>
        
        {/* Price */}
        <div className="mb-3">
          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
            {formatPrice(property.price)}
          </span>
          {property.status === PropertyStatus.FOR_RENT && (
            <span className="text-neutral-500 dark:text-neutral-400 text-sm"> / year</span>
          )}
        </div>
        
        {/* Features */}
        <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed size={16} className="mr-1" />
              <span className="text-sm">{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
          )}
          
          {property.bathrooms > 0 && (
            <div className="flex items-center">
              <Bath size={16} className="mr-1" />
              <span className="text-sm">{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
          )}
          
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span className="text-sm">{property.area} m²</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;