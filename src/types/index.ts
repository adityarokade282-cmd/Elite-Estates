export interface Property {
  id: string;
  name: string;
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Commercial' | 'Flat' | 'Plot';
  purpose: 'Buy' | 'Rent';
  price: string;
  priceValue: number;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  amenities: string[];
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: string;
  };
  isFeatured: boolean;
  category: string[];
}

export interface PropertyCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  purpose: 'Buy' | 'Rent' | 'All';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  properties: number;
  experience: number;
}

export interface ContactInquiry {
  full_name: string;
  email: string;
  phone: string;
  property_type?: string;
  message: string;
}

export interface PropertyInquiry {
  property_id: string;
  property_name: string;
  full_name: string;
  email: string;
  phone: string;
  inquiry_type: string;
  message?: string;
}
