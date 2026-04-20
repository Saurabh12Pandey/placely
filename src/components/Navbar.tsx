import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border/10"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="Placely Logo" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 origin-left" />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground [&.active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/" className="text-[13px] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground">
              Sign In
            </Link>
            <Button variant="neon" size="sm" className="rounded-lg text-[13px]">
              Get Started
            </Button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
            style={{ borderTop: "1px solid rgba(107,110,112,0.1)" }}
          >
            <div className="flex flex-col gap-1 p-5">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-lg px-3 py-2.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="neonOutline" size="sm" className="rounded-lg">Sign In</Button>
                <Button variant="neon" size="sm" className="rounded-lg">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
