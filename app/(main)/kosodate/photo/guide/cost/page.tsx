import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getArticle } from "@/content/articles";

const article = getArticle("cost")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  openGraph: {
    title: `${article.title} | ${site.name}`,
    description: article.description,
    url: `${site.url}/kosodate/photo/guide/cost/`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  },
};

function formatDate(iso: string) {
  return iso.replace(/-/g, "/");
}

const checkItems = [
  {
    category: "料金の内訳",
    items: [
      "撮影料は何に含まれているか",
      "写真データの料金と枚数の上限",
      "アルバム・プリント商品の料金",
    ],
  },
  {
    category: "衣装・着付け",
    items: [
      "衣装レンタルの料金",
      "着付け・ヘアセットの料金",
      "持ち込み衣装への対応可否",
    ],
  },
  {
    category: "追加料金",
    items: [
      "土日祝・繁忙期の加算の有無",
      "きょうだいや保護者が写る場合の料金",
      "衣装の種類（洋装・和装など）による差",
    ],
  },
  {
    category: "支払い",
    items: [
      "支払いのタイミング（予約時・当日・受取時）",
      "使用できる支払い方法",
    ],
  },
];

export default function CostPage() {
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
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>スタジオの料金は撮影料・衣装・着付け・ヘアセット・写真商品に分かれている</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>「撮影料無料」でも写真の購入が別途必要になる場合がある</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>土日祝や繁忙期に割増料金が設定されている場合がある</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>きょうだいや保護者の衣装・着付けが追加料金になる場合がある</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>支払い方法は店舗によって異なり、現金が使えない場合もある</span></li>
          </ul>
        </div>

        <div className="prose-content space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-prose">

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 mt-2">料金の内訳を確認する</h2>
            <p>
              フォトスタジオの料金は、複数の項目に分かれているのが一般的です。広告やウェブサイトに表示されている金額が「すべて込み」なのか、「撮影料だけ」なのかは、スタジオや掲載媒体によって異なります。予約前に内訳を確認しておくことで、最終的な支払い額の見当がつけやすくなります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">撮影料</h3>
            <p>
              スタジオでの撮影そのものにかかる料金です。「撮影料」という項目が独立している場合と、パッケージ料金に含まれている場合があります。撮影時間や撮影カット数（撮影する枚数）によって料金が変わるスタジオもあります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">衣装・着付け・ヘアセット</h3>
            <p>
              衣装レンタル、着付け（着物・袴を着せること）、ヘアセットはそれぞれ別料金になる場合があります。3歳の七五三では、女の子の場合に「被布（ひふ）」と呼ばれる上着を羽織るスタイルが多く、7歳になると本格的な着物に帯を締めるスタイルになります。衣装の種類によって着付けの工程が変わるため、料金が異なることもあります。
            </p>
            <p className="mt-3">
              衣装を持ち込む場合は、着付けだけを依頼できるスタジオもあります。持ち込みに対応しているかどうかも確認しておくと選択肢が広がります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">写真データとプリント商品</h3>
            <p>
              撮影した写真のデータ（デジタルデータ）は、すべてを渡してもらえる場合と、選んだ枚数分のみの場合があります。アルバムや台紙、プリント、フォトブックなどの商品は別料金になることが多く、これが総額に大きく影響します。
            </p>
            <p className="mt-3">
              撮影後に写真を選ぶ時間が設けられており、その場で商品を選ぶ流れが一般的です。選んだ商品の種類と枚数によって最終的な料金が決まるため、撮影当日に金額が決まることが多いです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">「撮影料無料」の仕組み</h2>
            <p>
              「撮影料0円」「撮影料無料」と表示しているスタジオでも、写真データやアルバムなどの商品購入が前提になっている場合があります。商品の最低購入金額が設定されているケースもあるため、「撮影料が無料＝総額が安い」とは限りません。
            </p>
            <p className="mt-3">
              こうした料金体系を採用しているスタジオでは、写真商品の種類と料金が細かく設定されていることが多いです。事前にウェブサイトや資料で料金一覧を確認するか、問い合わせて確認するとよいでしょう。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">追加料金が発生するケース</h2>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">日程による加算</h3>
            <p>
              土日祝日や、七五三のシーズン（9〜11月）は、料金が加算される設定になっているスタジオがあります。平日料金と比較したい場合は、スタジオのウェブサイトや案内で料金表を確認してみてください。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">人数による加算</h3>
            <p>
              きょうだいと一緒に撮影する場合や、保護者も写真に入る場合は、追加料金が発生することがあります。きょうだいの衣装、着付けをスタジオで用意するかどうかでも変わります。何人でどのような形で撮影したいかを先に整理して問い合わせると、料金の見当がつきやすくなります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">支払い方法の確認</h2>
            <p>
              スタジオによって、使用できる支払い方法が異なります。現金のみに対応しているスタジオもあれば、クレジットカード・電子マネー・QR決済が使えるスタジオもあります。「当日現金払い」と思って来店したら現金が使えなかった、という状況を避けるために、予約前または来店前に確認しておくことをおすすめします。
            </p>
            <p className="mt-3">
              支払いのタイミングについても、「予約時に一部を前払い」「撮影当日に全額払い」「写真受取時に払い」など、スタジオによって異なります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">予約前に確認しておくとよい項目</h2>
            <p className="mb-4">
              スタジオに問い合わせたり資料を確認する前に、以下の項目をリストとして把握しておくと、確認漏れを防ぎやすくなります。
            </p>

            <div className="table-scroll">
              <table className="w-full text-sm border-collapse border border-zinc-200 dark:border-zinc-700">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800">
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300 w-1/3">
                      確認カテゴリ
                    </th>
                    <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">
                      確認するとよい項目
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {checkItems.map((section, i) => (
                    section.items.map((item, j) => (
                      <tr key={`${i}-${j}`} className="odd:bg-white even:bg-stone-50 dark:odd:bg-zinc-900 dark:even:bg-zinc-800">
                        {j === 0 && (
                          <td
                            rowSpan={section.items.length}
                            className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-700 dark:text-zinc-300 align-top"
                          >
                            {section.category}
                          </td>
                        )}
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                          {item}
                        </td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">まとめ</h2>
            <p>
              フォトスタジオの料金は、撮影料・衣装・着付け・ヘアセット・写真商品のそれぞれに分かれている場合が多く、それらの合計が総額になります。「撮影料無料」の場合でも、写真商品の購入が前提になっていることがあるため、表示されている金額だけで判断しないことが大切です。
            </p>
            <p className="mt-3">
              日程・人数・支払い方法によっても変わるため、スタジオへの問い合わせ前に確認したい項目を整理しておくと、やりとりがスムーズになります。
            </p>
          </section>

        </div>

        <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <Link href="/kosodate/photo/" className="text-sm hover:underline" style={{ color: "var(--text-dim)" }}>
            ← 記念写真トップへ戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
