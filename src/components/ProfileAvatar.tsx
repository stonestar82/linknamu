import Image from "next/image";

type ProfileAvatarProps = {
  src: string;
  alt: string;
};

export default function ProfileAvatar({ src, alt }: ProfileAvatarProps) {
  return (
    <div className="rounded-full bg-gradient-to-br from-white/90 to-orange-100/60 p-1.5 shadow-[0_12px_30px_-8px_rgba(194,102,17,0.4)] dark:from-white/10 dark:to-white/0 dark:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)]">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/10">
        <Image src={src} alt={alt} fill sizes="112px" className="object-cover" />
      </div>
    </div>
  );
}
