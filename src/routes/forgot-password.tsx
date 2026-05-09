import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthShell } from "./login";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — LumenED" }] }),
  component: Forgot,
});

function Forgot() {
  return (
    <AuthShell title="Reset your password" sub="We'll send a one-time code to your email.">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Code sent to your email"); }}>
        <div><Label>Email</Label><Input type="email" required className="mt-1 h-11 rounded-xl" placeholder="you@email.com" /></div>
        <Button className="w-full h-11 rounded-xl gradient-brand text-white border-0">Send code <ArrowRight className="h-4 w-4 ml-1" /></Button>
        <p className="text-sm text-center text-muted-foreground">Got a code? <Link to="/otp" className="text-primary font-medium">Enter it</Link></p>
        <p className="text-sm text-center text-muted-foreground">Back to <Link to="/login" className="text-primary font-medium">sign in</Link></p>
      </form>
    </AuthShell>
  );
}
