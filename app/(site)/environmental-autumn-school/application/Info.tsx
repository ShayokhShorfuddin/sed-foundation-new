import Image from "next/image";
import Application from "./_images/application.jpg";

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
          src={Application}
          alt="Application"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:mr-10 mt-10 lg:mt-0"
        />

        <div className="flex flex-col max-w-[30rem]">
          <h1 className="text-3xl lg:text-4xl">
            <span className="text-sedGreen">Text</span> goes here
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            error sit reiciendis odio molestiae officia ad, nulla quasi autem
            facere distinctio ipsum voluptatum possimus quibusdam officiis eius
            doloremque beatae fugit sunt vel enim velit quam!
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
            <span className="text-sedGreen">Text</span> goes here
            <span className="text-sedGreen">.</span>
          </h1>

          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quasi
            repellat laboriosam officia maxime magnam! Vero illum voluptatum
            expedita sapiente, laboriosam dolorem veritatis iure nostrum dolore,
            corporis ab aperiam ratione at aspernatur autem non accusamus.
          </p>
        </div>

        <Image
          src={Application}
          alt="Application"
          placeholder="blur"
          className="max-w-full sm:max-w-[35rem] lg:ml-10 mt-10 lg:mt-0"
        />
      </div>
    </section>
  );
}
