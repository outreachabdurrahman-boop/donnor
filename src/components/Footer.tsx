import { Phone, MapPin, MessageCircle, Flame } from 'lucide-react';
import { RESTAURANT } from '../data/restaurantData';

export function Footer() {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#signature' },
    { label: 'Food', href: '#showcase' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="footer" className="bg-[#1E1B18] text-[#E8DFD3] pt-14 pb-24 sm:pb-16 border-t border-[#312B26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#312B26]">
          
          {/* Brand & Address Column (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E23E28] flex items-center justify-center text-white shadow-md shadow-[#E23E28]/30">
                <Flame className="w-5 h-5 text-[#FED8B1]" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                DONNOR <span className="text-[#E23E28]">PIZZA</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#F59E0B] uppercase">
              HOT. FRESH. LOADED.
            </p>

            <div className="text-sm text-[#BDB2A3] space-y-1.5 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E23E28] shrink-0 mt-0.5" />
                <span>
                  Walayat Market, Opposite to PCC,<br />
                  G-13, Islamabad, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links Column (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#BDB2A3] hover:text-[#E23E28] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={RESTAURANT.phoneHref}
                className="flex items-center gap-2 text-white font-bold hover:text-[#E23E28] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E23E28]" />
                <span>0311 1135356</span>
              </a>

              <a
                href={RESTAURANT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#81C784] hover:text-white transition-colors text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </a>

              <p className="text-xs text-[#8E8477] pt-2">
                Walayat Market, G-13 Islamabad
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8477] gap-3">
          <p>© {new Date().getFullYear()} Donnor Pizza. All rights reserved.</p>
          <p>Walayat Market, Opposite to PCC, G-13, Islamabad, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
