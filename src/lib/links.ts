export type LinkItem = {
  id: string;
  label: string;
  href: string;
  icon: string;
};

export const links: LinkItem[] = [
  { id: "github", label: "깃허브", href: "https://github.com/your-id", icon: "🐙" },
  { id: "blog", label: "블로그", href: "https://your-blog.example.com", icon: "✍" },
  { id: "email", label: "이메일", href: "mailto:darakutensi2@gmail.com", icon: "📬" },
];
