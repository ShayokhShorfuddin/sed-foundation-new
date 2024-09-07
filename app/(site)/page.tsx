import Navbar from "./Navbar";
import Hero from "./Hero";
import BentoGrid from "./BentoGrid";
import HelpingEarth from "./HelpingEarth";
import Funding from "./Funding";
import Choice from "./Choice";
import FAQ from "./FAQ";
import Partners from "./Partners";
import BottomCard from "./BottomCard";
import Footer from "./Footer";
import MoveUpButton from "./MoveUpButton";

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
      <Partners />
      <BottomCard />
      <Footer />
      <MoveUpButton />
    </main>
  );
}
