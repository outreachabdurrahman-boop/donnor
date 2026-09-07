import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { RESTAURANT } from '../data/restaurantData';

export function CheeseMomentSection() {
  return (
    <section id="cheese-moment" className="py-16 sm:py-24 bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF4EB] to-[#F5EDE1] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#E9DECE] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Side (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-7 relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={RESTAURANT.images.cheesePull}
                  alt="Mouthwatering close-up of hot pizza slice with stretching melted golden mozzarella cheese"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-4/3 object-cover hover:scale-102 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#9A3412] shadow-xs flex items-center gap-1.5 border border-[#FDE68A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>The Perfect Stretch</span>
                </div>
              </div>
            </motion.div>

            {/* Content Side (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold uppercase tracking-wider w-fit mb-4">
                <Heart className="w-3 h-3 text-[#E23E28] fill-[#E23E28]" />
                Pure Mozzarella Sensation
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B18] tracking-tight leading-[1.1] mb-5">
                ONE SLICE IS NEVER ENOUGH.
              </h2>

              <p className="text-base sm:text-lg text-[#5A5145] leading-relaxed mb-6">
                That glorious moment when melted mozzarella stretches and the warm aroma of oven-fired crust hits you. Generously loaded so every bite is as rewarding as the first.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE1D3] shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#A0611E] mb-1">
                  Crafted for Serious Cravings
                </div>
                <p className="text-xs sm:text-sm text-[#6C6356] leading-normal">
                  Enjoyed hot on the spot or taken home to share with friends and family in G-13.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={RESTAURANT.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E23E28] text-white text-sm font-bold shadow-md shadow-[#E23E28]/20 hover:bg-[#C82D19] transition-all"
                >
                  Order via Phone: {RESTAURANT.phone}
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
