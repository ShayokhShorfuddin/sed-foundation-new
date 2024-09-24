import Image from "next/image";
import AboutUsHeaderImage from "./_images/about-us.jpg";

export default function Hero() {
  return (
    <section className="container mt-10 md:mt-20">
      <div className="relative overflow-hidden rounded-xl h-60 sm:h-80 md:h-96">
        <Image
          priority
          src={AboutUsHeaderImage}
          alt="About Us Header Image"
          fill
          placeholder="blur"
          className="object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-semibold text-white">
            About Us
          </h2>
        </div>
      </div>
    </section>
  );
}
