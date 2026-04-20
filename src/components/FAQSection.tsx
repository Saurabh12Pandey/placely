import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { RevealText } from "./RevealText";
const faqs = [
  {
    q: "How does the AI Matching engine work?",
    a: "Our proprietary engine analyzes six distinct vectors: performance metrics, academic standing, geographic preferences, position-specific skills, psychological readiness, and trial availability. It uses machine learning models trained on historical scout data to predict the highest probability of a successful recruitment outcome."
  },
  {
    q: "Is Placely completely free for student-athletes?",
    a: "Yes, our core platform is free forever for students. This includes creating a professional digital profile, searching for school openings, and receiving up to 5 intelligent AI matches per month. For athletes looking for an edge, our Pro tier offers unlimited matching, advanced analytics, and automated school outreach tools."
  },
  {
    q: "How do schools verify player data?",
    a: "We verify data through a multi-step process including video analysis validation, official school transcript uploads, and coach verification protocols. Every 'Verified' badge on a player profile signifies that our internal agents have cross-referenced the key metrics against reliable sources."
  },
  {
    q: "Can I use Placely if I'm already in a recruitment process?",
    a: "Absolutely. Placely is designed to supplement your existing efforts. Many athletes use our AI to find 'secondary' or 'back-up' schools they might have overlooked, or to get a purely objective data-driven analysis of their current market value."
  },
  {
    q: "What types of schools use the platform?",
    a: "Placely is used by a diverse range of institutions, from top-tier NCAA Division I universities and elite European academies to competitive club programs and community college athletic departments across 40+ countries."
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-32 bg-background overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #86C232 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Support Center</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-foreground">
            Frequently asked<br />
            <span className="gradient-neon-text">intelligence.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] max-w-lg mx-auto leading-relaxed">
            Everything you need to know about navigating the future of football recruitment with Placely.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="group rounded-[24px] px-8 border-none transition-all duration-300 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <AccordionTrigger className="text-[15px] sm:text-[16px] font-bold text-foreground/90 hover:text-primary transition-all hover:no-underline py-6 text-left focus:outline-none">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-[1.8] pb-6">
                  <div className="pt-2 border-t border-white/5 opacity-80">
                    {faq.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Glowing bottom border on cards via group-hover is handled by CSS below or inline */}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 p-10 rounded-[40px] border border-white/5 bg-white/[0.01] text-center"
        >
          <h3 className="text-xl font-black text-foreground mb-4">Still have questions?</h3>
          <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
            Our specialized recruitment agents are available 24/7 to help you optimize your profile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="neon" size="lg" className="rounded-2xl px-8 items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Talk to an Agent
            </Button>
            <Button variant="neonOutline" size="lg" className="rounded-2xl px-8">
              Visit Help Center
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
