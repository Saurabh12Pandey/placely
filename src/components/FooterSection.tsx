export function FooterSection() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md gradient-neon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-neon-foreground">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2 C 7 7, 7 17, 12 22" />
                <path d="M12 2 C 17 7, 17 17, 12 22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <span className="text-sm font-bold text-foreground">Place<span className="text-primary">ly</span></span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Placely. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Contact"].map(link => (
              <a key={link} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
