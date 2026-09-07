import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Copy, Check, Navigation, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT } from '../data/restaurantData';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#1B5E20] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#2E7D32]" />
            Local Landmark
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1B18] tracking-tight leading-tight mb-4">
            MEET US IN G-13
          </h2>
          <p className="text-base sm:text-lg text-[#5E564C] max-w-xl mx-auto">
            Conveniently located in Walayat Market for pizza cravings right across G-13 and Islamabad.
          </p>
        </div>

        {/* Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Info Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E9DFCF] shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#E23E28]/10 text-[#E23E28] flex items-center justify-center font-black text-xl">
                  DP
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#1F1B18]">
                    {RESTAURANT.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#2E7D32] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                    Walayat Market, G-13, Islamabad
                  </p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="p-5 rounded-2xl bg-[#FBF8F4] border border-[#EFE5D6] mb-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E23E28] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#8A7E72] mb-1">
                        Exact Location
                      </div>
                      <p className="text-base sm:text-lg font-bold text-[#1E1B18] leading-snug">
                        {RESTAURANT.address.street}
                      </p>
                      <p className="text-sm font-medium text-[#5E564C]">
                        {RESTAURANT.address.sector}, {RESTAURANT.address.city}, {RESTAURANT.address.country}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyAddress}
                    type="button"
                    className="p-2 rounded-xl bg-white border border-[#E0D5C3] text-[#554C42] hover:text-[#1E1B18] hover:bg-[#F5EDE1] transition-colors text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-2xs"
                    title="Copy full address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#2E7D32]" />
                        <span className="text-[#2E7D32]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Landmark Highlight */}
              <div className="p-4 rounded-xl bg-[#E8F5E9]/50 border border-[#C8E6C9] text-xs sm:text-sm text-[#1B5E20] font-medium flex items-center gap-2 mb-8">
                <Navigation className="w-4 h-4 shrink-0 text-[#2E7D32]" />
                <span>Landmark: Located directly opposite to Pakistan Computer Center (PCC) in Walayat Market.</span>
              </div>

              {/* Direct Phone Information */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center text-[#B45309] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8A7E72]">
                    Call for Orders & Inquiries
                  </div>
                  <a
                    href={RESTAURANT.phoneHref}
                    className="text-xl sm:text-2xl font-black text-[#1E1B18] hover:text-[#E23E28] transition-colors"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons required by specification */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#EFE5D6]">
              <a
                href={RESTAURANT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-sm shadow-md transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E23E28] hover:bg-[#C82D19] text-white font-bold text-sm shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Donnor Pizza</span>
              </a>

              <a
                href={RESTAURANT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#1B5E20] border border-[#C8E6C9] font-bold text-sm transition-all"
                title="WhatsApp Donnor Pizza"
              >
                <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Map Preview / Location Representation (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-[#F6EFE5] rounded-3xl p-6 sm:p-8 border border-[#E5DAC8] shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            {/* Visual map graphic frame */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#7C6F60]">
                  G-13 / Islamabad Map
                </span>
                <span className="text-xs font-bold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-full">
                  Open in Google Maps
                </span>
              </div>

              {/* Stylized visual map pin block */}
              <div className="p-6 rounded-2xl bg-white border border-[#E3D7C4] shadow-xs text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#E23E28]/10 flex items-center justify-center text-[#E23E28] mb-3 relative">
                  <MapPin className="w-8 h-8 animate-bounce" />
                  <span className="absolute bottom-1 w-4 h-1 bg-black/20 rounded-full" />
                </div>
                <h4 className="text-lg font-black text-[#1E1B18]">
                  Walayat Market, G-13
                </h4>
                <p className="text-xs text-[#706659] mt-1">
                  Opposite to PCC (Pakistan Computer Center)
                </p>
                <div className="mt-4 pt-3 border-t border-[#F2E8DB] w-full flex items-center justify-around text-xs font-semibold text-[#5A5248]">
                  <span>Islamabad, PK</span>
                  <span>•</span>
                  <span>Sector G-13</span>
                  <span>•</span>
                  <span>Walayat Mkt</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#ECE2D2] text-xs text-[#62594E] space-y-1.5">
                <div className="font-bold text-[#2E2822]">Quick Navigation Tips:</div>
                <p>• Easily reached via Kashmir Highway / Srinagar Highway exit towards G-13.</p>
                <p>• Look for Walayat Market commercial area opposite to PCC.</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={RESTAURANT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#FAF6F0] text-[#1E1B18] font-bold text-xs sm:text-sm border border-[#DACBB8] shadow-2xs hover:shadow-xs transition-all"
              >
                <Navigation className="w-4 h-4 text-[#2E7D32]" />
                <span>Open in Google Maps App</span>
                <ArrowUpRight className="w-4 h-4 text-[#8A7E72]" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
