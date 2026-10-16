import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
  Star,
  Home as HomeIcon,
} from 'lucide-react';
import { getPropertyById, getSimilarProperties } from '@/data/properties';
import { PropertyCard } from '@/components/PropertyCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { supabase } from '@/lib/supabase';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';

export function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const ref = useScrollAnimation<HTMLDivElement>();
  const property = id ? getPropertyById(id) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [scheduleStatus, setScheduleStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [scheduleForm, setScheduleForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!property) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-[#0a1f3c] mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you are looking for does not exist.</p>
          <Link to="/properties" className="btn-gold">
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const similar = getSimilarProperties(property, 3);

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setScheduleStatus('loading');
    try {
      const { error } = await supabase.from('property_inquiries').insert({
        property_id: property.id,
        property_name: property.name,
        full_name: scheduleForm.full_name,
        email: scheduleForm.email,
        phone: scheduleForm.phone,
        inquiry_type: 'schedule_visit',
        message: scheduleForm.message || `Requesting a visit for ${property.name}`,
      });
      if (error) throw error;
      setScheduleStatus('success');
      setScheduleForm({ full_name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setScheduleStatus('error');
    }
  };

  const whatsappMessage = `Hello, I am interested in ${property.name} (${property.price}) at ${property.location}. Could you please provide more information?`;

  return (
    <div ref={ref} className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="section-padding flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#c9a84a]">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-[#c9a84a]">Properties</Link>
          <span>/</span>
          <span className="text-[#0a1f3c] font-medium">{property.name}</span>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-8 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Image */}
            <div className="lg:col-span-2 fade-in-up">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-lg group">
                <img
                  src={property.gallery[activeImage]}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#c9a84a] text-[#0a1f3c] text-xs font-bold px-3 py-1.5 tracking-wide uppercase">
                    For {property.purpose}
                  </span>
                </div>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="fade-in-up flex flex-col gap-3 h-[400px] md:h-[500px] overflow-y-auto">
              {property.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-24 md:h-28 overflow-hidden flex-shrink-0 transition-all duration-300 ${
                    activeImage === i ? 'ring-2 ring-[#c9a84a]' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${property.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="fade-in-up bg-white p-8 shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0a1f3c] mb-2">
                      {property.name}
                    </h1>
                    <p className="flex items-center gap-2 text-gray-500">
                      <MapPin className="w-5 h-5 text-[#c9a84a]" />
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl font-bold text-[#c9a84a]">{property.price}</p>
                    <p className="text-sm text-gray-500">{property.type}</p>
                  </div>
                </div>

                {/* Key Specs */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100">
                  {property.bedrooms > 0 && (
                    <div className="text-center">
                      <Bed className="w-6 h-6 text-[#c9a84a] mx-auto mb-2" />
                      <p className="font-serif text-2xl font-bold text-[#0a1f3c]">{property.bedrooms}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Bedrooms</p>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="text-center">
                      <Bath className="w-6 h-6 text-[#c9a84a] mx-auto mb-2" />
                      <p className="font-serif text-2xl font-bold text-[#0a1f3c]">{property.bathrooms}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Bathrooms</p>
                    </div>
                  )}
                  <div className="text-center">
                    <Maximize className="w-6 h-6 text-[#c9a84a] mx-auto mb-2" />
                    <p className="font-serif text-2xl font-bold text-[#0a1f3c]">{property.area}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Sq Ft</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="fade-in-up bg-white p-8 shadow-md">
                <h2 className="font-serif text-2xl font-bold text-[#0a1f3c] mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features & Amenities */}
              <div className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 shadow-md">
                  <h2 className="font-serif text-xl font-bold text-[#0a1f3c] mb-5">Features</h2>
                  <ul className="space-y-3">
                    {property.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#c9a84a] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 shadow-md">
                  <h2 className="font-serif text-xl font-bold text-[#0a1f3c] mb-5">Amenities</h2>
                  <ul className="space-y-3">
                    {property.amenities.map((amenity) => (
                      <li key={amenity} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#c9a84a] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Location Map */}
              <div className="fade-in-up bg-white p-8 shadow-md">
                <h2 className="font-serif text-2xl font-bold text-[#0a1f3c] mb-4">Location</h2>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 text-[#c9a84a]" />
                  {property.location}
                </div>
                <div className="w-full h-64 bg-gray-100 overflow-hidden">
                  <iframe
                    title="Property Location Map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              <div className="fade-in-up bg-white p-6 shadow-md sticky top-28">
                <div className="text-center mb-5">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                  />
                  <h3 className="font-serif text-lg font-bold text-[#0a1f3c]">{property.agent.name}</h3>
                  <p className="text-sm text-[#c9a84a]">{property.agent.title}</p>
                </div>
                <div className="space-y-3 py-5 border-y border-gray-100">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#c9a84a] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#c9a84a]" />
                    {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#c9a84a] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#c9a84a] flex-shrink-0" />
                    {property.agent.email}
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mt-5">
                  <button
                    onClick={() => setShowScheduleForm(!showScheduleForm)}
                    className="btn-gold w-full"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule a Visit
                  </button>
                  <WhatsAppButton
                    message={whatsappMessage}
                    label="WhatsApp Inquiry"
                    className="w-full"
                  />
                  <Link to="/contact" className="btn-navy w-full">
                    <Mail className="w-4 h-4" />
                    Contact Agent
                  </Link>
                </div>

                {/* Schedule Form */}
                {showScheduleForm && (
                  <form onSubmit={handleScheduleSubmit} className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                    {scheduleStatus === 'success' ? (
                      <div className="text-center py-4">
                        <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-700 font-medium">
                          Visit request submitted! We will contact you shortly.
                        </p>
                      </div>
                    ) : (
                      <>
                        <h4 className="font-serif text-base font-bold text-[#0a1f3c]">
                          Schedule Your Visit
                        </h4>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={scheduleForm.full_name}
                          onChange={(e) =>
                            setScheduleForm({ ...scheduleForm, full_name: e.target.value })
                          }
                          className="w-full bg-gray-50 border border-gray-200 px-3 py-2.5 text-sm focus:border-[#c9a84a] focus:outline-none transition-all"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={scheduleForm.email}
                          onChange={(e) =>
                            setScheduleForm({ ...scheduleForm, email: e.target.value })
                          }
                          className="w-full bg-gray-50 border border-gray-200 px-3 py-2.5 text-sm focus:border-[#c9a84a] focus:outline-none transition-all"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={scheduleForm.phone}
                          onChange={(e) =>
                            setScheduleForm({ ...scheduleForm, phone: e.target.value })
                          }
                          className="w-full bg-gray-50 border border-gray-200 px-3 py-2.5 text-sm focus:border-[#c9a84a] focus:outline-none transition-all"
                        />
                        <textarea
                          rows={2}
                          placeholder="Preferred date & time (optional)"
                          value={scheduleForm.message}
                          onChange={(e) =>
                            setScheduleForm({ ...scheduleForm, message: e.target.value })
                          }
                          className="w-full bg-gray-50 border border-gray-200 px-3 py-2.5 text-sm focus:border-[#c9a84a] focus:outline-none transition-all"
                        />
                        {scheduleStatus === 'error' && (
                          <div className="flex items-center gap-2 text-sm text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            Failed to submit. Please try again.
                          </div>
                        )}
                        <button
                          type="submit"
                          disabled={scheduleStatus === 'loading'}
                          className="btn-gold w-full disabled:opacity-60"
                        >
                          {scheduleStatus === 'loading' ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Request Visit
                            </>
                          )}
                        </button>
                      </>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similar.length > 0 && (
        <section className="py-20 bg-white">
          <div className="section-padding">
            <div className="fade-in-up flex items-center justify-between mb-10">
              <h2 className="font-serif text-3xl font-bold text-[#0a1f3c]">Similar Properties</h2>
              <Link
                to="/properties"
                className="text-sm font-semibold text-[#c9a84a] hover:underline flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similar.map((p, i) => (
                <div key={p.id} className="fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <PropertyCard property={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
