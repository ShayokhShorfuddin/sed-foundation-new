import { getNewsBySlug } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const slug = params.slug;
  const news = await getNewsBySlug(slug);

  return <p>Hello</p>;
}
