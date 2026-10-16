import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Search } from 'lucide-react';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { propertyTypes, cities, budgetRanges } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Properties() {
  const [searchParams] = useSearchParams();
  const ref = useScrollAnimation<HTMLDivElement>();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [filters, setFilters] = useState({
    purpose: searchParams.get('purpose') || '',
    type: searchParams.get('type') || '',
    location: searchParams.get('location') || '',
    category: searchParams.get('category') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    bedrooms: searchParams.get('bedrooms') || '',
  });

  useEffect(() => {
    setFilters({
      purpose: searchParams.get('purpose') || '',
      type: searchParams.get('type') || '',
      location: searchParams.get('location') || '',
      category: searchParams.get('category') || '',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      bedrooms: searchParams.get('bedrooms') || '',
    });
  }, [searchParams]);

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (filters.purpose && p.purpose !== filters.purpose) return false;
      if (filters.type && p.type !== filters.type) return false;
      if (filters.location && p.city !== filters.location) return false;
      if (filters.category && !p.category.includes(filters.category)) return false;
      if (filters.minPrice && p.priceValue < Number(filters.minPrice)) return false;
      if (filters.maxPrice && p.priceValue > Number(filters.maxPrice)) return false;
      if (filters.bedrooms && p.bedrooms < Number(filters.bedrooms)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [filters, searchQuery]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      purpose: '',
      type: '',
      location: '',
      category: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
    });
    setSearchQuery('');
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== '') || searchQuery !== '';

  const inputClass =
    'w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-[#0a1f3c] focus:border-[#c9a84a] focus:outline-none focus:ring-1 focus:ring-[#c9a84a] transition-all';
  const labelClass = 'text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5 block';

  const FilterContent = () => (
    <div className="space-y-5">
      <div>
        <label className={labelClass}>Purpose</label>
        <select
          value={filters.purpose}
          onChange={(e) => handleFilterChange('purpose', e.target.value)}
          className={inputClass}
        >
          <option value="">All</option>
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Property Type</label>
        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className={inputClass}
        >
          <option value="">All Types</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>Location</label>
        <select
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className={inputClass}
        >
          <option value="">All Locations</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>Budget Range</label>
        <select
          value={filters.minPrice ? `${filters.minPrice}-${filters.maxPrice}` : ''}
          onChange={(e) => {
            const val = e.target.value;
            if (val) {
              const [min, max] = val.split('-');
              setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
            } else {
              setFilters((prev) => ({ ...prev, minPrice: '', maxPrice: '' }));
            }
          }}
          className={inputClass}
        >
          <option value="">Any Budget</option>
          {budgetRanges
            .filter((b) => b.label !== 'Any Budget')
            .map((b) => (
              <option key={b.label} value={`${b.min}-${b.max}`}>
                {b.label}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>Min Bedrooms</label>
        <select
          value={filters.bedrooms}
          onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
          className={inputClass}
        >
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full text-sm text-[#c9a84a] font-semibold border border-[#c9a84a] py-2.5 hover:bg-[#c9a84a] hover:text-[#0a1f3c] transition-all"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={ref} className="pt-20">
      {/* Page Header */}
      <section className="bg-[#0a1f3c] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10">
          <span className="fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84a] mb-3 block">
            Browse Properties
          </span>
          <h1 className="fade-in-up font-serif text-4xl md:text-5xl font-bold text-white">
            {filters.category || 'All Properties'}
          </h1>
          <p className="fade-in-up text-gray-400 mt-3">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="section-padding">
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="bg-white p-6 shadow-md border border-gray-100 sticky top-28">
                <h3 className="font-serif text-lg font-bold text-[#0a1f3c] mb-5 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-[#c9a84a]" />
                  Filters
                </h3>
                <FilterContent />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search & Mobile Filter Toggle */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, location, or type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-gray-200 pl-12 pr-4 py-3 text-sm focus:border-[#c9a84a] focus:outline-none focus:ring-1 focus:ring-[#c9a84a] transition-all"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden btn-navy py-3 px-5"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
              </div>

              {/* Results */}
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map((property, i) => (
                    <div
                      key={property.id}
                      className="fade-in-up"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <PropertyCard property={property} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 text-center shadow-md">
                  <p className="text-gray-500 text-lg mb-4">
                    No properties match your current filters.
                  </p>
                  <button onClick={clearFilters} className="btn-gold">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="relative bg-white w-80 max-w-[85%] h-full overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg font-bold text-[#0a1f3c]">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="p-2">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setShowFilters(false)}
              className="btn-gold w-full mt-6"
            >
              Show {filteredProperties.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
