"use client";

interface Props {
  href: string;
  label: string;
  note?: string;
  contentName: string;
  small?: boolean;
}

export default function CompareSchoolCtaButton({ href, label, note, contentName, small }: Props) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: contentName });
    }
  };

  if (!href) {
    return (
      <div>
        {note && (
          <p style={{ fontSize: 12, textAlign: "center", color: "#6E6960", marginBottom: 8 }}>
            {note}
          </p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: small ? 44 : 56,
            backgroundColor: "#ccc",
            color: "#888",
            borderRadius: 8,
            fontSize: small ? 14 : 16,
            fontWeight: 700,
            cursor: "not-allowed",
          }}
        >
          {label}（準備中）
        </div>
      </div>
    );
  }

  return (
    <div>
      {note && (
        <p style={{ fontSize: 12, textAlign: "center", color: "#6E6960", marginBottom: 8 }}>
          {note}
        </p>
      )}
      <a
        href={href}
        onClick={handleClick}
        rel="nofollow sponsored"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          width: "100%",
          height: small ? 44 : 56,
          backgroundColor: "#1E4D80",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: small ? 14 : 16,
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        <span>{label}</span>
        <span aria-hidden="true" style={{ fontSize: small ? 16 : 18 }}>›</span>
      </a>
    </div>
  );
}
