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
  const kosodateArticles = articles.filter((a) => a.category === "kosodate");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-2xl font-bold mb-4 leading-snug" style={{ color: "var(--text-on)", letterSpacing: "0.02em" }}>
          子育ての節目を、記録に残す
        </h1>
        <p className="leading-relaxed max-w-prose" style={{ color: "var(--text-dim)" }}>
          {site.name}は、お宮参り・七五三・入園入学など子育ての節目にまつわる情報をまとめた情報サイトです。記念写真や子どもの英語など、実際に動く前に知っておきたいことを、落ち着いた調子でお伝えします。
        </p>
      </section>

      {/* Category */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-on)" }}>
          カテゴリ
        </h2>
        <Link href="/kosodate/" className="link-card">
          <span className="font-semibold" style={{ color: "var(--text-on)" }}>子育て</span>
          <p className="mt-1 text-sm" style={{ color: "var(--text-dim)" }}>
            記念写真や子どもの英語など、子育ての節目にまつわる情報
          </p>
        </Link>
      </section>

      {/* Articles */}
      <section>
        <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-on)" }}>
          記事
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kosodateArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
