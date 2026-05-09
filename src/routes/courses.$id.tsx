import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star, Users, Clock, Globe, Award, CheckCircle2, Play, ChevronDown,
  Heart, Share2, Trophy, Target,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CourseCard } from "@/components/CourseCard";
import { COURSES } from "@/lib/data";

export const Route = createFileRoute("/courses/$id")({
  component: CourseDetail,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Course not found</h1>
        <Link to="/courses" className="text-primary mt-3 inline-block">Browse all courses →</Link>
      </div>
    </div>
  ),
});

const CURRICULUM = [
  { title: "Getting started", lessons: 6, duration: "42m" },
  { title: "Core foundations", lessons: 12, duration: "2h 14m" },
  { title: "Building real projects", lessons: 18, duration: "3h 56m" },
  { title: "Advanced patterns", lessons: 14, duration: "2h 48m" },
  { title: "Deployment & scaling", lessons: 9, duration: "1h 30m" },
];

const REVIEWS = [
  { name: "Aria K.", rating: 5, text: "Hands down the best course I've taken. Clear, deep and project-focused.", avatar: "https://i.pravatar.cc/100?img=20" },
  { name: "Marcus W.", rating: 5, text: "The instructor explains complex topics with elegance. Highly recommended!", avatar: "https://i.pravatar.cc/100?img=14" },
  { name: "Yuki S.", rating: 4, text: "Great content overall. Loved the projects, would love more case studies.", avatar: "https://i.pravatar.cc/100?img=49" },
];

function CourseDetail() {
  const { id } = Route.useParams();
  const course = COURSES.find((c) => c.id === id);
  if (!course) throw notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ background: course.thumbnail }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-12 pb-20">
            <div className="grid lg:grid-cols-[1fr_380px] gap-10">
              <div>
                <Badge variant="outline" className="rounded-full glass">{course.category}</Badge>
                <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">{course.title}</h1>
                <p className="mt-4 text-muted-foreground max-w-2xl">A complete, hands-on path designed to take you from fundamentals to production. Real projects, real feedback, real outcomes.</p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-amber-400"><Star className="h-4 w-4" fill="currentColor" /> {course.rating} <span className="text-muted-foreground ml-1">(2,184 reviews)</span></span>
                  <span className="flex items-center gap-1 text-muted-foreground"><Users className="h-4 w-4" /> {course.students.toLocaleString()} students</span>
                  <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-4 w-4" /> {course.duration}</span>
                  <span className="flex items-center gap-1 text-muted-foreground"><Globe className="h-4 w-4" /> English + 12 captions</span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <img src={course.instructorAvatar} className="h-10 w-10 rounded-full" alt={course.instructor} />
                  <div>
                    <div className="text-sm">Created by <span className="font-semibold">{course.instructor}</span></div>
                    <div className="text-xs text-muted-foreground">Top-rated instructor · 12 courses</div>
                  </div>
                </div>
              </div>

              <EnrollCard course={course} />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1fr_380px] gap-10 -mt-10">
          <div className="space-y-10">
            <div className="glass rounded-3xl p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold">What you'll learn</h2>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {[
                  "Build production-grade apps from scratch",
                  "Master modern best practices",
                  "Real interview-ready portfolio projects",
                  "Performance, accessibility & security",
                  "Deploy with confidence to the cloud",
                  "Workflows used at top companies",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{t}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Course content</h2>
              <p className="text-sm text-muted-foreground mt-1">{CURRICULUM.reduce((a, c) => a + c.lessons, 0)} lessons · {course.duration} total</p>
              <div className="mt-5 space-y-2">
                {CURRICULUM.map((s, i) => <CurriculumItem key={i} section={s} defaultOpen={i === 0} />)}
              </div>
            </div>

            <div className="glass rounded-3xl p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold">Requirements</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>Basic computer literacy and a curious mind</li>
                <li>A modern laptop (Mac, Windows or Linux)</li>
                <li>No prior experience needed — we start from zero</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Student reviews</h2>
              <div className="mt-5 grid md:grid-cols-[260px_1fr] gap-6">
                <div className="glass rounded-3xl p-6 text-center">
                  <div className="text-5xl font-display font-bold text-gradient">{course.rating}</div>
                  <div className="flex justify-center gap-0.5 text-amber-400 mt-2">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4" fill="currentColor"/>)}</div>
                  <div className="text-xs text-muted-foreground mt-2">2,184 ratings</div>
                </div>
                <div className="space-y-2">
                  {[5,4,3,2,1].map((s) => (
                    <div key={s} className="flex items-center gap-3 text-xs">
                      <span className="w-8">{s} ★</span>
                      <Progress value={s===5?72:s===4?20:s===3?5:s===2?2:1} className="h-2 flex-1" />
                      <span className="w-10 text-right text-muted-foreground">{s===5?"72%":s===4?"20%":s===3?"5%":s===2?"2%":"1%"}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {REVIEWS.map((r, i) => (
                  <div key={i} className="glass rounded-2xl p-5">
                    <div className="flex items-center gap-3">
                      <img src={r.avatar} alt="" className="h-10 w-10 rounded-full" />
                      <div>
                        <div className="text-sm font-semibold">{r.name}</div>
                        <div className="flex gap-0.5 text-amber-400">{Array.from({length:r.rating}).map((_,i)=><Star key={i} className="h-3 w-3" fill="currentColor"/>)}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Related courses</h2>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {COURSES.filter((c) => c.id !== course.id).slice(0, 4).map((c, i) => <CourseCard course={c} index={i} key={c.id} />)}
              </div>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function EnrollCard({ course }: { course: typeof COURSES[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="lg:sticky lg:top-24 lg:self-start"
    >
      <div className="glass-strong rounded-3xl overflow-hidden shadow-glow">
        <div className="relative aspect-video" style={{ background: course.thumbnail }}>
          <div className="absolute inset-0 bg-black/30" />
          <button className="absolute inset-0 grid place-items-center group">
            <div className="h-16 w-16 rounded-full bg-white/95 grid place-items-center group-hover:scale-110 transition shadow-glow">
              <Play className="h-6 w-6 text-black ml-0.5" fill="currentColor" />
            </div>
          </button>
          <div className="absolute bottom-3 left-3 text-white text-xs font-medium">Preview this course</div>
        </div>
        <div className="p-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-display font-bold">${course.price}</span>
            {course.originalPrice && <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>}
            <Badge className="ml-auto bg-emerald-500/15 text-emerald-500 border-0">-{Math.round((1 - course.price / (course.originalPrice ?? 100)) * 100)}%</Badge>
          </div>
          <Button className="w-full mt-5 h-12 rounded-full gradient-brand text-white border-0 text-base">Enroll now</Button>
          <Button variant="outline" className="w-full mt-3 h-12 rounded-full">Add to wishlist</Button>
          <div className="mt-5 space-y-3 text-sm">
            <Row icon={Clock} label="Duration" value={course.duration} />
            <Row icon={Target} label="Level" value={course.level} />
            <Row icon={Trophy} label="Certificate" value="Verified" />
            <Row icon={Award} label="Projects" value="12 hands-on" />
          </div>
          <div className="mt-5 pt-5 border-t border-border/60 flex items-center gap-2">
            <Button variant="ghost" size="sm" className="rounded-full"><Heart className="h-4 w-4 mr-1" /> Save</Button>
            <Button variant="ghost" size="sm" className="rounded-full"><Share2 className="h-4 w-4 mr-1" /> Share</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Row({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span className="text-muted-foreground">{label}</span>
      <span className="ml-auto font-medium">{value}</span>
    </div>
  );
}

function CurriculumItem({ section, defaultOpen }: { section: { title: string; lessons: number; duration: string }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition">
        <div className="flex items-center gap-3">
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-0" : "-rotate-90"}`} />
          <span className="font-medium">{section.title}</span>
        </div>
        <div className="text-xs text-muted-foreground">{section.lessons} lessons · {section.duration}</div>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0 }} className="overflow-hidden">
        <div className="px-12 pb-4 space-y-1.5 text-sm text-muted-foreground">
          {Array.from({ length: Math.min(section.lessons, 5) }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <Play className="h-3 w-3" /> Lesson {i + 1} · {3 + i * 2}m
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
