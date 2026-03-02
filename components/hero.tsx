export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 lg:pt-24">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16 lg:py-24">
          {/* Main Content */}
          <div className="max-w-4xl">
            <h1 className="animate-fade-in font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-balance">
                Ett affärsnätverk byggt av företagare – för företagare i
                Thailand.
              </span>
            </h1>

            <div className="mt-8 max-w-2xl animate-fade-in-up opacity-0 animate-delay-200">
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Vi är en satellit till de officiella organen. Inte istället för
                – utan bredvid. Medan andra ger protokoll och processer, ger vi
                varma kontakter, ärliga erfarenheter och praktisk vägledning.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 animate-fade-in-up opacity-0 animate-delay-300 sm:flex-row sm:items-center">
              <a
                href="#foretagsregistret"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3.5 text-base font-medium text-background transition-all hover:bg-foreground/90 hover:shadow-lg"
              >
                Lägg till företag i registret
              </a>
              <a
                href="#talangbanken"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-muted"
              >
                Gå med i Talangbanken (gratis)
              </a>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="mt-16 animate-fade-in-up opacity-0 animate-delay-400 lg:mt-24">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8">
              {["Kvalificerat", "Praktiskt", "Lokalt", "Resultat"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    {index > 0 && (
                      <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />
                    )}
                    <span className="text-sm font-medium tracking-wide text-muted-foreground">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element - subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
