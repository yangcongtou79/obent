import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getArticle } from "@/content/articles";

const article = getArticle("school")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  openGraph: {
    title: `${article.title} | ${site.name}`,
    description: article.description,
    url: `${site.url}/kosodate/english/guide/school/`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  },
};

function formatDate(iso: string) {
  return iso.replace(/-/g, "/");
}

export default function SchoolPage() {
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
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>1・2年生には、教科として定められた英語の授業はない</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>3・4年生は「外国語活動」として年間35単位時間（週1コマ程度）、聞くこと・話すことが中心</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>5・6年生は「外国語」という教科になり、年間70単位時間（週2コマ程度）で読み書きが加わる</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>小学校で扱う語彙は600〜700語程度とされている</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>2020年度から全面実施の学習指導要領に基づく内容</span></li>
          </ul>
        </div>

        <div className="prose-content space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-prose">

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 mt-2">1・2年生の時期</h2>
            <p>
              1・2年生の段階では、学習指導要領に定められた英語の授業はありません。学校によっては自由裁量の時間に英語の歌やあいさつなどに触れる活動を取り入れているところもありますが、内容や頻度は学校によって大きく異なります。
            </p>
            <p className="mt-3">
              この時期を「英語が本格的に始まる前の時期」として捉えると分かりやすいでしょう。英語の音やリズムに日常的に触れる機会があると、3年生から始まる外国語活動にとけ込みやすいと言われることはありますが、特別な準備が必ずしも必要というわけではありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">3・4年生：外国語活動</h2>
            <p>
              3年生になると、英語は「外国語活動」として正式に時間割に組み込まれます。年間の授業時数は35単位時間で、週1コマ程度の割合です。
            </p>
            <p className="mt-3">
              外国語活動のおもな目標は、英語の音やリズムに慣れること、そして簡単な表現を聞いたり話したりすることです。学習の柱は「聞くこと」と「話すこと」で、読むこと・書くことは活動の中で補助的に扱われる程度にとどまります。
            </p>
            <p className="mt-3">
              授業は担任の先生とALT（外国語指導助手）が一緒に進めることが多く、歌やゲームを取り入れた活動形式が一般的です。この時期は数値での成績評価がなく、観点別の記録で記載されます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">5・6年生：教科としての外国語</h2>
            <p>
              5年生からは「外国語活動」から「外国語」という正式な教科に変わります。年間の授業時数は70単位時間で、週2コマ程度になります。
            </p>
            <p className="mt-3">
              3・4年生で培った「聞くこと・話すこと」の力に加えて、「読むこと」と「書くこと」が段階的に加わります。アルファベットの読み書き、簡単な語句や文の読み書きが始まり、学習の幅が広がります。
            </p>
            <p className="mt-3">
              5・6年生からは教科として数値での成績評価が行われ、通知表に記載されるようになります。小学校で扱う語彙は600〜700語程度とされており、これは中学以降の学習の土台となるものです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">学年別の一覧</h2>
            <div className="table-scroll">
              <table className="w-full text-sm border-collapse border border-zinc-200 dark:border-zinc-700">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800">
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300 whitespace-nowrap">学年</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">位置づけ</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300 whitespace-nowrap">年間の授業時数</th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">3・4年生</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">外国語活動</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">35単位時間（週1コマ程度）</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">「聞くこと」「話すこと」が中心</td>
                  </tr>
                  <tr className="bg-stone-50 dark:bg-zinc-800">
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">5・6年生</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">外国語（教科）</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">70単位時間（週2コマ程度）</td>
                    <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">「読むこと」「書くこと」が段階的に加わる</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
              ※ 2020年度から全面実施の小学校学習指導要領による
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">家庭で考えておくこと</h2>
            <p>
              学校での英語学習について、家庭としてできる関わり方を整理します。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">英語の音に触れる機会をつくる</h3>
            <p>
              外国語活動では「聞くこと・話すこと」が学習の中心です。英語の歌や絵本、子ども向けの動画などを通じて音に親しむ機会をつくることは、学校での活動と自然につながることがあります。特別なプログラムが必要なわけではなく、家庭で楽しめる範囲で取り入れるのが続けやすいでしょう。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">子どもの関心に合わせる</h3>
            <p>
              英語に興味を持つきっかけは、子どもによってさまざまです。好きな音楽やゲームを通じて英語に接する機会が生まれる場合もあります。「やってみたい」という気持ちを大切にしながら、無理なく進めることが長続きにつながります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">先取りを無理に進めない</h3>
            <p>
              学校のカリキュラムには段階があります。3・4年生の外国語活動は「音やリズムに慣れること」を目標にしており、先に文字の読み書きを急いで進める必要はありません。学校での進度とのバランスを見ながら、子どもの様子に合わせて関わることが基本です。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">5・6年生から始まる読み書きへの移行</h3>
            <p>
              5年生になると、読むこと・書くことへのステップが加わります。この変化が子どもによっては負担に感じる場合もあります。3・4年生のうちからアルファベットに少し触れておくと、スムーズに移行しやすいことがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">学校の外で学ぶ場合の選択肢</h2>
            <p>
              学校での学習に加えて、家庭学習や習い事として英語に取り組む選択肢もあります。代表的なものとして、通学の英語教室、オンライン英会話、市販の教材などがあります。どれが合うかは、子どもの性格や家庭の状況によって異なります。
            </p>
            <p className="mt-3">
              通学の教室とオンラインでは、送迎の有無、時間の融通のきき方、学習の形式などに違いがあります。詳しくは次の記事で整理しています。
            </p>
            <p className="mt-3">
              <Link href="/kosodate/english/guide/compare/" className="text-slate-700 dark:text-slate-300 underline">
                通学の教室とオンライン英会話の違い →
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">まとめ</h2>
            <p>
              小学校の英語は、2020年度から全面実施の学習指導要領により、3年生から正式に始まります。3・4年生は「外国語活動」として聞くこと・話すことを中心に学び、5・6年生からは「外国語」という教科になり、読むこと・書くことも加わります。
            </p>
            <p className="mt-3">
              家庭での関わり方としては、子どもの関心や様子に合わせながら、無理のない範囲でサポートするのが基本です。学校でのカリキュラムを把握した上で、必要なら学校外での取り組みを検討してみてください。
            </p>
          </section>

          <section className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              参考：
              <a
                href="https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/syo/"
                className="underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                文部科学省 小学校学習指導要領
              </a>
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
