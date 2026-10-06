import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getArticle } from "@/content/articles";
import { lpItems } from "@/content/lp";

const article = getArticle("consultation")!;

const publishedLps = lpItems.filter(
  (l) => l.theme === "english" && l.affiliateUrl !== "" && l.articleLinkLabel
);

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  openGraph: {
    title: `${article.title} | ${site.name}`,
    description: article.description,
    url: `${site.url}/kosodate/english/guide/consultation/`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  },
};

function formatDate(iso: string) {
  return iso.replace(/-/g, "/");
}

export default function ConsultationPage() {
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
        <div className="mb-8 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg">
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">この記事のポイント</p>
          <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>無料相談や体験では、レベルの確認、進め方の説明、料金の案内などができる（内容はサービスによる）</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>確認したい項目をリストアップしておくと、当日の相談がスムーズに進む</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>目的・頻度・予算など、家庭側でも事前に整理しておくことがある</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>連絡を受けやすい時間帯を伝えておくと、日程が決まりやすい</span></li>
          </ul>
        </div>

        <div className="prose-content space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-prose">

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 mt-2">無料相談や体験でできること</h2>
            <p>
              オンライン英会話には、入会の前に無料の相談や体験の機会を設けているサービスがあります。サービスによって内容は異なりますが、一般的に次のようなことができます。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-sm">
              <li><span className="font-medium">子どものレベルの確認：</span>簡単な会話や問題を通じて、今の英語力を把握する</li>
              <li><span className="font-medium">学習の進め方の説明：</span>授業の形式や教材、目安の進度などの説明を受ける</li>
              <li><span className="font-medium">料金の案内：</span>月額や回数ごとの料金体系の説明を受ける</li>
              <li><span className="font-medium">体験レッスン：</span>実際のレッスンを短時間体験する</li>
            </ul>
            <p className="mt-3">
              ただし、これらがすべて無料の枠に含まれるかどうかはサービスによります。何が体験できるかは申し込みの前に確認しておくとよいでしょう。また、相談後に必ず入会しなければならないわけではないかどうかも、この段階で確認できます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">相談で確認する項目</h2>
            <p className="mb-4">
              事前に確認したい項目を整理しておくと、限られた相談時間を有効に使えます。
            </p>
            <div className="table-scroll">
              <table className="w-full text-sm border-collapse border border-zinc-200 dark:border-zinc-700">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800">
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">確認する項目</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">確認の目的</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">レッスンの予約は誰がするか（親か、スクール側か）</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">家庭の管理負担を把握するため</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">学習の計画と進み具合は誰が見るか</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">家庭のサポートが必要な範囲を知るため</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">講師は選べるか、固定か、変更できるか</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">子どもとの相性を調整できるかを知るため</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">曜日や時間を変更できるか、休んだときの扱い</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">予定が変わったときの対応を確認するため</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">困ったときに日本語で相談できる窓口があるか</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">問題が起きたときに相談できる体制を知るため</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">料金の決まり方（月額固定か、回数制か。教材費などの追加があるか）</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">毎月の費用の目安を把握するため</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">休会と退会の条件</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">やめたい、または休みたいときに動けるかを確認するため</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">相談や体験のあとに入会が必須かどうか</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">検討の時間を確保できるかを確認するため</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">相談の前に家庭で決めておくこと</h2>
            <p>
              無料相談では、家庭側からも情報を伝える場面があります。次のことを事前に整理しておくと、担当者との話が進みやすくなります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">目的の確認</h3>
            <p>
              会話力を高めることを目的にするのか、英語の検定試験に向けた準備をするのか、学校の授業を補助する程度にするのかによって、適したサービスや講師のタイプが変わります。目的が曖昧なまま相談に行くより、方向性を決めておくと担当者からの提案も比べやすくなります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">週に何回、どの時間帯なら続けられるか</h3>
            <p>
              続けられる頻度と時間帯を事前に考えておくと、スケジュールの相談がスムーズになります。「平日の夜か、休日か」「週に何コマまでなら無理なく続けられるか」など、家庭の都合に合った時間帯を整理しておきましょう。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">これまでの英語の経験</h3>
            <p>
              学校の外で英語を学んだことがあるか、どのような方法で取り組んでいたか、子どもが英語に対してどんな印象を持っているかを伝えると、担当者が対応を考えやすくなります。「以前試したけれど続かなかった」という場合も、その理由を共有することで、今回の選び方の参考になります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">予算の上限</h3>
            <p>
              サービスによって月々の料金の幅があります。入会前に月々の予算の目安を決めておくと、説明を受けながら判断しやすくなります。教材費やシステム利用料など、月額以外にかかる費用も確認しておきましょう。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">申し込むときのこと</h2>
            <p>
              無料相談は、フォームや電話で日程を予約する形が多くあります。申し込む際に、連絡を受けやすい曜日と時間帯を伝えておくと、日程の調整がスムーズになります。夕方以降や週末が都合よい場合は、その旨を一言添えておくとよいでしょう。
            </p>
            <p className="mt-3">
              ひとつのサービスだけでなく、複数のサービスで相談を受けて比べることも選択肢のひとつです。相談や体験を経てから検討する時間を取ることができるかどうかも、事前に確認しておくと安心です。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">まとめ</h2>
            <p>
              無料相談や体験は、サービスの中身を把握し、子どもとの相性を確認するよい機会です。当日スムーズに話を進めるために、確認したい項目と家庭側の状況を事前に整理しておくのが基本です。
            </p>
            <p className="mt-3">
              サービスを選ぶ際は、スペックだけでなく、困ったときに相談できる体制があるかどうかや、管理の負担が家庭に集中しすぎないかどうかも、長く続けるうえで大切な判断材料になります。
            </p>
          </section>

        </div>

        {/* LP導線（公開中の英語LPだけを表示） */}
        {publishedLps.length > 0 && (
          <div className="mt-10 p-6 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              オンライン英会話の予約はこちらから確認できます。
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

        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-700">
          <Link href="/kosodate/english/" className="text-sm text-zinc-500 dark:text-zinc-400 hover:underline">
            ← 子どもの英語トップへ戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
