import type { ReactNode } from "react";

type LinkCardProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export default function LinkCard({ href, label, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-4 rounded-2xl border border-white/50 bg-white/40 px-5 py-4 font-medium text-stone-700 shadow-[0_4px_20px_-10px_rgba(120,72,23,0.3)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_24px_-10px_rgba(120,72,23,0.4)] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-lg">
        {icon}
      </span>
      <span className="tracking-tight">{label}</span>
    </a>
  );
}
