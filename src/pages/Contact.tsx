import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { contactInfo } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Contact() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <section className="bg-[#0a1f3c] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10 text-center">
          <span className="fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84a] mb-3 block">
            Get in Touch
          </span>
          <h1 className="fade-in-up font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="fade-in-up text-gray-300 max-w-2xl mx-auto">
            Have questions about a property or our services? We are here to help. Reach out through
            any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="fade-in-up bg-white p-8 shadow-md text-center">
              <div className="w-14 h-14 bg-[#0a1f3c] flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-7 h-7 text-[#c9a84a]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a1f3c] mb-2">Visit Our Office</h3>
              <p className="text-sm text-gray-600">{contactInfo.address}</p>
            </div>
            <div className="fade-in-up bg-white p-8 shadow-md text-center">
              <div className="w-14 h-14 bg-[#0a1f3c] flex items-center justify-center mx-auto mb-5">
                <Phone className="w-7 h-7 text-[#c9a84a]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a1f3c] mb-2">Call Us</h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-sm text-gray-600 hover:text-[#c9a84a] transition-colors"
              >
                {contactInfo.phone}
              </a>
              <p className="text-xs text-gray-400 mt-2">{contactInfo.hours}</p>
            </div>
            <div className="fade-in-up bg-white p-8 shadow-md text-center">
              <div className="w-14 h-14 bg-[#0a1f3c] flex items-center justify-center mx-auto mb-5">
                <Mail className="w-7 h-7 text-[#c9a84a]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a1f3c] mb-2">Email Us</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-gray-600 hover:text-[#c9a84a] transition-colors break-all"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="fade-in-up">
              <h2 className="font-serif text-3xl font-bold text-[#0a1f3c] mb-2">Send Us an Inquiry</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Map & WhatsApp */}
            <div className="fade-in-up space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#0a1f3c] mb-2">Find Us on Map</h2>
                <p className="text-gray-600 mb-6">
                  Our office is conveniently located in Bandra West, Mumbai.
                </p>
                <div className="w-full h-80 bg-gray-100 overflow-hidden shadow-md">
                  <iframe
                    title="Office Location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#0a1f3c] p-8">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  Prefer to Chat on WhatsApp?
                </h3>
                <p className="text-sm text-gray-300 mb-5">
                  Get instant responses to your property queries. Our team is available on WhatsApp
                  during business hours.
                </p>
                <WhatsAppButton label="Start WhatsApp Chat" className="w-full" />
              </div>

              {/* Hours */}
              <div className="bg-gray-50 p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#c9a84a]" />
                  <h3 className="font-serif text-lg font-bold text-[#0a1f3c]">Business Hours</h3>
                </div>
                <p className="text-sm text-gray-600">{contactInfo.hours}</p>
                <p className="text-xs text-gray-400 mt-1">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
