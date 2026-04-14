import Link from "next/link";

const nav = [
  { label: "Våra program", href: "#program" },
  { label: "Vårt gymnasium", href: "#vart-gymnasium" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Byta till oss", href: "#byta" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-brand" aria-hidden />
          <span className="text-lg font-semibold tracking-tight text-brand">
            KLARA <span className="text-muted-foreground font-normal">Stockholm Norra</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#oppet-hus"
          className="hidden md:inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand/90 transition-colors"
        >
          Besök öppet hus
        </a>
      </div>
    </header>
  );
}
