"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PortableTextBlock } from "sanity";
import { PortableText } from "next-sanity";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { getEvents } from "@/sanity/sanity-utils";
import { Clock } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export type EventsType = {
  _id: string;
  _createdAt: Date;

  title: string;
  slug: string;
  content: PortableTextBlock[];

  venue: string;
  location_on_google_maps: string;

  cardImage: {
    asset: {
      url: string;
    };
    alt: string;
  };

  date: Date;
};

export default function EventSection() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsData, setEventsData] = useState<EventsType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEventsData(data);
    };

    fetchEvents();
  }, []);

  const totalPages = Math.ceil(eventsData.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(nextPage);
    router.push(`/events`);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
    router.push(`/events`);
  };

  return (
    <section className="mt-20 mb-10">
      <EventsGrid currentPage={currentPage} eventsData={eventsData} />
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </section>
  );
}

function EventsGrid({
  currentPage,
  eventsData,
}: {
  currentPage: number;
  eventsData: EventsType[];
}) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedEvents = eventsData.slice(startIndex, endIndex);
  const displayedCount = displayedEvents.length; // Get the number of items

  const gridRows = displayedCount <= 3 ? 1 : 2;

  return (
    <section className="container flex flex-col items-center mt-20 mb-10 px-5 2xl:px-32">
      <h1 id="heading-text" className="text-4xl font-outfit">
        What's happening?
      </h1>

      <p className="mt-4 max-w-[31rem] text-sm md:text-base text-center">
        Learn about the upcoming or past events!
      </p>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-${gridRows} h-fit w-full gap-7 mt-10`}
      >
        {displayedEvents.map((event, index) => (
          <EventsCard
            key={index}
            image={event.cardImage.asset.url}
            alt={event.cardImage.alt}
            venue={event.venue}
            location_on_google_maps={event.location_on_google_maps}
            href={event.slug}
            title={event.title}
            content={event.content}
            date={event.date}
          />
        ))}
      </div>
    </section>
  );
}

function EventsCard({
  image,
  alt,
  venue,
  location_on_google_maps,
  href,
  title,
  content,
  date,
}: {
  image: string;
  alt: string;
  venue: string;
  location_on_google_maps: string;
  href: string;
  title: string;
  content: PortableTextBlock[];
  date: Date;
}) {
  const isUpcoming = new Date(date) > new Date(); // Check if the event date is in the future

  return (
    <Link href={`/events/${href}`}>
      <div className="flex flex-col rounded-2xl p-5 border border-gray-100 hover:border-sedGreen transition duration-300 ease-in-out">
        <img src={image} alt={alt} className="rounded-xl" />
        <h1 className="mt-5 text-xl">{title}</h1>

        {isUpcoming && <UpcomingTag />}

        <div className="font-sans mt-6 line-clamp-5">
          <PortableText value={content} />
        </div>
      </div>
    </Link>
  );
}

function UpcomingTag() {
  return (
    <div className="flex mt-1 text-sedGreen">
      <Clock className="mr-2" />
      <p>Upcoming</p>
    </div>
  );
}

function PaginationSection({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}: {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}) {
  return (
    <Pagination>
      <PaginationContent className="mt-10">
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => onPrevPage()} />
          </PaginationItem>
        )}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext onClick={() => onNextPage()} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
