interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-2xl mb-12`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.25em] mb-3 block ${
            light ? 'text-[#c9a84a]' : 'text-[#c9a84a]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-[#0a1f3c]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      {center && (
        <div className="flex justify-center mt-6">
          <div className="w-16 h-0.5 bg-[#c9a84a]" />
        </div>
      )}
    </div>
  );
}
