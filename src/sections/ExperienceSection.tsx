import { motion } from 'motion/react';
import { Sparkles, Flame, Layers } from 'lucide-react';
import { PIZZA_EXPERIENCE_STEPS } from '../data/restaurantData';

export function ExperienceSection() {
  const stepIcons = [Sparkles, Flame, Layers];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#F7F2EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2D5C3] text-[#784617] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Flame className="w-3.5 h-3.5 text-[#E23E28]" />
            The Donnor Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1B18] tracking-tight leading-tight mb-4">
            FROM OVEN TO SLICE
          </h2>
          <p className="text-base sm:text-lg text-[#5D554B] max-w-2xl mx-auto">
            Every pizza follows a dedicated journey of heat, melt, and generous toppings crafted to satisfy serious cravings.
          </p>
        </div>

        {/* 3 Visual Steps with Large Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PIZZA_EXPERIENCE_STEPS.map((stepItem, idx) => {
            const Icon = stepIcons[idx];
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-[#FCFAF7] rounded-3xl p-7 sm:p-8 border border-[#E9DFCF] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Large Background Step Number */}
                <span className="absolute -top-4 -right-2 text-7xl sm:text-8xl font-black text-[#EFE4D2]/60 select-none pointer-events-none group-hover:text-[#E8D9C2]/80 transition-colors">
                  {stepItem.step}
                </span>

                <div className="relative z-10">
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-lg bg-[#E23E28]/10 text-[#B32310] font-mono text-xs font-bold tracking-wider">
                      STEP {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E5DAC8] flex items-center justify-center text-[#E23E28] shadow-2xs group-hover:bg-[#E23E28] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1E1B18] tracking-tight mb-3">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#595146] text-base leading-relaxed mb-6">
                    {stepItem.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="relative z-10 pt-4 border-t border-[#EFE6D8] flex items-center gap-2 text-xs font-semibold text-[#8C6D3E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E23E28]" />
                  <span>{stepItem.accent}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
