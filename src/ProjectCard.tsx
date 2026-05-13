import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';

export type Project = {
  id: string; title: string; subtitle: string; role: string; description: string;
  highlights: string[]; tags: string[]; images: string[]; type: string;
  links?: {label:string;url:string}[]; github?: string; demoAccount?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [cur, setCur] = useState(0);
  const len = project.images.length;

  const next = useCallback(() => setCur(p => (p + 1) % len), [len]);

  useEffect(() => {
    if (len <= 1) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [len, next]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0f172a]/50 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full"
    >
      <div className="aspect-video relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={cur}
            src={project.images[cur]}
            alt={project.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60" />
        {len > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, i) => (
              <button key={i} onClick={() => setCur(i)}
                className={`w-2 h-2 rounded-full transition-all ${cur === i ? 'bg-cyan-400 w-6' : 'bg-white/30'}`} />
            ))}
          </div>
        )}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {project.tags.map(t => (
            <span key={t} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-mono tracking-wider text-cyan-300 border border-cyan-500/30">{t}</span>
          ))}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <p className="text-cyan-400 font-mono text-sm mb-1">{project.role}</p>
          <h3 className="text-2xl font-display font-bold group-hover:text-cyan-300 transition-colors">{project.title}</h3>
          <p className="text-slate-400 text-sm">{project.subtitle}</p>
        </div>
        <p className="text-slate-300 text-sm line-clamp-3 mb-6 flex-grow">{project.description}</p>
        <div className="space-y-3 mb-8">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /><span>{h}</span>
            </div>
          ))}
        </div>
        {project.demoAccount && (
          <p className="text-xs text-slate-500 font-mono mb-4 px-3 py-2 bg-white/5 rounded-lg">{project.demoAccount}</p>
        )}
        <div className="flex flex-wrap gap-4 mt-auto">
          {project.links?.map(l => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-xl text-sm font-medium transition-all">
              {l.label} <ExternalLink className="w-4 h-4" />
            </a>
          ))}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
