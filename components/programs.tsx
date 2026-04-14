const programs = [
  {
    name: "Ekonomiprogrammet",
    code: "EK",
    description:
      "För dig som vill förstå hur samhällsekonomi, företag och juridik hänger ihop – med verkliga case och möten med näringslivet.",
    tracks: ["Ekonomi", "Juridik"],
  },
  {
    name: "Naturvetenskapsprogrammet",
    code: "NA",
    description:
      "För dig som gillar matematik, fysik, kemi och biologi – och vill ha en bred behörighet till universitet och högskola.",
    tracks: ["Naturvetenskap", "Naturvetenskap & samhälle"],
  },
  {
    name: "Samhällsvetenskapsprogrammet",
    code: "SA",
    description:
      "För dig som vill förstå människan, samhället och världen vi lever i – från historia och politik till medier och beteendevetenskap.",
    tracks: ["Samhällsvetenskap", "Beteendevetenskap", "Medier"],
  },
];

export default function Programs() {
  return (
    <section id="program" className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Våra gymnasieprogram
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Teoretiska program som ger dig förberedelserna för universitet och högskola
            </h2>
          </div>
          <a
            href="#program"
            className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-brand hover:bg-brand-accent transition-colors"
          >
            Till våra program →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.code}
              className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-semibold text-brand-accent">{p.code}</span>
                <span className="text-xs uppercase tracking-widest text-white/50">
                  Högskoleförberedande
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="text-white/70 leading-relaxed">{p.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                {p.tracks.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
