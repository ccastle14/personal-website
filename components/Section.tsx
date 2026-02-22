interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <h2 className="text-2xl font-semibold">{title}</h2>}
          {description && (
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
