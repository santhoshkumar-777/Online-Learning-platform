import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { DollarSign, Users, Star, TrendingUp, Plus, MoreVertical, Eye, Edit3 } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Counter } from "@/components/Counter";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { COURSES } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/instructor")({
  head: () => ({ meta: [{ title: "Instructor — LumenED" }] }),
  component: InstructorDashboard,
});

const earnings = [
  { m: "Jan", v: 4200 }, { m: "Feb", v: 5800 }, { m: "Mar", v: 4900 },
  { m: "Apr", v: 7300 }, { m: "May", v: 8400 }, { m: "Jun", v: 9120 },
  { m: "Jul", v: 11200 }, { m: "Aug", v: 13500 },
];
const traffic = [
  { d: "Mon", v: 320 }, { d: "Tue", v: 480 }, { d: "Wed", v: 410 },
  { d: "Thu", v: 620 }, { d: "Fri", v: 780 }, { d: "Sat", v: 540 }, { d: "Sun", v: 600 },
];

function InstructorDashboard() {
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout role="instructor">
      <div className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold">Instructor studio</h1>
            <p className="text-muted-foreground mt-1">Track your performance and grow your audience.</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-full gradient-brand text-white border-0"><Plus className="h-4 w-4 mr-1" />New course</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader><DialogTitle>Create a new course</DialogTitle></DialogHeader>
              <form
                className="space-y-4 mt-2"
                onSubmit={(e) => { e.preventDefault(); setOpen(false); toast.success("Course draft created"); }}
              >
                <div><Label>Title</Label><Input className="mt-1" placeholder="e.g. Mastering Modern React" /></div>
                <div><Label>Description</Label><Textarea className="mt-1" rows={3} placeholder="What learners will get out of this course…" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label>Category</Label>
                    <Select><SelectTrigger className="mt-1"><SelectValue placeholder="Choose" /></SelectTrigger>
                      <SelectContent>{["Development","Design","Data Science","AI & ML","Business"].map(c=><SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div><Label>Level</Label>
                    <Select><SelectTrigger className="mt-1"><SelectValue placeholder="Choose" /></SelectTrigger>
                      <SelectContent>{["Beginner","Intermediate","Advanced"].map(c=><SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>
                <div><Label>Price (USD)</Label><Input type="number" className="mt-1" placeholder="29" /></div>
                <Button type="submit" className="w-full gradient-brand text-white border-0 rounded-full">Create draft</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Revenue icon={DollarSign} label="Total revenue" value={84210} prefix="$" trend="+18%" />
          <Revenue icon={Users} label="Total students" value={28430} trend="+9%" />
          <Revenue icon={Star} label="Avg. rating" value={4.8} trend="+0.1" />
          <Revenue icon={TrendingUp} label="Conversion" value={6.4} suffix="%" trend="+1.2%" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-6 lg:col-span-2">
            <div className="flex items-center justify-between"><h3 className="font-semibold">Earnings</h3><Badge variant="outline">Last 8 months</Badge></div>
            <div className="h-72 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earnings}>
                  <defs><linearGradient id="ge" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22d3ee" stopOpacity={0.6} /><stop offset="100%" stopColor="#22d3ee" stopOpacity={0} /></linearGradient></defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="m" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "rgba(20,20,30,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                  <Area type="monotone" dataKey="v" stroke="#22d3ee" strokeWidth={2.5} fill="url(#ge)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <h3 className="font-semibold">Traffic</h3>
            <div className="h-72 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={traffic}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="d" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "rgba(20,20,30,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                  <Bar dataKey="v" fill="#a78bfa" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4"><h3 className="font-semibold">Your courses</h3><Button variant="ghost" size="sm">Manage</Button></div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-muted-foreground border-b border-border/60"><tr>
                <th className="text-left font-medium py-3 pl-2">Course</th>
                <th className="text-left font-medium py-3">Status</th>
                <th className="text-left font-medium py-3">Students</th>
                <th className="text-left font-medium py-3">Rating</th>
                <th className="text-left font-medium py-3">Revenue</th>
                <th></th>
              </tr></thead>
              <tbody>
                {COURSES.slice(0, 6).map((c, i) => (
                  <tr key={c.id} className="border-b border-border/40 hover:bg-muted/30 transition">
                    <td className="py-3 pl-2 flex items-center gap-3">
                      <div className="h-10 w-14 rounded-lg shrink-0" style={{ background: c.thumbnail }} />
                      <span className="font-medium line-clamp-1">{c.title}</span>
                    </td>
                    <td><Badge variant={i % 3 === 0 ? "outline" : "default"} className={i % 3 === 0 ? "" : "gradient-brand text-white border-0"}>{i % 3 === 0 ? "Draft" : "Published"}</Badge></td>
                    <td className="py-3">{(c.students / 1000).toFixed(1)}k</td>
                    <td className="py-3">⭐ {c.rating}</td>
                    <td className="py-3">${(c.students * c.price * 0.5).toLocaleString()}</td>
                    <td className="py-3 text-right pr-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Edit3 className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-6">
            <h3 className="font-semibold">Recent reviews</h3>
            <ul className="mt-4 space-y-4">
              {[
                { n: "Jenna L.", t: "Amazing course, learned so much!", r: 5 },
                { n: "Carlos M.", t: "Clear explanations and great projects.", r: 5 },
                { n: "Anya P.", t: "Loved the depth, more case studies please.", r: 4 },
              ].map((rv, i) => (
                <li key={i} className="flex gap-3">
                  <img src={`https://i.pravatar.cc/100?img=${i+30}`} className="h-9 w-9 rounded-full" alt="" />
                  <div>
                    <div className="text-sm"><b>{rv.n}</b> · {"★".repeat(rv.r)}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{rv.t}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-6">
            <h3 className="font-semibold">Engagement</h3>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <Mini label="Watch time" value="14.2k h" />
              <Mini label="Completion" value="78%" />
              <Mini label="Q&A response" value="2.1h" />
            </div>
            <p className="text-xs text-muted-foreground mt-4">Engagement metrics across all your courses for the last 30 days.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Revenue({ icon: Icon, label, value, prefix, suffix, trend }: any) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">{label}</div>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="font-display text-3xl font-bold mt-2">{prefix}<Counter to={value} suffix={suffix} /></div>
      <div className="text-xs text-emerald-500 flex items-center gap-1 mt-1"><TrendingUp className="h-3 w-3" />{trend}</div>
    </div>
  );
}
function Mini({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl bg-muted/50 p-4"><div className="text-xs text-muted-foreground">{label}</div><div className="font-semibold mt-1">{value}</div></div>;
}
