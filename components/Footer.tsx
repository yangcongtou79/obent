import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-xs mb-4" style={{ color: "var(--text-dim)" }}>
          当サイトは広告を利用しています。
        </p>
        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap gap-4 text-sm" style={{ color: "var(--text-dim)" }}>
            <li>
              <Link href="/about/" className="hover:underline">
                運営者情報
              </Link>
            </li>
            <li>
              <Link href="/privacy/" className="hover:underline">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-6 text-xs" style={{ color: "var(--text-dim)", opacity: 0.55 }}>
          &copy; {new Date().getFullYear()} {site.owner}
        </p>
      </div>
    </footer>
  );
}
