import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lpItems, type LpBodyBlock, type LpMenuMapRow } from "@/content/lp";
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
        className="list-disc list-inside space-y-1 text-sm"
        style={{ color: "var(--text-dim)" }}
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
      className="text-sm leading-relaxed"
      style={{ color: "var(--text-dim)" }}
    >
      {block.text}
    </p>
  );
}

function formatInfoDate(iso: string) {
  const parts = iso.split("-");
  return `${parts[0]}年${parts[1]}月${parts[2]}日`;
}

function MenuMapSvg({ rows }: { rows: LpMenuMapRow[] }) {
  const GAP = 14;
  const BASE_H = 54;
  const EXTRA_H = 12;
  const LEFT_X = 4;
  const LEFT_W = 182;
  const ARROW_X = 193;
  const RIGHT_X = 202;
  const RIGHT_W = 188;
  const FONT = 12;
  const LINE_H = 17;

  let y = GAP;
  const rowPositions = rows.map((row) => {
    const wantLines = row.want.split("\n");
    const menuLines = row.menu.split("\n");
    const maxLines = Math.max(wantLines.length, menuLines.length);
    const h = maxLines > 1 ? BASE_H + EXTRA_H : BASE_H;
    const pos = { y, h, wantLines, menuLines };
    y += h + GAP;
    return pos;
  });
  const totalH = y;
  const totalW = RIGHT_X + RIGHT_W + 6;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="w-full max-w-[400px] mx-auto block"
      role="img"
      aria-label="こうしたいと選ぶメニューの対応"
    >
      {rowPositions.map((pos, i) => {
        const mid = pos.y + pos.h / 2;
        const wantStartY =
          pos.wantLines.length === 1
            ? mid
            : mid - (LINE_H * (pos.wantLines.length - 1)) / 2;
        const menuStartY =
          pos.menuLines.length === 1
            ? mid
            : mid - (LINE_H * (pos.menuLines.length - 1)) / 2;

        return (
          <g key={i}>
            <rect
              x={LEFT_X} y={pos.y} width={LEFT_W} height={pos.h} rx="2"
              fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.35"
            />
            {pos.wantLines.map((line, li) => (
              <text
                key={li}
                x={LEFT_X + LEFT_W / 2}
                y={wantStartY + li * LINE_H}
                textAnchor="middle"
                fontSize={FONT}
                fill="currentColor"
                dominantBaseline="central"
              >
                {line}
              </text>
            ))}
            <text
              x={ARROW_X} y={mid}
              textAnchor="middle" fontSize="18" fill="currentColor" opacity="0.4"
              dominantBaseline="central"
            >
              →
            </text>
            <rect
              x={RIGHT_X} y={pos.y} width={RIGHT_W} height={pos.h} rx="2"
              fill="none" stroke="var(--accent)" strokeWidth="1.5"
            />
            {pos.menuLines.map((line, li) => (
              <text
                key={li}
                x={RIGHT_X + RIGHT_W / 2}
                y={menuStartY + li * LINE_H}
                textAnchor="middle"
                fontSize={FONT}
                fill="currentColor"
                dominantBaseline="central"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
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

      <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
        {/* Header */}
        <header
          className="px-4 py-3"
          style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}
        >
          <div className="max-w-2xl mx-auto">
            <PrLabel />
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4">
          {/* ファーストビュー */}
          <section className="pt-6 pb-7">
            <h1 className="text-xl font-bold mb-3 leading-snug" style={{ color: "var(--text-on)", letterSpacing: "0.02em" }}>
              {item.title}
            </h1>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-dim)" }}>
              {item.lead}
            </p>
            <div className="flex justify-center">
              <CtaButton href={item.affiliateUrl} label={item.ctaLabel} />
            </div>
          </section>

          {/* 選択肢セクション */}
          {item.options.length > 0 && (
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-on)" }}>
                {item.optionsHeading ?? "選択肢"}
              </h2>
              {item.optionsIntro && (
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-dim)" }}>
                  {item.optionsIntro}
                </p>
              )}

              {item.menuMap && item.menuMap.length > 0 && (
                <div
                  className="my-5 py-4 px-2"
                  style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                  <MenuMapSvg rows={item.menuMap} />
                </div>
              )}

              {item.optionsAsTable ? (
                <div className="table-scroll">
                  <table className="w-full text-sm border-collapse" style={{ border: "1px solid var(--border)" }}>
                    <thead>
                      <tr>
                        <th className="text-left p-3 font-semibold whitespace-nowrap" style={{ border: "1px solid var(--border)", color: "var(--text-on)" }}>
                          メニュー
                        </th>
                        <th className="text-left p-3 font-semibold" style={{ border: "1px solid var(--border)", color: "var(--text-on)" }}>
                          内容
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.options.map((opt, i) => (
                        <tr key={i}>
                          <td className="p-3 font-medium align-top whitespace-nowrap" style={{ border: "1px solid var(--border)", color: "var(--text-on)", backgroundColor: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-base)" }}>
                            {opt.title}
                          </td>
                          <td className="p-3 align-top" style={{ border: "1px solid var(--border)", color: "var(--text-dim)", backgroundColor: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-base)" }}>
                            {opt.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : hasTableOptions ? (
                <div className="table-scroll">
                  <table className="w-full text-sm border-collapse" style={{ border: "1px solid var(--border)" }}>
                    <thead>
                      <tr>
                        <th className="text-left p-3 font-semibold whitespace-nowrap" style={{ border: "1px solid var(--border)", color: "var(--text-on)" }}>
                          選択肢
                        </th>
                        <th className="text-left p-3 font-semibold" style={{ border: "1px solid var(--border)", color: "var(--text-on)" }}>
                          内容
                        </th>
                        <th className="text-left p-3 font-semibold" style={{ border: "1px solid var(--border)", color: "var(--text-on)" }}>
                          選ぶ場面
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.options.map((opt, i) => (
                        <tr key={i}>
                          <td className="p-3 font-medium align-top" style={{ border: "1px solid var(--border)", color: "var(--text-on)", backgroundColor: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-base)" }}>
                            {opt.title}
                          </td>
                          <td className="p-3 align-top" style={{ border: "1px solid var(--border)", color: "var(--text-dim)", backgroundColor: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-base)" }}>
                            {opt.description}
                          </td>
                          <td className="p-3 align-top" style={{ border: "1px solid var(--border)", color: "var(--text-dim)", backgroundColor: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-base)" }}>
                            {opt.when}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="space-y-3">
                  {item.options.map((opt, i) => (
                    <div
                      key={i}
                      className="p-4"
                      style={{
                        backgroundColor: "var(--bg-surface)",
                        borderTop: "1px solid var(--border)",
                        borderRight: "1px solid var(--border)",
                        borderBottom: "1px solid var(--border)",
                        borderLeft: "3px solid var(--border)",
                      }}
                    >
                      <h3 className="font-semibold mb-1" style={{ color: "var(--text-on)" }}>
                        {opt.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                        {opt.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {item.optionsNote && (
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {item.optionsNote}
                </p>
              )}
            </section>
          )}

          {/* 料金セクション */}
          {item.pricingHeading && (
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-on)" }}>
                {item.pricingHeading}
              </h2>

              <div
                className="my-5 py-4 px-2"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <svg
                  viewBox="0 0 280 220"
                  className="w-full max-w-[260px] mx-auto block"
                  aria-label="料金構成の図：プラン料金にシーズン料金と土日祝日料金が加算される"
                  role="img"
                >
                  <rect
                    x="40" y="14" width="200" height="40" rx="2"
                    fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"
                  />
                  <text x="140" y="38" textAnchor="middle" fontSize="13" fill="currentColor">
                    プラン料金
                  </text>

                  <text x="140" y="70" textAnchor="middle" fontSize="20" fill="currentColor" opacity="0.35">
                    ＋
                  </text>

                  <rect
                    x="40" y="80" width="200" height="40" rx="2"
                    fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  />
                  <text x="140" y="104" textAnchor="middle" fontSize="12" fill="currentColor">
                    シーズン料金（9〜12月）
                  </text>

                  <text x="140" y="138" textAnchor="middle" fontSize="20" fill="currentColor" opacity="0.35">
                    ＋
                  </text>

                  <rect
                    x="40" y="148" width="200" height="40" rx="2"
                    fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  />
                  <text x="140" y="172" textAnchor="middle" fontSize="12" fill="currentColor">
                    土日祝日料金（土日祝）
                  </text>

                  <text x="140" y="210" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.45">
                    9〜12月の土日祝は両方加算
                  </text>
                </svg>
              </div>

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
          <section className="py-8 text-center" style={{ borderTop: "1px solid var(--border)" }}>
            <CtaButton href={item.affiliateUrl} label={item.ctaLabel} />
          </section>

          {/* 予約の流れ */}
          {item.steps.length > 0 && (
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-5" style={{ color: "var(--text-on)" }}>
                {item.stepsHeading ?? "申込の流れ"}
              </h2>
              <ol className="space-y-4">
                {item.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="flex-shrink-0 w-7 h-7 text-sm font-bold flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--bg-base)",
                        border: "1px solid var(--border)",
                        color: "var(--text-on)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="font-semibold text-sm" style={{ color: "var(--text-on)" }}>
                        {step.title}
                      </p>
                      {step.description && (
                        <p className="text-sm mt-0.5" style={{ color: "var(--text-dim)" }}>
                          {step.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              {item.stepsNote && (
                <p
                  className="mt-5 text-sm leading-relaxed pt-4"
                  style={{ color: "var(--text-dim)", borderTop: "1px solid var(--border)" }}
                >
                  {item.stepsNote}
                </p>
              )}
            </section>
          )}

          {/* Q&A */}
          {item.faqs.length > 0 && (
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-5" style={{ color: "var(--text-on)" }}>
                {item.faqsHeading ?? "よくある質問"}
              </h2>
              <dl className="space-y-5">
                {item.faqs.map((faq, i) => (
                  <div key={i}>
                    <dt className="font-semibold text-sm mb-1" style={{ color: "var(--text-on)" }}>
                      Q. {faq.question}
                    </dt>
                    <dd
                      className="text-sm leading-relaxed pl-4"
                      style={{ color: "var(--text-dim)", borderLeft: "2px solid var(--accent)" }}
                    >
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* CTA 3 */}
          <section className="py-8 text-center" style={{ borderTop: "1px solid var(--border)" }}>
            <CtaButton href={item.affiliateUrl} label={item.ctaLabel} />
          </section>

          {item.infoDate && (
            <p className="pb-8 text-xs text-center leading-relaxed" style={{ color: "var(--text-dim)", opacity: 0.7 }}>
              このページの内容は、{formatInfoDate(item.infoDate)}時点の公式サイトの情報にもとづいています。料金、空き状況、サービスの内容は変わることがあります。最新の情報は公式サイトでご確認ください。
            </p>
          )}
        </main>

        {/* LPフッター */}
        <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-2xl mx-auto px-4 py-6">
            <p className="text-xs mb-3" style={{ color: "var(--text-dim)" }}>
              本ページはアフィリエイト広告を利用しています。
            </p>
            <nav>
              <ul className="flex flex-wrap gap-4 text-xs" style={{ color: "var(--text-dim)" }}>
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
            <p className="mt-4 text-xs" style={{ color: "var(--text-dim)", opacity: 0.55 }}>
              &copy; {new Date().getFullYear()} {site.owner}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
