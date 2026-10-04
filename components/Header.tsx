import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          {site.name}
        </Link>
        <nav aria-label="グローバルナビゲーション">
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link
                href="/kosodate/"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                子育て
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
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
