import { NewsType } from "@/app/(site)/news/NewsSection";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<NewsType[]> {
  const client = createClient({
    projectId: "q99ib49k",
    dataset: "production",

    apiVersion: "2024-09-21", // Use current date (UTC format yyyy-mm-dd)
  });

  return client.fetch(groq`*[_type == "news"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    "cardImage": card_image{asset->{url}, alt},
    date
  }`);
}

export async function getNewsBySlug(slug: string): Promise<NewsType> {
  const client = createClient({
    projectId: "q99ib49k",
    dataset: "production",

    apiVersion: "2024-09-21", // Use current date (UTC format yyyy-mm-dd)
  });

  return client.fetch(
    groq`*[_type == "news" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    "cardImage": card_image{asset->{url}, alt},
    date
  }`,
    { slug }
  );
}
