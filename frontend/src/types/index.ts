// Common types used throughout the application

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface PortfolioCategory {
  id: string;
  name: string;
  count: number;
}
