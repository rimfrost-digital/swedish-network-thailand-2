const weAre = [
  "Handlingsorienterade",
  "Kvalitetsdrivna",
  "Founder-curated",
  "Bygger varma introduktioner",
  "Fokuserade på resultat",
];

const weAreNot = [
  "Byråkrati",
  "Oändliga möten",
  "Mingel med visitkort utan uppföljning",
  "En förening utan riktning",
];

export function Comparison() {
  return (
    <section className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vi är / Vi är inte
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Vi är */}
          <div className="rounded-2xl bg-background p-8 shadow-sm lg:p-10">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Vi är
            </h3>
            <ul className="mt-6 space-y-4">
              {weAre.map((item) => (
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
          </div>

          {/* Vi är inte */}
          <div className="rounded-2xl border border-border bg-background p-8 lg:p-10">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Vi är inte
            </h3>
            <ul className="mt-6 space-y-4">
              {weAreNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                    <svg
                      className="h-3 w-3 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span className="text-base text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
