"use client";

export function HeroSubtext() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="w-full h-[1px] bg-white opacity-50" />
      <p className={`
        text-lg sm:text-xl md:text-2xl lg:text-3xl
        font-medium tracking-tight text-neutral-200
        max-w-[95%] md:max-w-[90%]
        text-center md:text-left
      `}>
        We believe in a future where education knows no boundaries,
        <br className="hidden md:block" />
        and opportunities are accessible to all.
      </p>
    </div>
  );
}