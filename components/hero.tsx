export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28 md:items-center">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand">
            Teoretiskt gymnasium i Stockholm
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand md:text-6xl">
            Klara Teoretiska Gymnasium
            <br />
            <span className="text-brand/80">Stockholm Norra</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Hos oss får du vässa din nyfikenhet, spetsa din kunskap och få med dig
            skills som räcker längre än till nästa prov.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#oppet-hus"
              className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand/90 transition-colors"
            >
              Besök öppet hus
            </a>
            <a
              href="#program"
              className="inline-flex items-center rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-medium text-brand hover:bg-brand hover:text-white transition-colors"
            >
              Till våra program →
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand/60 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand/70">
                Öppet hus
              </p>
              <p className="mt-1 text-lg font-semibold text-brand">
                Kom och träffa oss – vi visar dig runt på skolan
              </p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-accent" />
        </div>
      </div>
    </section>
  );
}
