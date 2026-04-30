'use client';

import { motion } from 'framer-motion';
import { Calendar, Heart, Briefcase, Building2, Package, Users, Music, Camera, Utensils, Star, Globe, Mic } from 'lucide-react';

const categories = [
  { label: 'Event Planners', icon: Calendar },
  { label: 'Wedding Coordinators', icon: Heart },
  { label: 'Corporate Organizers', icon: Briefcase },
  { label: 'Venues & Hotels', icon: Building2 },
  { label: 'Vendors & Suppliers', icon: Package },
  { label: 'Community Organizers', icon: Users },
  { label: 'Entertainment & AV', icon: Music },
  { label: 'Photography & Film', icon: Camera },
  { label: 'Catering & F&B', icon: Utensils },
  { label: 'Brand Experiences', icon: Star },
  { label: 'Destination Events', icon: Globe },
  { label: 'Speakers & Hosts', icon: Mic },
  // duplicate set for seamless loop
  { label: 'Event Planners', icon: Calendar },
  { label: 'Wedding Coordinators', icon: Heart },
  { label: 'Corporate Organizers', icon: Briefcase },
  { label: 'Venues & Hotels', icon: Building2 },
  { label: 'Vendors & Suppliers', icon: Package },
  { label: 'Community Organizers', icon: Users },
  { label: 'Entertainment & AV', icon: Music },
  { label: 'Photography & Film', icon: Camera },
  { label: 'Catering & F&B', icon: Utensils },
  { label: 'Brand Experiences', icon: Star },
  { label: 'Destination Events', icon: Globe },
  { label: 'Speakers & Hosts', icon: Mic },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Edge fades */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#070C1B] via-transparent to-[#070C1B]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Scrolling track */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-4 w-max"
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 card-dark rounded-2xl px-6 py-3.5 shrink-0 whitespace-nowrap card-dark-hover transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/[0.1] border border-[#C9A84C]/[0.15] flex items-center justify-center shrink-0">
                <cat.icon size={14} className="text-[#C9A84C]" strokeWidth={1.75} />
              </div>
              <span className="text-[13px] text-[#94A3B8] font-medium group-hover:text-white transition-colors duration-300">
                {cat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
