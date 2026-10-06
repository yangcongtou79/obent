import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "記念写真",
  description:
    "フォトスタジオでの記念写真について、予約から受け取りまでの流れと、知っておきたい情報をまとめています。",
  openGraph: {
    title: `記念写真 | ${site.name}`,
    description:
      "フォトスタジオでの記念写真について、予約から受け取りまでの流れと、知っておきたい情報をまとめています。",
    url: `${site.url}/kosodate/photo/`,
  },
};

const flowSteps = [
  { label: "プランを決める", note: "衣装の持ち込みか、参拝との組み合わせかを先に決める" },
  { label: "店舗と日時を選ぶ", note: "土日祝は混みやすいため、早めに確認する" },
  { label: "予約を入れる", note: "WEB受付か電話受付かは店舗による" },
  { label: "衣装選びと撮影", note: "当日のスケジュールを事前に確認しておく" },
  { label: "写真を選ぶ", note: "撮影後に購入する写真やアルバムを選ぶ" },
  { label: "受け取り", note: "納期は店舗によって異なる" },
];

export default function PhotoPage() {
  const photoArticles = articles.filter(
    (a) => a.category === "kosodate" && a.theme === "photo"
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav aria-label="パンくずリスト" className="text-sm mb-8" style={{ color: "var(--text-dim)" }}>
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/" className="hover:underline">ホーム</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/kosodate/" className="hover:underline">子育て</Link></li>
          <li aria-hidden="true">/</li>
          <li style={{ color: "var(--text-on)" }}>記念写真</li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--text-on)", letterSpacing: "0.02em" }}>
        記念写真
      </h1>
      <p className="leading-relaxed mb-10 max-w-prose" style={{ color: "var(--text-dim)" }}>
        フォトスタジオでの記念写真は、プランの選択から始まり、予約・撮影・写真の受け取りという流れで進みます。スタジオごとに料金の仕組みや予約方法が異なるため、事前に確認しておくことが大切です。
      </p>

      {/* Flow diagram */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-5" style={{ color: "var(--text-on)" }}>
          撮影の基本的な流れ
        </h2>
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex items-start gap-0 min-w-max">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center w-32">
                  <div
                    className="w-28 px-2 py-3 text-center"
                    style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
                  >
                    <span className="text-xs font-semibold leading-tight" style={{ color: "var(--text-on)" }}>
                      {step.label}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-center leading-snug px-1" style={{ color: "var(--text-dim)" }}>
                    {step.note}
                  </p>
                </div>
                {i < flowSteps.length - 1 && (
                  <svg
                    className="flex-shrink-0 w-6 h-6 -mt-6"
                    style={{ color: "var(--text-dim)" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section>
        <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-on)" }}>
          記事一覧
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
