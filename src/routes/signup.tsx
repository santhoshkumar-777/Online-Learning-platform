import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthShell, SocialButtons, Divider } from "./login";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account — LumenED" }] }),
  component: Signup,
});

function Signup() {
  const [show, setShow] = useState(false);
  return (
    <AuthShell title="Create your account" sub="Start your learning journey in under 60 seconds.">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Account created (demo)"); }}>
        <SocialButtons />
        <Divider />
        <div className="grid grid-cols-2 gap-3">
          <div><Label>First name</Label><Input className="mt-1 h-11 rounded-xl" placeholder="Alex" /></div>
          <div><Label>Last name</Label><Input className="mt-1 h-11 rounded-xl" placeholder="Doe" /></div>
        </div>
        <div><Label>Email</Label><Input type="email" required className="mt-1 h-11 rounded-xl" placeholder="you@email.com" /></div>
        <div>
          <Label>Password</Label>
          <div className="relative mt-1">
            <Input type={show ? "text" : "password"} required className="h-11 rounded-xl pr-10" placeholder="At least 8 characters" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
          </div>
        </div>
        <label className="flex items-start gap-2 text-xs text-muted-foreground"><Checkbox className="mt-0.5" /> I agree to the Terms and Privacy Policy</label>
        <Button type="submit" className="w-full h-11 rounded-xl gradient-brand text-white border-0">Create account <ArrowRight className="h-4 w-4 ml-1" /></Button>
        <p className="text-sm text-center text-muted-foreground">Already have an account? <Link to="/login" className="text-primary font-medium">Sign in</Link></p>
      </form>
    </AuthShell>
  );
}
