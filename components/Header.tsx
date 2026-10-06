import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}>
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
          style={{ color: "var(--text-on)" }}
        >
          {site.name}
        </Link>
        <nav aria-label="グローバルナビゲーション">
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link
                href="/kosodate/"
                className="hover:underline"
                style={{ color: "var(--text-dim)" }}
              >
                子育て
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="hover:underline"
                style={{ color: "var(--text-dim)" }}
              >
                運営者情報
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
