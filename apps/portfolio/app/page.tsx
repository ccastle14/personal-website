import Link from "next/link";
import Image from "next/image";
import { projects } from "../content/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Colin Cassell</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Building things in software, hardware, and audio. Currently interested in creative electronics and DSP.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
              {project.image && (
                <div className="mb-4 h-40 bg-zinc-100 dark:bg-zinc-900 rounded-md overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
        <div className="pt-4">
          <Link
            href="/projects"
            className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <section className="flex gap-6 text-sm pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <a
          href="https://github.com/ccastle14"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/colin-cassell"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
        >
          LinkedIn
        </a>
      </section>
    </div>
  );
}
