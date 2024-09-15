import Image from "next/image";
import Teaching from "./_images/teaching.svg";

export default function Hero() {
  return (
    <section className="container mt-7 md:mt-5">
      <div className="flex flex-col md:flex-row justify-around items-center font-outfit">
        <div className="flex flex-col max-w-[30rem] pr-5 sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-sedGreen">Children</span> Engagement
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4 md:mt-5 font-sans">
            We place a strong emphasis on child engagement as a cornerstone of
            its environmental initiatives. By involving children in tree
            plantation activities, the foundation aims to instill a sense of
            responsibility and connection to nature from a young age. This
            approach not only educates the younger generation about the
            importance of environmental conservation but also empowers them to
            take active roles in creating a sustainable future.
          </p>
        </div>

        <Image
          src={Teaching}
          alt="teaching"
          className="size-[20rem] lg:size-[32rem] mt-6 md:mt-0"
        />
      </div>
    </section>
  );
}
