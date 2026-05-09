import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, BarChart, Bar,
} from "recharts";
import { Award, Clock, Flame, Play, TrendingUp, BookOpen, Trophy, Calendar } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/Counter";
import { COURSES } from "@/lib/data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — LumenED" }] }),
  component: Dashboard,
});

const weekData = [
  { d: "Mon", h: 1.2 }, { d: "Tue", h: 2.1 }, { d: "Wed", h: 0.8 },
  { d: "Thu", h: 2.6 }, { d: "Fri", h: 3.2 }, { d: "Sat", h: 1.8 }, { d: "Sun", h: 2.4 },
];
const skillData = [
  { name: "Frontend", value: 38 }, { name: "AI/ML", value: 24 },
  { name: "Design", value: 18 }, { name: "Backend", value: 20 },
];
const COLORS = ["#7c3aed", "#06b6d4", "#ec4899", "#22c55e"];

function Dashboard() {
  return (
    <DashboardLayout role="student">
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold">Welcome back, Alex 👋</h1>
            <p className="text-muted-foreground mt-1">You're on a 12-day streak. Keep the momentum going.</p>
          </div>
          <div className="flex gap-3">
            <Stat icon={Flame} label="Streak" value="12 days" tint="from-orange-500 to-rose-500" />
            <Stat icon={Trophy} label="XP" value="4,820" tint="from-violet-500 to-fuchsia-500" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-4">
          <KPI label="Hours learned" value={68} suffix="h" trend="+12%" />
          <KPI label="Courses in progress" value={5} trend="+2" />
          <KPI label="Certificates earned" value={9} trend="+1" />
          <KPI label="Avg. quiz score" value={92} suffix="%" trend="+4%" />
        </div>

        <section>
          <SectionTitle title="Continue learning" linkTo="/courses" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {COURSES.slice(0, 3).map((c, i) => (
              <motion.div key={c.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl overflow-hidden hover:shadow-glow transition">
                <div className="aspect-video relative" style={{ background: c.thumbnail }}>
                  <div className="absolute inset-0 bg-black/30" />
                  <button className="absolute inset-0 grid place-items-center"><div className="h-12 w-12 rounded-full bg-white/95 grid place-items-center"><Play className="h-5 w-5 text-black ml-0.5" fill="currentColor" /></div></button>
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground">{c.category}</div>
                  <div className="font-semibold mt-1 line-clamp-1">{c.title}</div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground"><span>{40 + i * 15}% complete</span><span>Lesson {6 + i}/24</span></div>
                  <Progress value={40 + i * 15} className="h-2 mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass rounded-3xl p-6">
            <div className="flex items-center justify-between"><h3 className="font-semibold">Weekly learning</h3><Badge variant="outline">+18% vs last week</Badge></div>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weekData}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="d" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "rgba(20,20,30,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                  <Area type="monotone" dataKey="h" stroke="#a78bfa" strokeWidth={2.5} fill="url(#g1)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="font-semibold">Skills breakdown</h3>
            <div className="h-48 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={skillData} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={4}>
                    {skillData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-2">
              {skillData.map((s, i) => (
                <div key={s.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />{s.name}</span>
                  <span className="text-muted-foreground">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-6">
            <h3 className="font-semibold flex items-center gap-2"><Calendar className="h-4 w-4" /> Upcoming deadlines</h3>
            <ul className="mt-4 space-y-3">
              {[
                { t: "React project submission", d: "Tomorrow", c: "text-rose-400" },
                { t: "Live class: AI agents", d: "In 2 days", c: "text-amber-400" },
                { t: "Final quiz · Data Science", d: "Next week", c: "text-cyan-400" },
              ].map((it) => (
                <li key={it.t} className="flex items-start gap-3 text-sm">
                  <div className={`h-2 w-2 rounded-full mt-2 ${it.c} bg-current`} />
                  <div className="flex-1">
                    <div className="font-medium">{it.t}</div>
                    <div className="text-xs text-muted-foreground">{it.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-6 lg:col-span-2">
            <h3 className="font-semibold flex items-center gap-2"><Award className="h-4 w-4" /> Recent certificates</h3>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              {COURSES.slice(0, 3).map((c, i) => (
                <div key={c.id} className="rounded-2xl p-4 relative overflow-hidden" style={{ background: c.thumbnail }}>
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="relative text-white">
                    <Award className="h-6 w-6" />
                    <div className="text-sm font-semibold mt-3 line-clamp-2">{c.title}</div>
                    <div className="text-xs opacity-80 mt-1">Issued · Apr 202{i+3}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function SectionTitle({ title, linkTo }: { title: string; linkTo?: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-display text-xl font-bold">{title}</h2>
      {linkTo && <Link to={linkTo} className="text-sm text-primary hover:underline">View all →</Link>}
    </div>
  );
}

function Stat({ icon: Icon, label, value, tint }: any) {
  return (
    <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${tint} grid place-items-center text-white`}><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}

function KPI({ label, value, suffix, trend }: { label: string; value: number; suffix?: string; trend: string }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-3xl font-bold"><Counter to={value} suffix={suffix} /></span>
        <span className="text-xs text-emerald-500 flex items-center gap-1"><TrendingUp className="h-3 w-3" />{trend}</span>
      </div>
    </div>
  );
}
