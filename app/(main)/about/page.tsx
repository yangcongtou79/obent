import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${site.name}の運営者情報、サイトの目的、アフィリエイト広告の利用について説明しています。`,
  openGraph: {
    title: `運営者情報 | ${site.name}`,
    description: `${site.name}の運営者情報、サイトの目的、アフィリエイト広告の利用について説明しています。`,
    url: `${site.url}/about/`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav aria-label="パンくずリスト" className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/" className="hover:underline">ホーム</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-800 dark:text-zinc-200">運営者情報</li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
        運営者情報
      </h1>

      <div className="space-y-10 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-prose">

        <section>
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            運営者
          </h2>
          <dl className="space-y-3 text-sm">
            <div className="flex gap-4">
              <dt className="w-24 flex-shrink-0 text-zinc-500 dark:text-zinc-400">運営者名</dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{site.owner}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 flex-shrink-0 text-zinc-500 dark:text-zinc-400">連絡先</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-slate-700 dark:text-slate-300 underline break-all"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 flex-shrink-0 text-zinc-500 dark:text-zinc-400">サイト名</dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{site.name}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 flex-shrink-0 text-zinc-500 dark:text-zinc-400">URL</dt>
              <dd className="text-zinc-700 dark:text-zinc-300 break-all">{site.url}</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            サイトの目的
          </h2>
          <p>
            {site.name}は、子育ての節目に記念写真を残したいと考えている家庭に向けて、フォトスタジオの選び方や料金の仕組みなどの情報を提供することを目的としています。
          </p>
          <p className="mt-3">
            記事の内容は、各種公式情報や一般的な業界慣行にもとづいて作成しています。情報の正確性には注意を払っていますが、スタジオごとの料金や条件は変更される場合があるため、最終的な確認は各スタジオの公式情報でお願いします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            広告・アフィリエイトについて
          </h2>
          <p>
            当サイトはアフィリエイト広告を利用しています。一部のページには広告リンクが含まれており、リンク先での申し込みや購入によって、当サイトが収益を得る場合があります。
          </p>
          <p className="mt-3">
            広告を含むページには「PR・広告」の表記を置いています。広告の有無にかかわらず、記事の内容はサイトの方針に従って作成しており、特定のサービスを根拠なく推薦・優遇することはありません。紹介する内容は公式情報にもとづいて記載しています。
          </p>
          <p className="mt-3">
            当サイトはA8.netを通じたアフィリエイトプログラムに参加しています。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            免責事項
          </h2>
          <p>
            当サイトの記事は情報提供を目的としており、個別の状況に対するアドバイスを行うものではありません。記事の内容を参考にした行動については、ご自身の判断と責任でお願いします。
          </p>
          <p className="mt-3">
            料金・サービス内容・予約方法などは予告なく変更される場合があります。最新の情報は、各スタジオの公式ウェブサイトまたは窓口でご確認ください。
          </p>
          <p className="mt-3">
            当サイトの情報の利用によって生じた損害・損失について、運営者は責任を負いません。
          </p>
        </section>

      </div>
    </div>
  );
}
