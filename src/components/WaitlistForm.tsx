import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function WaitlistForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10 w-full max-w-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Row 1 */}
        <div className="relative group">
          <Input 
            placeholder="First name" 
            className="h-14 rounded-xl bg-white/5 border-white/10 hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-base"
          />
        </div>
        <div className="relative group">
          <Input 
            placeholder="Last name" 
            className="h-14 rounded-xl bg-white/5 border-white/10 hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-base"
          />
        </div>

        {/* Row 2 */}
        <div className="relative group md:col-span-1">
          <Input 
            type="email"
            placeholder="you@example.com" 
            className="h-14 rounded-xl bg-white/5 border-white/10 hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-base"
          />
        </div>
        <div className="md:col-span-1">
          <Button variant="default" className="w-full h-14 rounded-xl bg-white text-black hover:bg-white/90 font-bold text-base flex items-center justify-center gap-2 group transition-all duration-300">
            Join the Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Trust line */}
      <p className="mt-4 text-sm text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          1,500+ programs
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          Matches in minutes
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          No credit card required
        </span>
      </p>
    </motion.div>
  );
}
