import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchBar } from '@/components/SearchBar';
import { SectionHeading } from '@/components/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getPropertiesByPurpose } from '@/data/properties';
import { categories } from '@/data/content';

interface BuyRentPageProps {
  purpose: 'Buy' | 'Rent';
}

export function BuyRentPage({ purpose }: BuyRentPageProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  const properties = getPropertiesByPurpose(purpose);
  const relevantCategories = categories.filter(
    (c) => c.purpose === purpose || c.purpose === 'All'
  );

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <section className="bg-[#0a1f3c] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10 text-center">
          <span className="fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84a] mb-3 block">
            Elite Estates
          </span>
          <h1 className="fade-in-up font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Properties for {purpose}
          </h1>
          <p className="fade-in-up text-gray-300 max-w-2xl mx-auto">
            Browse our curated collection of premium properties available for {purpose.toLowerCase()} across
            India top locations. {properties.length} properties available.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="fade-in-up">
            <SearchBar variant="page" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="Browse by Type"
              title={`Popular ${purpose} Categories`}
              center
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {relevantCategories.map((cat, i) => (
              <Link
                key={cat.id}
                to={`/properties?category=${encodeURIComponent(cat.name)}`}
                className="fade-in-up group relative h-32 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c]/90 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 font-serif text-sm font-bold text-white group-hover:text-[#c9a84a] transition-colors">
                  {cat.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="Available Now"
              title={`${properties.length} Properties for ${purpose}`}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, i) => (
              <div key={property.id} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
