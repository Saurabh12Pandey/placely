import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How does AI matching work?", a: "Our AI analyzes hundreds of data points from student profiles and school requirements — including skills, location, performance history, academics, and availability — to generate a match score represented by our hexagon system." },
  { q: "Is it free for students?", a: "Yes! Students can create a profile, browse schools, and receive up to 5 matches per month completely free. Upgrade to Pro for unlimited matches and advanced AI features." },
  { q: "How do schools post openings?", a: "Schools can create an account, specify their requirements (positions, skill levels, academic criteria), and publish openings that are instantly visible to matched students worldwide." },
  { q: "How does recruitment start?", a: "When both a student and school express mutual interest (a match), the platform unlocks direct communication, trial scheduling, and the full end-to-end recruitment workflow." },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
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
                className="glass-card rounded-xl border-glow px-6 border-none"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary transition-colors hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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
