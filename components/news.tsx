const news = [
  {
    date: "2026-04-02",
    category: "Elevintervju",
    title: "Möt Elin som läser Naturvetenskapsprogrammet",
    excerpt:
      "Elin berättar om varför hon valde KLARA Norra och hur hon kombinerar plugget med sitt stora intresse för klimatfrågor.",
  },
  {
    date: "2026-03-21",
    category: "Nyheter",
    title: "Välkommen på öppet hus den 15 april",
    excerpt:
      "Under öppet hus får du träffa elever och lärare, ställa frågor och se hur det ser ut i våra lokaler på Norrtullsgatan.",
  },
  {
    date: "2026-03-10",
    category: "Skola",
    title: "Så jobbar vi med studiero i klassrummet",
    excerpt:
      "Studiero är en förutsättning för att du ska kunna lyckas. Här beskriver vi hur vi jobbar praktiskt med det varje dag.",
  },
  {
    date: "2026-02-28",
    category: "Elevhälsa",
    title: "Elevhälsan på KLARA Norra – alltid nära",
    excerpt:
      "Vår elevhälsa består av skolsköterska, kurator, specialpedagog och studie- och yrkesvägledare.",
  },
  {
    date: "2026-02-12",
    category: "Nyheter",
    title: "Ekonomieleverna besökte Nasdaq Stockholm",
    excerpt:
      "Som en del av kursen i företagsekonomi fick årskurs 2 en guidad tur på Stockholmsbörsen.",
  },
  {
    date: "2026-01-30",
    category: "Edyoucation",
    title: "Edyoucation – så kopplar vi skolan till verkligheten",
    excerpt:
      "Läs mer om hur vi jobbar med vår pedagogiska idé edyoucation under hela gymnasietiden.",
  },
];

const formatter = new Intl.DateTimeFormat("sv-SE", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function News() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand/70">
            Nyheter
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand md:text-4xl">
            Det senaste från KLARA Norra
          </h2>
        </div>
        <a
          href="#nyheter"
          className="inline-flex w-fit items-center rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-medium text-brand hover:bg-brand hover:text-white transition-colors"
        >
          Alla nyheter →
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-brand/30 to-brand/5" />
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="font-semibold text-brand">{item.category}</span>
                <span>·</span>
                <time dateTime={item.date}>{formatter.format(new Date(item.date))}</time>
              </div>
              <h3 className="text-lg font-semibold text-brand leading-snug group-hover:underline">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
