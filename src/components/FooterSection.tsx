import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="relative pt-20 pb-10">
      {/* CTA bar */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8 mb-20">
        <div className="rounded-2xl p-8 sm:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(134,194,50,0.08), rgba(97,137,47,0.04))",
            border: "1px solid rgba(134,194,50,0.12)",
          }}>
          <h3 className="text-2xl sm:text-3xl font-black tracking-[-0.02em] text-foreground">
            Ready to get recruited?
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Join 12,500+ athletes already using Placely to find their perfect match.
          </p>
          <Button variant="neon" size="xl" className="mt-6 rounded-xl">
            Create Free Profile
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="h-px mb-8" style={{ background: "rgba(107,110,112,0.12)" }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md"
              style={{ background: "linear-gradient(135deg, #86C232, #61892F)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222629" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2 C 7 7, 7 17, 12 22" />
                <path d="M12 2 C 17 7, 17 17, 12 22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <span className="text-sm font-bold text-foreground tracking-tight">Place<span className="text-primary">ly</span></span>
          </div>
          <p className="text-[11px] text-muted-foreground">© 2026 Placely. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Contact"].map(link => (
              <a key={link} href="#" className="text-[11px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.1em] font-medium">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
