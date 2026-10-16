import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, Building2 } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  { name: 'Buy', path: '/buy' },
  { name: 'Rent', path: '/rent' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a1f3c] shadow-xl py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <div className="w-10 h-10 bg-[#c9a84a] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Building2 className="w-6 h-6 text-[#0a1f3c]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-white leading-none">
              Elite Estates
            </span>
            <span className="text-[10px] text-[#c9a84a] tracking-[0.2em] uppercase mt-0.5">
              Premium Real Estate
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                isActive(link.path) ? 'text-[#c9a84a]' : 'text-white hover:text-[#c9a84a]'
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#c9a84a] transition-all duration-300 ${
                  isActive(link.path) ? 'w-6' : 'w-0 group-hover:w-6'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/wishlist"
            className="relative p-2 text-white hover:text-[#c9a84a] transition-colors duration-300"
            aria-label="View wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#c9a84a] text-[#0a1f3c] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button onClick={() => handleNavClick('/list-property')} className="btn-gold text-sm py-3">
            List Your Property
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a1f3c] px-6 py-6 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-left px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-[#c9a84a] bg-white/5'
                  : 'text-white hover:text-[#c9a84a]'
              }`}
            >
              {link.name}
            </button>
          ))}
          <Link
            to="/wishlist"
            className="px-4 py-3 text-sm font-medium text-white hover:text-[#c9a84a] flex items-center gap-2"
          >
            <Heart className="w-4 h-4" />
            Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
          </Link>
          <button
            onClick={() => handleNavClick('/list-property')}
            className="btn-gold text-sm mt-3 w-full"
          >
            List Your Property
          </button>
        </div>
      </div>
    </nav>
  );
}
