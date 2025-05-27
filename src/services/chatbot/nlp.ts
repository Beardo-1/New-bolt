import natural from 'natural';
import { ChatMessage } from '../../types';

const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier();

// Train the classifier with common real estate queries
const trainClassifier = () => {
  // Property Search
  classifier.addDocument('show me properties in Riyadh', 'property_search');
  classifier.addDocument('find villas in Jeddah', 'property_search');
  classifier.addDocument('apartments for rent', 'property_search');
  
  // Price Inquiries
  classifier.addDocument('what is the price', 'price_inquiry');
  classifier.addDocument('how much does it cost', 'price_inquiry');
  classifier.addDocument('payment terms', 'price_inquiry');
  
  // Auction Related
  classifier.addDocument('how do auctions work', 'auction_info');
  classifier.addDocument('bidding process', 'auction_info');
  classifier.addDocument('current auction status', 'auction_info');
  
  // Property Features
  classifier.addDocument('tell me about amenities', 'property_features');
  classifier.addDocument('what features are included', 'property_features');
  classifier.addDocument('parking availability', 'property_features');
  
  classifier.train();
};

trainClassifier();

const processMessage = (message: string): string => {
  const tokens = tokenizer.tokenize(message.toLowerCase());
  const classification = classifier.classify(message);
  
  // Basic response templates based on classification
  const responses: Record<string, string[]> = {
    property_search: [
      "I'll help you find the perfect property. Could you specify your preferred location and budget?",
      "Let me search our database for properties matching your criteria.",
      "I can show you available properties. What specific features are you looking for?"
    ],
    price_inquiry: [
      "I can help you with pricing information. Which property are you interested in?",
      "Would you like to know about our payment plans and financing options?",
      "I can provide you with detailed pricing and payment terms."
    ],
    auction_info: [
      "Our auction system is designed to be transparent and fair. Would you like to know more about the bidding process?",
      "I can guide you through the auction registration and bidding process.",
      "Let me explain how our property auctions work."
    ],
    property_features: [
      "I can tell you about all the features and amenities of our properties.",
      "Would you like to know about specific features or general amenities?",
      "Our properties come with various premium features. What specifically interests you?"
    ]
  };

  const categoryResponses = responses[classification];
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
};

export const generateResponse = (messages: ChatMessage[]): string => {
  const lastMessage = messages[messages.length - 1];
  return processMessage(lastMessage.content);
};