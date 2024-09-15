import Image from "next/image";
import Seminar from "./_images/seminar.png";

export default function Hero() {
  return (
    <section className="container mt-7 md:mt-5">
      <div className="flex flex-col md:flex-row justify-around items-center font-outfit">
        <div className="flex flex-col max-w-[30rem] pr-5 sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-sedGreen">Workshop</span> And Seminars
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4 md:mt-5 font-sans">
            We carefully curate a diverse range of topics, bringing together
            experts, activists, and community leaders to share insights and
            inspire action. From hands-on workshops that teach practical skills
            to thought-provoking seminars that explore the latest in climate
            science and policy, our programs are designed to educate, motivate,
            and mobilize individuals and communities towards sustainable
            practices and informed decision-making.
          </p>
        </div>

        <Image
          src={Seminar}
          alt="Seminar"
          className="w-[34rem] md:w-[30rem] xl:w-[36rem] mt-6 md:mt-0"
        />
      </div>
    </section>
  );
}
