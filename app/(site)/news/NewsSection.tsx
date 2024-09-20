"use client";
import Image, { StaticImageData } from "next/image";
import Newspaper from "./_images/news.jpg";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const ITEMS_PER_PAGE = 6;

type NewsType = {
  image: StaticImageData;
  href: string;
  title: string;
  description: string;
};

export default function Programs() {
  const router = useRouter(); // Initialize router
  const [currentPage, setCurrentPage] = useState(1);

  const newsData: NewsType[] = [
    {
      image: Newspaper,
      href: "/",
      title: "News1",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News2",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News3",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News4",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News5",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News6",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News7",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News8",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News9",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News10",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News11",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News12",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },

    {
      image: Newspaper,
      href: "/",
      title: "News13",
      description:
        "Forests cover hills with tall trees. Rivers flow through green valleys. Plants grow in fields and by lakes. Mountains rise high, with snowy tops. Animals live in woods and grasslands. Flowers bloom in meadows. Oceans have sandy beaches. Deserts are hot and dry. Rainforests are wet and full of life.",
    },
  ];

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(nextPage);
    router.push(`/news`); // Navigate to the next page
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
    router.push(`/news`); // Navigate to the previous page
  };

  return (
    <section className="mt-20 mb-10">
      <NewsGrid currentPage={currentPage} newsData={newsData} />
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </section>
  );
}

function NewsGrid({
  currentPage,
  newsData,
}: {
  currentPage: number;
  newsData: NewsType[];
}) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedNews = newsData.slice(startIndex, endIndex);
  const displayedCount = displayedNews.length; // Get the number of items

  const gridRows = displayedCount <= 3 ? 1 : 2;

  return (
    <section className="container flex flex-col items-center mt-20 mb-10 px-5 2xl:px-32">
      <h1 id="heading-text" className="text-4xl font-outfit">
        What's happening?
      </h1>

      <p className="mt-4 max-w-[31rem] text-sm md:text-base text-center">
        Stay up to date with the latest news and info.
      </p>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-${gridRows} h-fit w-full gap-7 mt-10`}
      >
        {displayedNews.map((news, index) => (
          <NewsCard
            key={index}
            image={news.image}
            href={news.href}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
    </section>
  );
}

function NewsCard({
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
