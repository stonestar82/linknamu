"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import ProfileAvatar from "@/components/ProfileAvatar";
import { links } from "@/lib/links";

const profile = {
  name: "박갑수",
  bio: "내꿈은 백수왕",
  avatarUrl: "https://placehold.co/150x150/orange/white.png",
};

export default function Home() {
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/links/clicks")
      .then((res) => res.json())
      .then((data: { counts: Record<string, number> }) => {
        if (!cancelled) {
          setClickCounts(data.counts);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setClickCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/links/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch(() => {});
  };

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
              key={link.id}
              href={link.href}
              label={link.label}
              icon={link.icon}
              clickCount={clickCounts[link.id] ?? 0}
              onClick={() => handleLinkClick(link.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
