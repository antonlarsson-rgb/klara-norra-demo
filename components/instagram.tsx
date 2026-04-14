export default function Instagram() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-10 rounded-3xl bg-muted p-10 md:grid-cols-2 md:p-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand/70">
            Följ oss
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand md:text-4xl">
            Se vardagen på KLARA Norra – direkt på Instagram
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Följ @klaranorra för att ta del av elevernas vardag, events, öppet
            hus och allt det där andra som händer på skolan.
          </p>
          <a
            href="https://instagram.com/klaranorra"
            className="mt-6 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand/90 transition-colors"
          >
            @klaranorra på Instagram →
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
