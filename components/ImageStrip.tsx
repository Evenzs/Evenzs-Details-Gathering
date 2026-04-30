'use client';

import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Event venue with elegant lighting',
  },
  {
    src: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Corporate conference stage',
  },
  {
    src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Event crowd energy',
  },
  {
    src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Wedding table setup',
  },
];

export default function ImageStrip() {
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#070C1B] via-transparent to-[#070C1B]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8 }}
        className="flex gap-4 px-6 max-w-7xl mx-auto"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex-1 min-w-0 relative rounded-2xl overflow-hidden aspect-[3/2]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#070C1B]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070C1B]/60 to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
