type ProfileAvatarProps = {
  initial: string;
};

export default function ProfileAvatar({ initial }: ProfileAvatarProps) {
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-200 text-4xl font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
      {initial}
    </div>
  );
}
