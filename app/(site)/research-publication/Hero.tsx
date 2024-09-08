import Image from "next/image";
import ResearchAndPublicationHeaderImage from "./_images/research-and-publications.jpg";

export default function Hero() {
  return (
    <section className="container mt-10 md:mt-20">
      <div className="relative overflow-hidden rounded-xl h-60 sm:h-80 md:h-96">
        <Image
          priority
          src={ResearchAndPublicationHeaderImage}
          alt="Research and publication header image"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-start sm:items-center p-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Research and Publications
          </h2>
        </div>
      </div>
    </section>
  );
}
