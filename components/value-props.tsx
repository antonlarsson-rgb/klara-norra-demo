const items = [
  {
    title: "Din resa börjar här",
    body: "På KLARA Norra möter vi dig som individ. Vår pedagogik edyoucation handlar om att koppla ihop skolan med verkligheten utanför klassrummet.",
  },
  {
    title: "Bli inspirerad av verkligheten",
    body: "Genom gäster, studiebesök och projekt med riktiga uppdragsgivare får du perspektiv på det du lär dig – och en tydlig bild av vart det kan ta dig.",
  },
  {
    title: "Motiveras av dina mål och drömmar",
    body: "Vi sätter tid åt samtal om dina mål. När du vet vart du är på väg blir studierna både roligare och enklare att hänga med i.",
  },
];

export default function ValueProps() {
  return (
    <section id="vart-gymnasium" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand/70">
          Vad är KLARA?
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand md:text-4xl">
          Ett gymnasium som förbereder dig för både studier och livet
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, idx) => (
          <article
            key={item.title}
            className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-8 hover:border-brand/40 transition-colors"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-semibold">
              {String(idx + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-semibold text-brand">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
