import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lpItems } from "@/content/lp";
import { site } from "@/lib/site";
import PrLabel from "@/components/PrLabel";
import MetaPixel from "@/components/MetaPixel";
import CtaButton from "@/components/CtaButton";

export const dynamicParams = false;

export async function generateStaticParams() {
  return lpItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = lpItems.find((l) => l.slug === slug);
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

export default async function LpPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = lpItems.find((l) => l.slug === slug);
  if (!item) notFound();

  return (
    <>
      <MetaPixel />
      <div className="min-h-screen bg-stone-50 dark:bg-zinc-950">
        {/* Header */}
        <header className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="max-w-2xl mx-auto">
            <PrLabel />
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4">
          {/* First view: title + CTA without full-screen forcing */}
          <section className="py-10">
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 leading-snug">
              {item.title}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {item.lead}
            </p>
            <div className="flex justify-center">
              <CtaButton href={item.affiliateUrl} label={item.ctaLabel} />
            </div>
          </section>

          {/* Options */}
          {item.options.length > 0 && (
            <section className="py-8 border-t border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-5">
                プランの選択肢
              </h2>
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
            </section>
          )}

          {/* CTA 2 */}
          <section className="py-8 border-t border-zinc-200 dark:border-zinc-700 text-center">
            <CtaButton href={item.affiliateUrl} label={item.ctaLabel} />
          </section>

          {/* Steps */}
          {item.steps.length > 0 && (
            <section className="py-8 border-t border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-5">
                申込の流れ
              </h2>
              <ol className="space-y-4">
                {item.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-800 dark:text-zinc-100 text-sm">
                        {step.title}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* FAQ */}
          {item.faqs.length > 0 && (
            <section className="py-8 border-t border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-5">
                よくある質問
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
        </main>

        {/* LP Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 mt-8">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
              このページには広告・プロモーション情報が含まれています。
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
