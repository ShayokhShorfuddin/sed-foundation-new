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
    </section>
  );
}

function BookCoverWithDetails({ issue }: { issue: IssuesType }) {
  return (
    <div className="flex gap-x-8">
      <img
        src={issue.cardImage.asset.url}
        alt={issue.cardImage.alt}
        className="object-scale-down max-w-80 border border-sedGreen rounded-lg"
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
        <span className="text-sedGreen">Coordinators</span>
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

      <Link href={`${issue.pdfUrl}?dl=${issue.title}.pdf`} download>
        <Button size="sm" className="w-min mt-7 bg-sedGreen">
          Download
        </Button>
      </Link>
    </div>
  );
}
