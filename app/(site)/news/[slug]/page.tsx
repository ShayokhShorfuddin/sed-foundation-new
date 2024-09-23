import Navbar from "../../Navbar";
import { getNewsBySlug } from "@/sanity/utils/news-utils";
import { PortableText, PortableTextComponents } from "next-sanity";
import { NewsType } from "../NewsSection";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const news = await getNewsBySlug(params.slug);

  return (
    <main>
      <Navbar />
      <NewsContent news={news} />
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

function NewsContent({ news }: { news: NewsType }) {
  return (
    <section className="container flex flex-col max-w-[65rem] mt-5 mb-10">
      <img
        src={news.cardImage.asset.url}
        alt={news.cardImage.alt}
        className="rounded-xl"
      />

      <h1 className="text-lg md:text-xl lg:text-2xl mt-8">{news.title}</h1>

      {news.date && (
        <p className="px-3 py-1 border border-sedGreen w-min rounded-full text-sm mt-5">
          {new Intl.DateTimeFormat("en-GB").format(new Date(news.date))}
        </p>
      )}

      <div className="mt-10">
        <PortableText value={news.content} components={components} />
      </div>
    </section>
  );
}
