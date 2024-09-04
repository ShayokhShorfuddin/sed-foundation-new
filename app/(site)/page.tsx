import BentoGrid from "./BentoGrid";
import Hero from "./Hero";
import MoveUpButton from "./MoveUpButton";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BentoGrid />
      <MoveUpButton />
    </main>
  );
}
