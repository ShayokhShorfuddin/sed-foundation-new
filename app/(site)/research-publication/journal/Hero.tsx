import Image from "next/image";
import Journal from "./_images/journal.svg";

export default function Hero() {
  return (
    <section className="container mt-7 md:mt-5">
      <div className="flex flex-col md:flex-row justify-around items-center font-outfit">
        <div className="flex flex-col max-w-[30rem] pr-5 sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-sedGreen">SED</span> Journal Of Environment
            Studies<span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4 md:mt-5 font-sans">
            Our organization is committed to producing high-quality journals
            that emphasize environmental research and sustainability. We strive
            to create a platform for researchers and practitioners to
            disseminate their discoveries, insights, and innovations that aid in
            the protection and improvement of our natural environment.
          </p>
        </div>

        <Image
          src={Journal}
          alt="Journal"
          className="size-[20rem] lg:size-[32rem] mt-6 md:mt-0"
        />
      </div>
    </section>
  );
}
