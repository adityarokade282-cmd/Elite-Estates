import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';
import type { Property } from '@/types';
import { useWishlist } from '@/context/WishlistContext';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const favorited = isInWishlist(property.id);

  return (
    <div className="group bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Link to={`/property/${property.id}`}>
          <img
            src={property.image}
            alt={property.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#c9a84a] text-[#0a1f3c] text-xs font-bold px-3 py-1.5 tracking-wide uppercase">
            For {property.purpose}
          </span>
        </div>
        {/* Favorite */}
        <button
          onClick={() => toggleWishlist(property.id)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all duration-300"
          aria-label={favorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              favorited ? 'fill-[#c9a84a] text-[#c9a84a] scale-110' : 'text-gray-600'
            }`}
          />
        </button>
        {/* Price overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <span className="text-white font-serif text-2xl font-bold">{property.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <Link to={`/property/${property.id}`}>
          <h3 className="font-serif text-xl font-bold text-[#0a1f3c] group-hover:text-[#c9a84a] transition-colors duration-300 mb-2">
            {property.name}
          </h3>
        </Link>
        <p className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 text-[#c9a84a]" />
          {property.location}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-5 pb-5 border-b border-gray-100">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-[#c9a84a]" />
              {property.bedrooms} Bed
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-[#c9a84a]" />
              {property.bathrooms} Bath
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-[#c9a84a]" />
            {property.area} sq ft
          </span>
        </div>

        {/* Action */}
        <Link
          to={`/property/${property.id}`}
          className="flex items-center justify-between text-sm font-semibold text-[#0a1f3c] group/link"
        >
          <span className="group-hover/link:text-[#c9a84a] transition-colors">View Details</span>
          <span className="w-8 h-8 border border-[#c9a84a] flex items-center justify-center group-hover/link:bg-[#c9a84a] transition-all duration-300">
            <svg
              className="w-4 h-4 text-[#c9a84a] group-hover/link:text-[#0a1f3c] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
