import { Link, useRouterState } from "@tanstack/react-router";
import { ReactNode } from "react";
import {
  Home, BookOpen, BarChart3, Award, Bookmark, Bell, Settings, LogOut,
  Sparkles, Users, DollarSign, MessageSquare, Search,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STUDENT_NAV = [
  { to: "/dashboard", label: "Overview", icon: Home, exact: true },
  { to: "/dashboard/learning", label: "My Learning", icon: BookOpen },
  { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dashboard/certificates", label: "Certificates", icon: Award },
  { to: "/dashboard/saved", label: "Wishlist", icon: Bookmark },
  { to: "/community", label: "Community", icon: MessageSquare },
];

const INSTRUCTOR_NAV = [
  { to: "/instructor", label: "Overview", icon: Home, exact: true },
  { to: "/instructor/courses", label: "My Courses", icon: BookOpen },
  { to: "/instructor/students", label: "Students", icon: Users },
  { to: "/instructor/earnings", label: "Earnings", icon: DollarSign },
  { to: "/instructor/reviews", label: "Reviews", icon: MessageSquare },
];

export function DashboardLayout({
  children, role = "student",
}: { children: ReactNode; role?: "student" | "instructor" }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const nav = role === "student" ? STUDENT_NAV : INSTRUCTOR_NAV;

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/60 bg-sidebar/50 backdrop-blur sticky top-0 h-screen">
        <div className="p-5 border-b border-border/60">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl gradient-brand grid place-items-center shadow-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold">Lumen<span className="text-gradient">ED</span></span>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground">{role === "student" ? "Learn" : "Teach"}</div>
          {nav.map((item) => {
            const active = item.exact ? path === item.to : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                  active ? "gradient-brand text-white shadow-glow" : "hover:bg-muted/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 mt-4 border-t border-border/60 space-y-1">
            <Link to="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition">
              <Settings className="h-4 w-4" /> Settings
            </Link>
            <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition">
              <LogOut className="h-4 w-4" /> Log out
            </Link>
          </div>
        </nav>
        <div className="p-3">
          <div className="glass rounded-2xl p-4">
            <div className="text-xs text-muted-foreground">Upgrade to Pro</div>
            <div className="font-semibold mt-1">Unlock everything</div>
            <Button size="sm" className="mt-3 w-full rounded-full gradient-brand text-white border-0">Upgrade</Button>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-40 glass-strong border-b border-border/60">
          <div className="flex items-center gap-3 px-4 md:px-8 py-3">
            <Link to="/" className="lg:hidden flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg gradient-brand grid place-items-center"><Sparkles className="h-4 w-4 text-white" /></div>
            </Link>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search…" className="pl-9 h-10 rounded-full bg-muted/50" />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-cyan" />
            </Button>
            <ThemeToggle />
            <Link to="/profile">
              <img src="https://i.pravatar.cc/100?img=12" className="h-9 w-9 rounded-full ring-2 ring-border" alt="" />
            </Link>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8 max-w-[1600px] w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
