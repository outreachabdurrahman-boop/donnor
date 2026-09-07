import { Phone, MapPin, Sparkles, Flame, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT } from '../data/restaurantData';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 flex items-center overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F5EFE6]"
    >
      {/* Subtle organic light background accents */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-[#FFE8CC]/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#FFD6D0]/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Editorial Typography Column (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col justify-center text-left z-10"
          >
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E9DFD0] shadow-xs w-fit mb-5">
              <span className="flex h-2 w-2 rounded-full bg-[#E23E28] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#645A4F]">
                DONNOR PIZZA
              </span>
              <span className="text-[#D0C5B4]">•</span>
              <span className="text-xs font-semibold text-[#2E7D32] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {RESTAURANT.locationBadge}
              </span>
            </div>

            {/* Main Headlines */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black text-[#191614] leading-[1.06] tracking-tight mb-5">
              CHEESY. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E23E28] via-[#F59E0B] to-[#C82D19]">
                HOT.
              </span>{' '}
              IRRESISTIBLE.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl font-medium text-[#524B43] max-w-xl leading-relaxed mb-7">
              {RESTAURANT.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9">
              <a
                href={RESTAURANT.phoneHref}
                id="hero-cta-call"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#E23E28] to-[#C82D19] text-white text-base sm:text-lg font-bold shadow-lg shadow-[#E23E28]/25 hover:shadow-xl hover:shadow-[#E23E28]/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200"
              >
                <Phone className="w-5 h-5 fill-white/20" />
                <span>Call Now</span>
                <span className="text-xs font-normal opacity-90 hidden sm:inline ml-1">
                  ({RESTAURANT.phone})
                </span>
              </a>

              <a
                href={RESTAURANT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-directions"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white text-[#2C2723] text-base sm:text-lg font-bold border border-[#E4D9C8] hover:border-[#D5C6B0] hover:bg-[#FBF8F4] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <MapPin className="w-5 h-5 text-[#2E7D32]" />
                <span>Find Us</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C8275]" />
              </a>
            </div>

            {/* Micro highlights */}
            <div className="pt-5 border-t border-[#EFE5D6] grid grid-cols-3 gap-3 max-w-lg">
              <div>
                <div className="text-sm font-bold text-[#1F1B18] flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#E23E28]" />
                  Hot Baked
                </div>
                <div className="text-xs text-[#736B61] mt-0.5">Fresh out of oven</div>
              </div>
              <div>
                <div className="text-sm font-bold text-[#1F1B18] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  Rich Mozzarella
                </div>
                <div className="text-xs text-[#736B61] mt-0.5">Golden melt & stretch</div>
              </div>
              <div>
                <div className="text-sm font-bold text-[#1F1B18] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#2E7D32]" />
                  Walayat Market
                </div>
                <div className="text-xs text-[#736B61] mt-0.5">Opp. PCC, G-13</div>
              </div>
            </div>
          </motion.div>

          {/* Right / Striking Photorealistic Pizza Imagery (Span 6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* The Food Photo is the unhindered star */}
            <div className="relative w-full max-w-[560px] lg:max-w-none rounded-3xl overflow-hidden shadow-2xl shadow-stone-400/20 border-4 border-white/90 group">
              <motion.img
                src={RESTAURANT.images.hero}
                alt="Donnor Pizza freshly baked out of oven with melting golden cheese"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-16/9 object-cover rounded-2xl transform transition-transform duration-700 ease-out group-hover:scale-103"
                loading="eager"
              />

              {/* Minimal translucent bottom badge that does not occlude the pizza */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#1E1B18]/75 backdrop-blur-md text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 border border-white/15 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
                <span>Oven-hot & loaded for G-13</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
