export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-[1400px] px-8 py-6">
        <div className="relative grid overflow-hidden rounded-2xl md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="relative bg-brand px-10 py-14 md:px-14 md:py-20 text-white">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Klara Teoretiska
              <br />
              Gymnasium
              <br />
              Stockholm
              <br />
              Norra
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/85">
              Hos oss får du vässa din nyfikenhet, spetsa din kunskap och få
              med dig skills som räcker längre än till nästa prov. Vi finns i
              nya lokaler på Campus Vasastan – där vi förbereder dig för
              framtiden, oavsett vart din resa leder.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#oppet-hus"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand hover:bg-brand-accent transition-colors"
              >
                Besök Öppet hus
              </a>
              <a
                href="#program"
                className="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand transition-colors"
              >
                Till våra program
              </a>
            </div>
            <svg
              aria-hidden
              viewBox="0 0 160 160"
              className="absolute -bottom-1 -left-1 h-24 w-24 md:h-32 md:w-32 text-white"
            >
              <path d="M0 160 V0 A160 160 0 0 1 160 160 Z" fill="currentColor" />
              <path d="M0 160 V40 A120 120 0 0 1 120 160 Z" fill="var(--color-brand)" />
            </svg>
          </div>
          <div
            className="relative min-h-[360px] bg-cover bg-center md:min-h-[560px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
