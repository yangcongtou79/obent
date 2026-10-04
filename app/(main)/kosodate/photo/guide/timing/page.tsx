import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getArticle } from "@/content/articles";

const article = getArticle("timing")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  openGraph: {
    title: `${article.title} | ${site.name}`,
    description: article.description,
    url: `${site.url}/kosodate/photo/guide/timing/`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  },
};

function formatDate(iso: string) {
  return iso.replace(/-/g, "/");
}

export default function TimingPage() {
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
        <div className="mb-8 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg">
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">この記事のポイント</p>
          <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>撮影タイミングは前撮り・当日撮影・後撮りの3通り</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>前撮りは春から秋の初め、後撮りは11月中旬以降が比較的余裕がある時期</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>秋の土日祝は予約が集中しやすい</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>一部の店舗では土日のWEB予約を受け付けていない</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0">·</span><span>予約前に、写真に写る範囲と当日の段取りを家族で決めておくとスムーズ</span></li>
          </ul>
        </div>

        <div className="prose-content space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-prose">

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 mt-2">七五三の基本</h2>
            <p>
              七五三は、3歳・5歳・7歳の節目に子どもの成長を祝う日本の伝統行事です。由来は諸説ありますが、現在は11月15日前後に神社や寺院に参拝するのが一般的とされています。ただし、11月の土日祝は混みやすいため、10月や12月に日程をずらす家庭も増えています。参拝と記念写真の日程は、必ずしも同じ日にしなくても構いません。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">参拝する年齢と慣習</h3>
            <p>
              地域や家庭の慣習によって異なりますが、一般的には次のように行われています。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
              <li><span className="font-medium">3歳</span>：男女とも（地域によっては女の子のみの場合もあります）</li>
              <li><span className="font-medium">5歳</span>：男の子</li>
              <li><span className="font-medium">7歳</span>：女の子</li>
            </ul>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              数え年で行う家庭と満年齢で行う家庭があり、どちらが正式という決まりはありません。年齢の数え方が違うと1〜2歳の差が出るため、祖父母や家族との確認がスムーズな準備につながります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">日程を前後にずらす家庭が増えている理由</h3>
            <p>
              11月15日はもともと吉日とされてきましたが、現在は働く家庭が多く、平日に合わせることが難しい場合があります。スタジオや神社も11月の土日祝は特に混み合うため、参拝そのものを10月や12月に移す家庭も珍しくなくなっています。「いつ行うか」よりも「子どもが落ち着いて参加できるか」「家族が揃う日はいつか」を優先する家庭が増えているようです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">撮影タイミングの3つの選択肢</h2>
            <p>
              記念写真を撮るタイミングには、参拝の前・当日・後の3つの選択肢があります。それぞれに特徴があり、家族の都合やお子さんの状況によって選ぶのが基本です。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">前撮り（参拝より前に撮影する）</h3>
            <p>
              参拝の前、おおむね春から秋の初め（4〜9月ごろ）に撮影します。秋の繁忙期を外れるため、希望の日時を取りやすく、スタジオの混雑が落ち着いている時期です。撮影当日の時間的なゆとりもできやすいでしょう。
            </p>
            <p className="mt-3">
              スタジオによっては、前撮りで使用した衣装を後日の参拝にもレンタルできる仕組みを用意している場合があります。参拝当日は着付けとお参りに集中できるため、撮影の疲れを持ち越さずに済むという面もあります。
            </p>
            <p className="mt-3">
              夏の前撮りは衣装の下に汗をかきやすいため、特に幼いお子さんの場合は涼しい時期を選ぶと、より落ち着いて撮影できることがあります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">当日撮影（参拝と同日に撮影する）</h3>
            <p>
              参拝と撮影を同じ日にまとめて行うスタイルです。外出の機会が一度で済む反面、着替えや移動をともなうため、3歳前後の小さなお子さんには疲れが出やすい場合があります。
            </p>
            <p className="mt-3">
              当日の流れは「スタジオで着付け→撮影→参拝→スタジオに戻って着替え」という形が多く、移動時間も含めると半日以上になることがあります。事前にスタジオへ当日の段取りを確認しておくと、スムーズに動きやすくなります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">後撮り（参拝後に撮影する）</h3>
            <p>
              参拝を終えてから撮影する方法です。11月中旬以降の繁忙期を外れた時期であれば、予約の選択肢が広がりやすく、スケジュールの調整もしやすくなります。参拝を先に済ませているため、子どもが着物や袴に慣れた状態で撮影に臨める場合もあります。
            </p>
            <p className="mt-3">
              12月や年明けは七五三シーズンを外れているため、スタジオによっては料金設定が変わることがあります。事前に確認しておくと安心です。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">予約の時期と曜日の傾向</h2>
            <p>
              七五三の記念写真の予約は、9月から11月に集中する傾向があります。この時期はフォトスタジオ全体が忙しくなり、希望の日時が取りにくくなる場合があります。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">混みやすい時期と曜日</h3>
            <p>
              特に混みやすいのは、10月から11月の土日祝です。七五三のお参りを土日に合わせる家庭が多いため、撮影の予約もこの時期に集中します。早めに動き始めると、希望の日時の選択肢が広がります。
            </p>
            <p className="mt-3">
              一方、平日は比較的予約が入りやすく、撮影当日のスタジオの混雑も少ない場合があります。保育園や幼稚園をお休みできる日があれば、平日を検討してみるのもひとつの選択肢です。
            </p>

            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-5 mb-3">土日のWEB予約について</h3>
            <p>
              スタジオによっては、土日・祝日の撮影予約をWEBで受け付けず、電話のみで対応している場合があります。「平日はWEB予約可、土日・祝日は電話受付」と案内しているスタジオもあるため、利用を検討しているスタジオのウェブサイトで予約方法を事前に確認するとよいでしょう。
            </p>
            <p className="mt-3">
              電話受付のみの場合、受付時間が限られていることもあります。問い合わせ窓口の営業時間も合わせて確認しておくと、スムーズに動けます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">予約前に家族で決めておくこと</h2>
            <p>
              撮影の予約を入れる前に、以下の点を家族で確認しておくと、その後の手続きがスムーズになります。スタジオへの問い合わせ時にも、こうした情報が手元にあるとやりとりが進めやすくなります。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-sm">
              <li><span className="font-medium">写真に写る人数と構成：</span>子どもだけか、きょうだいも一緒か、保護者も写るか</li>
              <li><span className="font-medium">参拝と撮影の関係：</span>同じ日にするか、別々の日に行うか</li>
              <li><span className="font-medium">衣装の準備：</span>スタジオでレンタルするか、手持ちのものを持ち込むか</li>
              <li><span className="font-medium">希望する曜日：</span>土日中心か、平日も対応できるか</li>
              <li><span className="font-medium">大まかな時期：</span>前撮り・当日・後撮りのどれにするか</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">まとめ</h2>
            <p>
              七五三の記念写真を撮るタイミングには、前撮り・当日撮影・後撮りの3つの選択肢があります。それぞれ特徴が異なるため、家族の都合やお子さんの状況に応じて選ぶことが大切です。
            </p>
            <p className="mt-3">
              予約は早めに動き始めると希望の日時が確保しやすくなります。スタジオごとに予約方法（WEB受付か電話か）も異なるため、まずは利用したいスタジオのウェブサイトで確認するところから始めるとよいでしょう。
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-700">
          <Link href="/kosodate/photo/" className="text-sm text-zinc-500 dark:text-zinc-400 hover:underline">
            ← 記念写真トップへ戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
