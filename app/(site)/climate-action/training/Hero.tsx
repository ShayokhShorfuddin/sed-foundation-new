import Image from "next/image";
import Training from "./_images/training.svg";

export default function Hero() {
  return (
    <section className="container mt-4 md:mt-5">
      <div className="flex flex-col md:flex-row justify-around items-center font-outfit">
        <div className="flex flex-col max-w-[30rem] pr-5 sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-sedGreen">Training</span> Programs
            <span className="text-sedGreen">.</span>
          </h1>
          <p className="mt-4 md:mt-5 font-sans">
            Our exclusive training programs are designed to equip individuals
            with vital environmental skills and knowledge. This offers
            participants comprehensive understanding and practical skills to
            foster positive change in their communities and support global
            environmental initiatives.
          </p>
        </div>

        <Image
          src={Training}
          alt="Training"
          className="size-[20rem] lg:size-[32rem] mt-16 md:mt-0"
        />
      </div>
    </section>
  );
}
