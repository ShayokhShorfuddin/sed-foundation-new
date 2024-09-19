import Image from "next/image";
import Dhaka1 from "./_images/dhaka1.jpg";
import Dhaka2 from "./_images/dhaka2.jpg";
import Dhaka3 from "./_images/dhaka3.jpg";

export default function Info() {
  return (
    <section className="container mb-20">
      <Section1 />
      <Section2 />
      <Section3 />
    </section>
  );
}

function Section1() {
  return (
    <section className="mt-10">
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center sm:text-center lg:text-left">
        <Image
          src={Dhaka2}
          alt="Dhaka2"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:mr-10 mt-10 lg:mt-0"
        />

        <div className="flex flex-col max-w-[30rem]">
          <h1 className="text-3xl lg:text-4xl">
            A <span className="text-[#a7a279]">city</span> with challenges
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            Dhaka, the capital city of Bangladesh, faces a critical
            environmental crisis despite its significance as a major urban
            center. With a forest cover of less than 5-6% of its total area, the
            city ranks as one of the most densely populated worldwide, leaving
            limited space for traditional afforestation.
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
            The <span className="text-sedGreen">CFAD</span> program
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            Recognizing the urgent need for environmental improvement, the SED
            Foundation has initiated the "Circle Forestation around Dhaka
            (CFAD)" program. This initiative aims to increase the city's green
            cover through a comprehensive approach that involves social and
            public participation.
          </p>
        </div>

        <Image
          src={Dhaka1}
          alt="Dhaka1"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:ml-10 mt-10 lg:mt-0"
        />
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className="mt-24">
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center sm:text-center lg:text-left">
        <Image
          src={Dhaka3}
          alt="Dhaka3"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:mr-10 mt-10 lg:mt-0"
        />

        <div className="flex flex-col max-w-[30rem]">
          <h1 className="text-3xl lg:text-4xl">
            A <span className="text-sedGreen">ray</span> of hope
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            The CFAD program will focus on the districts surrounding Dhaka,
            including Narayanganj, Gazipur, Narsingdi, Manikganj, Munsiganj, and
            Faridpur. By expanding forestation efforts in these areas, the SED
            Foundation seeks to create a greener belt around the capital city,
            mitigating environmental hazards and improving the overall quality
            of life for residents.
          </p>
        </div>
      </div>
    </section>
  );
}
