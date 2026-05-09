import { createFileRoute } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Globe, Award, Pencil, MapPin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COURSES } from "@/lib/data";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — LumenED" }] }),
  component: Profile,
});

const SKILLS = ["React", "TypeScript", "Node.js", "Figma", "Python", "Tailwind", "Next.js", "Postgres"];
const ACHIEVEMENTS = [
  { name: "7-day streak", icon: "🔥" },
  { name: "First certificate", icon: "🎓" },
  { name: "100 lessons", icon: "💯" },
  { name: "Community star", icon: "⭐" },
  { name: "Top 1% learner", icon: "🏆" },
  { name: "Project shipper", icon: "🚀" },
];

function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <div className="absolute inset-0 gradient-brand" />
          <div className="absolute inset-0 grid-bg opacity-25" />
        </div>
        <div className="mx-auto max-w-6xl px-4 md:px-6 -mt-20">
          <div className="glass-strong rounded-3xl p-6 md:p-8 shadow-glow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img src="https://i.pravatar.cc/300?img=12" className="h-28 w-28 md:h-36 md:w-36 rounded-3xl ring-4 ring-background -mt-16 md:-mt-24" alt="" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start flex-wrap gap-3">
                  <div>
                    <h1 className="font-display text-3xl font-bold">Alex Doe</h1>
                    <div className="text-muted-foreground mt-1">Senior Frontend Engineer · Lifelong learner</div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />San Francisco, CA</span>
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" />alex@email.com</span>
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="outline" className="rounded-full"><Pencil className="h-4 w-4 mr-1" /> Edit profile</Button>
                    <Button className="rounded-full gradient-brand text-white border-0">Share</Button>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  {[Twitter, Github, Linkedin, Globe].map((I, i) => (
                    <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:ring-glow transition"><I className="h-4 w-4" /></a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { l: "Hours learned", v: "428" },
                { l: "Courses", v: "27" },
                { l: "Certificates", v: "9" },
                { l: "Followers", v: "1.2k" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-muted/40 p-4 text-center">
                  <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="rounded-full p-1 glass">
              <TabsTrigger value="overview" className="rounded-full px-4">Overview</TabsTrigger>
              <TabsTrigger value="certificates" className="rounded-full px-4">Certificates</TabsTrigger>
              <TabsTrigger value="history" className="rounded-full px-4">History</TabsTrigger>
              <TabsTrigger value="settings" className="rounded-full px-4">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 grid lg:grid-cols-3 gap-6">
              <div className="glass rounded-3xl p-6 lg:col-span-2">
                <h3 className="font-semibold">About</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Frontend engineer with 8 years of experience shipping delightful UIs. Currently obsessed with AI-powered tooling, design systems and performance.
                </p>
                <div className="mt-6">
                  <div className="text-sm font-semibold mb-2">Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((s) => <Badge key={s} variant="outline" className="rounded-full">{s}</Badge>)}
                  </div>
                </div>
              </div>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-semibold flex items-center gap-2"><Award className="h-4 w-4" /> Achievements</h3>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {ACHIEVEMENTS.map((a) => (
                    <div key={a.name} className="rounded-2xl border border-border/60 p-3 text-center">
                      <div className="text-2xl">{a.icon}</div>
                      <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{a.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {COURSES.slice(0, 6).map((c) => (
                <div key={c.id} className="rounded-3xl p-6 relative overflow-hidden" style={{ background: c.thumbnail }}>
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="relative text-white">
                    <Award className="h-8 w-8" />
                    <div className="font-semibold mt-3 line-clamp-2">{c.title}</div>
                    <div className="text-xs opacity-80 mt-1">Verified · #{c.id.toUpperCase()}</div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <div className="glass rounded-3xl p-6">
                <ol className="relative border-l border-border/60 ml-3 space-y-6">
                  {COURSES.slice(0, 6).map((c, i) => (
                    <li key={c.id} className="ml-6">
                      <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full gradient-brand" />
                      <div className="text-xs text-muted-foreground">202{6 - i} · {["Apr","Mar","Feb","Jan","Dec","Nov"][i]} 1{i}</div>
                      <div className="font-semibold mt-1">Completed: {c.title}</div>
                      <div className="text-sm text-muted-foreground">Earned a verified certificate · {c.duration}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <div className="glass rounded-3xl p-6 max-w-2xl space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div><Label>First name</Label><Input className="mt-1" defaultValue="Alex" /></div>
                  <div><Label>Last name</Label><Input className="mt-1" defaultValue="Doe" /></div>
                </div>
                <div><Label>Email</Label><Input className="mt-1" defaultValue="alex@email.com" /></div>
                <div><Label>Bio</Label><Textarea className="mt-1" rows={3} defaultValue="Frontend engineer obsessed with delightful UIs." /></div>
                <Button className="rounded-full gradient-brand text-white border-0">Save changes</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="h-16" />
      </main>
      <Footer />
    </div>
  );
}
