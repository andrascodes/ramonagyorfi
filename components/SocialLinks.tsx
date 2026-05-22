import type { SocialLink } from "@/content/types";

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7"
      aria-hidden
    >
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H5.67v-8.59h2.67v8.59Zm-1.34-9.77a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.33 9.77h-2.66v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.25h-2.67v-8.59h2.56v1.17h.04a2.81 2.81 0 0 1 2.53-1.39c2.71 0 3.21 1.78 3.21 4.1v4.71Z" />
    </svg>
  );
}

const ICONS: Record<SocialLink["platform"], () => React.ReactElement> = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export function SocialLinks({
  items,
  className = "",
}: {
  items: SocialLink[];
  className?: string;
}) {
  return (
    <ul className={`flex items-center gap-6 ${className}`}>
      {items.map((s) => {
        const Icon = ICONS[s.platform];
        return (
          <li key={s.platform}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-block transition-opacity hover:opacity-70"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
