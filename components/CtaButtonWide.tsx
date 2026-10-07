"use client";

interface CtaButtonWideProps {
  href: string;
}

export default function CtaButtonWide({ href }: CtaButtonWideProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  };

  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        rel="sponsored nofollow noopener"
        target="_blank"
        style={{
          display: "block",
          width: "100%",
          backgroundColor: "var(--cta-bg)",
          color: "var(--cta-text)",
          padding: "16px 20px",
          textAlign: "center",
          textDecoration: "none",
          borderRadius: "2px",
        }}
      >
        <span style={{ display: "block", fontSize: "17px", fontWeight: "700", lineHeight: "1.4" }}>
          無料個別相談会の申込ページへ
        </span>
        <span style={{ display: "block", fontSize: "13px", fontWeight: "400", marginTop: "5px", opacity: 0.88 }}>
          英語レベルの確認と、学習プランの提案
        </span>
      </a>
      <p style={{ marginTop: "8px", fontSize: "13px", textAlign: "center", color: "var(--text-dim)", lineHeight: "1.6" }}>
        入力は3項目。相談会のあとの入会は必須ではありません。
      </p>
    </div>
  );
}
