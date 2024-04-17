import { works } from "@/data/workDatas";
import Work from "@/components/gallery/Work";
import { redirect } from "next/navigation";

export default function WorkWithFilenameInURL({
  params,
}: {
  params: { filename: string };
}) {
  const workData = works.find(
    (work) => work.link === `/images/${params.filename}`
  );
  if (!workData) {
    redirect("/not-found");
  }

  return <>{workData ? <Work {...workData} /> : <h1>Not Found</h1>}</>;
}
