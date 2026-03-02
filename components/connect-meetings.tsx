const outcomes = [
  "1–3 varma kontakter",
  "1 konkret introduktion",
  "1 tydlig nästa åtgärd",
];

export function ConnectMeetings() {
  return (
    <section className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Koppla-träffar
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Resultatdrivna möten
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Våra Koppla-träffar är designade för att ge konkreta resultat –
              inte bara trevligt småprat.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-background p-8 lg:p-10">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Du går därifrån med:
            </h3>
            <ul className="mt-6 space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <svg
                      className="h-4 w-4 text-background"
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
                  <span className="text-lg font-medium text-foreground">
                    {outcome}
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
