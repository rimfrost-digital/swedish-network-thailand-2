export function Qualification() {
  return (
    <section id="ansok" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kvalitet före kvantitet
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Vi godkänner ansökningar manuellt för att hålla kärnan stark. Det
            handlar inte om att vara exklusiv för sakens skull – utan om att
            skapa ett nätverk där varje medlem bidrar med verkligt värde.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Companies */}
          <div className="rounded-2xl border border-border bg-background p-8 lg:p-10">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Företag kvalificerar sig om de
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
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
                <span className="text-base text-foreground">
                  Är svenskägda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
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
                <span className="text-base text-foreground">
                  Verkar i Thailand eller aktivt etablerar sig
                </span>
              </li>
            </ul>
          </div>

          {/* Talents */}
          <div className="rounded-2xl border border-border bg-background p-8 lg:p-10">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Talanger kvalificerar sig om de
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
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
                <span className="text-base text-foreground">
                  Är svensk i Thailand
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
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
                <span className="text-base text-foreground">
                  Thai/svensk med dubbelt medborgarskap (var som helst)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
