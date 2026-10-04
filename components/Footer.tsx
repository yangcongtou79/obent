import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
          当サイトは広告を利用しています。
        </p>
        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              <Link href="/about/" className="hover:text-zinc-800 dark:hover:text-zinc-200">
                運営者情報
              </Link>
            </li>
            <li>
              <Link href="/privacy/" className="hover:text-zinc-800 dark:hover:text-zinc-200">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} {site.owner}
        </p>
      </div>
    </footer>
  );
}
