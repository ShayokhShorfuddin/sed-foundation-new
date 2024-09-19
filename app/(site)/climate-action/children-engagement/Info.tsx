import Image from "next/image";
import Child1 from "./_images/child1.jpg";
import Child2 from "./_images/child2.jpg";
import Child3 from "./_images/child3.jpg";

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
          src={Child1}
          alt="Child 1"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:mr-10 mt-10 lg:mt-0"
        />

        <div className="flex flex-col max-w-[30rem]">
          <h1 className="text-3xl lg:text-4xl">
            <span className="text-sedGreen">Fostering</span> our young
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            Primary education is a fundamental human right, essential for
            building a just and equitable society. As a cornerstone of
            sustainable development, it provides a solid foundation for
            individual growth and societal progress. Beyond basic literacy and
            numeracy, primary education should instill ethical values, foster a
            sense of responsibility, and cultivate an understanding of the world
            around us.
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
            The <span className="text-sedGreen">next</span> generation
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            To safeguard our planet, environmental education must be an integral
            part of the curriculum. By teaching children about the importance of
            nature, the benefits of tree planting, and the consequences of
            deforestation, we can inspire them to become environmentally
            conscious citizens.
          </p>
        </div>

        <Image
          src={Child2}
          alt="Child 2"
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
          src={Child3}
          alt="Child 3"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:mr-10 mt-10 lg:mt-0"
        />

        <div className="flex flex-col max-w-[30rem]">
          <h1 className="text-3xl lg:text-4xl">
            <span className="text-sedGreen">Connected</span> to nature
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            Many children today are increasingly disconnected from the natural
            world, particularly in urban areas. Our program aims to bridge this
            gap by providing opportunities for hands-on experiences in nature.
            Through activities like planting trees and observing plant growth,
            children can develop a deep appreciation for the environment and a
            sense of stewardship for our planet.
          </p>
        </div>
      </div>
    </section>
  );
}
