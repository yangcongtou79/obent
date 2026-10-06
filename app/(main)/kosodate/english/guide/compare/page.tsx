import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getArticle } from "@/content/articles";

const article = getArticle("compare")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  openGraph: {
    title: `${article.title} | ${site.name}`,
    description: article.description,
    url: `${site.url}/kosodate/english/guide/compare/`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  },
};

function formatDate(iso: string) {
  return iso.replace(/-/g, "/");
}

export default function ComparePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav aria-label="パンくずリスト" className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/" className="hover:underline">ホーム</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/kosodate/" className="hover:underline">子育て</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/kosodate/english/" className="hover:underline">子どもの英語</Link></li>
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
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>通学の教室は、仲間と一緒に学べる環境がある。送迎が必要になる場合が多い</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>オンライン英会話は送迎不要で時間の融通がきく。予約や機器の準備は家庭が担う</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>続けやすさは、誰が管理するか、困ったときに相談できる窓口があるかで変わる</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>どちらが合うかは家庭の事情によって異なり、両方を組み合わせる家庭もある</span></li>
          </ul>
        </div>

        <div className="prose-content space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-prose">

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 mt-2">通学の教室の特徴</h2>
            <p>
              通学の英語教室では、同じ教室に通う仲間と一緒に学ぶ環境があります。クラスメイトと一緒に取り組む活動や会話の練習が、学習の動機になる場合があります。授業は決まった曜日と時間に行われることが多く、毎週通う習慣ができやすい面があります。
            </p>
            <p className="mt-3">
              一方で、その時間割に家庭のスケジュールを合わせる必要があります。小学生の場合、教室への送迎が必要になるケースが多くあります。仕事の都合や、きょうだいの行事と重なる時期には、送迎の調整が負担になる場合もあります。
            </p>
            <p className="mt-3">
              親の立場からは、教室の中の様子は見えにくいのが一般的です。子どもの様子を把握するには、教室からの連絡や子ども自身の話が主な手がかりになります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">オンライン英会話の特徴</h2>
            <p>
              オンライン英会話は、自宅から受講できるため送迎が不要です。移動の時間がかからない分、授業の回数を多く取りやすい場合があります。
            </p>
            <p className="mt-3">
              多くのサービスでは、曜日と時間を家庭のスケジュールに合わせて選べます。ただし、予約の手続きは家庭側が行う必要があります。サービスによって、週ごとにスケジュールを組む方式や、月ごとに回数を選ぶ方式などがあります。
            </p>
            <p className="mt-3">
              受講には端末（スマートフォンやタブレット、パソコン）と安定した通信環境、静かな場所が必要です。小学校低学年の場合は、接続の確認や操作のサポートのために親が付き添う場面が出てくることもあります。自宅で授業を受けるため、子どもの様子が見えやすいという面もあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">比較表</h2>
            <div className="table-scroll">
              <table className="w-full text-sm border-collapse border border-zinc-200 dark:border-zinc-700">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800">
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300 whitespace-nowrap">比べる点</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">通学の教室</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">オンライン英会話</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">送迎</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">必要な場合が多い</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">不要</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">回数</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">週1〜2回程度の教室が多い</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">回数を多く取れるサービスがある</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">時間割</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">決まった曜日と時間に通う</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">家庭の予定に合わせて選べる場合が多い</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">形式</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">集団の授業が多い</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">1対1の授業が多い</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">親から見える範囲</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">教室の中の様子は見えにくい</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">自宅で受けるので様子が分かる</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">必要なもの</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">通える距離の教室</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">端末、通信環境、静かな場所</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">親の関わり</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">送迎</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">予約や、低学年では付き添いが必要な場合がある</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">続けやすさを左右すること</h2>
            <p>
              通学・オンラインのどちらを選んでも、続けやすさに関わる共通の要素があります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">誰が予約・管理をするか</h3>
            <p>
              特にオンライン英会話では、予約やスケジュールの変更を家庭が管理する場面が多くあります。忙しい時期に管理が滞ると、授業が飛びがちになることがあります。サービスによっては予約を一括で管理してくれる仕組みを持つものもあるため、この点を比べてみるとよいでしょう。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">子どもが嫌がったときに相談できる相手がいるか</h3>
            <p>
              子どもが一時的に「行きたくない」「やりたくない」と感じることは珍しくありません。そのとき、先生や担当者に相談できる環境があるかどうかは、継続のしやすさに影響します。日本語で対応してくれる窓口があるサービスかどうかも、事前に確認しておきたい点です。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">進み具合を誰が把握するか</h3>
            <p>
              通学の教室では、先生が進み具合を管理してくれる場合が多くあります。オンラインでも担当者や学習管理の仕組みを持つサービスはありますが、そうでない場合は家庭が状況を確認する必要があります。子どもの成長を誰かが見てくれている、という安心感は続けやすさにつながります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">選ぶときの考え方</h2>
            <p>
              どちらが合っているかは、家庭の状況によって変わります。いくつかの軸から考えてみてください。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">家庭の予定と送迎の余裕</h3>
            <p>
              通学の教室に通うためには、決まった曜日に送迎できる環境が必要です。共働きの家庭や、きょうだいの行事が多い時期には制約になることがあります。時間の融通をきかせたい場合は、オンラインが選びやすいでしょう。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">子どもの性格</h3>
            <p>
              クラスで仲間と一緒に学ぶのが好きな子もいれば、1対1でじっくり取り組む方が集中できる子もいます。体験授業などを利用して、子どもの反応を確かめてみるのも選び方のひとつです。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">目的</h3>
            <p>
              日常会話の練習を重視するか、英語の検定試験に向けた準備をするか、学校の授業を補助する程度にするかによって、適した形式が変わることがあります。
            </p>
            <p className="mt-3">
              通学とオンラインを組み合わせて使っている家庭もあります。教室で基礎を学びながら、オンラインで練習の機会を増やすという使い方です。どちらかに決めなければならないわけではありません。
            </p>
            <p className="mt-3">
              オンライン英会話の選び方については、無料の相談や体験で確認できることをまとめた次の記事も参考にしてください。
            </p>
            <p className="mt-3">
              <Link href="/kosodate/english/guide/consultation/" className="text-slate-700 dark:text-slate-300 underline">
                オンライン英会話の無料相談で確認すること →
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">まとめ</h2>
            <p>
              通学の教室とオンライン英会話は、それぞれ異なる特徴を持っています。送迎の有無、時間の融通、学習の形式、親の関わり方などを比べながら、家庭の状況に合う方を検討してみてください。
            </p>
            <p className="mt-3">
              どちらを選ぶかに正解はなく、子どもの様子や家庭のスケジュールに合わせて判断するのが基本です。実際に体験してから決めることができるサービスも多いため、まず試してみる、という進め方も選択肢のひとつです。
            </p>
          </section>

        </div>

        <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <Link href="/kosodate/english/" className="text-sm hover:underline" style={{ color: "var(--text-dim)" }}>
            ← 子どもの英語トップへ戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
