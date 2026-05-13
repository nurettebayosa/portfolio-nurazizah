import{motion,AnimatePresence}from'motion/react';import{useState,useEffect}from'react';import{Menu,X,ChevronRight,Github,Linkedin,Mail,Download,ExternalLink,Award,BookOpen,Briefcase,Code,Database,Layout,ShieldCheck,FileText,CheckCircle2,ChevronUp,Phone}from'lucide-react';
import{SKILLS,PROJECTS,PUBLICATIONS,ACHIEVEMENTS,EXPERIENCES}from'./data';
import SH from'./SectionHeading';
import PC, { type Project } from'./ProjectCard';
const scroll=(id:string)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
const ICONS:{[k:string]:any}={Layout,Database,ShieldCheck,Code};
export default function App(){
const[isScrolled,setIsScrolled]=useState(false);
const[mobileMenuOpen,setMobileMenuOpen]=useState(false);
const[showTop,setShowTop]=useState(false);
useEffect(()=>{const h=()=>{setIsScrolled(window.scrollY>50);setShowTop(window.scrollY>400)};window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h)},[]);
const navItems=['Home','About','Skills','Projects','Publication','Achievements','Experience','Contact'];
const handleNav=(item:string)=>{scroll(item.toLowerCase());setMobileMenuOpen(false)};
return(<div className="relative min-h-screen overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
<div className="fixed inset-0 grid-background pointer-events-none opacity-40"/>
<div className="fixed inset-0 bg-[#030712] pointer-events-none -z-20"/>
<div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"/>
<div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10"/>

{/* Navbar */}
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled?'nav-blur py-3':'bg-transparent py-6'}`}>
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="flex items-center gap-2 cursor-pointer" onClick={()=>scroll('home')}>
<img src="/images/profil/photoprofil.png" alt="NA" className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500 shadow-lg shadow-cyan-500/20"/>
<span className="hidden sm:block text-xl font-display font-bold tracking-tight">Nur Azizah</span>
</motion.div>
<div className="hidden lg:flex items-center gap-8">
{navItems.map((item,i)=>(
<motion.button key={item} onClick={()=>handleNav(item)} initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">{item}</motion.button>
))}
</div>
<div className="hidden lg:block">
<motion.button onClick={()=>scroll('contact')} whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors">Contact</motion.button>
</div>
<button className="lg:hidden p-2 text-slate-300" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen?<X/>:<Menu/>}</button>
</div>
<AnimatePresence>{mobileMenuOpen&&(
<motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="lg:hidden bg-[#0f172a] border-b border-white/5 overflow-hidden">
<div className="flex flex-col p-6 gap-4">{navItems.map(item=>(
<button key={item} onClick={()=>handleNav(item)} className="text-lg font-medium text-slate-300 hover:text-cyan-400 text-left">{item}</button>
))}</div>
</motion.div>
)}</AnimatePresence>
</nav>

{/* Hero */}
<section id="home" className="relative min-h-[90vh] flex items-center pt-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
<motion.div initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:0.8}}>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
<span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"/>
<span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">Information Systems Student</span>
</div>
<h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-6 tracking-tighter">
<span className="gradient-text">Nur Azizah</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
Mahasiswi Sistem Informasi yang berdedikasi pada solusi digital terintegrasi. Berpengalaman dalam <span className="text-cyan-300 underline decoration-cyan-500/50">ide bisnis inovatif</span>, <span className="text-cyan-300 underline decoration-cyan-500/50">desain UI/UX</span>, <span className="text-cyan-300 underline decoration-cyan-500/50">implementasi teknis</span>, dan <span className="text-cyan-300 underline decoration-cyan-500/50">manajemen database</span>.
</p>
<div className="flex flex-wrap gap-5">
<motion.button onClick={()=>scroll('projects')} whileHover={{scale:1.02}} whileTap={{scale:0.98}} className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl flex items-center gap-2 group shadow-xl shadow-cyan-500/30">
Lihat Project <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
</motion.button>
<motion.a href="/CV-NurAzizah.pdf" download whileHover={{scale:1.02}} whileTap={{scale:0.98}} className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center gap-2 font-bold transition-all">
Download CV <Download className="w-5 h-5"/>
</motion.a>
</div>
<div className="mt-12 flex items-center gap-6 text-slate-500">
<a href="https://github.com/nurettebayosa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github/></a>
<a href="https://linkedin.com/in/nurazizah-304356248" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin/></a>
<a href="mailto:nurazizah.college@gmail.com" className="hover:text-white transition-colors"><Mail/></a>
<a href="https://wa.me/6288102361033" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Phone/></a>
</div>
</motion.div>
<motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1,ease:"easeOut"}} className="hidden lg:flex justify-center relative">
<div className="w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-[60px] relative animate-float">
<div className="absolute inset-0 bg-black/20 backdrop-blur-3xl rounded-[60px] border border-white/10 overflow-hidden flex items-center justify-center">
<img src="/images/profil/photoformal1.png" alt="Nur Azizah" className="w-full h-full object-cover opacity-90"/>
</div>
<motion.div animate={{y:[0,-20,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}} className="absolute -top-10 -right-10 p-5 glass rounded-3xl z-10">
<Database className="w-7 h-7 text-cyan-400 mb-1"/><p className="text-xs font-mono text-slate-400">Data Management</p>
</motion.div>
<motion.div animate={{y:[0,20,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut",delay:1}} className="absolute -bottom-10 -left-10 p-5 glass rounded-3xl z-10">
<Code className="w-7 h-7 text-blue-400 mb-1"/><p className="text-xs font-mono text-slate-400">System Architecture</p>
</motion.div>
<motion.div animate={{y:[0,-15,0]}} transition={{duration:4.5,repeat:Infinity,ease:"easeInOut",delay:0.5}} className="absolute top-[20%] -left-14 p-5 glass rounded-3xl z-10">
<Layout className="w-7 h-7 text-teal-400 mb-1"/><p className="text-xs font-mono text-slate-400">UI/UX Design</p>
</motion.div>
<motion.div animate={{y:[0,15,0]}} transition={{duration:5.5,repeat:Infinity,ease:"easeInOut",delay:2}} className="absolute top-[15%] right-[-3rem] p-5 glass rounded-3xl z-10">
<ShieldCheck className="w-7 h-7 text-purple-400 mb-1"/><p className="text-xs font-mono text-slate-400">Software QA</p>
</motion.div>
<motion.div animate={{y:[0,-12,0]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut",delay:1.5}} className="absolute bottom-[15%] right-[-3rem] p-5 glass rounded-3xl z-10">
<FileText className="w-7 h-7 text-amber-400 mb-1"/><p className="text-xs font-mono text-slate-400">Documentation</p>
</motion.div>
</div>
</motion.div>
</div>
</section>

{/* About */}
<section id="about" className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<SH subtitle="Mengenal lebih dekat visi dan latar belakang profesional saya.">Tentang Saya</SH>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="relative">
<div className="aspect-square bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[40px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
<img src="/images/profil/photoformal2.png" alt="Nur Azizah Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
</div>
<div className="absolute -bottom-6 -right-6 p-8 glass rounded-3xl z-10 hidden sm:block">
<p className="text-4xl font-display font-bold text-cyan-400">3+</p>
<p className="text-slate-400 text-sm">Case Studies<br/>Completed</p>
</div>
</motion.div>
<motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="space-y-6">
<p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
Saya mahasiswi <span className="font-bold text-white">Sistem Informasi</span> yang berdedikasi pada solusi digital terintegrasi. Memiliki kemampuan manajerial dan kolaboratif yang kuat.
</p>
<p className="text-slate-400 leading-relaxed">
Berpengalaman dalam merancang ide bisnis inovatif, desain antarmuka (UI/UX), implementasi teknis, serta manajemen database. Saya terbiasa bekerja dalam tim dan mengelola administrasi organisasi secara detail dan terstruktur. Fokus saya adalah menciptakan solusi digital yang fungsional secara teknis, efisien dalam penggunaan data, dan nyaman dari sisi pengguna.
</p>
<div className="grid grid-cols-2 gap-6 pt-6">
<div><h4 className="font-display font-bold text-slate-200 mb-2">Pendidikan</h4><p className="text-slate-400 text-sm">D3 Sistem Informasi<br/>Politeknik Negeri Subang</p></div>
<div><h4 className="font-display font-bold text-slate-200 mb-2">Lokasi</h4><p className="text-slate-400 text-sm">Subang, Jawa Barat<br/>Indonesia</p></div>
</div>
</motion.div>
</div>
</div>
</section>

{/* Skills */}
<section id="skills" className="py-32 px-6 bg-white/[0.02]">
<div className="max-w-7xl mx-auto">
<SH subtitle="Kombinasi keahlian teknis dan analitis yang terus saya kembangkan.">Expertise</SH>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
{SKILLS.map((g,i)=>{const Icon=ICONS[g.iconName];return(
<motion.div key={g.category} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group">
<div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform`}>{Icon&&<Icon className="w-5 h-5"/>}</div>
<h3 className="text-xl font-display font-bold mb-6">{g.category}</h3>
<ul className="space-y-4">{g.skills.map(s=>(
<li key={s} className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-200 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"/>{s}</li>
))}</ul>
</motion.div>
)})}
</div>
</div>
</section>

{/* Projects */}
<section id="projects" className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<SH subtitle="Showcase sistem nyata yang telah saya rancang dan kembangkan.">Featured Projects</SH>
<div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">{PROJECTS.map(p=><PC key={p.id} project={p as Project}/>)}</div>
</div>
</section>

{/* Publication */}
<section id="publication" className="py-32 px-6 bg-white/[0.02]">
<div className="max-w-7xl mx-auto">
<SH subtitle="Kontribusi dalam literatur ilmiah dan inovasi teknologi.">Scientific Publication</SH>
<div className="max-w-4xl mx-auto">{PUBLICATIONS.map((pub,i)=>(
<motion.div key={i} initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="p-10 rounded-[40px] glass border-cyan-500/10 hover:border-cyan-500/30 transition-all">
<div className="flex flex-col md:flex-row gap-10">
<div className="shrink-0"><div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400"><BookOpen className="w-10 h-10"/></div></div>
<div>
<div className="flex flex-wrap gap-3 mb-4"><span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono">{pub.year}</span><span className="px-3 py-1 bg-white/5 text-slate-400 rounded-full text-xs font-mono">Research Journal</span></div>
<h3 className="text-2xl md:text-3xl font-display font-bold mb-4 leading-tight">{pub.title}</h3>
<p className="text-cyan-400 font-medium mb-4 italic">{pub.journal}</p>
<p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">{pub.description}</p>
<a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors">Baca Publikasi Lengkap <ExternalLink className="w-5 h-5"/></a>
</div>
</div>
</motion.div>
))}</div>
</div>
</section>

{/* Achievements */}
<section id="achievements" className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<SH subtitle="Prestasi yang membentuk karakter, kedisiplinan, dan semangat kompetisi.">Awards & Recognition</SH>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{ACHIEVEMENTS.map((a,i)=>(
<motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}} whileHover={{y:-5}} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6"><Award className={a.medal==='gold'?'text-yellow-400':'text-blue-400'}/></div>
<h3 className="text-lg font-display font-bold mb-2">{a.title}</h3>
<p className="text-slate-400 text-sm mb-4 flex-grow">{a.org}</p>
<div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono">
<span className="text-slate-500 uppercase tracking-wider">Year/Category</span>
<span className="text-cyan-400">{a.year||a.category}</span>
</div>
</motion.div>
))}</div>
</div>
</section>

{/* Experience */}
<section id="experience" className="py-32 px-6 bg-white/[0.02]">
<div className="max-w-7xl mx-auto">
<SH subtitle="Rekam jejak organisasi dan pengalaman profesional.">Journey</SH>
<div className="max-w-4xl mx-auto relative">
<div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500/20 to-transparent hidden md:block"/>
<div className="space-y-12">{EXPERIENCES.map((exp,i)=>(
<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={`relative flex flex-col md:flex-row gap-12 items-start md:items-center ${i%2!==0?'md:flex-row-reverse':''}`}>
<div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-500 ring-8 ring-cyan-500/20 z-10"/>
<div className="w-full md:w-[45%]">
<div className="p-8 rounded-3xl glass border-white/5 hover:border-cyan-500/20 transition-all">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400"><Briefcase className="w-6 h-6"/></div>
<div><p className="text-cyan-400 text-xs font-mono mb-1">{exp.period}</p><h3 className="text-xl font-display font-bold leading-tight">{exp.title}</h3></div>
</div>
<p className="text-cyan-300 text-sm font-medium mb-3">{exp.role}</p>
<p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
</div>
</div>
<div className="hidden md:block w-full md:w-[45%]"/>
</motion.div>
))}</div>
</div>
</div>
</section>

{/* Contact Footer */}
<footer id="contact" className="relative pt-40 pb-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-20 mb-24">
<motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
<h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">Mari Berdiskusi<br/><span className="gradient-text">Tentang Project.</span></h2>
<p className="text-slate-400 text-lg mb-12 max-w-lg">Tertarik untuk bekerja sama atau sekadar ingin bertanya? Silakan hubungi saya melalui platform di bawah ini.</p>
<div className="space-y-6">
<a href="mailto:nurazizah.college@gmail.com" className="flex items-center gap-4 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors"><Mail className="w-6 h-6 group-hover:text-cyan-400 transition-colors"/></div>
<div><p className="text-slate-500 text-xs uppercase tracking-widest font-mono">Email</p><p className="text-white font-medium">nurazizah.college@gmail.com</p></div>
</a>
<a href="https://linkedin.com/in/nurazizah-304356248" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors"><Linkedin className="w-6 h-6 group-hover:text-cyan-400 transition-colors"/></div>
<div><p className="text-slate-500 text-xs uppercase tracking-widest font-mono">LinkedIn</p><p className="text-white font-medium">nurazizah-304356248</p></div>
</a>
<a href="https://wa.me/6288102361033" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors"><Phone className="w-6 h-6 group-hover:text-cyan-400 transition-colors"/></div>
<div><p className="text-slate-500 text-xs uppercase tracking-widest font-mono">WhatsApp</p><p className="text-white font-medium">(+62) 881-0236-10333</p></div>
</a>
</div>
</motion.div>
<motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="p-8 rounded-[40px] glass relative overflow-hidden max-w-md">
<div className="relative z-10">
<h3 className="text-2xl font-display font-bold mb-6">Personal Branding Summary</h3>
<div className="space-y-6">
<div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0"><FileText className="w-5 h-5 text-cyan-400"/></div><p className="text-slate-400 text-sm">Rapi, analitis, terstruktur, dan berpengalaman dalam mengelola sistem nyata.</p></div>
<div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0"><Code className="w-5 h-5 text-blue-400"/></div><p className="text-slate-400 text-sm">Berfokus pada pengembangan sistem, otomasi data, dan desain fungsional.</p></div>
<motion.a href="/CV-NurAzizah.pdf" download whileHover={{scale:1.02}} whileTap={{scale:0.98}} className="block w-full py-4 bg-cyan-500 text-black font-bold rounded-2xl transition-all text-center mt-6">Download Resume</motion.a>
</div>
</div>
<div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"/>
</motion.div>
</div>
<div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<img src="/images/profil/photoprofil.png" alt="NA" className="w-8 h-8 rounded-full object-cover border border-cyan-500"/>
<p className="text-slate-500 text-sm font-medium">© 2025 Nur Azizah Portfolio. Built with Modern Tech Stack.</p>
</div>
<div className="flex items-center gap-8 text-sm font-medium text-slate-500">
<button onClick={()=>scroll('home')} className="hover:text-cyan-400 transition-colors">Home</button>
<button onClick={()=>scroll('about')} className="hover:text-cyan-400 transition-colors">About</button>
<button onClick={()=>scroll('projects')} className="hover:text-cyan-400 transition-colors">Projects</button>
<a href="https://github.com/nurettebayosa" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
</div>
</div>
</div>
</footer>

{/* Back to top */}
<AnimatePresence>{showTop&&(
<motion.button initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.8}} onClick={()=>scroll('home')} className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all shadow-lg shadow-cyan-500/20 backdrop-blur-sm">
<ChevronUp className="w-5 h-5"/>
</motion.button>
)}</AnimatePresence>
</div>);
}
