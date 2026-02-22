import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A selection of work across hardware, audio, and software.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
