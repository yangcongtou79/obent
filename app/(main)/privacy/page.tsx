import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

const LAST_UPDATED = "2024-09-01";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${site.name}のプライバシーポリシーです。Cookie、アクセス解析、広告ピクセルの利用について説明しています。`,
  openGraph: {
    title: `プライバシーポリシー | ${site.name}`,
    description: `${site.name}のプライバシーポリシーです。Cookie、アクセス解析、広告ピクセルの利用について説明しています。`,
    url: `${site.url}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav aria-label="パンくずリスト" className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/" className="hover:underline">ホーム</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-800 dark:text-zinc-200">プライバシーポリシー</li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
        プライバシーポリシー
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
        最終更新日：<time dateTime={LAST_UPDATED}>{LAST_UPDATED.replace(/-/g, "/")}</time>
      </p>

      <div className="space-y-10 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-prose text-sm">

        <section>
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            Cookieについて
          </h2>
          <p>
            当サイトでは、Cookie（クッキー）を使用する場合があります。Cookieとは、ウェブブラウザを通じてお使いの端末に保存される小さなデータファイルです。当サイトが直接収集・保存するCookieのほか、第三者サービス（アクセス解析、広告配信）が独自にCookieを使用する場合があります。
          </p>
          <p className="mt-3">
            お使いのブラウザ設定からCookieの受け入れを拒否することができますが、その場合、一部のサービスが正常に機能しなくなる場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            アクセス解析
          </h2>
          <p>
            当サイトでは、サイトの利用状況を把握するためにアクセス解析ツールを使用することがあります。これらのツールは、ページのアクセス数、滞在時間、参照元URLなどの統計情報を収集します。収集されるデータは匿名化されており、個人を特定するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            広告ピクセル（Meta Pixel）
          </h2>
          <p>
            当サイトの一部のページ（広告の着地点となるページ）では、Meta（旧Facebook）が提供するMeta Pixelを使用しています。Meta Pixelは、ウェブページへのアクセスや特定のアクション（ボタンのクリックなど）を計測するツールです。
          </p>
          <p className="mt-3">
            Meta Pixelによって収集される情報は、Metaのデータポリシーに基づいて処理されます。サイト本体（ニュースや記事のページ）ではMeta Pixelを読み込みません。
          </p>
          <p className="mt-3">
            MetaのデータポリシーについてはMetaの公式サイトでご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            第三者配信の広告
          </h2>
          <p>
            当サイトはアフィリエイト広告を利用しています。広告ネットワーク（A8.netなど）は、過去の閲覧履歴などにもとづいて広告を表示するためにCookieを使用する場合があります。これらの広告配信事業者が独自に収集するデータについては、各事業者のプライバシーポリシーをご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            オプトアウトの方法
          </h2>
          <p>
            広告配信のためのCookieの使用を無効にしたい場合は、以下の方法でオプトアウトできます。
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>ブラウザの設定からサードパーティCookieをブロックする</li>
            <li>Googleの広告設定（myaccount.google.com/data-and-privacy）で広告カスタマイズを無効にする</li>
            <li>Metaのアカウント設定からターゲット広告の設定を変更する</li>
            <li>一般社団法人デジタル広告品質認証機構（JICDAQ）のオプトアウトページを利用する</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            免責事項
          </h2>
          <p>
            当サイトのコンテンツは情報提供を目的としています。内容の正確性については注意を払っていますが、記事の情報を利用したことによる損害・損失について、運営者は責任を負いません。外部リンク先のコンテンツや、リンク先サービスの利用によって生じた問題についても、当サイトは関与しません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            お問い合わせ
          </h2>
          <p>
            プライバシーポリシーに関するお問い合わせは、以下の連絡先までご連絡ください。
          </p>
          <p className="mt-3">
            運営者：{site.owner}<br />
            メール：{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-slate-700 dark:text-slate-300 underline break-all"
            >
              {site.email}
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
