import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Users, Clock, Heart, Play } from "lucide-react";
import type { Course } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function CourseCard({ course, index = 0, listView = false }: { course: Course; index?: number; listView?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      className={listView ? "" : "h-full"}
    >
      <Link
        to="/courses/$id"
        params={{ id: course.id }}
        className={`group block glass rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
          listView ? "flex flex-col sm:flex-row" : "h-full flex flex-col"
        }`}
      >
        <div
          className={`relative overflow-hidden ${listView ? "sm:w-72 sm:shrink-0 aspect-video sm:aspect-auto" : "aspect-[16/10]"}`}
          style={{ background: course.thumbnail }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            {course.bestseller && <Badge className="bg-amber-400 text-black border-0">Bestseller</Badge>}
            {course.tag && <Badge className="bg-white/20 text-white border-0 backdrop-blur">{course.tag}</Badge>}
          </div>
          <button className="absolute top-3 right-3 h-9 w-9 rounded-full glass-strong grid place-items-center opacity-0 group-hover:opacity-100 transition">
            <Heart className="h-4 w-4" />
          </button>
          <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
            <div className="h-14 w-14 rounded-full bg-white/90 grid place-items-center shadow-glow">
              <Play className="h-5 w-5 text-black ml-0.5" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-90">{course.category}</div>
        </div>
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="font-display font-semibold leading-snug line-clamp-2 group-hover:text-gradient transition">
            {course.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <img src={course.instructorAvatar} alt={course.instructor} className="h-6 w-6 rounded-full" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 text-amber-500"><Star className="h-3.5 w-3.5" fill="currentColor" />{course.rating}</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{(course.students / 1000).toFixed(1)}k</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
            <Badge variant="outline" className="ml-auto text-[10px]">{course.level}</Badge>
          </div>
          <div className="flex items-end justify-between mt-auto pt-2 border-t border-border/50">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">${course.price}</span>
              {course.originalPrice && <span className="text-xs text-muted-foreground line-through">${course.originalPrice}</span>}
            </div>
            <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition">View course →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
