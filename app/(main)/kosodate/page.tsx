import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "子育て",
  description:
    "お宮参り・誕生日・七五三・入園入学など、子育ての節目を写真に残すことについての情報をまとめています。",
  openGraph: {
    title: `子育て | ${site.name}`,
    description:
      "お宮参り・誕生日・七五三・入園入学など、子育ての節目を写真に残すことについての情報をまとめています。",
    url: `${site.url}/kosodate/`,
  },
};

export default function KosodatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav aria-label="パンくずリスト" className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/" className="hover:underline">ホーム</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-800 dark:text-zinc-200">子育て</li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
        子育て
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-prose">
        お宮参り・誕生日・七五三・入園入学など、子育てには節目があります。その節目を記念写真として残しておくことで、家族の記録になるだけでなく、子どもが大きくなってから振り返る機会にもなります。このカテゴリでは、記念写真にまつわる情報を中心にまとめています。
      </p>

      <section>
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
          テーマ一覧
        </h2>
        <Link
          href="/kosodate/photo/"
          className="block p-5 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 hover:bg-stone-50 dark:hover:bg-zinc-800 transition-colors"
        >
          <span className="font-semibold text-zinc-800 dark:text-zinc-100">記念写真</span>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            フォトスタジオの選び方から料金の仕組み、撮影当日の流れまで
          </p>
        </Link>
      </section>
    </div>
  );
}
