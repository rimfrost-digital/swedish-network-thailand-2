const benefits = [
  "Mentorskap & erfarenhetsutbyte",
  "Praktiska kontakter (juridik, bank, HR, lokala lösningar)",
  "Introduktioner mellan medlemmar",
  "Tillgång till nätverksevent",
];

export function CompanyRegistry() {
  return (
    <section id="foretagsregistret" className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground">
              Level 1 – Gratis
            </span>

            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Företagsregistret
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              För svenskägda bolag som verkar i Thailand eller är på väg att
              etablera sig.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-background p-6 lg:p-8">
              <p className="text-pretty leading-relaxed text-foreground">
                Som medlem får du tillgång till ett ekosystem av företagare som
                delar både framgångar och dyrköpta misstag. Du får
                introduktioner, pålitliga lokala kontakter och ett bollplank som
                redan gått vägen.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lagg-till-foretag"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3.5 text-base font-medium text-background transition-all hover:bg-foreground/90"
              >
                Lägg till företag (gratis)
              </a>
              <a
                href="#ansok"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-muted"
              >
                Ansök till kärnan
              </a>
            </div>
          </div>

          {/* Benefits */}
          <div className="rounded-2xl bg-background p-8 shadow-sm lg:p-10">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Som medlem får du
            </h3>

            <ul className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <svg
                      className="h-3.5 w-3.5 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
