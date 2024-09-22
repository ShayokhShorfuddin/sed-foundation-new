import Navbar from "../../Navbar";
import { getEventBySlug } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "next-sanity";
import { EventsType } from "../EventSection";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const event = await getEventBySlug(params.slug);

  return (
    <main>
      <Navbar />
      <EventContent event={event} />
    </main>
  );
}

const components: PortableTextComponents = {
  block: {
    // Custom serializer for paragraphs
    normal: ({ children }) => (
      <p className="mb-6">{children}</p> // Add margin for spacing
    ),
  },
};

function EventContent({ event }: { event: EventsType }) {
  return (
    <section className="container flex flex-col max-w-[65rem] mt-5 mb-10">
      <img
        src={event.cardImage.asset.url}
        alt={event.cardImage.alt}
        className="rounded-xl"
      />

      <h1 className="text-3xl mt-8">{event.title}</h1>

      <span className="px-3 py-1 border border-sedGreen w-min rounded-full text-sm mt-5">
        {new Intl.DateTimeFormat("en-GB").format(new Date(event.date))}
      </span>

      <div className="mt-10">
        <PortableText value={event.content} components={components} />
      </div>
    </section>
  );
}
