import { createFileRoute, Link } from "@tanstack/react-router";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Github, Mail, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ThemeToggle";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — LumenED" }] }),
  component: Login,
});

function Login() {
  const [show, setShow] = useState(false);
  return (
    <AuthShell title="Welcome back" sub="Sign in to keep your streak alive.">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Signed in (demo)"); }}>
        <SocialButtons />
        <Divider />
        <div><Label>Email</Label><Input type="email" required placeholder="you@email.com" className="mt-1 h-11 rounded-xl" /></div>
        <div>
          <div className="flex items-center justify-between"><Label>Password</Label><Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot?</Link></div>
          <div className="relative mt-1">
            <Input type={show ? "text" : "password"} required placeholder="••••••••" className="h-11 rounded-xl pr-10" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
          </div>
        </div>
        <Button type="submit" className="w-full h-11 rounded-xl gradient-brand text-white border-0">Sign in <ArrowRight className="h-4 w-4 ml-1" /></Button>
        <p className="text-sm text-center text-muted-foreground">Don't have an account? <Link to="/signup" className="text-primary font-medium">Create one</Link></p>
      </form>
    </AuthShell>
  );
}

export function AuthShell({ title, sub, children }: { title: string; sub: string; children: ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col justify-between p-10 overflow-hidden gradient-brand text-white">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl animate-blob" />
        <Link to="/" className="relative flex items-center gap-2 z-10">
          <div className="h-9 w-9 rounded-xl bg-white/15 backdrop-blur grid place-items-center"><Sparkles className="h-4 w-4" /></div>
          <span className="font-display text-lg font-bold">LumenED</span>
        </Link>
        <div className="relative z-10 max-w-md">
          <h2 className="font-display text-4xl font-bold leading-tight">Learn skills that build your future.</h2>
          <p className="mt-4 text-white/80">Join 4M+ learners using LumenED to level up their careers with world-class instructors and AI-powered guidance.</p>
          <div className="mt-8 glass-strong rounded-2xl p-5 bg-white/10 border-white/20">
            <p className="text-sm">"LumenED helped me land a senior engineer role in 6 months. The platform feels magical."</p>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?img=14" className="h-9 w-9 rounded-full" alt="" />
              <div className="text-xs"><div className="font-semibold">Marcus W.</div><div className="opacity-80">Senior Engineer @ Stripe</div></div>
            </div>
          </div>
        </div>
        <div className="relative z-10 text-xs opacity-80">© {new Date().getFullYear()} LumenED Inc.</div>
      </div>
      <div className="relative flex items-center justify-center p-6 md:p-10">
        <div className="absolute top-4 right-4"><ThemeToggle /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
          <Link to="/" className="flex lg:hidden items-center gap-2 mb-8">
            <div className="h-9 w-9 rounded-xl gradient-brand grid place-items-center"><Sparkles className="h-4 w-4 text-white" /></div>
            <span className="font-display text-lg font-bold">LumenED</span>
          </Link>
          <h1 className="font-display text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-2 text-sm">{sub}</p>
          <div className="mt-8">{children}</div>
        </motion.div>
      </div>
    </div>
  );
}

export function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button type="button" variant="outline" className="h-11 rounded-xl"><Mail className="h-4 w-4 mr-2" />Google</Button>
      <Button type="button" variant="outline" className="h-11 rounded-xl"><Github className="h-4 w-4 mr-2" />GitHub</Button>
    </div>
  );
}
export function Divider() {
  return <div className="relative my-2"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div><div className="relative flex justify-center text-xs"><span className="px-2 bg-background text-muted-foreground">or continue with email</span></div></div>;
}
