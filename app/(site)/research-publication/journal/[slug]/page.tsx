import Navbar from "@/app/(site)/Navbar";
import { getIssueWithDetails } from "@/sanity/utils/issues-utils";
import { IssuesType } from "../Archive";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const issue = await getIssueWithDetails(params.slug);

  return (
    <main>
      <Navbar />
      <IssuesContent issue={issue} />
    </main>
  );
}

function IssuesContent({ issue }: { issue: IssuesType }) {
  return (
    <section className="container flex flex-col items-center max-w-5xl mt-5 mb-10">
      <BookCoverWithDetails issue={issue} />
      <AllArticles issue={issue} />
    </section>
  );
}

function BookCoverWithDetails({ issue }: { issue: IssuesType }) {
  return (
    <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-x-8 max-w-full">
      <img
        src={issue.cardImage.asset.url}
        alt={issue.cardImage.alt}
        className="sm:object-scale-down max-w-80 border border-sedGreen rounded-lg"
      />

      <TextDetails issue={issue} />
    </div>
  );
}

function TextDetails({ issue }: { issue: IssuesType }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-sans">{issue.title}</h1>

      <div className="flex flex-col mt-7">
        <span className="text-sedGreen">
          {issue.coordinators.length > 1
            ? "Editors in chief"
            : "Editor in chief"}
        </span>
        <p>{issue.coordinators.join(", ")}</p>
      </div>

      <div className="flex flex-col mt-7">
        <span className="text-sedGreen">
          {issue.articles.length === 0
            ? "No Articles"
            : issue.articles.length === 1
              ? "Article"
              : "Articles"}
        </span>

        {issue.articles.map((article) => (
          <p key={article.title}>{article.title}</p>
        ))}
      </div>

      <Link
        href={`${issue.pdfUrl}?dl=${issue.title}.pdf`}
        download
        className="w-min mt-10 self-center sm:self-start"
      >
        <Button size="sm" className="bg-sedGreen">
          Download
        </Button>
      </Link>
    </div>
  );
}

function AllArticles({ issue }: { issue: IssuesType }) {
  return (
    <section className="flex flex-col mt-20 gap-y-20">
      {issue.articles.map((article) => (
        <div key={article.title} className="flex flex-col">
          <h2 className="text-2xl text-sedGreen font-sans">{article.title}</h2>
          <p className="mt-1">{article.authors.join(", ")}</p>
          <p className="mt-7 text-sm xs:text-base">{article.abstract}</p>

          <Link
            href={`${issue.pdfUrl}?dl=${article.title}.pdf`}
            download
            className="w-min mt-5"
          >
            <Button size="sm" className="bg-sedGreen">
              Download
            </Button>
          </Link>
        </div>
      ))}
    </section>
  );
}
