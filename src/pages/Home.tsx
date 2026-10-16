import { Link } from 'react-router-dom';
import {
  Search,
  Home as HomeIcon,
  TrendingUp,
  KeyRound,
  Building2,
  PiggyBank,
  Calculator,
  Users,
  Award,
  MapPin,
  Star,
  Quote,
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
} from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { PropertyCard } from '@/components/PropertyCard';
import { SectionHeading } from '@/components/SectionHeading';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getFeaturedProperties } from '@/data/properties';
import { categories, services, testimonials, agents, companyStats } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  TrendingUp,
  KeyRound,
  Building2,
  PiggyBank,
  Calculator,
  Users,
  Award,
  MapPin,
};

const statIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  Users,
  Award,
  MapPin,
};

export function Home() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const featured = getFeaturedProperties();

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury home exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f3c]/80 via-[#0a1f3c]/60 to-[#0a1f3c]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-padding pt-32 pb-20 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <span className="fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a84a] mb-4 block">
              Welcome to Elite Estates
            </span>
            <h1 className="fade-in-up font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Find Your Dream Property
              <br />
              <span className="text-[#c9a84a]">With Elite Estates</span>
            </h1>
            <p className="fade-in-up text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              Discover premium homes, apartments, commercial spaces, and investment opportunities
              across India most sought-after locations.
            </p>
            <div className="fade-in-up flex flex-wrap gap-4 justify-center mb-16">
              <Link to="/properties" className="btn-gold">
                Explore Properties
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/list-property" className="btn-outline-white">
                List Your Property
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Contact Our Experts
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="fade-in-up max-w-6xl mx-auto">
            <SearchBar variant="hero" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#c9a84a] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="Featured Listings"
              title="Premium Properties for You"
              subtitle="Explore our handpicked selection of the finest properties available in the market."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property, i) => (
              <div key={property.id} className="fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
          <div className="fade-in-up text-center mt-12">
            <Link to="/properties" className="btn-navy">
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="Browse by Category"
              title="Explore Property Categories"
              subtitle="Whether you are buying, renting, or investing, find the right property type for your needs."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to={
                  cat.purpose === 'Buy'
                    ? '/buy'
                    : cat.purpose === 'Rent'
                    ? '/rent'
                    : `/properties?category=${encodeURIComponent(cat.name)}`
                }
                className="fade-in-up group relative h-72 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#c9a84a] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2 mb-3">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#c9a84a]">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#0a1f3c] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="fade-in-up relative">
              <img
                src="https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury penthouse interior"
                loading="lazy"
                className="w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#c9a84a] p-8 shadow-xl hidden md:block">
                <p className="font-serif text-4xl font-bold text-[#0a1f3c]">18+</p>
                <p className="text-sm text-[#0a1f3c] font-medium">Years of Excellence</p>
              </div>
            </div>

            {/* Content */}
            <div className="fade-in-up">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84a] mb-3 block">
                About Elite Estates
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Your Trusted Partner in Real Estate
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Elite Estates has been a cornerstone of the Indian real estate industry for over 18
                years. We specialize in connecting discerning clients with exceptional properties that
                match their lifestyle and investment goals. Our commitment to transparency,
                professionalism, and client satisfaction sets us apart.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From luxury villas and penthouses to commercial spaces and residential plots, our
                portfolio spans the most desirable locations across India. (Demo website content)
              </p>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="border-l-2 border-[#c9a84a] pl-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-[#c9a84a]" />
                    <h4 className="font-serif text-lg font-bold text-white">Our Mission</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    To make property buying, selling, and renting seamless and transparent for every
                    client.
                  </p>
                </div>
                <div className="border-l-2 border-[#c9a84a] pl-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-[#c9a84a]" />
                    <h4 className="font-serif text-lg font-bold text-white">Our Vision</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    To be India most trusted real estate brand, setting benchmarks in service and
                    integrity.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Verified Property Listings',
                  'Expert Legal Assistance',
                  'Transparent Dealings',
                  'Dedicated Client Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a84a] flex-shrink-0" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-outline-gold">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, i) => {
              const Icon = statIconMap[stat.icon] || HomeIcon;
              return (
                <div
                  key={stat.label}
                  className="fade-in-up text-center group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-[#0a1f3c] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c9a84a] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#c9a84a] group-hover:text-[#0a1f3c] transition-colors" />
                  </div>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-[#0a1f3c] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-[10px] text-gray-400 mt-1">(Demo statistics)</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="What We Offer"
              title="Our Premium Services"
              subtitle="Comprehensive real estate solutions tailored to meet your every need."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || HomeIcon;
              return (
                <div
                  key={service.id}
                  className="fade-in-up group bg-gray-50 p-8 border border-gray-100 hover:border-[#c9a84a] hover:shadow-xl transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-[#0a1f3c] flex items-center justify-center mb-5 group-hover:bg-[#c9a84a] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#c9a84a] group-hover:text-[#0a1f3c] transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0a1f3c] mb-3 group-hover:text-[#c9a84a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="Meet the Team"
              title="Our Expert Agents"
              subtitle="Experienced professionals dedicated to finding your perfect property."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, i) => (
              <div
                key={agent.id}
                className="fade-in-up group bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] to-transparent opacity-60" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-[#0a1f3c] mb-1">{agent.name}</h3>
                  <p className="text-sm text-[#c9a84a] mb-3">{agent.title}</p>
                  <div className="flex justify-center gap-6 text-xs text-gray-500">
                    <span>
                      <strong className="text-[#0a1f3c] block text-base">{agent.properties}</strong>
                      Properties
                    </span>
                    <span>
                      <strong className="text-[#0a1f3c] block text-base">{agent.experience}</strong>
                      Years Exp.
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a1f3c] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="Client Stories"
              title="What Our Clients Say"
              subtitle="Real experiences from people who found their dream property with us."
              light
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className="fade-in-up bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#c9a84a]/50 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-[#c9a84a] mb-4 opacity-50" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < testimonial.rating
                          ? 'fill-[#c9a84a] text-[#c9a84a]'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">
                      {testimonial.role}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">
            (These testimonials are demo content for showcase purposes.)
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0a1f3c] to-[#14315b] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84a]/10 rounded-full blur-3xl" />
        <div className="section-padding relative z-10 text-center">
          <div className="fade-in-up max-w-3xl mx-auto">
            <ShieldCheck className="w-12 h-12 text-[#c9a84a] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Get in touch with our expert team today. We will guide you through every step of your
              property journey, from search to final possession.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold">
                Contact Our Experts
                <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton
                label="Chat on WhatsApp"
                className="btn-outline-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
