const teams = [
  {
    city: "Bangkok",
    description:
      "Huvudstadens pulserande affärsliv. Här finns de flesta svenskägda bolagen och den starkaste infrastrukturen.",
    nextEvent: "Nästa event: 18 mars",
    active: true,
  },
  {
    city: "Hua Hin",
    description:
      "Lugnt tempo med kvalitetsmedvetna företagare. Perfekt för den som söker balans mellan arbete och livskvalitet.",
    nextEvent: "Nästa event: Kommer snart",
    active: true,
  },
  {
    city: "Chiang Mai",
    description:
      "Kreativ hub i norr. Digital nomads, tech-startups och en växande svensk gemenskap.",
    nextEvent: "Nästa event: Kommer snart",
    active: true,
  },
  {
    city: "Fler orter på väg",
    description:
      "Phuket, Pattaya och fler regioner är på gång. Intresserad av att bli Värd? Hör av dig.",
    nextEvent: null,
    active: false,
  },
];

export function LocalTeams() {
  return (
    <section id="teams" className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Lokala Teams
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Våra lokala Teams
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Varje Team leds av en Värd – en connector som känner sitt område,
            sina medlemmar och de lokala kontakterna som aldrig står i någon
            förteckning.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team) => (
            <div
              key={team.city}
              className={`flex flex-col rounded-2xl border p-6 transition-all hover:shadow-md ${
                team.active
                  ? "border-border bg-background"
                  : "border-dashed border-border/60 bg-muted/30"
              }`}
            >
              <h3 className="font-display text-xl font-semibold text-foreground">
                {team.city}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {team.description}
              </p>
              {team.nextEvent && (
                <p className="mt-4 text-sm font-medium text-foreground">
                  {team.nextEvent}
                </p>
              )}
              {team.active && (
                <a
                  href="#kontakt"
                  className="mt-4 inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                >
                  Kontakta Värd
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
