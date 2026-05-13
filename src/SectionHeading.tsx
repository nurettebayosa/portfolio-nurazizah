import { motion } from 'motion/react';
export default function SectionHeading({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">{children}</motion.h2>
      {subtitle && <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto">{subtitle}</motion.p>}
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full" />
    </div>
  );
}
