import { EventsType } from "@/app/(site)/events/EventSection";
import { createClient, groq } from "next-sanity";

const ClientConfig = {
  projectId: "q99ib49k",
  dataset: "production",

  useCdn: true,
  apiVersion: "2024-09-21", // Use current date (UTC format yyyy-mm-dd)
};

// Fetch all the events
export async function getEvents(): Promise<EventsType[]> {
  const client = createClient(ClientConfig);

  return client.fetch(
    groq`*[_type == "events"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content,
    venue,
    location_on_google_maps,
    "cardImage": card_image{asset->{url}, alt},
    from_date,
    to_date
  }`,
    {},
    { next: { revalidate: 120 } }
  );
}

// Get one single event using slug
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
    from_date,
    to_date
  }`,
    { slug },
    { next: { revalidate: 120 } }
  );
}
