import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Search, Sparkles, ChevronRight, Star, Play, Code2, Palette, Database,
  Brain, Briefcase, Megaphone, Camera, Music, ArrowRight, Check, Plus,
  Minus, Zap, Trophy, Globe2,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/CourseCard";
import { Counter } from "@/components/Counter";
import { COURSES, CATEGORIES, TESTIMONIALS, FAQ, PRICING } from "@/lib/data";
import { toast } from "sonner";

const ICON_MAP: Record<string, any> = { Code2, Palette, Database, Brain, Briefcase, Megaphone, Camera, Music };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LumenED — Learn skills that build your future" },
      { name: "description", content: "Premium online learning platform. World-class instructors, AI recommendations and a thriving community." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Categories />
        <Trending />
        <Stats />
        <Instructors />
        <Testimonials />
        <Pricing />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-purple/30 blur-[120px] animate-blob" />
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-cyan/30 blur-[120px] animate-blob" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge variant="outline" className="rounded-full glass px-3 py-1.5 text-xs font-medium gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI-powered learning paths · New
            </Badge>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Learn skills that <span className="text-gradient">build your future</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Join 4M+ learners on the platform redefining online education. World-class instructors, hands-on projects, and AI that adapts to you.
            </p>

            <div className="mt-8 glass-strong rounded-full p-2 flex items-center gap-2 max-w-xl shadow-glow">
              <Search className="h-5 w-5 text-muted-foreground ml-3" />
              <input
                placeholder="What do you want to learn today?"
                className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder:text-muted-foreground"
              />
              <Button className="rounded-full gradient-brand text-white border-0 px-5">Search</Button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Generative AI", "React", "UX Design", "Data Science", "Product"].map((t) => (
                <button key={t} className="text-xs glass rounded-full px-3 py-1.5 hover:ring-glow transition">
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 12, 32, 47, 5].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/60?img=${i}`} className="h-10 w-10 rounded-full border-2 border-background" alt="" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4" fill="currentColor" />)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Loved by 4.2M+ learners worldwide</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-[3rem] gradient-brand opacity-30 blur-3xl" />
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-8 left-0 glass-strong rounded-2xl p-4 shadow-glow w-64 z-10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl gradient-brand grid place-items-center"><Play className="h-4 w-4 text-white" fill="currentColor" /></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">Mastering React</div>
                    <div className="text-xs text-muted-foreground">12 lessons · 4h</div>
                  </div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full w-3/4 gradient-brand rounded-full" /></div>
                <div className="mt-1.5 text-xs text-muted-foreground">75% complete</div>
              </motion.div>

              <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 0.5 }} className="absolute top-32 right-0 glass-strong rounded-2xl p-4 shadow-glow w-56 z-10">
                <div className="flex items-center gap-2 text-xs font-semibold"><Trophy className="h-4 w-4 text-amber-400" />Achievement unlocked</div>
                <div className="mt-2 text-sm">7-day learning streak 🔥</div>
              </motion.div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} className="absolute bottom-12 left-6 glass-strong rounded-2xl p-4 shadow-glow w-72 z-10">
                <div className="flex items-center gap-2 text-xs"><Zap className="h-4 w-4 text-cyan" />AI Recommendation</div>
                <div className="mt-2 text-sm font-semibold">Try “Generative AI for Builders”</div>
                <div className="mt-1 text-xs text-muted-foreground">Matches 94% of your goals</div>
              </motion.div>

              <div className="absolute inset-0 rounded-[3rem] gradient-brand grid place-items-center">
                <div className="absolute inset-2 rounded-[2.7rem] bg-background/40 backdrop-blur-xl" />
                <div className="relative text-center text-white">
                  <Globe2 className="h-24 w-24 mx-auto opacity-90 animate-float" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoCloud() {
  const logos = ["Vercel", "Stripe", "Linear", "Notion", "Figma", "Shopify"];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Teams from leading companies learn here</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {logos.map((l) => <span key={l} className="font-display text-xl font-semibold">{l}</span>)}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead eyebrow="Browse by category" title="Explore your next obsession" sub="Hundreds of curated tracks across the most in-demand skills." />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((c, i) => {
            const Icon = ICON_MAP[c.icon] ?? Sparkles;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to="/courses" className="group glass rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 block">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center text-white shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.count.toLocaleString()} courses</div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Trending() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <Badge variant="outline" className="rounded-full glass">Trending now</Badge>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Top courses this week</h2>
          </div>
          <Link to="/courses" className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:underline">View all <ChevronRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.slice(0, 8).map((c, i) => <CourseCard course={c} index={i} key={c.id} />)}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 4200000, suffix: "+", label: "Active learners" },
    { value: 1200, suffix: "+", label: "World-class instructors" },
    { value: 8500, suffix: "+", label: "Courses & projects" },
    { value: 96, suffix: "%", label: "Completion satisfaction" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-glow">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instructors() {
  const instructors = [
    { name: "Ava Mitchell", role: "Senior Engineer @ Vercel", avatar: "https://i.pravatar.cc/200?img=32", students: "120k", courses: 8 },
    { name: "Noah Patel", role: "AI Researcher", avatar: "https://i.pravatar.cc/200?img=12", students: "210k", courses: 12 },
    { name: "Liam Chen", role: "Lead Designer @ Linear", avatar: "https://i.pravatar.cc/200?img=68", students: "85k", courses: 6 },
    { name: "Sofia Rivera", role: "Data Scientist", avatar: "https://i.pravatar.cc/200?img=47", students: "143k", courses: 9 },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead eyebrow="World-class teachers" title="Learn from the best in the industry" sub="Practitioners from Vercel, Google, Linear, Stripe and more." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass rounded-3xl p-6 text-center hover:shadow-glow transition">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full gradient-brand blur-xl opacity-50" />
                <img src={p.avatar} alt={p.name} className="relative h-24 w-24 rounded-full mx-auto ring-2 ring-border" />
              </div>
              <div className="mt-4 font-semibold">{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.role}</div>
              <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground">
                <span><b className="text-foreground">{p.students}</b> students</span>
                <span><b className="text-foreground">{p.courses}</b> courses</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead eyebrow="Loved by learners" title="Stories that speak louder than features" sub="From career switches to side hustles, here's what real students say." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-3xl p-6 hover:shadow-glow transition">
              <div className="flex gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4" fill="currentColor" />)}</div>
              <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} className="h-10 w-10 rounded-full" alt="" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead eyebrow="Simple pricing" title="Pick a plan that fits you" sub="Start free, upgrade when you're ready. Cancel anytime." />
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {PRICING.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`relative rounded-3xl p-8 flex flex-col ${p.highlight ? "gradient-brand text-white shadow-glow scale-[1.02]" : "glass"}`}>
              {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-white text-primary rounded-full px-3 py-1">{p.tag}</div>}
              <div className={`text-sm font-medium ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>{!p.highlight && p.tag}</div>
              <div className="mt-2 font-display text-2xl font-bold">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold font-display">${p.price}</span>
                <span className={p.highlight ? "text-white/70" : "text-muted-foreground"}>/mo</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? "text-white" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className={`mt-8 rounded-full ${p.highlight ? "bg-white text-primary hover:bg-white/90" : "gradient-brand text-white border-0"}`}>
                Get started <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHead eyebrow="FAQ" title="Got questions? We've got answers." />
        <div className="mt-10 space-y-3">
          {FAQ.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium">{f.q}</span>
                {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </button>
              <motion.div initial={false} animate={{ height: open === i ? "auto" : 0 }} className="overflow-hidden">
                <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-14 shadow-glow">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full gradient-brand opacity-30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan opacity-30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold">Stay sharp. <span className="text-gradient">Weekly.</span></h3>
              <p className="mt-3 text-sm text-muted-foreground">Get curated lessons, new releases and learning hacks. No spam — ever.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); toast.success("You're subscribed!", { description: "Welcome to the LumenED newsletter." }); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input type="email" required placeholder="you@email.com" className="rounded-full h-12 bg-background/60" />
              <Button type="submit" className="rounded-full h-12 px-6 gradient-brand text-white border-0">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && <Badge variant="outline" className="rounded-full glass">{eyebrow}</Badge>}
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}
