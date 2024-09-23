import Navbar from "../../Navbar";
import { getEventBySlug } from "@/sanity/utils/events-utils";
import { PortableText, PortableTextComponents } from "next-sanity";
import { EventsType } from "../EventSection";
import { MapPin } from "lucide-react";
import Link from "next/link";

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

      <h1 className="text-lg md:text-xl lg:text-2xl mt-8">{event.title}</h1>

      <div className="flex items-center mt-5">
        {event.date && (
          <p className="px-3 py-1 border border-sedGreen w-min rounded-full text-sm mr-3">
            {new Intl.DateTimeFormat("en-GB").format(new Date(event.date))}
          </p>
        )}

        <div className="flex text-gray-800">
          <MapPin className="mr-2" />
          <Link href={event.location_on_google_maps} target="_blank">
            {event.venue}
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <PortableText value={event.content} components={components} />
      </div>
    </section>
  );
}
