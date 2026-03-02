"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Är Level 1 verkligen gratis?",
    answer:
      "Ja, Företagsregistret och Talangbanken är helt gratis. Du får tillgång till nätverket, introduktioner och kan delta på events utan kostnad.",
  },
  {
    question: "Vad innebär 'curated core'?",
    answer:
      "Kärnan är vårt selektiva nätverk där vi manuellt godkänner medlemmar baserat på kvalitet och engagemang. Det handlar om att skapa ett nätverk där varje medlem bidrar med verkligt värde.",
  },
  {
    question: "Måste jag bo i Thailand?",
    answer:
      "Nej, inte nödvändigtvis. Företag som är på väg att etablera sig i Thailand är välkomna, liksom talanger med dubbelt medborgarskap som bor var som helst i världen.",
  },
  {
    question: "Kan jag komma som gäst på ett event?",
    answer:
      "Ja, våra nätverksevent är öppna för potentiella medlemmar. Det är ett bra sätt att få en känsla för nätverket innan du bestämmer dig.",
  },
  {
    question: "Hur fungerar introduktionerna?",
    answer:
      "Våra Värdar och medlemmar ger varma introduktioner baserat på faktiska behov och matchningar. Det handlar inte om visitkortsutbyte, utan om kvalificerade kontakter som leder till konkreta resultat.",
  },
  {
    question: "Hur hanteras min data?",
    answer:
      "Vi delar aldrig din information utan ditt samtycke. Data används endast för att matcha dig med relevanta kontakter och hålla dig uppdaterad om events.",
  },
  {
    question: "Hur ofta är det events?",
    answer:
      "Varje lokalt Team håller regelbundna träffar – vanligtvis månadsvis. Frekvensen kan variera beroende på ort och säsong.",
  },
  {
    question: "Vem driver de lokala Teams?",
    answer:
      "Varje Team leds av en Värd – en erfaren företagare som känner sitt område och fungerar som connector mellan medlemmar och lokala kontakter.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Vanliga frågor
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-background"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-muted/50"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <span className="pr-4 font-medium text-foreground">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="border-t border-border px-6 py-5">
                    <p className="leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
