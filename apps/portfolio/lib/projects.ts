import { Project, projects } from "../content/projects";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) => {
    p.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
