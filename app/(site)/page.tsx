import Navbar from "./Navbar";
import Hero from "./Hero";
import BentoGrid from "./BentoGrid";
import HelpingEarth from "./HelpingEarth";
import Choice from "./Choice";
import FAQ from "./FAQ";
import BottomCard from "./BottomCard";
import Footer from "./Footer";
import MoveUpButton from "./MoveUpButton";
import Funding from "./Funding";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BentoGrid />
      <HelpingEarth />
      <Funding />
      <Choice />
      <FAQ />
      <BottomCard />
      <Footer />
      <MoveUpButton />
    </main>
  );
}
