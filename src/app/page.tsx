import LinkCard from "@/components/LinkCard";
import ProfileAvatar from "@/components/ProfileAvatar";

const profile = {
  name: "박갑수",
  bio: "내꿈은 백수왕",
  avatarUrl: "https://placehold.co/150x150/orange/white.png",
};

const links = [
  { label: "깃허브", href: "https://github.com/your-id", icon: "🐙" },
  { label: "블로그", href: "https://your-blog.example.com", icon: "✍" },
  { label: "이메일", href: "mailto:darakutensi2@gmail.com", icon: "📬" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-orange-100 px-6 py-20 dark:from-neutral-950 dark:via-stone-950 dark:to-neutral-900 sm:py-28">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <ProfileAvatar src={profile.avatarUrl} alt={profile.name} />

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-100">
            {profile.name}
          </h1>
          <p className="text-base text-stone-500 dark:text-stone-400">
            {profile.bio}
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
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
