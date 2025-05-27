import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Al Fauzan Real Estate</h3>
            <p className="mb-4">A prominent Saudi real estate firm with decades of experience in the real estate market, providing premium properties and excellent service.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="/properties" className="hover:text-primary-500 transition-colors">Properties</a>
              </li>
              <li>
                <a href="/auctions" className="hover:text-primary-500 transition-colors">Auctions</a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-500 transition-colors">Contact</a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-primary-500 transition-colors">Dashboard</a>
              </li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Properties</h3>
            <ul className="space-y-2">
              <li>
                <a href="/properties?type=villa" className="hover:text-primary-500 transition-colors">Villas</a>
              </li>
              <li>
                <a href="/properties?type=apartment" className="hover:text-primary-500 transition-colors">Apartments</a>
              </li>
              <li>
                <a href="/properties?type=commercial" className="hover:text-primary-500 transition-colors">Commercial</a>
              </li>
              <li>
                <a href="/properties?type=land" className="hover:text-primary-500 transition-colors">Land</a>
              </li>
              <li>
                <a href="/properties?type=office" className="hover:text-primary-500 transition-colors">Offices</a>
              </li>
              <li>
                <a href="/auctions" className="hover:text-primary-500 transition-colors">Auction Properties</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>King Fahd Road, Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+966 11 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@alfauzan.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Al Fauzan Real Estate. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="/cookies" className="hover:text-primary-500 transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;