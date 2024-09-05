import BentoGrid from "./BentoGrid";
import BottomCard from "./BottomCard";
import Choice from "./Choice";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import MoveUpButton from "./MoveUpButton";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BentoGrid />
      <Choice />
      <FAQ />
      <BottomCard />
      <Footer />
      <MoveUpButton />
    </main>
  );
}
