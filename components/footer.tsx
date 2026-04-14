const sisterSchools = [
  "KLARA Södra",
  "KLARA Östra",
  "KLARA Sollentuna",
  "KLARA Göteborg",
  "KLARA Linköping",
  "KLARA Malmö",
];

const quickLinks = [
  { label: "Schoolsoft", href: "#" },
  { label: "Jobba hos oss", href: "#" },
  { label: "Byta till oss", href: "#" },
  { label: "Vanliga frågor", href: "#" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-full bg-white" aria-hidden />
              <span className="text-lg font-semibold tracking-tight">KLARA Stockholm Norra</span>
            </div>
            <p className="mt-4 max-w-md text-white/70">
              Klara Teoretiska Gymnasium Stockholm Norra ligger centralt i
              Stockholm och erbjuder högskoleförberedande program för elever
              som vill satsa på sin framtid.
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/80">
              <p>08-462 34 50</p>
              <a
                href="mailto:stockholmnorra@klaragymnasium.se"
                className="block hover:text-brand-accent"
              >
                stockholmnorra@klaragymnasium.se
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Genvägar
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-brand-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Våra systerskolor
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {sisterSchools.map((school) => (
                <li key={school} className="text-white/80">
                  {school}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Klara Teoretiska Gymnasium Stockholm Norra</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-accent">Facebook</a>
            <a href="#" className="hover:text-brand-accent">Instagram</a>
            <a href="#" className="hover:text-brand-accent">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
