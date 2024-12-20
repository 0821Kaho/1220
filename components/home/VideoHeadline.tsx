"use client";

interface VideoHeadlineProps {
  verb: string;
  rest: string;
  verbColor: string;
  textColor: string;
}

export function VideoHeadline({ verb, rest, verbColor, textColor }: VideoHeadlineProps) {
  return (
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-left">
      <span
        className="block leading-tight mb-1 md:mb-2"
        style={{ color: verbColor }}
      >
        {verb}
      </span>
      <span
        className="block leading-tight"
        style={{ color: textColor }}
      >
        {rest}
      </span>
    </h2>
  );
}