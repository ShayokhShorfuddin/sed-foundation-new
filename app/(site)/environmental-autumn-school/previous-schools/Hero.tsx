import Image from "next/image";
import School from "./_images/school2.svg";

export default function Hero() {
  return (
    <section className="container mt-7 md:mt-5">
      <div className="flex flex-col md:flex-row justify-around items-center font-outfit">
        <div className="flex flex-col max-w-[30rem] pr-5 sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-sedGreen">Previous</span> Schools
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4 md:mt-5 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores
            libero accusantium, possimus iure eligendi asperiores autem!
            Deserunt quos dolore sit tempore rem non, repudiandae culpa dicta
            nesciunt sunt impedit, cupiditate, facere nihil veritatis
            voluptatem!
          </p>
        </div>

        <Image
          src={School}
          alt="School"
          className="size-[18rem] lg:size-[28rem] mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}
