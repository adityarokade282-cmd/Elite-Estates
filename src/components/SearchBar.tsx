import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { propertyTypes, cities, budgetRanges } from '@/data/content';

interface SearchBarProps {
  variant?: 'hero' | 'page';
}

export function SearchBar({ variant = 'hero' }: SearchBarProps) {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (propertyType) params.set('type', propertyType);
    if (budget) {
      const range = budgetRanges.find((b) => b.label === budget);
      if (range) {
        params.set('minPrice', String(range.min));
        params.set('maxPrice', String(range.max));
      }
    }
    if (bedrooms) params.set('bedrooms', bedrooms);
    navigate(`/properties?${params.toString()}`);
  };

  const inputClass =
    variant === 'hero'
      ? 'w-full bg-white text-[#0a1f3c] px-4 py-3 text-sm border border-gray-200 focus:border-[#c9a84a] focus:outline-none focus:ring-1 focus:ring-[#c9a84a] transition-all'
      : 'w-full bg-gray-50 text-[#0a1f3c] px-4 py-3 text-sm border border-gray-200 focus:border-[#c9a84a] focus:outline-none focus:ring-1 focus:ring-[#c9a84a] transition-all';

  const labelClass = 'text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1 block';

  return (
    <div
      className={`${
        variant === 'hero'
          ? 'bg-white/95 backdrop-blur-md p-6 shadow-2xl'
          : 'bg-white p-6 shadow-lg border border-gray-100'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className={labelClass}>Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={inputClass}
          >
            <option value="">Any Location</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
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
          <label className={labelClass}>Budget Range</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={inputClass}
          >
            <option value="">Any Budget</option>
            {budgetRanges.map((b) => (
              <option key={b.label} value={b.label}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className={inputClass}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="btn-gold w-full py-3"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
