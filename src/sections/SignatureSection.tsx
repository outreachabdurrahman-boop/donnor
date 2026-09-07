import { Flame, Sparkles, Utensils, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT } from '../data/restaurantData';

export function SignatureSection() {
  const storyPillars = [
    {
      title: 'Golden Cheese',
      description: 'Molten, stretchy mozzarella layered generously across each slice.',
      icon: Sparkles,
      color: 'text-[#F59E0B]',
      bg: 'bg-[#FEF3C7]/60',
      border: 'border-[#FDE68A]',
    },
    {
      title: 'Fresh Toppings',
      description: 'Generously topped with vibrant, flavorful selections tailored for rich taste.',
      icon: Utensils,
      color: 'text-[#2E7D32]',
      bg: 'bg-[#E8F5E9]/70',
      border: 'border-[#C8E6C9]',
    },
    {
      title: 'Crispy Crust',
      description: 'Hand-stretched dough baked to blistered, golden-edged perfection.',
      icon: Award,
      color: 'text-[#D97706]',
      bg: 'bg-[#FFFBEB]/80',
      border: 'border-[#FEEBC8]',
    },
    {
      title: 'Hot Oven Finish',
      description: 'Fired at blazing heat so every pizza arrives piping hot and full of aroma.',
      icon: Flame,
      color: 'text-[#E23E28]',
      bg: 'bg-[#FEE2E2]/60',
      border: 'border-[#FECACA]',
    },
  ];

  return (
    <section id="signature" className="py-16 sm:py-24 bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2E6] border border-[#E9DFCF] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#E23E28]" />
            Signature Craft
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1B18] tracking-tight leading-tight mb-4">
            THE CRAVING STARTS HERE
          </h2>
          <p className="text-lg text-[#5A5248] leading-relaxed">
            Freshly baked, generously topped and made to satisfy the craving from the very first slice.
          </p>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Large Visual (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={RESTAURANT.images.signature}
                alt="Donnor Pizza artisanal bake with bubbly golden mozzarella and fresh toppings"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-4/3 object-cover hover:scale-102 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#E23E28] px-2.5 py-1 rounded-md mb-2 inline-block">
                  Pure Pizza Passion
                </span>
                <p className="text-sm sm:text-base font-medium drop-shadow-sm text-white/95">
                  Hand-tossed dough, bubbling cheese, and high-heat oven finish right in Walayat Market, G-13.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Pillars (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {storyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white border border-[#EFE5D6] hover:border-[#DFCDB6] transition-all hover:shadow-md group flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl ${pillar.bg} ${pillar.border} border shrink-0 transition-transform group-hover:scale-105`}>
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#A89F93]">0{idx + 1}</span>
                      <h3 className="text-base sm:text-lg font-bold text-[#1F1B18]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#665D52] mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
