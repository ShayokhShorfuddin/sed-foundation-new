"use client";

import { getIssues } from "@/sanity/utils/issues-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type IssuesCardType = {
  _id: string;
  _createdAt: Date;

  title: string;
  slug: string;
  coordinators: string[];

  cardImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
};

export type IssuesType = {
  _id: string;
  _createdAt: Date;

  title: string;
  slug: string;
  coordinators: string[];

  cardImage: {
    asset: {
      url: string;
    };
    alt: string;
  };

  pdf: File;

  articles: {
    // Articles field
    title: string;
    authors: string[];
    keywords: string[];
    abstract: string;
    pdf: File;
  }[];
};

export default function Archive() {
  const [issues, setIssues] = useState<IssuesCardType[]>([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const data = await getIssues();
      setIssues(data);
    };

    fetchIssues();
  }, []);

  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mt-10">
      {issues.map((issue) => (
        <IssuesCard key={issue._id} {...issue} />
      ))}
    </section>
  );
}

function IssuesCard({ title, slug, coordinators, cardImage }: IssuesCardType) {
  return (
    <Link href={`journal/${slug}`}>
      <div className="flex flex-col rounded-2xl p-5 border border-gray-100 hover:border-sedGreen transition duration-300 ease-in-out h-full">
        <img
          src={cardImage.asset.url}
          alt={cardImage.alt}
          className="rounded-xl"
        />

        <h1 className="mt-5 text-xl">{title}</h1>

        <p className="mt-3 text-sm">
          <span className="text-sedGreen">Coordinators</span>
          <br />
          {coordinators.join(", ")}
        </p>
      </div>
    </Link>
  );
}
