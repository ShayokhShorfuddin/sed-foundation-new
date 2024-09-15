import Image from "next/image";
import Court from "./_images/court.svg";

export default function Hero() {
  return (
    <section className="container mt-7 md:mt-5">
      <div className="flex flex-col md:flex-row justify-around items-center font-outfit">
        <div className="flex flex-col max-w-[30rem] pr-5 sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-sedGreen">Moot</span> Court
            <span className="text-sedGreen">.</span>
          </h1>
          <p className="mt-4 md:mt-5 font-sans">
            Our organization hosts moot court events under the Environmental
            Education program of the SED Foundation. These events aim to create
            more activists from the legal arena who can fight for the
            environment before various courts and protect our natural
            surroundings. Participants engage in simulated court proceedings,
            gaining valuable experience and knowledge to advocate for
            environmental justice.
          </p>
        </div>

        <Image
          src={Court}
          alt="Court"
          className="size-[24rem] lg:size-[32rem] mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}
