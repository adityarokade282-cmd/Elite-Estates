import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Loader2, CheckCircle, AlertCircle, ArrowRight, Home as HomeIcon, Tag, MapPin } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { propertyTypes, cities } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function ListProperty() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    property_type: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        property_type: form.property_type || null,
        message: `[Property Listing Request] ${form.message}`,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', property_type: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or contact us directly.'
      );
    }
  };

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[#0a1f3c] focus:border-[#c9a84a] focus:outline-none focus:ring-1 focus:ring-[#c9a84a] transition-all';
  const labelClass = 'text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2 block';

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <section className="bg-[#0a1f3c] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10 text-center">
          <span className="fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84a] mb-3 block">
            Property Owners
          </span>
          <h1 className="fade-in-up font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            List Your Property
          </h1>
          <p className="fade-in-up text-gray-300 max-w-2xl mx-auto">
            Reach thousands of potential buyers and tenants. List your property with Elite Estates
            and let our expert team help you get the best value.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: HomeIcon, title: 'Wide Reach', desc: 'Your property gets listed across our network and reaches 1,200+ active clients.' },
              { icon: Tag, title: 'Best Price', desc: 'Our expert valuation and negotiation ensure you get the maximum value for your property.' },
              { icon: MapPin, title: 'Local Expertise', desc: 'Our agents have deep knowledge of local markets across 12 Indian cities.' },
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="fade-in-up bg-white p-8 shadow-md text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-[#c9a84a] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#0a1f3c]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0a1f3c] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="section-padding max-w-2xl mx-auto">
          <div className="fade-in-up text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0a1f3c] mb-2">
              Submit Your Property Details
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will contact you within 24 hours to discuss listing your property.
            </p>
          </div>

          {status === 'success' ? (
            <div className="fade-in-up bg-gray-50 p-8 shadow-md text-center border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0a1f3c] mb-2">Request Received!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for choosing Elite Estates. Our team will contact you within 24 hours to
                discuss your property listing.
              </p>
              <Link to="/" className="btn-navy">
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="fade-in-up bg-gray-50 p-8 shadow-md border border-gray-100 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="full_name">Full Name *</label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    value={form.full_name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="property_type">Property Type</label>
                  <select
                    id="property_type"
                    name="property_type"
                    value={form.property_type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Type</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="message">Property Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Include property location, size, number of rooms, expected price, and any other relevant details..."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Listing Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
