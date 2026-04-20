import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "AI Matching", to: "/" },
      { label: "Comparison", to: "/features" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Success Stories", to: "/about" },
      { label: "FAQ", to: "/about" },
      { label: "Contact", to: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
      { label: "Cookie Policy", to: "/" },
      { label: "Security", to: "/" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-background">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-20" />

      {/* Footer Main Content */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <img src="/logo.svg" alt="Placely Logo" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 origin-left" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-8 mt-4">
              The world's most advanced soccer recruiting engine, powered by objective data and neural matching technology.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(idx => (
                <a key={idx} href="#" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all">
                  <div className="h-4 w-4 bg-muted-foreground opacity-60 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map(column => (
            <div key={column.title}>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-8">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground/60">
            © 2026 PLACELY PLATFORM. BUILT FOR THE NEXT GENERATION.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(134,194,50,0.8)] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
