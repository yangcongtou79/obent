import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | ${site.description}` },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.description}`,
    description: site.description,
    url: `${site.url}/`,
  },
};

export default function HomePage() {
  const photoArticles = articles.filter(
    (a) => a.category === "kosodate" && a.theme === "photo"
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 leading-snug">
          子育ての節目を、記録に残す
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-prose">
          {site.name}は、お宮参り・七五三・入園入学など子育ての節目にまつわる情報をまとめた情報サイトです。フォトスタジオの選び方や料金の仕組みなど、実際に動く前に知っておきたいことを、落ち着いた調子でお伝えします。
        </p>
      </section>

      {/* Category */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
          カテゴリ
        </h2>
        <Link
          href="/kosodate/"
          className="block p-5 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 hover:bg-stone-50 dark:hover:bg-zinc-800 transition-colors"
        >
          <span className="font-semibold text-zinc-800 dark:text-zinc-100">子育て</span>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            記念写真・ランドセル・習い事など、子育ての節目にまつわる情報
          </p>
        </Link>
      </section>

      {/* Recent articles */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
          記事
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photoArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
