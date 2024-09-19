import Image, { StaticImageData } from "next/image";

import Child from "./_images/child.jpg";
import Sapling from "./_images/sapling2.jpg";
import Training from "./_images/training.jpg";
import Seminar from "./_images/seminar.jpg";
import MootCourt from "./_images/moot-court.jpg";
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
      image: Sapling,
      href: "/climate-action/tree-plantation",
      title: "Tree Plantation",
      description:
        "Our organization is committed to advancing tree plantation efforts. We recognize that tree planting serves as a pivotal strategy in addressing climate change, rehabilitating natural ecosystems, and enhancing the well-being of communities globally. Through our initiatives focused on tree plantation, we aspire to foster a more sustainable and healthier environment for future generations.",
    },

    {
      image: Seminar,
      href: "/climate-action/workshop-and-seminars",
      title: "Workshops & Seminars",
      description:
        "We carefully curate a diverse range of topics, bringing together experts, activists, and community leaders to share insights and inspire action. From hands-on workshops that teach practical skills to thought-provoking seminars that explore the latest in climate science and policy, our programs are designed to educate, motivate, and mobilize individuals and communities towards sustainable practices and informed decision-making.",
    },

    {
      image: Training,
      href: "/climate-action/training",
      title: "Training Program",
      description:
        "Our exclusive training programs are designed to equip individuals with vital environmental skills and knowledge. This offers participants comprehensive understanding and practical skills to foster positive change in their communities and support global environmental initiatives.",
    },

    {
      image: Child,
      href: "/climate-action/children-engagement",
      title: "Children Engagement",
      description:
        "We place a strong emphasis on child engagement as a cornerstone of its environmental initiatives. By involving children in tree plantation activities, the foundation aims to instill a sense of responsibility and connection to nature from a young age. This approach not only educates the younger generation about the importance of environmental conservation but also empowers them to take active roles in creating a sustainable future.",
    },

    {
      image: MootCourt,
      href: "/climate-action/moot-court",
      title: "Moot Court",
      description:
        "Our organization hosts moot court events under the Environmental Education program of the SED Foundation. These events aim to create more activists from the legal arena who can fight for the environment before various courts and protect our natural surroundings. Participants engage in simulated court proceedings, gaining valuable experience and knowledge to advocate for environmental justice.",
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
