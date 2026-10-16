import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Trash2 } from 'lucide-react';
import { PropertyCard } from '@/components/PropertyCard';
import { useWishlist } from '@/context/WishlistContext';
import { properties } from '@/data/properties';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Wishlist() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const { wishlist } = useWishlist();
  const wishlistedProperties = properties.filter((p) => wishlist.includes(p.id));

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <section className="bg-[#0a1f3c] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10 text-center">
          <Heart className="fade-in-up w-10 h-10 text-[#c9a84a] mx-auto mb-3 fill-[#c9a84a]" />
          <h1 className="fade-in-up font-serif text-4xl md:text-5xl font-bold text-white">
            Your Wishlist
          </h1>
          <p className="fade-in-up text-gray-400 mt-3">
            {wishlistedProperties.length} {wishlistedProperties.length === 1 ? 'property' : 'properties'} saved
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50 min-h-[60vh]">
        <div className="section-padding">
          {wishlistedProperties.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlistedProperties.map((property, i) => (
                  <div key={property.id} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
              <div className="fade-in-up text-center mt-12">
                <Link to="/properties" className="btn-navy">
                  Browse More Properties
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </>
          ) : (
            <div className="fade-in-up max-w-lg mx-auto text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-gray-300" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#0a1f3c] mb-3">
                Your Wishlist is Empty
              </h2>
              <p className="text-gray-500 mb-8">
                Start saving properties you love by clicking the heart icon on any property card.
              </p>
              <Link to="/properties" className="btn-gold">
                Explore Properties
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
