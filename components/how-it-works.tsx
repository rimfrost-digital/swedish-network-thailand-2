const steps = [
  {
    number: "1",
    title: "Välj Team (stad)",
    description:
      "Hitta det lokala Team som passar dig bäst – Bangkok, Hua Hin, Chiang Mai eller någon annan ort.",
  },
  {
    number: "2",
    title: "Kom på ett nätverksevent",
    description:
      "Delta på en av våra träffar och möt andra svenska företagare i din region.",
  },
  {
    number: "3",
    title: "Få introduktioner → Ta nästa steg",
    description:
      "Bygg relationer, få varma introduktioner och ta konkreta steg framåt i din verksamhet.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Så funkar det
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tre steg till verkligt resultat
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-px w-full bg-border lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-2xl font-bold text-background">
                  {step.number}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Microcopy */}
        <div className="mt-16 text-center">
          <p className="inline-block rounded-full border border-border bg-muted/50 px-6 py-3 text-sm font-medium text-foreground">
            Du ska gå därifrån med minst en konkret nästa åtgärd.
          </p>
        </div>
      </div>
    </section>
  );
}
