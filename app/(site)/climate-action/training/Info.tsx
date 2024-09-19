import Image from "next/image";
import Training1 from "./_images/training1.jpeg";
import Training2 from "./_images/training2.jpg";

export default function Info() {
  return (
    <section className="container mb-20">
      <Section1 />
      <Section2 />
    </section>
  );
}

function Section1() {
  return (
    <section className="mt-10">
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center sm:text-center lg:text-left">
        <Image
          src={Training1}
          alt="Training 1"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:mr-10 mt-10 lg:mt-0"
        />

        <div className="flex flex-col max-w-[30rem]">
          <h1 className="text-3xl lg:text-4xl">
            <span className="text-sedGreen">Preparing</span> the youth
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            Training programs are essential for personal growth. By
            participating in these programs, individuals gain in-depth knowledge
            of specific topics from experienced trainers. SED Foundation has
            been dedicated to developing environmental skills through training
            for many years.
          </p>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="mt-24">
      <div className="flex flex-col lg:flex-row justify-around items-center sm:text-center lg:text-left">
        <div className="flex flex-col max-w-[30rem]">
          <h1 className="text-3xl lg:text-4xl">
            <span className="text-sedGreen">Diversified</span> activities
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            In the past, we have organized numerous workshops, such as the
            4-Week Certificate Workshop on SDGs, Certificate Workshop on
            Professional Communication, and Workshop on Agricultural
            Environment: Road to Redemption. These workshops are just a few
            examples of our commitment to environmental education.
          </p>
        </div>

        <Image
          src={Training2}
          alt="Training 2"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:ml-10 mt-10 lg:mt-0"
        />
      </div>
    </section>
  );
}
