import { Phone, MapPin, MessageCircle, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT } from '../data/restaurantData';

export function FinalCtaSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF5ED] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E8] to-[#F5ECE0] rounded-3xl p-8 sm:p-14 border border-[#E9DFCF] shadow-xl text-center relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FFE3D0]/40 rounded-full blur-3xl pointer-events-none -z-10" />
          
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8DECE] text-[#8C2B1B] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
            <Flame className="w-3.5 h-3.5 text-[#E23E28]" />
            Oven-Fired in G-13
          </div>

          {/* Main CTA Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F1B18] tracking-tight leading-tight mb-4">
            YOUR PIZZA CRAVING CAN'T WAIT.
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-xl text-[#5C5348] max-w-xl mx-auto mb-8 font-medium">
            Call Donnor Pizza and make your next meal a good one.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-8">
            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E23E28] to-[#C82D19] hover:from-[#C82D19] hover:to-[#B32310] text-white text-base sm:text-lg font-extrabold shadow-lg shadow-[#E23E28]/25 hover:shadow-xl hover:shadow-[#E23E28]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Phone className="w-5 h-5 fill-white/20" />
              <span>Call Now</span>
              <span className="text-xs font-semibold opacity-90">({RESTAURANT.phone})</span>
            </a>

            <a
              href={RESTAURANT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white text-[#2C2723] text-base sm:text-lg font-bold border border-[#E3D6C4] hover:bg-[#FBF8F4] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <MapPin className="w-5 h-5 text-[#2E7D32]" />
              <span>Get Directions</span>
            </a>

            <a
              href={RESTAURANT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#1B5E20] border border-[#C8E6C9] text-base font-bold shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 text-[#2E7D32]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Physical Address Footnote */}
          <div className="text-xs sm:text-sm text-[#786E62] pt-6 border-t border-[#EDE3D3] flex flex-wrap items-center justify-center gap-2">
            <span className="font-semibold text-[#1E1B18]">{RESTAURANT.name}</span>
            <span>•</span>
            <span>{RESTAURANT.address.street}, {RESTAURANT.address.sector}, {RESTAURANT.address.city}</span>
            <span>•</span>
            <span className="font-bold text-[#E23E28]">{RESTAURANT.phone}</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
