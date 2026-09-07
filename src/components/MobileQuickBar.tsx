import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { RESTAURANT } from '../data/restaurantData';

export function MobileQuickBar() {
  return (
    <div
      id="mobile-quick-action-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FCFAF7]/95 backdrop-blur-md border-t border-[#E8DECE] px-3 py-2.5 shadow-lg flex items-center justify-between gap-2 safe-area-pb"
    >
      <a
        href={RESTAURANT.phoneHref}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#E23E28] to-[#C82D19] text-white font-bold text-xs tracking-wide shadow-sm active:scale-95 transition-transform"
        aria-label="Call Donnor Pizza"
      >
        <Phone className="w-3.5 h-3.5" />
        <span>Call Now</span>
      </a>

      <a
        href={RESTAURANT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] text-white font-bold text-xs tracking-wide shadow-sm active:scale-95 transition-transform"
        aria-label="WhatsApp Donnor Pizza"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <a
        href={RESTAURANT.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#F0E7DA] text-[#3E3830] font-semibold text-xs border border-[#DFD4C4] active:scale-95 transition-transform"
        aria-label="Directions to Donnor Pizza"
      >
        <MapPin className="w-3.5 h-3.5 text-[#2E7D32]" />
        <span>Map</span>
      </a>
    </div>
  );
}
