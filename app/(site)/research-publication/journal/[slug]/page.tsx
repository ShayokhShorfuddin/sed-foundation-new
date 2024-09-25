import Navbar from "@/app/(site)/Navbar";
import { getIssueWithDetails } from "@/sanity/utils/issues-utils";
import { IssuesType } from "../Archive";

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
  return <p>{issue.title}</p>;
}
