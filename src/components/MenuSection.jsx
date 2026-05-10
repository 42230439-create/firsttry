import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

export function MenuSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="flex items-center gap-6 mb-12"
      >
        <h2 className="text-4xl md:text-5xl text-charcoal-green">{title}</h2>
        <div className="h-px bg-sage/30 flex-1 mt-2"></div>
      </motion.div>
      
      <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-sage/10 rounded-3xl p-8 sm:p-12 flex flex-col gap-8">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
