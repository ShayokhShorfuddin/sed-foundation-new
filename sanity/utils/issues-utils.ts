import {
  IssuesCardType,
  IssuesType,
} from "@/app/(site)/research-publication/journal/Archive";
import { createClient, groq } from "next-sanity";

const ClientConfig = {
  projectId: "q99ib49k",
  dataset: "production",

  useCdn: true,
  apiVersion: "2024-09-21", // Use current date (UTC format yyyy-mm-dd)
};

// Fetch all the issues basic info for cards
export async function getIssues(): Promise<IssuesCardType[]> {
  const client = createClient(ClientConfig);

  return client.fetch(
    groq`*[_type == "issues"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    coordinators,
    "cardImage": card_image{asset->{url}, alt},
  }`,
    {},
    { next: { revalidate: 120 } }
  );
}

// Get all the details of a single issue
export async function getIssueWithDetails(slug: string): Promise<IssuesType> {
  const client = createClient(ClientConfig);

  return client.fetch(
    groq`*[_type == "issues" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    coordinators,
    "cardImage": card_image{asset->{url}, alt},
    pdf,
    articles[] {
      title,
      authors,
      keywords,
      abstract,
      pdf
    }
  }`,
    { slug },
    { next: { revalidate: 120 } }
  );
}
