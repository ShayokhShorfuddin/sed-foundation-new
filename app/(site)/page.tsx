import BentoGrid from "./BentoGrid";
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
      <Footer />
      <MoveUpButton />
    </main>
  );
}
