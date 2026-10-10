import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { type LpData } from "@/content/lp";
import PrLabel from "@/components/PrLabel";
import MetaPixel from "@/components/MetaPixel";
import CtaButtonWide from "@/components/CtaButtonWide";

function formatInfoDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${y}年${parseInt(m, 10)}月${parseInt(d, 10)}日`;
}

function LpImage({
  src,
  alt,
  width,
  height,
  note,
  priority,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  note: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="rounded-sm overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto block"
          sizes="(min-width: 672px) 640px, 100vw"
          priority={priority}
        />
      </div>
      <figcaption
        className="text-[11px] text-right mt-1"
        style={{ color: "var(--text-dim)" }}
      >
        ※{note}
      </figcaption>
    </figure>
  );
}

const DAYS = ["月", "火", "水", "木", "金"];
const TIMES = ["17:00", "16:30", "17:30", "18:00", "16:00"];
const COL_W = 52;
const COL_GAP = 6;
const TIMETABLE_W = DAYS.length * COL_W + (DAYS.length - 1) * COL_GAP;

function TimetableSvg() {
  return (
    <svg
      viewBox={`0 0 ${TIMETABLE_W} 96`}
      className="w-full max-w-xs mx-auto block"
      role="img"
      aria-label="1週間のレッスン例。月曜17時、火曜16時30分、水曜17時30分、木曜18時、金曜16時にそれぞれ25分のレッスン"
    >
      {DAYS.map((day, i) => {
        const x = i * (COL_W + COL_GAP);
        return (
          <g key={i}>
            <text x={x + COL_W / 2} y={16} textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.55">
              {day}
            </text>
            <rect x={x} y={26} width={COL_W} height={46} rx="2"
              fill="var(--accent)" fillOpacity="0.09" stroke="var(--accent)" strokeWidth="1.5" />
            <text x={x + COL_W / 2} y={47} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--accent)">
              25分
            </text>
            <text x={x + COL_W / 2} y={63} textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">
              {TIMES[i]}
            </text>
            <text x={x + COL_W / 2} y={88} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.4">
              例
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function PhoneMockupSvg() {
  return (
    <svg
      viewBox="0 0 130 240"
      width="110"
      className="block"
      role="img"
      aria-label="CampusTopの申込フォームのイメージ。お子様のお名前、電話番号、メールアドレスの入力欄と申込ボタンが表示されている"
    >
      <rect x="3" y="3" width="124" height="234" rx="14"
        fill="var(--bg-surface)" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <rect x="48" y="10" width="34" height="5" rx="2.5"
        fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <rect x="10" y="24" width="110" height="202" rx="4"
        fill="var(--bg-base)" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <rect x="10" y="24" width="110" height="26" rx="4"
        fill="var(--accent)" fillOpacity="0.12" />
      <text x="65" y="41" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6" fontWeight="600">
        CampusTop
      </text>
      <text x="65" y="70" textAnchor="middle" fontSize="7.5" fill="currentColor" opacity="0.4">
        ↓ スクロール
      </text>
      {[
        { label: "お子様のお名前", y: 86 },
        { label: "電話番号", y: 124 },
        { label: "メールアドレス", y: 162 },
      ].map(({ label, y }, i) => (
        <g key={i}>
          <text x="18" y={y} fontSize="7.5" fill="currentColor" opacity="0.5">{label}</text>
          <rect x="16" y={y + 4} width="98" height="18" rx="2"
            fill="var(--bg-surface)" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        </g>
      ))}
      <rect x="16" y="196" width="98" height="22" rx="3"
        fill="var(--accent)" fillOpacity="0.75" />
      <text x="65" y="211" textAnchor="middle" fontSize="8.5" fill="white" fontWeight="700">
        申し込む
      </text>
    </svg>
  );
}

const COMPARISON_ROWS = [
  { label: "レッスンの予約", typeA: "家庭で予約する", typeB: "コーチが代行する" },
  { label: "学習の計画", typeA: "家庭で決める", typeB: "コーチが設計する" },
  { label: "進み具合の確認", typeA: "家庭で把握する", typeB: "コーチが確認し、月1回の面談で共有する" },
  { label: "相談の相手", typeA: "サービスによって異なる", typeB: "専属のコーチ（LINEで相談できる）" },
  { label: "合う家庭", typeA: "自分たちのペースで進めたい", typeB: "予約と管理を任せたい" },
];

const WORK_CARDS = [
  {
    title: "レッスンの予約",
    body: "予約を取り忘れて、レッスンのない日が続く",
  },
  {
    title: "進み具合の確認",
    body: "何をどこまで学んだのか、親が把握できていない",
  },
  {
    title: "困ったときの相談",
    body: "子どもが嫌がったときに、相談できる相手がいない",
  },
];

const COACH_BLOCKS = [
  {
    num: "01",
    title: "レッスンの予約を代行",
    body: "子どもの週のスケジュールに合わせて、コーチがレッスンの予約を代行します。",
  },
  {
    num: "02",
    title: "学習プランを設計・管理",
    body: "子どものレベルと目標をもとに、学習プランを設計します。進み具合に応じて内容を調整します。",
  },
  {
    num: "03",
    title: "月1回のオンライン面談",
    body: "保護者との面談を月1回設けます。学習の経過を報告し、気になることを話し合えます。",
  },
];

const STATS = [
  { value: "25分", label: "毎日のレッスン時間" },
  { value: "月1回", label: "コーチとの面談" },
  { value: "3項目", label: "申込フォームの必須入力" },
];

const FITS_FAMILIES = [
  "平日の送迎の時間が取れない",
  "予約や進み具合の確認を、任せたい",
  "学習の計画を相談できる相手がほしい",
  "毎日少しずつ続けさせたい",
];

const CHECK_FAMILIES = [
  "週1回だけ受けたい（毎日のレッスンを基本にしたスクールです）",
  "友達と一緒に、教室で学ばせたい（レッスンは自宅で、マンツーマンです）",
  "料金を最優先で決めたい（金額は相談会で案内されます）",
];

const UNKNOWNS = [
  {
    title: "月額料金と費用の内訳",
    body: "料金プランの詳細は、無料個別相談会で案内されます。月額以外にかかる費用も相談会で確認できます。",
  },
  {
    title: "コーチとのやり取りの具体的な方法",
    body: "レッスン予約の手順、LINEでのやり取りの頻度、進捗報告の形式などは、相談会または入会後に確認できます。",
  },
  {
    title: "子どもとコーチの相性",
    body: "担当コーチとのやり取りは、申し込んでみないと分かりません。相談会でのやり取りが、判断の参考になります。",
  },
];

const CONSULT_STEPS = [
  {
    title: "英語レベルの確認",
    body: "子どものこれまでの英語の学習経験を確認します。",
  },
  {
    title: "学習プランの提案",
    body: "目標と状況をもとに、学習プランが提案されます。",
  },
  {
    title: "料金と手続きの説明",
    body: "費用の内訳と、入会手続きの流れを説明します。",
  },
];

const FAQS = [
  {
    q: "相談会のあと、入会しないといけませんか。",
    a: "入会する必要はありません。相談会で内容と料金を確認したうえで、家庭で検討できます。",
  },
  {
    q: "料金はいくらですか。",
    a: "月額固定の料金制です。金額の詳細は、無料個別相談会で案内されます。",
  },
  {
    q: "子どもがオンラインでのレッスンに慣れていなくても大丈夫ですか。",
    a: "レッスンの仕組みや使い方は、相談会で確認できます。",
  },
];

export default function LpEnglishCoach({ item }: { item: LpData }) {
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

        {/* Section 1: PR表記 */}
        <header
          className="px-4 py-3"
          style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}
        >
          <div className="max-w-2xl mx-auto">
            <PrLabel />
          </div>
        </header>

        <main>

          {/* Sections 2–8 */}
          <div className="max-w-2xl mx-auto px-4">

            {/* Section 2: ファーストビュー */}
            {/* pt-4（step 1）、h1 mb-4（step 2）、space-y-3 + mb-6（step 3）、写真 mb-4（step 4）を適用 */}
            <section className="pt-4 pb-9">
              {/* ① ファーストビュー写真 */}
              <LpImage
                src="/images/lp/english-coach-hero.jpg"
                alt="ヘッドセットを着けて、ノートパソコンでオンラインのレッスンを受ける子ども"
                width={1280}
                height={534}
                note="写真はイメージです"
                priority
                className="mb-4"
              />
              <p className="text-xs mb-2" style={{ color: "var(--text-dim)" }}>小学生の保護者向け</p>
              <h1
                className="text-2xl font-bold mb-4 leading-snug"
                style={{ color: "var(--text-on)", letterSpacing: "0.01em" }}
              >
                オンライン英会話の予約と学習管理を、専属コーチに任せる仕組み
              </h1>
              <ul className="space-y-3 mb-6">
                {[
                  "レッスンの予約は、コーチが代行",
                  "自宅で1日25分。送迎は不要",
                  "相談会のあとの入会は、必須ではない",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 22 22" width="22" height="22" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="11" cy="11" r="10" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" strokeWidth="1.5" />
                      <polyline points="6,11 9.5,14.5 16,7.5" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-base" style={{ color: "var(--text-on)" }}>{text}</span>
                  </li>
                ))}
              </ul>
              <CtaButtonWide href={item.affiliateUrl} />
            </section>

            {/* Section 3: 1週間のイメージ */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text-on)" }}>
                1週間のレッスンのイメージ
              </h2>
              <p className="text-sm mb-5" style={{ color: "var(--text-dim)" }}>
                平日5日・各25分の場合
              </p>
              <div className="py-6 px-3" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                <TimetableSvg />
                <p className="mt-4 text-xs text-center" style={{ color: "var(--text-dim)" }}>
                  時間帯は例です。曜日ごとに設定できます。
                </p>
              </div>
            </section>

            {/* Section 4: 家庭の側に残りやすい作業 */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-on)" }}>
                オンライン英会話で、家庭の側に残りやすい作業
              </h2>
              <p className="text-base mb-4" style={{ color: "var(--text-on)" }}>
                オンライン英会話は送迎が要らない一方で、次のような作業が家庭の側に残ることがあります。始めたあとに、こうした状況が起きやすくなります。
              </p>
              {/* ② 家庭に残る作業の写真 */}
              <LpImage
                src="/images/lp/english-coach-parent.jpg"
                alt="スマートフォンを手に、考えごとをしている女性"
                width={1280}
                height={720}
                note="写真はイメージです"
                className="mb-4"
              />
              <div className="space-y-3">
                {WORK_CARDS.map((card, i) => (
                  <div
                    key={i}
                    className="p-4"
                    style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--border)" }}
                  >
                    <p className="font-semibold mb-1" style={{ color: "var(--text-on)" }}>{card.title}</p>
                    <p className="text-base" style={{ color: "var(--text-on)" }}>{card.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base" style={{ color: "var(--text-on)" }}>
                続くかどうかは、子どものやる気だけでなく、この3つを誰が受け持つかにも左右されます。
              </p>
            </section>

            {/* Section 5: 2つの型 */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-on)" }}>
                オンライン英会話には、2つの型があります
              </h2>
              <p className="text-base mb-6" style={{ color: "var(--text-on)" }}>
                どちらが優れているかではなく、家庭の事情によって合う方が変わります。
              </p>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div
                  className="px-2 py-2.5 text-xs font-semibold text-center"
                  style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-dim)" }}
                >
                  自分で進める型
                </div>
                <div
                  className="px-2 py-2.5 text-xs font-semibold text-center"
                  style={{ backgroundColor: "var(--bg-surface)", border: "2px solid var(--accent)", color: "var(--accent)" }}
                >
                  コーチが付く型
                  <span className="block text-xs font-normal mt-0.5" style={{ opacity: 0.85 }}>
                    CampusTop はこちら
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                {COMPARISON_ROWS.map((row, i) => (
                  <div key={i}>
                    <p className="text-xs mb-1 px-0.5" style={{ color: "var(--text-dim)" }}>{row.label}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div
                        className="p-2.5 text-sm"
                        style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-on)" }}
                      >
                        {row.typeA}
                      </div>
                      <div
                        className="p-2.5 text-sm"
                        style={{ backgroundColor: "var(--bg-surface)", border: "2px solid var(--accent)", borderLeft: "3px solid var(--accent)", color: "var(--text-on)" }}
                      >
                        {row.typeB}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: CampusTop の仕組み */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-on)" }}>
                CampusTop では、専属コーチが受け持ちます
              </h2>
              <p className="text-base mb-4" style={{ color: "var(--text-on)" }}>
                入会すると、担当の日本人コーチが付きます。コーチは次のことを受け持ちます。
              </p>
              {/* ③ コーチの写真 */}
              <LpImage
                src="/images/lp/english-coach-coach.jpg"
                alt="自宅でノートパソコンに向かい、オンラインで話す女性"
                width={782}
                height={440}
                note="写真はイメージです。実際のコーチではありません。"
                className="mb-6"
              />
              <div className="space-y-5">
                {COACH_BLOCKS.map((block) => (
                  <div key={block.num} className="flex gap-4">
                    <span
                      className="flex-shrink-0 text-2xl font-bold"
                      style={{ color: "var(--accent)", lineHeight: "1.3", minWidth: "36px" }}
                    >
                      {block.num}
                    </span>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: "var(--text-on)" }}>{block.title}</p>
                      <p className="text-base" style={{ color: "var(--text-on)" }}>{block.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-8">
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3 text-center"
                    style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
                  >
                    <p className="text-xl font-bold leading-tight" style={{ color: "var(--accent)" }}>{stat.value}</p>
                    <p className="text-xs mt-1 leading-snug" style={{ color: "var(--text-dim)" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: CTA② */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <CtaButtonWide href={item.affiliateUrl} />
            </section>

            {/* Section 8: 合う家庭と確認しておきたい家庭 */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-on)" }}>
                合う家庭と、相談会で確認しておきたい家庭
              </h2>
              {/* ④ 相談のイメージ写真 */}
              <LpImage
                src="/images/lp/english-coach-consultation.jpg"
                alt="タブレットに向かって手を振る子どもと、隣で見守る両親"
                width={1280}
                height={720}
                note="写真はイメージです"
                className="mb-5"
              />
              <div className="space-y-4">
                <div
                  className="p-5"
                  style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", borderTop: "3px solid var(--accent)" }}
                >
                  <p className="font-semibold mb-3" style={{ color: "var(--text-on)" }}>合う家庭</p>
                  <ul className="space-y-2.5">
                    {FITS_FAMILIES.map((point, i) => (
                      <li key={i} className="flex gap-2 text-base" style={{ color: "var(--text-on)" }}>
                        <span className="flex-shrink-0 mt-0.5" aria-hidden="true">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="p-5"
                  style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", borderTop: "3px solid var(--border)" }}
                >
                  <p className="font-semibold mb-3" style={{ color: "var(--text-on)" }}>相談会で確認しておきたい家庭</p>
                  <ul className="space-y-2.5">
                    {CHECK_FAMILIES.map((point, i) => (
                      <li key={i} className="flex gap-2 text-base" style={{ color: "var(--text-on)" }}>
                        <span className="flex-shrink-0 mt-0.5" aria-hidden="true">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

          </div>{/* end sections 2–8 wrapper */}

          {/* Section 9: このページだけでは、分からないこと — full-width band */}
          <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="max-w-2xl mx-auto px-4 py-8">
              <h2 className="text-xl font-bold mb-5" style={{ color: "var(--text-on)" }}>
                このページだけでは、分からないこと
              </h2>
              <div className="space-y-5">
                {UNKNOWNS.map((card, i) => (
                  <div key={i}>
                    <p className="font-semibold mb-1" style={{ color: "var(--text-on)" }}>{card.title}</p>
                    <p className="text-base" style={{ color: "var(--text-on)" }}>{card.body}</p>
                  </div>
                ))}
              </div>
              <p
                className="mt-6 text-base pt-5"
                style={{ color: "var(--text-on)", borderTop: "1px solid var(--border)" }}
              >
                相談会は、これらを確認するための場でもあります。
              </p>
            </div>
          </div>

          {/* Sections 10–14 */}
          <div className="max-w-2xl mx-auto px-4">

            {/* Section 10: 無料個別相談会ですること（写真なし） */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-on)" }}>
                無料個別相談会ですること
              </h2>
              <ol className="space-y-5">
                {CONSULT_STEPS.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="flex-shrink-0 w-8 h-8 text-sm font-bold flex items-center justify-center"
                      style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="font-semibold" style={{ color: "var(--text-on)" }}>{step.title}</p>
                      <p className="text-base mt-0.5" style={{ color: "var(--text-on)" }}>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p
                className="mt-6 text-sm pt-5 leading-relaxed"
                style={{ color: "var(--text-dim)", borderTop: "1px solid var(--border)" }}
              >
                案内を受けたあと、相談会の場で即決する必要はありません。家庭で検討する時間を取れます。（CampusTop 公式サイトの案内による）
              </p>
            </section>

            {/* Section 11: ボタンを押したあとの画面 */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-on)" }}>
                ボタンを押したあとの画面
              </h2>
              <p className="text-base mb-6" style={{ color: "var(--text-on)" }}>
                申込ボタンを押すと、CampusTop の公式ページに移動します。ページを下にスクロールすると、申込フォームが表示されます。
              </p>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <PhoneMockupSvg />
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-3" style={{ color: "var(--text-on)" }}>
                    必須入力（3項目）
                  </p>
                  <ul className="space-y-2">
                    {["お子様のお名前", "電話番号", "メールアドレス"].map((field, i) => (
                      <li key={i} className="flex gap-2 text-base" style={{ color: "var(--text-on)" }}>
                        <span aria-hidden="true">·</span>
                        <span>{field}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    「その他ご質問など」の欄に、連絡を受けやすい曜日と時間帯を書いておくと、日程が決まりやすくなります。
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: よくある疑問 */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-on)" }}>
                よくある疑問
              </h2>
              <dl className="space-y-6">
                {FAQS.map((faq, i) => (
                  <div key={i}>
                    <dt className="font-semibold mb-1.5" style={{ color: "var(--text-on)" }}>
                      Q. {faq.q}
                    </dt>
                    <dd
                      className="text-base pl-4 leading-relaxed"
                      style={{ color: "var(--text-on)", borderLeft: "2px solid var(--accent)" }}
                    >
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Section 13: CTA③ */}
            <section className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
              <CtaButtonWide href={item.affiliateUrl} />
            </section>

            {/* Section 14: 情報確認日 */}
            {item.infoDate && (
              <p className="pb-8 text-xs text-center" style={{ color: "var(--text-dim)", opacity: 0.7, lineHeight: "1.8" }}>
                このページの内容は、{formatInfoDate(item.infoDate)}時点の公式サイト（obent および CampusTop）の情報にもとづいています。料金、内容、受付状況は変わることがあります。最新の情報は公式サイトでご確認ください。
              </p>
            )}

          </div>{/* end sections 10–14 wrapper */}

        </main>

        {/* Section 15: フッター */}
        <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-2xl mx-auto px-4 py-6">
            <p className="text-xs mb-3" style={{ color: "var(--text-dim)" }}>
              本ページはアフィリエイト広告を利用しています。
            </p>
            <nav>
              <ul className="flex flex-wrap gap-4 text-xs" style={{ color: "var(--text-dim)" }}>
                <li><Link href="/about/" className="hover:underline">運営者情報</Link></li>
                <li><Link href="/privacy/" className="hover:underline">プライバシーポリシー</Link></li>
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
