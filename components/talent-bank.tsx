const forCompanies = [
  "Tidigt tillgång till hungrig kompetens",
  "Kulturell brygga mellan Sverige och Thailand",
  "Personliga rekommendationer",
];

const forTalents = [
  "Gratis väg in i nätverket",
  "Mentorskap",
  "Riktiga kontakter",
  "Rekommendationer slår CV",
];

export function TalentBank() {
  return (
    <section id="talangbanken" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground">
            Level 1 – Gratis
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Talangbanken
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Svensktalande talanger redo för Thailand.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Behörighet:</span>
            <span>Svensk i Thailand</span>
            <span className="text-border">|</span>
            <span>Thai/svensk med dubbelt medborgarskap (var som helst)</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* For Companies */}
          <div className="rounded-2xl border border-border bg-background p-8 lg:p-10">
            <h3 className="font-display text-xl font-semibold text-foreground">
              För företag
            </h3>
            <ul className="mt-6 space-y-4">
              {forCompanies.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <svg
                      className="h-3 w-3 text-background"
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
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#registrera-behov"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-foreground px-6 py-3.5 text-base font-medium text-background transition-all hover:bg-foreground/90"
            >
              Registrera företagets behov
            </a>
          </div>

          {/* For Talents */}
          <div className="rounded-2xl border border-border bg-background p-8 lg:p-10">
            <h3 className="font-display text-xl font-semibold text-foreground">
              För talanger
            </h3>
            <ul className="mt-6 space-y-4">
              {forTalents.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <svg
                      className="h-3 w-3 text-background"
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
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#ga-med-talang"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-muted"
            >
              Gå med som talang (gratis)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
