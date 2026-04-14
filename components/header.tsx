import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Våra program", href: "#program" },
  { label: "Vårt gymnasium", href: "#vart-gymnasium" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Byta till oss", href: "#byta" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
        <Link href="/" className="flex items-center" aria-label="Klara Teoretiska Gymnasium">
          <Image
            src="/klara-logo.svg"
            alt="Klara Teoretiska Gymnasium"
            width={140}
            height={56}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[0.95rem] font-medium text-foreground">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-red transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a
            href="#oppet-hus"
            className="hidden md:inline-flex items-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red-hover transition-colors"
          >
            Besök Öppet hus
          </a>
          <button
            type="button"
            aria-label="Sök"
            className="hidden md:flex flex-col items-center gap-0.5 text-xs text-foreground hover:text-brand-red transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span>Sök</span>
          </button>
        </div>
      </div>
    </header>
  );
}
