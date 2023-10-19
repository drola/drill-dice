import Markdown from "react-markdown";
import { drills } from "../drills";
import Button from "@mui/material/Button";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import RollTheDice from "@/app/RollTheDice";
import { Metadata, ResolvingMetadata } from "next";

export const dynamic = "error"; // Force static rendering

export function generateStaticParams(): { slug: string }[] {
  return drills.map((d) => ({ slug: d.slug }));
}

export function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Metadata {
  let drill = drills.find((d) => d.slug === params.slug);
  if (!drill) {
    return {};
  }

  return {
    title: drill.title,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  let drill = drills.find((d) => d.slug === params.slug);
  if (!drill) {
    return;
  }

  return (
    <>
      <h1>{drill.title}</h1>
      {drill.video ? (
        <Button
          variant="outlined"
          startIcon={<OndemandVideoIcon />}
          href={drill.video}
          target="_blank"
        >
          Video
        </Button>
      ) : null}
      <Markdown>{drill.text}</Markdown>
      <RollTheDice again />
    </>
  );
}
