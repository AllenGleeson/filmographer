// Application constants

export const APP_CONFIG = {
  name: 'Filmographer',
  description: 'Professional photography and videography services',
  url: 'https://filmographer.com',
  email: 'info@filmographer.com',
  phone: '(555) 123-4567',
  address: 'Your City, State 12345',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/filmographer',
  facebook: 'https://facebook.com/filmographer',
  twitter: 'https://twitter.com/filmographer',
  linkedin: 'https://linkedin.com/company/filmographer',
} as const;

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Wedding',
  'Portrait',
  'Event',
  'Family',
  'Commercial',
] as const;
