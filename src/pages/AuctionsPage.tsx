import React, { useState } from 'react';
import { properties } from '../data/properties';
import AuctionItem from '../components/features/AuctionItem';

const AuctionsPage: React.FC = () => {
  const auctionProperties = properties.filter(p => p.isAuction);
  
  const [userBids, setUserBids] = useState<Record<string, number>>({});
  
  const handleBid = (propertyId: string, amount: number) => {
    // In a real app, this would make an API call
    setUserBids({
      ...userBids,
      [propertyId]: amount,
    });
    
    // This is just for demo purposes to show a "success" UI update
    alert(`Bid placed for ${amount} SAR on property ${propertyId}`);
  };
  
  const handleViewDetails = (propertyId: string) => {
    // In a real app, this would use a router to navigate
    console.log('Viewing details for property:', propertyId);
  };
  
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Property Auctions
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Participate in our transparent and competitive auction system to bid on premium properties. All auctions are conducted in real-time with secure payment processing.
        </p>
      </div>
      
      {auctionProperties.length > 0 ? (
        <div className="space-y-8">
          {auctionProperties.map((property) => (
            <AuctionItem
              key={property.id}
              property={property}
              onBid={handleBid}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-neutral-800 rounded-lg shadow-card">
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            No active auctions at the moment.
          </h3>
          <p className="mt-2 text-neutral-500 dark:text-neutral-400">
            Please check back later for upcoming property auctions.
          </p>
        </div>
      )}
      
      {/* Auction Information */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">How Auctions Work</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Our auction system allows you to bid on premium properties in real-time. The highest bidder at the end of the auction period secures the right to purchase the property.
          </p>
        </div>
        
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Bidding Rules</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            All bids must exceed the current highest bid by at least the minimum increment amount. Once placed, bids cannot be retracted. All bidders must be registered users.
          </p>
        </div>
        
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">After Winning</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            If you win an auction, you'll be automatically notified and guided through the purchase process, including digital contract signing and payment options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuctionsPage;