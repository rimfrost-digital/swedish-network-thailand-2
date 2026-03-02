const upcomingEvent = {
  date: "18 mars",
  city: "Bangkok",
  location: "Stable Lodge",
  theme: "Digital marknadsföring & storytelling",
  time: "18:00–21:00",
};

const pastEvents = [
  {
    city: "Bangkok",
    title: "Nätverksträff februari",
    imageUrl: "/events/event-1.jpg",
  },
  {
    city: "Hua Hin",
    title: "Entrepreneurial meetup",
    imageUrl: "/events/event-2.jpg",
  },
  {
    city: "Bangkok",
    title: "Startup stories",
    imageUrl: "/events/event-3.jpg",
  },
  {
    city: "Chiang Mai",
    title: "Digital nomad connect",
    imageUrl: "/events/event-4.jpg",
  },
];

export function Events() {
  return (
    <section id="events" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Nätverksevent
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nätverksevent (på riktigt)
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Träffar där relationer leder vidare.
          </p>
        </div>

        {/* Upcoming Event */}
        <div className="mt-16">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Kommande event
          </h3>
          <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-6 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    {upcomingEvent.date}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {upcomingEvent.city}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-xl font-semibold text-foreground lg:text-2xl">
                  {upcomingEvent.theme}
                </h4>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span>Plats: {upcomingEvent.location}</span>
                  <span>Tid: {upcomingEvent.time}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="https://www.facebook.com/events/917592924552901/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
                >
                  Anmäl dig
                </a>
                <a
                  href="https://www.facebook.com/events/917592924552901/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted"
                >
                  Se event på Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div className="mt-16">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Tidigare event
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-md"
              >
                <div className="aspect-video bg-muted">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                    <span className="text-sm text-muted-foreground">Bild</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    {event.city}
                  </span>
                  <h4 className="mt-1 font-medium text-foreground">
                    {event.title}
                  </h4>
                  <a
                    href="#"
                    className="mt-2 inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Se bilder
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Vi bygger det här över tid – men det händer redan nu.
          </p>
        </div>

        {/* Social Block */}
        <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 text-center">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Följ oss och håll dig uppdaterad
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/SvenskaForetagareIThailand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Följ oss på Facebook
            </a>
            <a
              href="https://www.facebook.com/groups/350782168330337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Gå med i gruppen
            </a>
            <a
              href="https://www.facebook.com/events/917592924552901/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              Se event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
