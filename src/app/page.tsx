import LinkCard from "@/components/LinkCard";
import ProfileAvatar from "@/components/ProfileAvatar";
import { BlogIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

const profile = {
  name: "홍길동",
  bio: "내꿈은 백수왕",
};

const links = [
  { label: "GitHub", href: "https://github.com/your-id", icon: <GitHubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-id", icon: <LinkedInIcon /> },
  { label: "Blog", href: "https://your-blog.example.com", icon: <BlogIcon /> },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950">
        <ProfileAvatar initial={profile.name.charAt(0)} />

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {profile.name}
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            {profile.bio}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
