import Header from "@/components/header";
import Hero from "@/components/hero";
import ValueProps from "@/components/value-props";
import Programs from "@/components/programs";
import Instagram from "@/components/instagram";
import News from "@/components/news";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <Programs />
        <Instagram />
        <News />
      </main>
      <Footer />
    </>
  );
}
