const navLinks = [
  { href: "#om-oss", label: "Om oss" },
  { href: "#foretagsregistret", label: "Företagsregistret" },
  { href: "#talangbanken", label: "Talangbanken" },
  { href: "#teams", label: "Teams" },
  { href: "#events", label: "Events" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <span className="font-display text-xl font-bold text-foreground">
            Svenska Företagare i Thailand
          </span>

          {/* Tagline */}
          <p className="mt-6 max-w-md text-pretty text-lg text-muted-foreground">
            Varma kontakter. Ärliga erfarenheter. Praktisk vägledning.
          </p>

          {/* Navigation */}
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://www.facebook.com/SvenskaForetagareIThailand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/groups/350782168330337"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              aria-label="Facebook Group"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Svenska Företagare i Thailand. Alla
              rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
