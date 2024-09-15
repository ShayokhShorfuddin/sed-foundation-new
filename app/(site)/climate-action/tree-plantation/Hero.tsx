import Image from "next/image";
import Tree from "./_images/tree-plantation.svg";

export default function Hero() {
  return (
    <section className="container mt-7 md:mt-5">
      <div className="flex flex-col md:flex-row justify-around items-center font-outfit">
        <div className="flex flex-col max-w-[30rem] pr-5 sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-sedGreen">Tree</span> Plantation
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4 md:mt-5 font-sans">
            Our organization is committed to advancing tree plantation efforts.
            We recognize that tree planting serves as a pivotal strategy in
            addressing climate change, rehabilitating natural ecosystems, and
            enhancing the well-being of communities globally. Through our
            initiatives focused on tree plantation, we aspire to foster a more
            sustainable and healthier environment for future generations.
          </p>
        </div>

        <Image
          src={Tree}
          alt="Tree"
          className="size-[20rem] lg:size-[32rem] mt-6 md:mt-0"
        />
      </div>
    </section>
  );
}
