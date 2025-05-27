import React from 'react';
import HeroSection from '../components/features/HeroSection';
import PropertySlider from '../components/features/PropertySlider';
import { properties } from '../data/properties';
import { Home, Building, DollarSign, Gavel, Users, FileText } from 'lucide-react';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
  const featuredProperties = properties.filter(p => p.isFeatured);
  const auctionProperties = properties.filter(p => p.isAuction);
  
  const navigateToProperty = (id: string) => {
    // In a real app, this would use a router to navigate
    console.log('Navigating to property:', id);
  };
  
  return (
    <div>
      <HeroSection />
      
      {/* Featured Properties */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <PropertySlider 
            title="Featured Properties" 
            properties={featuredProperties} 
            onPropertyClick={navigateToProperty} 
          />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 px-4 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Our Services</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Al Fauzan Real Estate offers comprehensive services to meet all your property needs in Saudi Arabia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Sales */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 mb-6">
                <Home size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Property Sales</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Find your perfect home or investment property with our extensive selection of premium real estate.
              </p>
              <Button variant="outline" href="/properties">
                Browse Properties
              </Button>
            </div>
            
            {/* Property Rentals */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 mb-6">
                <Building size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Property Rentals</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Discover a wide range of rental properties tailored to your lifestyle and budget requirements.
              </p>
              <Button variant="outline" href="/properties?status=for_rent">
                Rental Properties
              </Button>
            </div>
            
            {/* Property Auctions */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-800 text-accent-600 dark:text-accent-300 mb-6">
                <Gavel size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Property Auctions</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Participate in our transparent auction system to bid on premium properties at competitive prices.
              </p>
              <Button variant="outline" href="/auctions">
                View Auctions
              </Button>
            </div>
            
            {/* Property Management */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Property Management</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Let us handle the day-to-day operations of your investment properties for maximum returns.
              </p>
              <Button variant="outline" href="/services">
                Learn More
              </Button>
            </div>
            
            {/* Investment Advisory */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 mb-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Investment Advisory</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Our experts provide strategic guidance to maximize your real estate investment potential.
              </p>
              <Button variant="outline" href="/services">
                Our Expertise
              </Button>
            </div>
            
            {/* Digital Contracts */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-800 text-accent-600 dark:text-accent-300 mb-6">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Digital Contracts</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Secure, transparent and efficient digital contracts for all your real estate transactions.
              </p>
              <Button variant="outline" href="/services">
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Auction Properties */}
      {auctionProperties.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Live Auctions</h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Bid on exclusive properties through our transparent and competitive auction platform.
              </p>
              <Button variant="primary" className="mt-4" href="/auctions">
                View All Auctions
              </Button>
            </div>
            <PropertySlider 
              title="Auction Properties" 
              properties={auctionProperties} 
              onPropertyClick={navigateToProperty} 
            />
          </div>
        </section>
      )}
      
      {/* Statistics Section */}
      <section className="py-16 px-4 bg-primary-600 dark:bg-primary-800 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg">Properties</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Cities</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Clients</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">What Our Clients Say</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with Al Fauzan Real Estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">Mohammed Al Harbi</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Property Investor</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                "I've been investing in real estate for over 10 years, and Al Fauzan has consistently provided the best service and investment opportunities in the market."
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">Sara Al Qahtani</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Homeowner</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                "The digital contract process was seamless, and their auction platform allowed me to find my dream home at a fair price. Highly recommended!"
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">Fahad Al Otaibi</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Business Owner</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                "Finding the right commercial property was crucial for my business. Al Fauzan's team understood my needs perfectly and found the ideal location."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Let us help you find the perfect property that meets all your requirements and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-accent-600 hover:bg-neutral-100"
              href="/properties"
            >
              Browse Properties
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              href="/contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;