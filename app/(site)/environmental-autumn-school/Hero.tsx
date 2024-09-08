import Image from "next/image";
import EnvironmentAutumnSchoolHeaderImage from "./_images/environment-autumn-school-header.jpg";

export default function Hero() {
  return (
    <section className="container mt-10 md:mt-20">
      <div className="relative overflow-hidden rounded-xl h-60 sm:h-80 md:h-96">
        <Image
          priority
          src={EnvironmentAutumnSchoolHeaderImage}
          alt="Environment Autumn School Header Image"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-end md:items-center p-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Environmental Autumn School
          </h2>
        </div>
      </div>
    </section>
  );
}
