import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { AuthShell } from "./login";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/otp")({
  head: () => ({ meta: [{ title: "Verify — LumenED" }] }),
  component: Otp,
});

function Otp() {
  const [val, setVal] = useState("");
  return (
    <AuthShell title="Verify your email" sub="Enter the 6-digit code we sent to you.">
      <form
        className="space-y-6"
        onSubmit={(e) => { e.preventDefault(); toast.success("Verified! (demo)"); }}
      >
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={val} onChange={setVal}>
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, i) => (
                <InputOTPSlot key={i} index={i} className="h-14 w-12 text-xl rounded-xl" />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button className="w-full h-11 rounded-xl gradient-brand text-white border-0">Verify <ArrowRight className="h-4 w-4 ml-1" /></Button>
        <p className="text-sm text-center text-muted-foreground">Didn't receive it? <button type="button" className="text-primary font-medium" onClick={()=>toast.success("Code resent")}>Resend</button></p>
        <p className="text-sm text-center text-muted-foreground">Back to <Link to="/login" className="text-primary font-medium">sign in</Link></p>
      </form>
    </AuthShell>
  );
}
