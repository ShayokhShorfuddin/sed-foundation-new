import { EventsType } from "@/app/(site)/events/EventSection";
import { NewsType } from "@/app/(site)/news/NewsSection";
import { createClient, groq } from "next-sanity";

const ClientConfig = {
  projectId: "q99ib49k",
  dataset: "production",

  useCdn: true,
  apiVersion: "2024-09-21", // Use current date (UTC format yyyy-mm-dd)
};

export async function getNews(): Promise<NewsType[]> {
  const client = createClient(ClientConfig);

  return client.fetch(
    groq`*[_type == "news"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    "cardImage": card_image{asset->{url}, alt},
    date
  }`,
    {},
    { next: { revalidate: 120 } }
  );
}

export async function getNewsBySlug(slug: string): Promise<NewsType> {
  const client = createClient(ClientConfig);

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
    { slug },
    { next: { revalidate: 120 } }
  );
}

export async function getEvents(): Promise<EventsType[]> {
  const client = createClient(ClientConfig);

  return client.fetch(
    groq`*[_type == "events"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    venue,
    location_on_google_maps,
    "cardImage": card_image{asset->{url}, alt},
    date
  }`,
    {},
    { next: { revalidate: 120 } }
  );
}

export async function getEventBySlug(slug: string): Promise<EventsType> {
  const client = createClient(ClientConfig);

  return client.fetch(
    groq`*[_type == "events" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    venue,
    location_on_google_maps,
    "cardImage": card_image{asset->{url}, alt},
    date
  }`,
    { slug },
    { next: { revalidate: 120 } }
  );
}
