export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  logo: string; // Now represents the image filename
  url: string;
  features: string[];
  category: string;
  status: 'active' | 'beta' | 'coming-soon';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'RSVP.now',
    slug: 'rsvp-now',
    description: 'AI-enhanced event hosting platform with intelligent guest management',
    fullDescription: 'RSVP.now leverages AI to revolutionize event management with smart guest predictions, automated communication flows, and intelligent scheduling optimization. Our platform uses machine learning to predict attendance patterns, suggest optimal event timing, and automate personalized guest interactions.',
    logo: 'rsvp-now.png',
    url: 'https://rsvp.now',
    features: [
      'AI-powered attendance prediction',
      'Smart guest communication automation',
      'Intelligent event optimization',
      'Custom branding options',
      'Advanced analytics with ML insights'
    ],
    category: 'Events',
    status: 'active'
  },
  {
    id: '2',
    name: 'Zu.lk',
    slug: 'zu-lk',
    description: 'Premium URL shortener with advanced analytics and smart optimization',
    fullDescription: 'Zu.lk is a premium URL shortening service that provides detailed analytics and performance insights. Our platform offers custom domains, click tracking, and optimization features to help you better understand and improve your link performance.',
    logo: 'zulk-logo.svg',
    url: 'https://zu.lk',
    features: [
      'Custom short domains',
      'Advanced click analytics',
      'Performance optimization',
      'QR code generation',
      'Link management dashboard',
      'Detailed insights and reporting'
    ],
    category: 'Productivity',
    status: 'active'
  },
  {
    id: '3',
    name: 'CatchUp.AI',
    slug: 'catchup-ai',
    description: 'AI-powered news summarization with personalized insights',
    fullDescription: 'CatchUp.AI uses artificial intelligence to help you stay informed efficiently. Our platform analyzes news from multiple sources to provide personalized summaries, helping you catch up on what matters most without information overload.',
    logo: 'catchup-ai.png',
    url: 'https://catchup-ai.netlify.app',
    features: [
      'AI-powered news summarization',
      'Personalized content curation',
      'Multi-source news aggregation',
      'Clean, distraction-free reading',
      'Smart filtering and categorization'
    ],
    category: 'AI Intelligence',
    status: 'beta'
  },
  {
    id: '4',
    name: 'StartupLab',
    slug: 'startuplab',
    description: 'Comprehensive startup support platform for Sri Lankan entrepreneurs',
    fullDescription: 'StartupLab provides essential resources and support for startups in Sri Lanka. Our platform offers business plan guidance, compliance assistance, mentor connections, and networking opportunities to help entrepreneurs build successful companies.',
    logo: 'startuplab.png',
    url: 'https://startuplab.veventii.com',
    features: [
      'Business plan templates and guidance',
      'Mentor matching and connections',
      'Compliance and legal resources',
      'Networking events and community',
      'Funding and investment guidance'
    ],
    category: 'Business Tools',
    status: 'active'
  },
  {
    id: '5',
    name: 'Text Tools',
    slug: 'text-tools',
    description: 'Essential text processing and formatting tools for developers',
    fullDescription: 'Text Tools provides a comprehensive suite of text processing utilities for developers and content creators. From encoding and decoding to formatting and transformation, our tools help streamline your workflow with reliable, fast processing.',
    logo: 'text-tools.png',
    url: 'https://tools.veventii.com',
    features: [
      'Text encoding and decoding',
      'Format conversion tools',
      'String manipulation utilities',
      'Base64 encoding/decoding',
      'JSON formatting and validation'
    ],
    category: 'Developer Tools',
    status: 'active'
  },
  {
    id: '6',
    name: 'Kopi.today',
    slug: 'kopi-today',
    description: 'Coffee discovery and appreciation guide for enthusiasts',
    fullDescription: 'Kopi.today is your guide to discovering and appreciating great coffee. Whether you\'re exploring local cafes, learning about different brewing methods, or discovering new coffee varieties, our platform helps coffee enthusiasts enhance their coffee journey.',
    logo: 'kopi-today-logo.jpeg',
    url: 'https://kopi.today',
    features: [
      'Coffee shop discovery and reviews',
      'Brewing guides and techniques',
      'Coffee variety information',
      'Local cafe recommendations',
      'Coffee culture and education'
    ],
    category: 'Lifestyle',
    status: 'active'
  },
  {
    id: '7',
    name: 'Singapore Property Compass',
    slug: 'singapore-property-compass',
    description: 'Property market insights and tracking for Singapore home buyers',
    fullDescription: 'Singapore Property Compass helps home buyers navigate the Singapore property market with comprehensive data, market insights, and tracking tools. Our platform provides valuable information to help you make informed property investment decisions.',
    logo: 'singapore-property-compass.png',
    url: 'https://sg-property-compass.veventii.com',
    features: [
      'Property market data and trends',
      'Price tracking and analysis',
      'Neighborhood insights',
      'Investment analysis tools',
      'Market reports and updates'
    ],
    category: 'Real Estate',
    status: 'active'
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};