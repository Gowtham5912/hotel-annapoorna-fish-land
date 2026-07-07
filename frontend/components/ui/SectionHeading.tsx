type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow && (
        <div
          className={`inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100/80 backdrop-blur-md ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={`mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl ${
          isCenter ? "mx-auto max-w-5xl" : "max-w-4xl"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-base leading-8 text-slate-300 md:text-lg ${
            isCenter
              ? "mx-auto max-w-3xl text-center"
              : "max-w-2xl text-left"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}