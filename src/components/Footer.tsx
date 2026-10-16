import { Link } from 'react-router-dom';
import { Building2, Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/data/content';

export function Footer() {
  return (
    <footer className="bg-[#061226] text-white pt-20 pb-8">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-[#c9a84a] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#0a1f3c]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none">Elite Estates</span>
                <span className="text-[10px] text-[#c9a84a] tracking-[0.2em] uppercase mt-0.5">
                  Premium Real Estate
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Elite Estates is a premium real estate agency dedicated to helping you find your dream
              property. With over 18 years of experience, we offer expert guidance in buying, selling,
              and renting properties across India. (Demo website)
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-[#c9a84a] hover:border-[#c9a84a] hover:text-[#0a1f3c] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-[#c9a84a]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Properties', path: '/properties' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
                { name: 'List Your Property', path: '/list-property' },
                { name: 'Wishlist', path: '/wishlist' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#c9a84a] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Categories */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-[#c9a84a]">Property Categories</h4>
            <ul className="space-y-3">
              {[
                { name: 'Buy Property', path: '/buy' },
                { name: 'Rent Property', path: '/rent' },
                { name: 'Luxury Homes', path: '/properties?category=Luxury+Homes' },
                { name: 'Apartments', path: '/properties?category=Apartments' },
                { name: 'Villas', path: '/properties?category=Villas' },
                { name: 'Commercial Properties', path: '/properties?category=Commercial+Properties' },
                { name: 'Residential Plots', path: '/properties?category=Residential+Plots' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#c9a84a] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-[#c9a84a]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a84a] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9a84a] flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-gray-400 hover:text-[#c9a84a] transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9a84a] flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-400 hover:text-[#c9a84a] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1da851] transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Elite Estates. All rights reserved. (Demo Website)
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-[#c9a84a] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#c9a84a] transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
