import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Section } from "@/components/Section";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Params {
  slug: string;
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-12 max-w-2xl">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Image */}
      {project.image && (
        <div className="h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex-shrink-0 relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Overview */}
      {project.overview && (
        <Section title="Overview">
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.overview}
          </p>
        </Section>
      )}

      {/* Problem */}
      {project.problem && (
        <Section title="Problem">
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.problem}
          </p>
        </Section>
      )}

      {/* Architecture */}
      {project.architecture && (
        <Section title="Architecture">
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.architecture}
          </p>
        </Section>
      )}

      {/* Implementation Details */}
      {project.implementationDetails && (
        <Section title="Implementation Details">
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.implementationDetails}
          </p>
        </Section>
      )}

      {/* Challenges & Lessons */}
      {project.challenges && (
        <Section title="Challenges & Lessons">
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.challenges}
          </p>
        </Section>
      )}

      {/* Links */}
      {project.links && (
        <Section title="Links">
          <div className="flex flex-wrap gap-4 text-sm">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub Repo
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Demo
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Video
              </a>
            )}
          </div>
        </Section>
      )}

      {/* Footer Navigation */}
      <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/projects"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to all projects
        </Link>
      </section>
    </article>
  );
}
