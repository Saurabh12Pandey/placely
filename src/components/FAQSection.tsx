import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How does AI matching work?", a: "Our AI analyzes six core dimensions — skills, location, performance, experience, availability, and academics — generating a hexagon-based compatibility score. Higher symmetry means a better fit." },
  { q: "Is it free for students?", a: "Yes. Students can create profiles, browse school openings, and receive up to 5 AI matches per month at no cost. Upgrade to Pro for unlimited matches and advanced features." },
  { q: "How do schools post openings?", a: "Schools create an account, define their requirements (positions, skill levels, academic standards), and publish openings that are instantly matched against qualified student profiles." },
  { q: "How does recruitment start?", a: "When both a student and school express mutual interest, the platform unlocks direct messaging, trial scheduling, and the complete end-to-end recruitment workflow." },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground">Common questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl px-6 border-none"
                style={{
                  background: "linear-gradient(145deg, rgba(134,194,50,0.03), rgba(34,38,41,0.4))",
                  border: "1px solid rgba(134,194,50,0.06)",
                }}
              >
                <AccordionTrigger className="text-[14px] font-semibold text-foreground hover:text-primary transition-colors hover:no-underline py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[13px] text-muted-foreground leading-[1.7] pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
