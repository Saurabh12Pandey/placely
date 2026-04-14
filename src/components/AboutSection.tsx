import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">About Placely</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-0.02em] text-foreground leading-[1.1]">
              Leveling the playing field
            </h2>
            <p className="mt-6 text-sm text-muted-foreground leading-[1.8]">
              We believe every talented student-athlete deserves access to the right opportunities — regardless of geography, connections, or resources.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-[1.8]">
              Built by former athletes and AI engineers, Placely uses technology to eliminate the inefficiencies of traditional recruitment and make football discovery fair, fast, and data-driven.
            </p>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(134,194,50,0.06), rgba(34,38,41,0.4))",
                border: "1px solid rgba(134,194,50,0.1)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Mission</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.7]">
                Democratize football recruitment through intelligent technology that connects talent with opportunity at scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(97,137,47,0.06), rgba(34,38,41,0.4))",
                border: "1px solid rgba(97,137,47,0.1)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#61892F" }} />
                <h3 className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#61892F" }}>Vision</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.7]">
                A world where every football talent is discovered, matched, and empowered to reach their full potential — anywhere, anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
