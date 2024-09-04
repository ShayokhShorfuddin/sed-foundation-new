import BentoGrid from "./BentoGrid";
import BottomCard from "./BottomCard";
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
      <BottomCard />
      <Footer />
      <MoveUpButton />
    </main>
  );
}
