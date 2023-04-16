import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allProjects } from "contentlayer/generated";
import { Tags } from "@/components/Tags";

export default function Projects() {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <ol>
        {projects.map((project) => (
          <li key={project.slug}>
            <div className="flex flex-col space-y-1 mb-4">
              <div className="w-full flex flex-col">
                <Link
                  className="underline hover:no-underline"
                  href={`/projects/${project.slug}`}
                >
                  {project.title}
                </Link>
                <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                  {project.summary}
                </p>
                {project.tags && <Tags tags={project.tags.split(',')} />}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
