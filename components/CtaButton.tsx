"use client";

interface CtaButtonProps {
  href: string;
  label: string;
}

export default function CtaButton({ href, label }: CtaButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
    // target="_blank" handles navigation; no need to prevent default
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      rel="sponsored nofollow noopener"
      target="_blank"
      className="cta-btn"
    >
      {label}
    </a>
  );
}
