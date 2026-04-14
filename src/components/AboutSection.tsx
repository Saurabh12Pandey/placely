import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Our Mission</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We're on a mission to <span className="text-primary font-semibold">simplify football recruitment</span> using the power of artificial intelligence. Every talented student deserves access to the right opportunities — regardless of geography, connections, or resources.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-xl mx-auto text-left">
            <div className="glass-card rounded-xl p-6 border-glow">
              <h3 className="text-sm font-bold text-primary mb-2">🎯 Mission</h3>
              <p className="text-sm text-muted-foreground">Democratize football recruitment through intelligent technology that connects talent with opportunity.</p>
            </div>
            <div className="glass-card rounded-xl p-6 border-glow">
              <h3 className="text-sm font-bold text-primary mb-2">🌍 Vision</h3>
              <p className="text-sm text-muted-foreground">A world where every football talent is discovered, matched, and empowered to reach their full potential.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
