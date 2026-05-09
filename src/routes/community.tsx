import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageSquare, Users, Calendar, Trophy, Video, Sparkles, ArrowRight, Heart, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community — LumenED" }] }),
  component: Community,
});

const THREADS = [
  { title: "Best practices for React 19 server components?", author: "Mia P.", replies: 42, hot: true, tag: "React" },
  { title: "How are you using AI agents in your workflow?", author: "Daniel K.", replies: 87, hot: true, tag: "AI" },
  { title: "Figma → code: which tool is winning?", author: "Sofia R.", replies: 31, tag: "Design" },
  { title: "Beginner's roadmap to Data Science 2026", author: "Aria S.", replies: 19, tag: "Data" },
];
const GROUPS = [
  { name: "Frontend Wizards", members: 12400, color: "from-indigo-500 to-purple-500" },
  { name: "AI Builders", members: 8900, color: "from-fuchsia-500 to-pink-500" },
  { name: "Design Studio", members: 6700, color: "from-cyan-500 to-emerald-500" },
  { name: "Data Lab", members: 5400, color: "from-amber-500 to-rose-500" },
];
const WEBINARS = [
  { title: "Live Coding: Build a SaaS in 60 minutes", host: "Ava Mitchell", date: "Tomorrow · 6:00pm", live: true },
  { title: "AMA with the LumenED AI team", host: "Noah Patel", date: "Fri · 4:00pm", live: false },
  { title: "Design Crit: portfolio teardowns", host: "Liam Chen", date: "Sat · 11:00am", live: false },
];
const LEADERS = [
  { n: "Mia P.", xp: 18420 }, { n: "Daniel K.", xp: 17120 }, { n: "Aria S.", xp: 16980 },
  { n: "Marcus W.", xp: 15400 }, { n: "Yuki S.", xp: 14210 },
];
const MENTORS = [
  { n: "Sofia Rivera", role: "Staff Data Scientist", price: "$80/hr", img: 47 },
  { n: "Liam Chen", role: "Design Lead @ Linear", price: "$120/hr", img: 68 },
  { n: "Noah Patel", role: "AI Researcher", price: "$95/hr", img: 12 },
];

function Community() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute -top-20 right-0 h-96 w-96 rounded-full gradient-brand opacity-20 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 text-center relative">
            <Badge variant="outline" className="rounded-full glass"><Sparkles className="h-3 w-3 mr-1" />A place to grow together</Badge>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold">The LumenED <span className="text-gradient">Community</span></h1>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Discussions, study groups, live events and mentorship — all in one beautiful place.</p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-bold flex items-center gap-2"><MessageSquare className="h-5 w-5" /> Trending discussions</h2>
                <Button size="sm" className="rounded-full gradient-brand text-white border-0">New post</Button>
              </div>
              <div className="space-y-3">
                {THREADS.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-border/60 p-4 hover:bg-muted/30 transition cursor-pointer">
                    <div className="flex items-start gap-3">
                      <img src={`https://i.pravatar.cc/100?img=${20 + i}`} className="h-10 w-10 rounded-full" alt="" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium">{t.title}</span>
                          {t.hot && <Badge className="bg-rose-500/15 text-rose-400 border-0 text-[10px]">HOT</Badge>}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">by {t.author} · in #{t.tag.toLowerCase()}</div>
                        <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" />{t.replies}</span>
                          <span className="flex items-center gap-1"><Heart className="h-3 w-3" />{Math.floor(t.replies * 1.6)}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <h2 className="font-display text-xl font-bold flex items-center gap-2"><Video className="h-5 w-5" /> Live & upcoming</h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {WEBINARS.map((w, i) => (
                  <div key={i} className="relative overflow-hidden rounded-2xl p-5 gradient-brand text-white">
                    <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
                    {w.live && <Badge className="bg-rose-500 border-0 text-white">● LIVE</Badge>}
                    <div className="font-semibold mt-3">{w.title}</div>
                    <div className="text-xs opacity-80 mt-1">with {w.host} · {w.date}</div>
                    <Button size="sm" className="mt-4 rounded-full bg-white text-primary hover:bg-white/90">Join <ArrowRight className="h-3 w-3 ml-1" /></Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <h2 className="font-display text-xl font-bold flex items-center gap-2"><Sparkles className="h-5 w-5" /> Mentorship</h2>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                {MENTORS.map((m) => (
                  <div key={m.n} className="rounded-2xl border border-border/60 p-5 text-center">
                    <img src={`https://i.pravatar.cc/200?img=${m.img}`} className="h-16 w-16 rounded-full mx-auto" alt="" />
                    <div className="mt-3 font-semibold">{m.n}</div>
                    <div className="text-xs text-muted-foreground">{m.role}</div>
                    <div className="text-sm font-semibold mt-2 text-gradient">{m.price}</div>
                    <Button size="sm" variant="outline" className="mt-3 rounded-full w-full">Book session</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <h3 className="font-semibold flex items-center gap-2"><Users className="h-4 w-4" /> Study groups</h3>
              <div className="mt-4 space-y-3">
                {GROUPS.map((g) => (
                  <div key={g.name} className="flex items-center gap-3 p-3 rounded-2xl border border-border/60 hover:bg-muted/30 cursor-pointer">
                    <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${g.color} grid place-items-center text-white text-sm font-bold`}>{g.name[0]}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{g.name}</div>
                      <div className="text-xs text-muted-foreground">{g.members.toLocaleString()} members</div>
                    </div>
                    <Button size="sm" variant="ghost">Join</Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="font-semibold flex items-center gap-2"><Trophy className="h-4 w-4 text-amber-400" /> Leaderboard</h3>
              <div className="mt-4 space-y-3">
                {LEADERS.map((l, i) => (
                  <div key={l.n} className="flex items-center gap-3 text-sm">
                    <span className="w-5 text-muted-foreground">{i + 1}</span>
                    <img src={`https://i.pravatar.cc/100?img=${i + 40}`} className="h-8 w-8 rounded-full" alt="" />
                    <span className="flex-1 font-medium">{l.n}</span>
                    <span className="text-xs text-gradient font-semibold">{l.xp.toLocaleString()} XP</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="font-semibold flex items-center gap-2"><Calendar className="h-4 w-4" /> Events</h3>
              <ul className="mt-3 space-y-3 text-sm">
                <li><div className="font-medium">LumenED Conf 2026</div><div className="text-xs text-muted-foreground">May 24 · San Francisco</div></li>
                <li><div className="font-medium">Hack Night #14</div><div className="text-xs text-muted-foreground">May 30 · Online</div></li>
                <li><div className="font-medium">Designers Mixer</div><div className="text-xs text-muted-foreground">Jun 6 · NYC</div></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
