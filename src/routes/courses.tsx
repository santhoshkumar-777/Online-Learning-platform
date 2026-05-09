import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter, Grid2x2, List, Search, SlidersHorizontal, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { COURSES } from "@/lib/data";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "All courses — LumenED" },
      { name: "description", content: "Browse 8,500+ courses by category, level, price and rating." },
    ],
  }),
  component: CoursesPage,
});

const CATS = ["Development", "Design", "Data Science", "Business", "Marketing", "Photography", "AI & ML"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const DURATIONS = ["0-5h", "5-10h", "10-20h", "20h+"];

function CoursesPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [q, setQ] = useState("");
  const [cats, setCats] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([0, 100]);
  const [rating, setRating] = useState(0);

  const toggle = (arr: string[], v: string, set: (a: string[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      if (q && !c.title.toLowerCase().includes(q.toLowerCase()) && !c.instructor.toLowerCase().includes(q.toLowerCase())) return false;
      if (cats.length && !cats.includes(c.category)) return false;
      if (levels.length && !levels.includes(c.level)) return false;
      if (c.price < price[0] || c.price > price[1]) return false;
      if (rating && c.rating < rating) return false;
      return true;
    });
  }, [q, cats, levels, price, rating]);

  const Filters = (
    <div className="space-y-7">
      <FilterBlock title="Category">
        <div className="space-y-2">
          {CATS.map((c) => (
            <label key={c} className="flex items-center gap-3 text-sm cursor-pointer">
              <Checkbox checked={cats.includes(c)} onCheckedChange={() => toggle(cats, c, setCats)} />
              {c}
            </label>
          ))}
        </div>
      </FilterBlock>
      <FilterBlock title="Level">
        <div className="space-y-2">
          {LEVELS.map((l) => (
            <label key={l} className="flex items-center gap-3 text-sm cursor-pointer">
              <Checkbox checked={levels.includes(l)} onCheckedChange={() => toggle(levels, l, setLevels)} />
              {l}
            </label>
          ))}
        </div>
      </FilterBlock>
      <FilterBlock title="Price">
        <Slider value={price} onValueChange={setPrice} min={0} max={100} step={5} />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>${price[0]}</span><span>${price[1]}</span>
        </div>
      </FilterBlock>
      <FilterBlock title="Duration">
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((d) => <Badge key={d} variant="outline" className="cursor-pointer hover:bg-muted">{d}</Badge>)}
        </div>
      </FilterBlock>
      <FilterBlock title="Rating">
        <div className="space-y-2">
          {[4.5, 4, 3.5].map((r) => (
            <label key={r} className="flex items-center gap-3 text-sm cursor-pointer">
              <Checkbox checked={rating === r} onCheckedChange={() => setRating(rating === r ? 0 : r)} />
              <span className="flex items-center gap-1">{r}+ <Star className="h-3.5 w-3.5 text-amber-400" fill="currentColor" /></span>
            </label>
          ))}
        </div>
      </FilterBlock>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 md:px-6 pt-10">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold">All courses</h1>
              <p className="mt-2 text-muted-foreground text-sm">{filtered.length} courses · curated by experts</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search courses…" className="pl-9 h-10 w-64 rounded-full bg-muted/60" />
              </div>
              <div className="hidden md:flex glass rounded-full p-1">
                <Button size="sm" variant={view === "grid" ? "default" : "ghost"} onClick={() => setView("grid")} className="rounded-full h-8 w-8 p-0"><Grid2x2 className="h-4 w-4" /></Button>
                <Button size="sm" variant={view === "list" ? "default" : "ghost"} onClick={() => setView("list")} className="rounded-full h-8 w-8 p-0"><List className="h-4 w-4" /></Button>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden rounded-full"><SlidersHorizontal className="h-4 w-4 mr-2" />Filters</Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto p-6">
                  <h3 className="font-display text-lg font-bold mb-6">Filters</h3>
                  {Filters}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-6 mt-8 grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="hidden lg:block">
            <div className="glass rounded-3xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold flex items-center gap-2"><Filter className="h-4 w-4" />Filters</h3>
                <button className="text-xs text-muted-foreground hover:text-foreground" onClick={() => { setCats([]); setLevels([]); setRating(0); setPrice([0,100]); }}>Clear all</button>
              </div>
              {Filters}
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="glass rounded-3xl p-12 text-center">
                <div className="text-lg font-semibold">No courses match your filters</div>
                <p className="text-sm text-muted-foreground mt-1">Try clearing some filters or searching for another keyword.</p>
              </div>
            ) : view === "grid" ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((c, i) => <CourseCard key={c.id} course={c} index={i} listView />)}
              </div>
            )}

            <div className="mt-12 flex items-center justify-center gap-1">
              <Button variant="ghost" size="icon" className="rounded-full"><ChevronLeft className="h-4 w-4" /></Button>
              {[1, 2, 3, 4, 5].map((n) => (
                <Button key={n} size="icon" variant={n === 1 ? "default" : "ghost"} className={`rounded-full h-9 w-9 ${n === 1 ? "gradient-brand text-white border-0" : ""}`}>{n}</Button>
              ))}
              <span className="px-2 text-muted-foreground">…</span>
              <Button variant="ghost" size="icon" className="rounded-full"><ChevronRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{title}</div>
      {children}
    </div>
  );
}
