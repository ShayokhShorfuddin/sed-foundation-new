import Image from "next/image";
import NewsHeaderImage from "./_images/news-header.jpg";

export default function Hero() {
  return (
    <section className="container mt-10 md:mt-20">
      <div className="relative overflow-hidden rounded-xl h-60 sm:h-80 md:h-96">
        <Image
          priority
          src={NewsHeaderImage}
          alt="News header image"
          fill
          placeholder="blur"
          className="object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-center p-5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            News
          </h2>
        </div>
      </div>
    </section>
  );
}
