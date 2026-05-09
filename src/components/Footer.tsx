import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Youtube, Sparkles } from "lucide-react";

const cols = [
  { title: "Learn", links: ["Courses", "Categories", "Free lessons", "Career paths", "Live classes"] },
  { title: "Community", links: ["Forums", "Events", "Mentorship", "Leaderboard", "Discord"] },
  { title: "Company", links: ["About", "Careers", "Press", "Affiliates", "Contact"] },
  { title: "Resources", links: ["Blog", "Help center", "Status", "Privacy", "Terms"] },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid gap-10 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl gradient-brand grid place-items-center shadow-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold">Lumen<span className="text-gradient">ED</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            The premium learning platform built for the AI era. Learn skills that build your future, with world-class instructors and a thriving community.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Github, Linkedin, Youtube].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:ring-glow transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold mb-3">{c.title}</div>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} LumenED. All rights reserved.</div>
          <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}
