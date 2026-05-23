export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="size-8 bg-brand-orange rounded-sm flex items-center justify-center text-accent-foreground font-bold font-display">
            C
          </div>
          <span className="font-display text-xl font-bold tracking-tight uppercase">Centivo</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="/" className="hover:text-brand-orange transition-colors">
            Avaleht
          </a>
          <a href="/#teenused" className="hover:text-brand-orange transition-colors">
            Teenused
          </a>
          <a href="/tehtud-tood" className="hover:text-brand-orange transition-colors">
            Tehtud tööd
          </a>
          <a href="/uudised" className="hover:text-brand-orange transition-colors">
            Uudised
          </a>
          <a href="/#kontakt" className="hover:text-brand-orange transition-colors">
            Kontakt
          </a>
          <a
            href="/#kontakt"
            className="px-5 py-2.5 bg-brand-orange text-primary-foreground rounded-full hover:bg-brand-copper-hover transition-all"
          >
            Pakkumine
          </a>
        </div>
        <a
          href="/#kontakt"
          className="md:hidden px-4 py-2 bg-brand-orange text-primary-foreground rounded-full text-xs font-medium uppercase tracking-wider hover:bg-brand-copper-hover transition-colors"
        >
          Pakkumine
        </a>
      </div>
    </nav>
  );
}
