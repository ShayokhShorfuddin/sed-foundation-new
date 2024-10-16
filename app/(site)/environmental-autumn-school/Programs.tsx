import Image, { StaticImageData } from "next/image";

import Advantage from "./_images/advantage.jpg";
import Application from "./_images/application.jpg";
import Students from "./_images/students.jpg";
import School2 from "./_images/school2.jpg";
import Link from "next/link";

export default function Programs() {
  type Program = {
    image: StaticImageData;
    href: string;
    title: string;
    description: string;
  };

  const programs: Program[] = [
    {
      image: Students,
      href: "/environmental-autumn-school/autumn-school",
      title: "What is Autumn School?",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Advantage,
      href: "/environmental-autumn-school/advantage-scope",
      title: "Advantage & Scope",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Application,
      href: "/environmental-autumn-school/application",
      title: "Call for Application",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: School2,
      href: "environmental-autumn-school/previous-schools",
      title: "Previous Schools",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },
  ];

  return (
    <section className="container flex flex-col items-center mt-20 mb-10 px-5 2xl:px-32">
      <h1 className="text-4xl font-outfit">
        Our Programs<span className="text-sedGreen">.</span>
      </h1>

      <p className="mt-4 sm:mt-6 max-w-[31rem] text-sm md:text-base text-center">
        We offer a variety of programs designed to engage and educate everyone.
        There's something for everyone to get involved in and make a difference.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-fit w-full gap-7 mt-10">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            image={program.image}
            href={program.href}
            title={program.title}
            description={program.description}
          />
        ))}
      </div>
    </section>
  );
}

function ProgramCard({
  image,
  href,
  title,
  description,
}: {
  image: StaticImageData;
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col rounded-2xl p-5 border border-gray-100 hover:border-sedGreen transition duration-300 ease-in-out">
        <Image
          src={image}
          alt="forest"
          className="rounded-xl"
          placeholder="blur"
        />

        <h1 className="mt-7 text-xl">{title}</h1>
        <p className="font-sans mt-2 line-clamp-5">{description}</p>
      </div>
    </Link>
  );
}
