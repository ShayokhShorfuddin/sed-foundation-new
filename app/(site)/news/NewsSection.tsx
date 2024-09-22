"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
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

import { getProjects } from "@/sanity/sanity-utils";

const ITEMS_PER_PAGE = 6;

export type NewsType = {
  _id: string;
  _createdAt: Date;

  title: string;
  slug: string;
  content: PortableTextBlock[];

  cardImage: {
    asset: {
      url: string;
    };
    alt: string;
  };

  date: Date;
};

export default function NewsSection() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getProjects();
      setNewsData(data);
    };
    fetchNews();
  }, []);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(nextPage);
    router.push(`/news`);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
    router.push(`/news`);
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
            image={news.cardImage.asset.url}
            alt={news.cardImage.alt}
            href={news.slug}
            title={news.title}
            content={news.content}
          />
        ))}
      </div>
    </section>
  );
}

function NewsCard({
  image,
  alt,
  href,
  title,
  content,
}: {
  image: string;
  alt: string;
  href: string;
  title: string;
  content: PortableTextBlock[];
}) {
  return (
    <Link href={`/news/${href}`}>
      <div className="flex flex-col rounded-2xl p-5 border border-gray-100 hover:border-sedGreen transition duration-300 ease-in-out">
        <img src={image} alt={alt} className="rounded-xl" />

        <h1 className="mt-5 text-xl">{title}</h1>
        <div className="font-sans mt-6 line-clamp-5">
          <PortableText value={content} />
        </div>
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
