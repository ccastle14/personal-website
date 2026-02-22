import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export function ProjectCard({
  slug,
  title,
  description,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <article className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition flex flex-col h-full">
      {image && (
        <div className="mb-4 h-40 bg-zinc-100 dark:bg-zinc-900 rounded-md overflow-hidden flex-shrink-0 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex-grow">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={`/projects/${slug}`}
        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
      >
        Read More →
      </Link>
    </article>
  );
}
