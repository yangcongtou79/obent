import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "子どもの英語",
  description:
    "小学校での英語学習の仕組みや、通学とオンラインの選び方など、子どもの英語にまつわる情報をまとめています。",
  openGraph: {
    title: `子どもの英語 | ${site.name}`,
    description:
      "小学校での英語学習の仕組みや、通学とオンラインの選び方など、子どもの英語にまつわる情報をまとめています。",
    url: `${site.url}/kosodate/english/`,
  },
};

export default function EnglishPage() {
  const englishArticles = articles.filter(
    (a) => a.category === "kosodate" && a.theme === "english"
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav aria-label="パンくずリスト" className="text-sm mb-8" style={{ color: "var(--text-dim)" }}>
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/" className="hover:underline">ホーム</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/kosodate/" className="hover:underline">子育て</Link></li>
          <li aria-hidden="true">/</li>
          <li style={{ color: "var(--text-on)" }}>子どもの英語</li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--text-on)", letterSpacing: "0.02em" }}>
        子どもの英語
      </h1>
      <p className="leading-relaxed mb-10 max-w-prose" style={{ color: "var(--text-dim)" }}>
        小学校では2020年度から、3年生以上に英語の学習が定められています。学校での学習内容を確認した上で、家庭での取り組みをどうするかを考えるためのテーマです。
      </p>

      {/* 学年別の英語の位置づけ（インラインSVG） */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-5" style={{ color: "var(--text-on)" }}>
          学年ごとの英語の位置づけ
        </h2>
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="min-w-[280px]">
            <svg
              viewBox="0 0 300 170"
              className="w-full max-w-[300px]"
              role="img"
              aria-label="学年ごとの英語の位置づけ：1・2年生は授業なし、3・4年生は外国語活動（週1コマ程度）、5・6年生は外国語（教科）（週2コマ程度）"
            >
              {/* 1・2年生 */}
              <rect x="4" y="8" width="74" height="42" rx="2"
                fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              <text x="41" y="33" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.4">
                1・2年生
              </text>
              <rect x="86" y="8" width="210" height="42" rx="2"
                fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" />
              <text x="191" y="33" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.35">
                教科として定められた授業はない
              </text>

              {/* 3・4年生 */}
              <rect x="4" y="64" width="74" height="42" rx="2"
                fill="none" stroke="var(--accent)" strokeWidth="1.5" />
              <text x="41" y="89" textAnchor="middle" fontSize="11" fill="currentColor">
                3・4年生
              </text>
              <rect x="86" y="64" width="210" height="42" rx="2"
                fill="none" stroke="var(--accent)" strokeWidth="1.5" />
              <text x="191" y="89" textAnchor="middle" fontSize="11" fill="currentColor">
                外国語活動（週1コマ程度）
              </text>

              {/* 5・6年生 */}
              <rect x="4" y="120" width="74" height="42" rx="2"
                fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="1.5" />
              <text x="41" y="145" textAnchor="middle" fontSize="11" fill="currentColor">
                5・6年生
              </text>
              <rect x="86" y="120" width="210" height="42" rx="2"
                fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="1.5" />
              <text x="191" y="145" textAnchor="middle" fontSize="11" fill="currentColor">
                外国語（教科）（週2コマ程度）
              </text>
            </svg>
          </div>
        </div>
        <p className="mt-3 text-xs" style={{ color: "var(--text-dim)", opacity: 0.7 }}>
          2020年度から全面実施の小学校学習指導要領による
        </p>
      </section>

      {/* Articles */}
      <section>
        <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-on)" }}>
          記事一覧
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {englishArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
