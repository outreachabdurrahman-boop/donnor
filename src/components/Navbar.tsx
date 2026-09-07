import { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, MessageCircle, Flame } from 'lucide-react';
import { RESTAURANT } from '../data/restaurantData';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'The Craving', href: '#signature' },
    { label: 'From Oven To Slice', href: '#experience' },
    { label: 'Categories', href: '#showcase' },
    { label: 'Cheese Pull', href: '#cheese-moment' },
    { label: 'Find Us', href: '#location' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCFAF7]/95 backdrop-blur-md shadow-xs border-b border-[#EADFCF]/70 py-3'
          : 'bg-gradient-to-b from-[#FCFAF7]/90 via-[#FCFAF7]/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Location Tag */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Donnor Pizza Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#E23E28] to-[#B32310] flex items-center justify-center text-white shadow-md shadow-[#E23E28]/25 group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-[#FED8B1]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1E1E1E] leading-tight flex items-center gap-1.5">
                DONNOR <span className="text-[#E23E28]">PIZZA</span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#686259] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#2E7D32]" />
                G-13, Islamabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#4A453E] hover:text-[#E23E28] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E23E28] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={RESTAURANT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-[#1B5E20] bg-[#E8F5E9] border border-[#C8E6C9] hover:bg-[#C8E6C9] transition-colors shadow-2xs"
              aria-label="WhatsApp Donnor Pizza"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E23E28] to-[#C82D19] hover:from-[#C82D19] hover:to-[#B32310] transition-all shadow-md shadow-[#E23E28]/25 hover:shadow-lg hover:shadow-[#E23E28]/30 active:scale-98"
              aria-label="Call Donnor Pizza at 0311 1135356"
            >
              <Phone className="w-4 h-4" />
              <span>0311 1135356</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={RESTAURANT.phoneHref}
              className="p-2 rounded-lg bg-[#E23E28] text-white shadow-xs"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#332F2A] hover:bg-[#EFE8DE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E23E28]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="sm:hidden bg-[#FCFAF7] border-b border-[#E4D9C8] px-5 pt-3 pb-6 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-semibold text-[#2C2723] hover:text-[#E23E28] py-2 border-b border-[#F0E6D8] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#9E9589]">→</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={RESTAURANT.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E23E28] text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {RESTAURANT.phone}</span>
              </a>
              <a
                href={RESTAURANT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9] font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={RESTAURANT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F4EDE2] text-[#4A453E] font-medium text-xs text-center"
              >
                <MapPin className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>Walayat Market, G-13, Islamabad</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
