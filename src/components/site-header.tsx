import { useState } from "react";

const navigationLinks = [
  { href: "/", label: "Avaleht" },
  { href: "/tehtud-tood", label: "Teenused" },
  { href: "/uudised", label: "Uudised" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center md:flex md:justify-between">
          <button
            type="button"
            aria-label="Ava menüü"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-start text-foreground transition-colors hover:text-brand-orange md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
          <a href="/" className="hidden items-center gap-2 md:flex">
            <div className="size-8 bg-brand-orange rounded-sm flex items-center justify-center text-accent-foreground font-bold font-display">
              C
            </div>
            <span className="font-display text-xl font-bold tracking-tight uppercase">Centivo</span>
          </a>
          <a
            href="/"
            className="justify-self-center font-display text-xl font-bold tracking-tight uppercase md:hidden"
          >
            Centivo
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-brand-orange transition-colors">
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              className="px-5 py-2.5 bg-brand-orange text-primary-foreground rounded-full hover:bg-brand-copper-hover transition-all"
            >
              Pakkumine
            </a>
          </div>
          <a
            href="/#kontakt"
            onClick={() => setIsMenuOpen(false)}
            className="justify-self-end px-4 py-2 bg-brand-orange text-primary-foreground rounded-full text-xs font-medium uppercase tracking-wider hover:bg-brand-copper-hover transition-colors md:hidden"
          >
            Pakkumine
          </a>
        </div>
        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="mt-4 rounded-2xl border border-border bg-card/95 p-2 shadow-sm md:hidden"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-brand-orange/10 hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
