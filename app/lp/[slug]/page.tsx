import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lpItems, type LpBodyBlock } from "@/content/lp";
import { site } from "@/lib/site";
import PrLabel from "@/components/PrLabel";
import MetaPixel from "@/components/MetaPixel";
import CtaButton from "@/components/CtaButton";

export const dynamicParams = false;

// Only generate pages for LPs that have an affiliate link
export async function generateStaticParams() {
  return lpItems
    .filter((item) => item.affiliateUrl !== "")
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = lpItems.find((l) => l.slug === slug && l.affiliateUrl !== "");
  if (!item) return {};

  return {
    title: item.title,
    description: item.lead,
    robots: { index: false, follow: false },
    openGraph: {
      title: item.title,
      description: item.lead,
      url: `${site.url}/lp/${slug}/`,
    },
  };
}

function BodyBlock({ block, index }: { block: LpBodyBlock; index: number }) {
  if (block.type === "ul") {
    return (
      <ul
        key={index}
        className="list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400"
      >
        {block.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p
      key={index}
      className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
    >
      {block.text}
    </p>
  );
}

function formatInfoDate(iso: string) {
  const parts = iso.split("-");
  return `${parts[0]}年${parts[1]}月${parts[2]}日`;
}

export default async function LpPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = lpItems.find((l) => l.slug === slug && l.affiliateUrl !== "");
  if (!item) notFound();

  const hasTableOptions = item.options.some((o) => o.when !== undefined);

  return (
    <>
      <MetaPixel />
      {/* A8.net 計測用画像（設定されている場合のみ出力） */}
      {item.measurementImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.measurementImageUrl}
          width={1}
          height={1}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        />
      )}

      <div className="min-h-screen bg-stone-50 dark:bg-zinc-950">
        {/* Header: PR表記はスクロールなしで見える位置に固定 */}
        <header className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="max-w-2xl mx-auto">
            <PrLabel />
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4">
          {/* ファーストビュー: 見出し + 導入 + CTA 1 */}
          <section className="pt-6 pb-7">
            <h1 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-3 leading-snug">
              {item.title}
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
              {item.lead}
            </p>
            <div className="flex justify-center">
              <CtaButton href={item.affiliateUrl} label={item.ctaLabel} />
            </div>
          </section>

          {/* 選択肢セクション */}
          {item.options.length > 0 && (
            <section className="py-8 border-t border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
                {item.optionsHeading ?? "選択肢"}
              </h2>
              {item.optionsIntro && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.optionsIntro}
                </p>
              )}

              {hasTableOptions ? (
                /* 表レイアウト（when フィールドがある場合） */
                <div className="table-scroll">
                  <table className="w-full text-sm border-collapse border border-zinc-200 dark:border-zinc-700">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800">
                        <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                          選択肢
                        </th>
                        <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">
                          内容
                        </th>
                        <th className="text-left p-3 border border-zinc-200 dark:border-zinc-700 font-semibold text-zinc-700 dark:text-zinc-300">
                          選ぶ場面
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.options.map((opt, i) => (
                        <tr
                          key={i}
                          className={
                            opt.highlighted
                              ? "bg-stone-100 dark:bg-zinc-800"
                              : "bg-white dark:bg-zinc-900"
                          }
                        >
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium text-zinc-800 dark:text-zinc-100 align-top">
                            {opt.title}
                          </td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 align-top">
                            {opt.description}
                          </td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 align-top">
                            {opt.when}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                /* カードレイアウト（when フィールドがない場合） */
                <div className="space-y-4">
                  {item.options.map((opt, i) => (
                    <div
                      key={i}
                      className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900"
                    >
                      <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-1">
                        {opt.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* 料金セクション */}
          {item.pricingHeading && (
            <section className="py-8 border-t border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
                {item.pricingHeading}
              </h2>

              {/* 料金構成の図（インラインSVG） */}
              <div className="my-5 py-4 px-2 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <svg
                  viewBox="0 0 280 220"
                  className="w-full max-w-[260px] mx-auto block"
                  aria-label="料金構成の図：プラン料金にシーズン料金と土日祝日料金が加算される"
                  role="img"
                >
                  {/* プラン料金 */}
                  <rect
                    x="40" y="14" width="200" height="40" rx="4"
                    fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35"
                  />
                  <text x="140" y="38" textAnchor="middle" fontSize="13" fill="currentColor">
                    プラン料金
                  </text>

                  {/* ＋ */}
                  <text x="140" y="70" textAnchor="middle" fontSize="20" fill="currentColor" opacity="0.4">
                    ＋
                  </text>

                  {/* シーズン料金 */}
                  <rect
                    x="40" y="80" width="200" height="40" rx="4"
                    fill="none" stroke="#f59e0b" strokeWidth="1.5"
                  />
                  <text x="140" y="104" textAnchor="middle" fontSize="12" fill="currentColor">
                    シーズン料金（9〜12月）
                  </text>

                  {/* ＋ */}
                  <text x="140" y="138" textAnchor="middle" fontSize="20" fill="currentColor" opacity="0.4">
                    ＋
                  </text>

                  {/* 土日祝日料金 */}
                  <rect
                    x="40" y="148" width="200" height="40" rx="4"
                    fill="none" stroke="#f59e0b" strokeWidth="1.5"
                  />
                  <text x="140" y="172" textAnchor="middle" fontSize="12" fill="currentColor">
                    土日祝日料金（土日祝）
                  </text>

                  {/* 注記 */}
                  <text x="140" y="210" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">
                    9〜12月の土日祝は両方加算
                  </text>
                </svg>
              </div>

              {/* 本文 */}
              {item.pricingBody && (
                <div className="space-y-3">
                  {item.pricingBody.map((block, i) => (
                    <BodyBlock key={i} block={block} index={i} />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* CTA 2 */}
          <section className="py-8 border-t border-zinc-200 dark:border-zinc-700 text-center">
            <CtaButton href={item.affiliateUrl} label={item.ctaLabel} />
          </section>

          {/* 予約の流れ */}
          {item.steps.length > 0 && (
            <section className="py-8 border-t border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-5">
                {item.stepsHeading ?? "申込の流れ"}
              </h2>
              <ol className="space-y-4">
                {item.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="font-semibold text-zinc-800 dark:text-zinc-100 text-sm">
                        {step.title}
                      </p>
                      {step.description && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Q&A */}
          {item.faqs.length > 0 && (
            <section className="py-8 border-t border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-5">
                {item.faqsHeading ?? "よくある質問"}
              </h2>
              <dl className="space-y-5">
                {item.faqs.map((faq, i) => (
                  <div key={i}>
                    <dt className="font-semibold text-zinc-800 dark:text-zinc-100 text-sm mb-1">
                      Q. {faq.question}
                    </dt>
                    <dd className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-4 border-l-2 border-zinc-200 dark:border-zinc-700">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* CTA 3 */}
          <section className="py-8 border-t border-zinc-200 dark:border-zinc-700 text-center">
            <CtaButton href={item.affiliateUrl} label={item.ctaLabel} />
          </section>

          {/* 情報確認日と注記 */}
          {item.infoDate && (
            <p className="pb-8 text-xs text-zinc-400 dark:text-zinc-500 text-center leading-relaxed">
              このページの内容は、{formatInfoDate(item.infoDate)}時点の公式サイトの情報にもとづいています。料金、空き状況、サービスの内容は変わることがあります。最新の情報は公式サイトでご確認ください。
            </p>
          )}
        </main>

        {/* LPフッター */}
        <footer className="border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
              本ページはアフィリエイト広告を利用しています。
            </p>
            <nav>
              <ul className="flex flex-wrap gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                <li>
                  <Link href="/about/" className="hover:underline">
                    運営者情報
                  </Link>
                </li>
                <li>
                  <Link href="/privacy/" className="hover:underline">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </nav>
            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-600">
              &copy; {new Date().getFullYear()} {site.owner}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
