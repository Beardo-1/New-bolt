import React, { useState, useEffect } from 'react';
import { Clock, Gavel, ArrowUp } from 'lucide-react';
import { Property } from '../../types';
import Button from '../common/Button';
import Card from '../common/Card';

interface AuctionItemProps {
  property: Property;
  onBid?: (propertyId: string, amount: number) => void;
  onViewDetails?: (propertyId: string) => void;
}

const AuctionItem: React.FC<AuctionItemProps> = ({
  property,
  onBid,
  onViewDetails,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [bidAmount, setBidAmount] = useState<number>(
    property.auctionDetails?.currentBid 
      ? property.auctionDetails.currentBid + (property.auctionDetails.incrementAmount || 50000)
      : property.price
  );

  useEffect(() => {
    if (!property.auctionDetails?.endDate) return;
    
    const calculateTimeLeft = () => {
      const endTime = new Date(property.auctionDetails!.endDate).getTime();
      const now = new Date().getTime();
      const difference = endTime - now;
      
      if (difference <= 0) {
        setTimeLeft('Auction Ended');
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [property.auctionDetails?.endDate]);

  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setBidAmount(value);
    }
  };

  const handleBidSubmit = () => {
    if (onBid && property.auctionDetails) {
      onBid(property.id, bidAmount);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SAR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Property Image */}
        <div className="h-64 md:h-full">
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover"
            onClick={() => onViewDetails && onViewDetails(property.id)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        {/* Property Details */}
        <div className="p-6">
          <h3 
            className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
            onClick={() => onViewDetails && onViewDetails(property.id)}
          >
            {property.title}
          </h3>
          
          <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
            {property.description}
          </p>
          
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            <p>Location: {property.location}, {property.city}</p>
            <p>Property Type: {property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
            <p>Size: {property.area} m²</p>
          </div>
          
          <div className="flex items-center text-accent-600 dark:text-accent-400">
            <Clock size={18} className="mr-1" />
            <span>{timeLeft}</span>
          </div>
        </div>
        
        {/* Bidding Section */}
        <div className="bg-neutral-50 dark:bg-neutral-800 p-6 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Starting Price</p>
              <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                {formatPrice(property.auctionDetails?.startingPrice || property.price)}
              </p>
            </div>
            
            <div className="mb-6">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Current Bid</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {formatPrice(property.auctionDetails?.currentBid || property.price)}
              </p>
            </div>
            
            <div className="mb-4">
              <label htmlFor={`bid-${property.id}`} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Your Bid (SAR)
              </label>
              <div className="flex">
                <input
                  type="number"
                  id={`bid-${property.id}`}
                  value={bidAmount}
                  onChange={handleBidChange}
                  min={property.auctionDetails?.currentBid ? property.auctionDetails.currentBid + property.auctionDetails.incrementAmount : property.price}
                  step={property.auctionDetails?.incrementAmount || 50000}
                  className="flex-grow p-2 border border-neutral-300 dark:border-neutral-600 rounded-l-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                />
                <Button
                  variant="primary"
                  className="rounded-l-none"
                  aria-label="Increase bid"
                  onClick={() => setBidAmount(bidAmount + (property.auctionDetails?.incrementAmount || 50000))}
                >
                  <ArrowUp size={16} />
                </Button>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Min increment: {formatPrice(property.auctionDetails?.incrementAmount || 50000)}
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <Button
              variant="accent"
              fullWidth
              leftIcon={<Gavel size={16} />}
              onClick={handleBidSubmit}
            >
              Place Bid
            </Button>
            <Button
              variant="outline"
              fullWidth
              className="mt-2"
              onClick={() => onViewDetails && onViewDetails(property.id)}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AuctionItem;