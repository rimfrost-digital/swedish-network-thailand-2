"use client";

import { useState } from "react";

type FormType = "company" | "talent" | "core";

export function Forms() {
  const [activeForm, setActiveForm] = useState<FormType>("company");

  return (
    <section id="kontakt" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Kom igång
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Bli en del av nätverket
            </h2>
          </div>

          {/* Form Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveForm("company")}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeForm === "company"
                  ? "bg-foreground text-background"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Lägg till företag
            </button>
            <button
              type="button"
              onClick={() => setActiveForm("talent")}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeForm === "talent"
                  ? "bg-foreground text-background"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Gå med som talang
            </button>
            <button
              type="button"
              onClick={() => setActiveForm("core")}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeForm === "core"
                  ? "bg-foreground text-background"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Ansök till kärnan
            </button>
          </div>

          {/* Forms */}
          <div className="mt-10 rounded-2xl border border-border bg-background p-6 lg:p-8">
            {activeForm === "company" && <CompanyForm />}
            {activeForm === "talent" && <TalentForm />}
            {activeForm === "core" && <CoreForm />}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyForm() {
  return (
    <form className="space-y-6">
      <h3 className="font-display text-xl font-semibold text-foreground">
        Lägg till företag i registret
      </h3>
      <p className="text-sm text-muted-foreground">
        Gratis registrering för svenskägda bolag i Thailand.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company-name"
            className="block text-sm font-medium text-foreground"
          >
            Företagsnamn
          </label>
          <input
            type="text"
            id="company-name"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="AB Företaget"
          />
        </div>
        <div>
          <label
            htmlFor="company-website"
            className="block text-sm font-medium text-foreground"
          >
            Hemsida
          </label>
          <input
            type="url"
            id="company-website"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="https://example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company-city"
            className="block text-sm font-medium text-foreground"
          >
            Stad
          </label>
          <input
            type="text"
            id="company-city"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Bangkok"
          />
        </div>
        <div>
          <label
            htmlFor="company-industry"
            className="block text-sm font-medium text-foreground"
          >
            Bransch
          </label>
          <input
            type="text"
            id="company-industry"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Tech, Consulting, etc."
          />
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="swedish-owned"
          className="mt-1 h-4 w-4 rounded border-input text-foreground focus:ring-ring"
        />
        <label
          htmlFor="swedish-owned"
          className="text-sm leading-relaxed text-foreground"
        >
          Jag bekräftar att företaget är svenskägt
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company-contact"
            className="block text-sm font-medium text-foreground"
          >
            Kontaktperson
          </label>
          <input
            type="text"
            id="company-contact"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Namn"
          />
        </div>
        <div>
          <label
            htmlFor="company-email"
            className="block text-sm font-medium text-foreground"
          >
            E-post
          </label>
          <input
            type="email"
            id="company-email"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="namn@foretaget.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company-description"
          className="block text-sm font-medium text-foreground"
        >
          Kort beskrivning
        </label>
        <textarea
          id="company-description"
          rows={3}
          className="mt-2 block w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Berätta kort om ert företag..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-foreground px-6 py-3.5 text-base font-medium text-background transition-all hover:bg-foreground/90"
      >
        Skicka ansökan
      </button>
    </form>
  );
}

function TalentForm() {
  return (
    <form className="space-y-6">
      <h3 className="font-display text-xl font-semibold text-foreground">
        Gå med i Talangbanken
      </h3>
      <p className="text-sm text-muted-foreground">
        Gratis registrering för svensktalande talanger.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="talent-name"
            className="block text-sm font-medium text-foreground"
          >
            Namn
          </label>
          <input
            type="text"
            id="talent-name"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Ditt namn"
          />
        </div>
        <div>
          <label
            htmlFor="talent-location"
            className="block text-sm font-medium text-foreground"
          >
            Plats
          </label>
          <input
            type="text"
            id="talent-location"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Bangkok, Thailand"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="talent-citizenship"
          className="block text-sm font-medium text-foreground"
        >
          Medborgarskap
        </label>
        <select
          id="talent-citizenship"
          className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option value="">Välj...</option>
          <option value="swedish">Svensk i Thailand</option>
          <option value="dual">Thai/svensk (dubbelt medborgarskap)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="talent-skills"
          className="block text-sm font-medium text-foreground"
        >
          Kompetenser
        </label>
        <input
          type="text"
          id="talent-skills"
          className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Marketing, Tech, Sales, etc."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="talent-linkedin"
            className="block text-sm font-medium text-foreground"
          >
            LinkedIn
          </label>
          <input
            type="url"
            id="talent-linkedin"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="linkedin.com/in/..."
          />
        </div>
        <div>
          <label
            htmlFor="talent-email"
            className="block text-sm font-medium text-foreground"
          >
            E-post
          </label>
          <input
            type="email"
            id="talent-email"
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="din@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="talent-availability"
          className="block text-sm font-medium text-foreground"
        >
          Tillgänglighet
        </label>
        <input
          type="text"
          id="talent-availability"
          className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Omedelbart, om 3 månader, etc."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-foreground px-6 py-3.5 text-base font-medium text-background transition-all hover:bg-foreground/90"
      >
        Gå med (gratis)
      </button>
    </form>
  );
}

function CoreForm() {
  return (
    <form className="space-y-6">
      <h3 className="font-display text-xl font-semibold text-foreground">
        Ansök till kärnan
      </h3>
      <p className="text-sm text-muted-foreground">
        Vår curated core är för dem som vill bidra på djupet.
      </p>

      <div>
        <label
          htmlFor="core-type"
          className="block text-sm font-medium text-foreground"
        >
          Jag ansöker som
        </label>
        <select
          id="core-type"
          className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option value="">Välj...</option>
          <option value="company">Företag</option>
          <option value="talent">Talang</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="core-why"
          className="block text-sm font-medium text-foreground"
        >
          Varför vill du gå med?
        </label>
        <textarea
          id="core-why"
          rows={3}
          className="mt-2 block w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Berätta vad du hoppas få ut av nätverket..."
        />
      </div>

      <div>
        <label
          htmlFor="core-contribute"
          className="block text-sm font-medium text-foreground"
        >
          Vad kan du bidra med?
        </label>
        <textarea
          id="core-contribute"
          rows={3}
          className="mt-2 block w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Erfarenheter, kontakter, kompetenser..."
        />
      </div>

      <div>
        <label
          htmlFor="core-help"
          className="block text-sm font-medium text-foreground"
        >
          Vad behöver du hjälp med?
        </label>
        <textarea
          id="core-help"
          rows={3}
          className="mt-2 block w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Kontakter, kunskap, resurser..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-foreground px-6 py-3.5 text-base font-medium text-background transition-all hover:bg-foreground/90"
      >
        Skicka ansökan
      </button>
    </form>
  );
}
