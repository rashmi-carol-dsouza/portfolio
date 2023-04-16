import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { Mdx } from "@/components/mdx";
import { Tags } from "@/components/Tags";
import ProjectLinks from "@/components/ProjectLinks";

type URLMetaData = {
  params: any
};

export async function generateMetadata({
  params,
}: URLMetaData): Promise<Metadata | undefined> {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
    tags,
    code,
    pitch,
    outcome,
    liveDemo
  } = project;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://rashmidsouza.com//projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Project({ params }: URLMetaData) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { tags, pitch, code, liveDemo, outcome } = project;
  const hasLinks = [pitch, code, liveDemo, outcome].some(link => link);
  
  
  return (
    <section>
      <script type="application/ld+json">
        {JSON.stringify(project.structuredData)}
      </script>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        {project.title}
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 rounded-md px-2 py-1 tracking-tighter">
          {project.publishedAt}
        </div>
        <div className="h-[0.2em] bg-neutral-50 mx-2" />
      </div>
      {hasLinks && <ProjectLinks pitch={pitch} code={code} liveDemo={liveDemo} outcome={outcome} />}
      <Mdx code={project.body.code} />
      <hr className="my-8" />
      {tags && <Tags tags={tags.split(',')} />}
    </section>
  );
}
