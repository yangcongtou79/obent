import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getArticle } from "@/content/articles";
import { lpItems } from "@/content/lp";

const article = getArticle("plan")!;

const publishedLps = lpItems.filter(
  (l) => l.theme === "photo" && l.affiliateUrl !== "" && l.articleLinkLabel
);

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  openGraph: {
    title: `${article.title} | ${site.name}`,
    description: article.description,
    url: `${site.url}/kosodate/photo/guide/plan/`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  },
};

function formatDate(iso: string) {
  return iso.replace(/-/g, "/");
}

const planTypes = [
  {
    id: "studio-only",
    title: "スタジオ撮影のみ",
    desc: "スタジオで撮影だけを行うプランです。衣装や参拝との組み合わせは別途自分で手配します。",
    suits: [
      "手持ちの着物・袴があり、着付けは自分や家族が行える",
      "参拝の日程はすでに決まっている",
      "撮影だけを先に済ませておきたい",
    ],
    notes: "持ち込み衣装への対応可否はスタジオによって異なります。",
  },
  {
    id: "studio-rental",
    title: "スタジオ撮影＋衣装レンタル（参拝用）",
    desc: "撮影に加えて、参拝用の着物・袴もレンタルできるプランです。着物を持っていない家庭に向いています。",
    suits: [
      "着物を持っておらず、購入せずに済ませたい",
      "参拝とセットで準備を進めたい",
      "撮影後にそのまま参拝できると効率がよい",
    ],
    notes: "スタジオと神社の間の移動が発生します。参拝当日の動線を事前に確認しておくと安心です。",
  },
  {
    id: "own-outfit",
    title: "持ち込み衣装での撮影",
    desc: "家庭で用意した着物・袴を持参してスタジオで撮影するプランです。",
    suits: [
      "祖父母から譲り受けた着物など、手持ちの衣装を使いたい",
      "衣装に対するこだわりや希望がある",
      "着付けはスタジオにお願いしたい",
    ],
    notes: "持ち込みの際は事前にスタジオへ確認が必要です。対応していないスタジオもあります。",
  },
  {
    id: "same-day",
    title: "撮影と参拝を同日にまとめる",
    desc: "撮影・着付け・参拝を一日のうちに行うプランです。外出の機会をまとめたい家庭に向いています。",
    suits: [
      "外出の機会を減らしたい",
      "準備の手間をできるだけ少なくしたい",
      "きょうだいのスケジュール調整が難しい",
    ],
    notes: "一日のスケジュールが長くなりやすく、特に小さなお子さんには疲れが出やすいです。当日の流れを事前にスタジオと確認しておくことをおすすめします。",
  },
];

export default function PlanPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav aria-label="パンくずリスト" className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/" className="hover:underline">ホーム</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/kosodate/" className="hover:underline">子育て</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/kosodate/photo/" className="hover:underline">記念写真</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-800 dark:text-zinc-200">{article.title}</li>
        </ol>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3 leading-snug">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span>公開：<time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time></span>
            <span>更新：<time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time></span>
          </div>
        </header>

        {/* Summary */}
        <div className="summary-box">
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-on)" }}>この記事のポイント</p>
          <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>スタジオの予約フォームには複数のメニューが並んでいることが多い</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>代表的なプランは「撮影のみ」「衣装レンタル付き」「持ち込み衣装」「参拝セット」の4つ</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>プランは衣装の持ち込み可否と、参拝との組み合わせ方で選ぶ</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>「撮影の予約」と「見学・相談の予約」は別になっているスタジオがある</span></li>
          </ul>
        </div>

        <div className="prose-content space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-prose">

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 mt-2">予約フォームで迷いやすいポイント</h2>
            <p>
              フォトスタジオの予約フォームには、複数のメニューやプランが並んでいることが多く、「どれを選べばよいか分からない」という声をよく聞きます。メニューの名称がスタジオごとに異なることも、迷いやすい原因のひとつです。
            </p>
            <p className="mt-3">
              どのメニューを選ぶかは、主に2つの要素で決まります。
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              <li><span className="font-medium">衣装をどう準備するか：</span>スタジオでレンタルするか、手持ちを持ち込むか</li>
              <li><span className="font-medium">参拝との組み合わせ：</span>撮影と参拝を同日にまとめるか、別の日にするか</li>
            </ul>
            <p className="mt-3">
              この2点を先に決めておくと、予約フォームの選択が格段にスムーズになります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">代表的な4つのプランタイプ</h2>
            <p>
              スタジオのメニュー構成はさまざまですが、おおむね次の4つの型に分類できます。
            </p>

            <div className="space-y-6 mt-6">
              {planTypes.map((plan) => (
                <div
                  key={plan.id}
                  className="p-5"
                  style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", borderLeft: "3px solid var(--border)" }}
                >
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    {plan.desc}
                  </p>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500 mb-1">向いている家庭の例：</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {plan.suits.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                  {plan.notes && (
                    <p className="mt-3 text-xs pt-2" style={{ color: "var(--text-dim)", opacity: 0.7, borderTop: "1px solid var(--border)" }}>
                      ※ {plan.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">4つのプランの比較</h2>
            <p className="mb-4">
              4つのプランタイプを、衣装・参拝・当日の手間という3つの観点で比較します。あくまで参考として、家族の状況に合わせて選んでください。
            </p>

            <div className="table-scroll">
              <table className="w-full text-sm border-collapse border border-zinc-200 dark:border-zinc-700">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800">
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">プランタイプ</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">衣装の準備</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">参拝との関係</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">外出の回数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300">撮影のみ</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">持ち込みまたはレンタル</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">別日に行う</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">2回以上</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300">撮影＋衣装レンタル（参拝用）</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">スタジオでレンタル</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">同日または別日</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">1〜2回</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300">持ち込み衣装での撮影</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">手持ちを持参</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">別日に行う</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">2回以上</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300">撮影と参拝を同日に</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">スタジオでレンタルが多い</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">同日に完結</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">1回</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
              ※ 上記はあくまでプランタイプの傾向であり、スタジオによって内容は異なります。詳細は各スタジオへご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">撮影の予約と見学・相談の予約</h2>
            <p>
              多くのスタジオでは、「撮影の予約」と「来店して相談・見学する予約」が別の手続きになっています。「まずはどんな衣装があるか見てから決めたい」という場合は、見学または相談の予約を先に取ることができるスタジオもあります。
            </p>
            <p className="mt-3">
              相談だけであれば当日受付に対応しているスタジオもありますが、混み合う時期は予約が必要なこともあります。ウェブサイトで確認するか、電話で問い合わせてみてください。
            </p>
            <p className="mt-3">
              「衣装を見てから予約を考えたい」という場合は、最初から撮影の予約を入れなくても、相談の機会を作れるか確認してみると、選びやすくなることがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">まとめ</h2>
            <p>
              七五三の撮影プランは、衣装をどう準備するかと参拝との組み合わせ方によって選ぶのが基本です。スタジオごとにメニューの名称は異なりますが、内容は4つのプランタイプに分類できます。
            </p>
            <p className="mt-3">
              プランが決まったら、料金の内訳や予約方法（WEB・電話）を確認し、希望の日時が取れるかを早めに確かめると安心です。
            </p>
          </section>

        </div>

        {/* LP導線（公開中のLPだけを地域ラベルで並べる） */}
        {publishedLps.length > 0 && (
          <div className="mt-10 p-6" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)" }}>
            <p className="text-sm mb-4" style={{ color: "var(--text-dim)" }}>
              フォトスタジオの予約はこちらから確認できます。
            </p>
            <ul className="space-y-2">
              {publishedLps.map((lp) => (
                <li key={lp.slug}>
                  <Link
                    href={`/lp/${lp.slug}/`}
                    className="text-sm text-slate-700 dark:text-slate-300 underline"
                  >
                    {lp.articleLinkLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <Link href="/kosodate/photo/" className="text-sm hover:underline" style={{ color: "var(--text-dim)" }}>
            ← 記念写真トップへ戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
