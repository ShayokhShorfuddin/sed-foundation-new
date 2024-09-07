import Image from "next/image";
import UWE_Bristol from "@/public/partners/UWE_Bristol_logo.svg";
import Eha from "@/public/partners/eha.jpg";
import Nuclear from "@/public/partners/nuclear.svg";

export default function Partners() {
  return (
    <section className="flex justify-center mt-24 max-w-[1200px] lg:mx-auto px-8 xl:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full text-center lg:text-start">
        <div className="flex flex-col mb-8 lg:mb-0 lg:mr-10 max-w-[530px]">
          <h1 className="text-4xl font-outfit mb-4">
            Our Partners<span className="text-sedGreen">.</span>
          </h1>
          <p className="text-md text-gray-700">
            We are proud to collaborate with a diverse group of partners who
            share our commitment to sustainability and environmental
            stewardship. Together, we work on groundbreaking projects that drive
            positive change and promote a greener future for all.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <Image src={UWE_Bristol} alt="UWE" className="m-3 size-44" />
          <Image src={Eha} alt="Eha" className="m-3 size-40" />
          <Image src={Nuclear} alt="Nuclear" className="m-3 size-32" />
        </div>
      </div>
    </section>
  );
}
