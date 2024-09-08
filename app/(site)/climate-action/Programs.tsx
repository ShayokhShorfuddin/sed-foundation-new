"use client";

import Image, { StaticImageData } from "next/image";
import Child from "./_images/child.jpg";
import Sapling from "./_images/sapling2.jpg";
import Training from "./_images/training.jpg";
import Seminar from "./_images/seminar.jpg";
import MootCourt from "./_images/moot-court.jpg";

export default function Programs() {
  type Program = {
    image: StaticImageData;
    title: string;
    description: string;
  };

  const programs: Program[] = [
    {
      image: Sapling,
      title: "Tree Plantation",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Seminar,
      title: "Workshops & Seminars",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Training,
      title: "Training Program",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Child,
      title: "Children Engagement",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: MootCourt,
      title: "Moot Court",
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
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl p-5 border border-gray-100 hover:border-sedGreen transition duration-300 ease-in-out">
      <Image src={image} alt="forest" className="rounded-xl" />

      <h1 className="mt-7 text-xl">{title}</h1>
      <p className="mt-2">{description}</p>
    </div>
  );
}
