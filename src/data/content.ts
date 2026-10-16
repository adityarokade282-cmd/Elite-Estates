import type { Service, Testimonial, Agent, PropertyCategory } from '@/types';

export const categories: PropertyCategory[] = [
  {
    id: 'buy',
    name: 'Buy Property',
    description: 'Find your perfect home from our curated selection of premium properties for sale.',
    image: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    purpose: 'Buy',
  },
  {
    id: 'rent',
    name: 'Rent Property',
    description: 'Browse quality rental homes and apartments in prime locations across India.',
    image: 'https://images.pexels.com/photos/7031712/pexels-photo-7031712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    purpose: 'Rent',
  },
  {
    id: 'luxury-homes',
    name: 'Luxury Homes',
    description: 'Exclusive estates and penthouses for those who seek the extraordinary.',
    image: 'https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    purpose: 'All',
  },
  {
    id: 'apartments',
    name: 'Apartments',
    description: 'Modern apartments with premium amenities in well-connected neighborhoods.',
    image: 'https://images.pexels.com/photos/30211361/pexels-photo-30211361.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    purpose: 'All',
  },
  {
    id: 'villas',
    name: 'Villas',
    description: 'Spacious villas with private gardens, pools, and world-class architecture.',
    image: 'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    purpose: 'All',
  },
  {
    id: 'commercial-properties',
    name: 'Commercial Properties',
    description: 'Prime office spaces and commercial units in top business districts.',
    image: 'https://images.pexels.com/photos/36631701/pexels-photo-36631701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    purpose: 'All',
  },
  {
    id: 'residential-plots',
    name: 'Residential Plots',
    description: 'Premium land parcels with clear titles in fast-developing areas.',
    image: 'https://images.pexels.com/photos/11201060/pexels-photo-11201060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    purpose: 'All',
  },
];

export const services: Service[] = [
  {
    id: 'residential-buying',
    title: 'Residential Property Buying',
    description: 'We help you find and acquire the perfect residential property, from apartments to luxury villas, with complete legal assistance.',
    icon: 'Home',
  },
  {
    id: 'property-selling',
    title: 'Property Selling',
    description: 'Get the best value for your property with our expert valuation, marketing, and negotiation services tailored to the market.',
    icon: 'TrendingUp',
  },
  {
    id: 'rental-services',
    title: 'Rental Services',
    description: 'Whether you are looking to rent or lease out your property, we handle tenant screening, agreements, and management.',
    icon: 'KeyRound',
  },
  {
    id: 'commercial-real-estate',
    title: 'Commercial Real Estate',
    description: 'Find the ideal office space, retail unit, or commercial property to power your business growth in prime locations.',
    icon: 'Building2',
  },
  {
    id: 'investment-consulting',
    title: 'Property Investment Consulting',
    description: 'Maximize your returns with data-driven investment advice and access to high-growth property opportunities.',
    icon: 'PiggyBank',
  },
  {
    id: 'property-valuation',
    title: 'Property Valuation Assistance',
    description: 'Accurate, professional property valuations based on market analysis, location trends, and comparable sales data.',
    icon: 'Calculator',
  },
];

export const agents: Agent[] = [
  {
    id: 'rajesh-mehta',
    name: 'Rajesh Mehta',
    title: 'Senior Property Consultant',
    phone: '+91 98765 43210',
    email: 'rajesh.mehta@eliteestates.demo',
    image: 'https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    properties: 120,
    experience: 15,
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Property Advisor',
    phone: '+91 98765 43211',
    email: 'priya.sharma@eliteestates.demo',
    image: 'https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    properties: 85,
    experience: 9,
  },
  {
    id: 'arjun-kapoor',
    name: 'Arjun Kapoor',
    title: 'Luxury Property Specialist',
    phone: '+91 98765 43212',
    email: 'arjun.kapoor@eliteestates.demo',
    image: 'https://images.pexels.com/photos/4797690/pexels-photo-4797690.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    properties: 60,
    experience: 12,
  },
  {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    title: 'Commercial Real Estate Expert',
    phone: '+91 98765 43213',
    email: 'vikram.singh@eliteestates.demo',
    image: 'https://images.pexels.com/photos/17023154/pexels-photo-17023154.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    properties: 95,
    experience: 11,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Desai',
    role: 'Homebuyer',
    location: 'Mumbai',
    rating: 5,
    text: 'Elite Estates made my dream of owning a home a reality. Their team was professional, transparent, and guided me through every step. I found my perfect apartment in Powai within weeks. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 't2',
    name: 'Rohan Patel',
    role: 'Investor',
    location: 'Pune',
    rating: 5,
    text: 'As a first-time investor, I was nervous about the property market. The investment consulting team at Elite Estates provided excellent data-driven advice. My residential plot investment has already appreciated 20% in two years.',
    avatar: 'https://images.pexels.com/photos/4797690/pexels-photo-4797690.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 't3',
    name: 'Sneha Reddy',
    role: 'Tenant',
    location: 'Bangalore',
    rating: 4,
    text: 'I rented a beautiful apartment in Whitefield through Elite Estates. The entire process was smooth and hassle-free. They handled the rental agreement and move-in coordination perfectly. Great service!',
    avatar: 'https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 't4',
    name: 'Karan Malhotra',
    role: 'Business Owner',
    location: 'Mumbai',
    rating: 5,
    text: 'I was looking for a commercial office space in BKC and Elite Estates found the perfect one within my budget. Their knowledge of the commercial market is outstanding. The negotiation saved me significantly on the purchase price.',
    avatar: 'https://images.pexels.com/photos/17023154/pexels-photo-17023154.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 't5',
    name: 'Divya Nair',
    role: 'Homeowner',
    location: 'Delhi',
    rating: 5,
    text: 'I sold my property through Elite Estates and was impressed by their marketing reach and professional approach. They got me multiple offers within the first month and helped me close at a price higher than I expected.',
    avatar: 'https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 't6',
    name: 'Aditya Joshi',
    role: 'NRI Investor',
    location: 'Dubai',
    rating: 5,
    text: 'Being an NRI, managing property investments in India was challenging. Elite Estates handled everything remotely, from property selection to legal paperwork. Their transparency and regular updates gave me complete peace of mind.',
    avatar: 'https://images.pexels.com/photos/4797690/pexels-photo-4797690.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export const companyStats = [
  { label: 'Properties Sold', value: '850+', icon: 'Home' },
  { label: 'Happy Clients', value: '1,200+', icon: 'Users' },
  { label: 'Years of Experience', value: '18+', icon: 'Award' },
  { label: 'Cities Covered', value: '12', icon: 'MapPin' },
];

export const contactInfo = {
  address: '401, Premier Plaza, Bandra West, Mumbai 400050, India',
  phone: '+91 98765 43210',
  email: 'contact@eliteestates.demo',
  whatsapp: '+91 98765 43210',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
};

export const propertyTypes = ['Villa', 'Apartment', 'Penthouse', 'Commercial', 'Flat', 'Plot'];
export const cities = ['Mumbai', 'Pune', 'Bangalore', 'Delhi', 'Navi Mumbai'];
export const budgetRanges = [
  { label: 'Under ₹50 Lakh', min: 0, max: 5000000 },
  { label: '₹50 Lakh - ₹1 Crore', min: 5000000, max: 10000000 },
  { label: '₹1 Crore - ₹2 Crore', min: 10000000, max: 20000000 },
  { label: 'Above ₹2 Crore', min: 20000000, max: 100000000 },
  { label: 'Any Budget', min: 0, max: 100000000 },
];
