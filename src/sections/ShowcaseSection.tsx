import { motion } from 'motion/react';
import { Pizza, Sparkles, Flame, Users, Phone, Info } from 'lucide-react';
import { RESTAURANT, FOOD_CATEGORIES } from '../data/restaurantData';

export function ShowcaseSection() {
  const categoryIcons = {
    Pizza: Pizza,
    Sparkles: Sparkles,
    Flame: Flame,
    Users: Users,
  };

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-[#FAF5ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E3D6C4] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            <Pizza className="w-3.5 h-3.5 text-[#E23E28]" />
            Food Lineup
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight mb-4">
            WHAT ARE YOU CRAVING?
          </h2>
          <p className="text-base sm:text-lg text-[#5E554A] max-w-2xl mx-auto">
            Explore our core food categories baked hot, loaded with cheese, and prepared fresh in G-13.
          </p>
        </div>

        {/* Featured Showcase Spread Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white mb-12">
          <img
            src={RESTAURANT.images.showcase}
            alt="Donnor Pizza culinary spread with freshly baked pizzas, cheesy bites, and sides"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[460px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FED8B1]">
                ALWAYS BAKED TO ORDER
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-1">
                Generous Cheese • Crispy Crust • Satisfying Taste
              </h3>
            </div>
            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E23E28] hover:bg-[#C82D19] text-white text-xs sm:text-sm font-bold shadow-md w-fit transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call for Today's Bakes</span>
            </a>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOOD_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[cat.iconName as keyof typeof categoryIcons] || Pizza;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#E9DFCF] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF6E9] border border-[#F5E2C4] flex items-center justify-center text-[#E23E28] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8C642A] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#1E1B18] tracking-tight mb-1">
                    {cat.name}
                  </h3>
                  <div className="text-xs font-bold text-[#E23E28] mb-3">
                    {cat.tagline}
                  </div>
                  <p className="text-sm text-[#61584D] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2EAE0] flex items-center justify-between text-xs text-[#8A7F73]">
                  <span className="font-semibold text-[#2E7D32]">Hot & Fresh</span>
                  <a
                    href={RESTAURANT.phoneHref}
                    className="font-bold text-[#E23E28] hover:underline flex items-center gap-1"
                  >
                    Inquire <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimers & Ordering Callout (strictly no invented prices or menu items) */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FFFDF9] border border-[#EAE0D1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#FAF0E1] text-[#8C6D3E] shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#2A2520]">
                Fresh Hot Bakes Available at Walayat Market, G-13
              </div>
              <p className="text-xs text-[#6B6256] mt-0.5">
                Call our direct phone line for daily available flavors, sizes, and takeout timings.
              </p>
            </div>
          </div>
          <a
            href={RESTAURANT.phoneHref}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E1B18] hover:bg-[#332C26] text-white text-xs sm:text-sm font-bold shrink-0 transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>0311 1135356</span>
          </a>
        </div>

      </div>
    </section>
  );
}
