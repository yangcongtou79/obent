import Image from "next/image";
import { type LpData } from "@/content/lp";
import { site } from "@/lib/site";
import MetaPixel from "@/components/MetaPixel";
import CompareSchoolCtaButton from "@/components/CompareSchoolCtaButton";
import StickySchoolCta from "@/components/StickySchoolCta";

const C = {
  main: "#1E4D80",
  text: "#28261F",
  dim: "#6E6960",
  bg: "#F5F4F1",
  pale: "#E8EEF5",
  marker: "#FCF69F",
  border: "#D9D9D9",
  borderWeak: "rgba(150,150,150,0.2)",
};

// Affiliate links to fill in after ASP approval
const ESLCLUB_LINK = "";
const NOVAKID_LINK = "";

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${y}年${parseInt(m)}月${parseInt(d)}日`;
}

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      style={{
        fontSize: 18, fontWeight: 700, color: "#fff",
        backgroundColor: C.main, padding: "16px 21px",
        margin: "64px -16px 32px", lineHeight: 1.4,
      }}
    >
      {children}
    </h2>
  );
}

function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <div id={id} style={{ margin: "48px 0 28px" }}>
      <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, lineHeight: 1.4, padding: "0 10px 10px" }}>
        {children}
      </h3>
      <div style={{ height: 2, display: "flex" }}>
        <div style={{ flex: "0 0 30%", backgroundColor: C.main }} />
        <div style={{ flex: 1, backgroundColor: C.borderWeak }} />
      </div>
    </div>
  );
}

function CheckBox({ heading, items, navy }: { heading: string; items: string[]; navy?: boolean }) {
  return (
    <div style={{
      border: `1px solid ${navy ? C.main : C.border}`,
      borderRadius: 4, padding: "16px 20px", marginTop: 16,
    }}>
      <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>{heading}</p>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", gap: 8, fontSize: 15, color: C.text, lineHeight: 1.6 }}>
            <span style={{ color: navy ? C.main : C.dim, flexShrink: 0 }}>{navy ? "✓" : "·"}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div style={{
      width: "100%", paddingTop: "56.25%", position: "relative",
      backgroundColor: C.pale, border: `1px solid ${C.border}`, borderRadius: 8,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        color: C.dim, fontSize: 13,
      }}>
        <span style={{ fontSize: 24, marginBottom: 6 }}>📷</span>
        <span>{label}</span>
        <span style={{ fontSize: 12, marginTop: 4 }}>（写真準備中）</span>
      </div>
    </div>
  );
}

function SchoolPhoto({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <figure style={{ margin: "0 0 4px" }}>
      <div style={{ borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}` }}>
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto block"
          sizes="(min-width: 720px) 656px, 100vw" />
      </div>
      <figcaption style={{ fontSize: 11, textAlign: "right", marginTop: 4, color: C.dim }}>
        ※写真はイメージです
      </figcaption>
    </figure>
  );
}

function EyecatchSvg() {
  return (
    <svg
      viewBox="0 0 600 250"
      className="w-full block"
      role="img"
      aria-label="小学生のオンライン英語スクール3校を目的別に比べた記事のバナー"
      style={{ maxHeight: 210 }}
    >
      {/* Background */}
      <rect width="600" height="250" fill="#ffffff" />
      {/* Polka dots */}
      {Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 16 }, (_, col) => (
          <circle key={`${row}-${col}`} cx={col * 40 + 20} cy={row * 28 + 14}
            r="3" fill={C.pale} />
        ))
      )}
      {/* Navy border with gaps at top-right and bottom-left */}
      <path d="M20,10 L440,10" stroke={C.main} strokeWidth="10" fill="none" />
      <path d="M590,10 L590,240" stroke={C.main} strokeWidth="10" fill="none" />
      <path d="M160,240 L590,240" stroke={C.main} strokeWidth="10" fill="none" />
      <path d="M10,10 L10,130" stroke={C.main} strokeWidth="10" fill="none" />
      {/* Top ribbon */}
      <rect x="30" y="28" width="240" height="28" fill={C.marker} rx="2" />
      <text x="150" y="47" textAnchor="middle" fontSize="13" fontWeight="700" fill={C.text}>
        2026年10月 情報確認
      </text>
      {/* Main text */}
      <text x="50" y="110" fontSize="38" fontWeight="900" fill={C.main}
        style={{ fontFamily: "sans-serif" }}>小学生の</text>
      <text x="50" y="158" fontSize="38" fontWeight="900" fill={C.main}
        style={{ fontFamily: "sans-serif" }}>オンライン英語</text>
      {/* Bottom ribbon */}
      <rect x="30" y="178" width="240" height="28" fill={C.marker} rx="2" />
      <text x="150" y="197" textAnchor="middle" fontSize="13" fontWeight="700" fill={C.text}>
        目的別に比べた3校
      </text>
      {/* Child at laptop line drawing */}
      <g transform="translate(430,50)" stroke={C.main} strokeWidth="2" fill="none" strokeLinecap="round">
        {/* Head */}
        <circle cx="70" cy="28" r="20" stroke={C.main} strokeWidth="2" />
        {/* Body */}
        <path d="M70,48 L70,100" />
        {/* Arms */}
        <path d="M70,65 L40,85 M70,65 L100,75" />
        {/* Laptop screen */}
        <rect x="28" y="88" width="80" height="55" rx="3" />
        <line x1="28" y1="142" x2="108" y2="142" />
        {/* Legs */}
        <path d="M70,100 L55,145 M70,100 L85,145" />
      </g>
    </svg>
  );
}

const COMPARISON_ROWS = [
  { label: "向いている家庭", campustop: "予約と学習管理を任せたい", eslclub: "英検などの目標がある", novakid: "まず英語に慣れさせたい" },
  { label: "対象", campustop: "小学生", eslclub: "小学1年生〜高校3年生", novakid: "4歳から（年齢別のコース）" },
  { label: "講師", campustop: "フィリピン人の教師。計画と予約は日本人コーチが担当", eslclub: "バイリンガル講師", novakid: "資格を持つ外国人講師。英語だけで進める" },
  { label: "1回のレッスン", campustop: "25分（毎日）", eslclub: "45分（週1〜3回）", novakid: "25分（前後の予習と復習を合わせて約40分）" },
  { label: "形式", campustop: "マンツーマン", eslclub: "完全マンツーマン", novakid: "マンツーマン。ゲームやスライドを使う" },
  { label: "予約", campustop: "コーチが代行", eslclub: "曜日と時間を決めて通う形（※要確認）", novakid: "自分で予約" },
  { label: "親へのサポート", campustop: "月1回の面談、毎日のフィードバック、LINEでの相談", eslclub: "目標に合わせたカリキュラム、レッスン後のフィードバック", novakid: "レッスン後のフィードバック、録画、進捗の画面、保護者用アプリ" },
  { label: "料金の目安", campustop: "月額固定。金額は相談会で案内", eslclub: "週1回で月33,000円から（教材費は別）。入会金22,000円", novakid: "月15,440円から（公式ページの表示例）" },
  { label: "無料で試せること", campustop: "無料個別相談会", eslclub: "無料体験レッスン（期間限定）", novakid: "無料体験レッスン（クレカ登録不要）" },
  { label: "使う端末", campustop: "※要確認", eslclub: "※要確認", novakid: "パソコン推奨（スマホは非推奨）" },
];

const FAQS = [
  {
    q: "英語を習ったことがなくても大丈夫ですか。",
    a: "英語を初めて学ぶ子どもでも受けられます。CampusTop とNovaKid は初心者向けのコースがあります。ESL club も入門レベルから対応しています。",
  },
  {
    q: "2つのスクールの無料体験や相談会を、両方受けてもいいですか。",
    a: "スクールごとに1家庭1回の制限があります。複数のスクールの体験や相談会を別々に受けることは、各スクールの規約で禁止されていません。",
  },
  {
    q: "スマホやタブレットで受けられますか。",
    a: "NovaKid はパソコンでの受講を推奨しており、スマホは非推奨です。CampusTop と ESL club は公式サイトに記載がないため、体験や相談会で確認してください。",
  },
  {
    q: "習い事や学校の予定と両立できますか。",
    a: "CampusTop はレッスンのスケジュールを曜日ごとに設定でき、予約はコーチが代行します。ESL club は週1〜3回の曜日と時間を決めて通います。NovaKid は都度予約の形です。",
  },
];

export default function LpKidsEnglishCompare({ item }: { item: LpData }) {
  const campustopLink = item.affiliateUrl;
  const infoDateStr = item.infoDate ? formatDate(item.infoDate) : "";

  return (
    <>
      <MetaPixel />
      {item.measurementImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.measurementImageUrl} width={1} height={1} alt=""
          aria-hidden="true" style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
      )}
      {ESLCLUB_LINK && (
        // ESL club 計測用画像（承認後に URL を入れる）
        // eslint-disable-next-line @next/next/no-img-element
        <img src={""} width={1} height={1} alt="" aria-hidden="true"
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
      )}

      <div style={{ backgroundColor: C.bg, minHeight: "100vh" }}>

        {/* PR表記 */}
        <div style={{ backgroundColor: C.pale, borderBottom: `1px solid ${C.border}`, padding: "8px 16px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ fontSize: 12, color: C.dim, margin: 0 }}>
              この記事にはプロモーション（広告）が含まれます
            </p>
          </div>
        </div>

        {/* カード */}
        <div style={{ maxWidth: 720, margin: "0 auto", backgroundColor: "#fff" }}
          className="md:my-8 md:border md:border-[#D9D9D9]">
          <article style={{ padding: "0 16px 48px" }}>

            {/* H1 + 情報確認日 */}
            <div style={{ paddingTop: 24, paddingBottom: 8 }}>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: C.text, lineHeight: 1.4, marginBottom: 12 }}>
                {item.title}
              </h1>
              <p style={{ fontSize: 12, color: C.dim }}>
                情報確認日：{infoDateStr}　運営者：{site.owner}
              </p>
            </div>

            {/* アイキャッチ */}
            <div style={{ margin: "16px 0" }}>
              <EyecatchSvg />
            </div>

            {/* リード文 */}
            <div style={{ margin: "24px 0" }}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text, marginBottom: 24 }}>
                オンラインの英語スクールは、送迎がいらない一方で、何を基準に選べばよいか分かりにくい習い事です。
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text, marginBottom: 24 }}>
                このページでは、子ども向けのオンライン英語スクール3校を、対象年齢、講師、レッスン時間、親のサポート、料金、無料で試せることの6つの項目で比べました。
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                3校は得意なことが違います。下の早見表で、家庭の目的に近いものから確認してください。
              </p>
            </div>

            {/* タイプ別早見表 */}
            <div id="early-view"
              style={{ border: `4px solid ${C.pale}`, borderRadius: 4, backgroundColor: C.pale, padding: 12 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 10 }}>タイプ別の早見表</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { desc: "レッスンの予約や進み具合の確認を、任せたい", school: "CampusTop", href: "#campustop" },
                  { desc: "英検など、目標に向けて4技能を伸ばしたい", school: "ESL club", href: "#eslclub" },
                  { desc: "4歳から、まず英語を楽しませたい", school: "NovaKid", href: "#novakid" },
                ].map((row) => (
                  <div key={row.school}
                    style={{ backgroundColor: "#fff", borderRadius: 6, padding: "12px 14px",
                      display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                    <p style={{ fontSize: 14, color: C.text, margin: 0, lineHeight: 1.5, flex: 1 }}>
                      {row.desc}
                    </p>
                    <a href={row.href}
                      style={{ fontSize: 14, fontWeight: 700, color: C.main, whiteSpace: "nowrap",
                        textDecoration: "none", display: "flex", alignItems: "center", gap: 2 }}>
                      {row.school} <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* 目次 */}
            <details style={{ margin: "32px 0", border: `1px solid ${C.main}`, borderRadius: 4 }}>
              <summary style={{
                backgroundColor: C.main, color: "#fff", padding: "12px 16px",
                fontSize: 16, fontWeight: 700, cursor: "pointer", listStyle: "none",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span aria-hidden="true">≡</span> 目次
              </summary>
              <nav style={{ padding: "16px 20px" }}>
                <ol style={{ margin: 0, padding: "0 0 0 20px",
                  display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { href: "#compare-table", label: "同じ項目で比べた表" },
                    { href: "#campustop", label: "CampusTop｜予約と学習管理を任せる" },
                    { href: "#eslclub", label: "ESL club｜英検などの目標に向けて" },
                    { href: "#novakid", label: "NovaKid｜4歳から英語に慣れる" },
                    { href: "#choose", label: "3つの質問で選ぶ" },
                    { href: "#check", label: "申し込む前に確認しておくこと" },
                    { href: "#faq", label: "よくある質問" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a href={item.href} style={{ color: C.main, fontSize: 15, lineHeight: 1.6 }}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </details>

            {/* ===== 比較表 ===== */}
            <H2 id="compare-table">同じ項目で比べた表</H2>

            <div style={{ overflowX: "auto", margin: "0 -16px" }}>
              <table id="compare-table-inner" style={{
                borderCollapse: "collapse", minWidth: 520, width: "100%",
                fontSize: 14, color: C.text,
              }}>
                <thead>
                  <tr>
                    <th style={{
                      position: "sticky", left: 0, zIndex: 1,
                      backgroundColor: C.pale, padding: "10px 12px",
                      border: `1px solid ${C.border}`, fontWeight: 700,
                      minWidth: 100, textAlign: "left",
                    }}>項目</th>
                    {["CampusTop", "ESL club", "NovaKid"].map((school) => (
                      <th key={school} style={{
                        backgroundColor: C.pale, padding: "10px 12px",
                        border: `1px solid ${C.border}`, fontWeight: 700,
                        minWidth: 140, textAlign: "center",
                      }}>{school}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 1 ? "#fafaf9" : "#fff" }}>
                      <td style={{
                        position: "sticky", left: 0, zIndex: 1,
                        backgroundColor: i % 2 === 1 ? C.pale : C.pale,
                        padding: "10px 12px", border: `1px solid ${C.border}`,
                        fontWeight: 700, fontSize: 13, verticalAlign: "top",
                      }}>{row.label}</td>
                      {([row.campustop, row.eslclub, row.novakid]).map((val, j) => (
                        <td key={j} style={{
                          padding: "10px 12px", border: `1px solid ${C.border}`,
                          verticalAlign: "top", lineHeight: 1.6,
                        }}>{val}</td>
                      ))}
                    </tr>
                  ))}
                  {/* CTA row */}
                  <tr>
                    <td style={{
                      position: "sticky", left: 0, zIndex: 1,
                      backgroundColor: C.pale, padding: "12px",
                      border: `1px solid ${C.border}`, fontWeight: 700, fontSize: 13,
                    }}>申込</td>
                    <td style={{ padding: "12px", border: `1px solid ${C.border}` }}>
                      <CompareSchoolCtaButton href={campustopLink}
                        label="相談会を見る" contentName="campustop" small />
                    </td>
                    <td style={{ padding: "12px", border: `1px solid ${C.border}` }}>
                      <CompareSchoolCtaButton href={ESLCLUB_LINK}
                        label="体験を見る" contentName="eslclub" small />
                    </td>
                    <td style={{ padding: "12px", border: `1px solid ${C.border}` }}>
                      <CompareSchoolCtaButton href={NOVAKID_LINK}
                        label="体験を見る" contentName="novakid" small />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: C.dim, marginTop: 8, lineHeight: 1.6 }}>
              料金と内容は2026年10月10日に各社の公式サイトで確認したものです。最新の情報は公式サイトで確認してください。
            </p>

            {/* ===== 3校の特徴 ===== */}
            <H2>3校の特徴</H2>

            {/* CampusTop */}
            <H3 id="campustop">CampusTop｜予約と学習管理を、日本人コーチに任せる</H3>
            <SchoolPhoto
              src="/images/lp/english-coach-hero.jpg"
              alt="ヘッドセットを着けてノートパソコンでオンラインレッスンを受ける子ども"
              width={1280} height={534}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 20 }}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                レッスンは自宅で1日25分のマンツーマン。教師はフィリピン人で、子どもの英語力に合わせて進めます。
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                <mark style={{ backgroundColor: C.marker, fontWeight: 700 }}>
                  レッスンの予約と学習の計画は、専属の日本人コーチが受け持ちます。
                </mark>
                親が毎回予約を取る必要がなく、進み具合の確認もコーチが担当します。
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                月1回の保護者との面談、毎日のレッスンフィードバック、LINEでの学習相談の3つが、サポートの中心です。
              </p>
            </div>
            <CheckBox heading="こんな家庭に合う" navy items={[
              "予約や進み具合の確認に、手が回らない",
              "毎日少しずつ、英語にふれる時間を作りたい",
              "日本語で相談できる相手がほしい",
            ]} />
            <CheckBox heading="確認しておきたいこと" items={[
              "料金は公式サイトに載っておらず、無料個別相談会で案内される",
            ]} />
            <div style={{ marginTop: 24 }}>
              <CompareSchoolCtaButton
                href={campustopLink}
                label="CampusTopの無料個別相談会を見る"
                note="相談会のあとに入会する必要はありません"
                contentName="campustop"
              />
            </div>

            {/* ESL club */}
            <H3 id="eslclub">ESL club｜英検などの目標に向けて、4技能を伸ばす</H3>
            <PhotoPlaceholder label="小学生がヘッドセットをつけてノートに書いている写真" />
            <p style={{ fontSize: 11, textAlign: "right", marginTop: 4, color: C.dim }}>
              ※写真はイメージです
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 20 }}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                オンラインでの完全マンツーマン。講師はバイリンガルで、日本語も使いながらレッスンを進めます。
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                <mark style={{ backgroundColor: C.marker, fontWeight: 700 }}>
                  英検の級を目標に、カリキュラムと宿題を組み立てます。
                </mark>
                宿題は子どもが一人で取り組める設計で、レッスンのあとに保護者へフィードバックがあります。
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                小学1年生から高校3年生まで対象。週1〜3回の固定曜日で通います。
              </p>
            </div>
            <CheckBox heading="こんな家庭に合う" navy items={[
              "英検など、はっきりした目標がある",
              "話すだけでなく、読む・書くも伸ばしたい",
              "学習の計画まで、スクールに任せたい",
            ]} />
            <CheckBox heading="確認しておきたいこと" items={[
              "3校の中では料金が高め。オンラインは教材費が別にかかる",
            ]} />
            <div style={{ marginTop: 24 }}>
              <CompareSchoolCtaButton
                href={ESLCLUB_LINK}
                label="ESL clubの無料体験を見る"
                note="体験レッスンの申込は、期間限定で受け付けています"
                contentName="eslclub"
              />
            </div>

            {/* NovaKid */}
            <H3 id="novakid">NovaKid｜4歳から、ゲーム感覚で英語に慣れる</H3>
            <PhotoPlaceholder label="幼児〜低学年の子どもがパソコンの前で笑っている写真" />
            <p style={{ fontSize: 11, textAlign: "right", marginTop: 4, color: C.dim }}>
              ※写真はイメージです
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 20 }}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                4歳から受けられるオンライン英語スクールです。レッスンは英語だけで進みます。
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                <mark style={{ backgroundColor: C.marker, fontWeight: 700 }}>
                  スライドやゲームを使い、星を集めながら進めるので、小さな子どもでも取り組みやすい設計です。
                </mark>
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
                レッスン後に講師からフィードバックが届き、録画も見られます。保護者用のアプリで進捗を確認できます。
              </p>
            </div>
            <CheckBox heading="こんな家庭に合う" navy items={[
              "未就学から低学年で、英語は初めて",
              "英語だけの環境に慣れさせたい",
              "自宅にパソコンがある",
            ]} />
            <CheckBox heading="確認しておきたいこと" items={[
              "パソコンでの受講が推奨されている。スマホは非推奨",
              "初回は保護者が立ち会うよう案内されている",
            ]} />
            <div style={{ marginTop: 24 }}>
              <CompareSchoolCtaButton
                href={NOVAKID_LINK}
                label="NovaKidの無料体験レッスンを見る"
                note="体験レッスンの申込に、クレジットカードの登録はいりません"
                contentName="novakid"
              />
            </div>

            {/* ===== 3つの質問で選ぶ ===== */}
            <H2 id="choose">3つの質問で選ぶ</H2>

            {/* Decision tree diagram */}
            <div style={{
              border: `2px solid ${C.main}`, borderRadius: 8, padding: "20px 16px",
              backgroundColor: C.pale, marginBottom: 32,
            }}>
              <p style={{ textAlign: "center", fontWeight: 700, fontSize: 15,
                color: "#fff", backgroundColor: C.main,
                borderRadius: 4, padding: "8px 16px", marginBottom: 24 }}>
                3つの質問で選ぶ
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { q: "子どもは4〜6歳？", ans: "NovaKid", href: "#novakid" },
                  { q: "英検など目標がある？", ans: "ESL club", href: "#eslclub" },
                  { q: "予約や確認を任せたい？", ans: "CampusTop", href: "#campustop" },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        flex: 1, backgroundColor: "#fff",
                        border: `1px solid ${C.main}`, borderRadius: 20,
                        padding: "10px 16px", fontSize: 15, fontWeight: 600, color: C.text,
                        textAlign: "center",
                      }}>
                        {item.q}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: 13, color: C.dim }}>はい</span>
                        <span style={{ fontSize: 16, color: C.main }}>→</span>
                        <a href={item.href} style={{
                          fontSize: 14, fontWeight: 700, color: "#fff",
                          backgroundColor: C.main, borderRadius: 4,
                          padding: "4px 10px", textDecoration: "none",
                        }}>{item.ans}</a>
                      </div>
                    </div>
                    {i < 2 && (
                      <div style={{ display: "flex", alignItems: "center", padding: "4px 0 4px 60px", gap: 6 }}>
                        <div style={{ width: 1, height: 20, backgroundColor: C.main }} />
                        <span style={{ fontSize: 12, color: C.dim }}>いいえ</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <H3>子どもが4〜6歳 → NovaKid</H3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text, marginBottom: 16 }}>
              英語に初めてふれる子どもには、ゲーム感覚で進めるNovaKidが合います。英語だけで進むレッスンが、英語を「聞いて話す」習慣の土台になります。
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
              小学校入学後でも、英語が初めての子どもには有効な選択肢です。
            </p>

            <H3>英検など目標がある → ESL club</H3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text, marginBottom: 16 }}>
              英検の取得や、スピーキング・ライティングを含む4技能の向上を目指す場合は、ESL clubが合います。目標に向けたカリキュラムと宿題が、計画的な学習を支えます。
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
              料金が3校の中で高めであることと、教材費が別にかかることは、事前に確認してください。
            </p>

            <H3>予約や確認を任せたい → CampusTop</H3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text, marginBottom: 16 }}>
              レッスンの予約や進み具合の把握を親が担うのが負担になりやすい場合は、CampusTopが合います。専属の日本人コーチが予約と管理を代行します。
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>
              料金は相談会で確認する必要がありますが、申し込みの必須入力は3項目だけです。
            </p>

            {/* ===== 確認しておくこと ===== */}
            <H2 id="check">申し込む前に確認しておくこと</H2>
            <CheckBox heading="共通で確認しておくこと" navy items={[
              "無料体験や相談会は、どのスクールも1家庭1回まで",
              "使う端末（パソコン、タブレット）と、ネット環境",
              "体験や相談会のあとに、入会するかは家庭で決められる",
              "料金は、入会金や教材費も含めて確認する",
            ]} />

            {/* ===== よくある質問 ===== */}
            <H2 id="faq">よくある質問</H2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <H3>{faq.q}</H3>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text }}>{faq.a}</p>
                </div>
              ))}
            </div>

            {/* ===== 最後のCTA ===== */}
            <div style={{ marginTop: 64, display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: C.text, textAlign: "center", marginBottom: 8 }}>
                気になるスクールに申し込む
              </p>
              <CompareSchoolCtaButton
                href={campustopLink}
                label="CampusTopの無料個別相談会を見る"
                note="相談会のあとに入会する必要はありません"
                contentName="campustop"
              />
              <CompareSchoolCtaButton
                href={ESLCLUB_LINK}
                label="ESL clubの無料体験を見る"
                note="体験レッスンの申込は、期間限定で受け付けています"
                contentName="eslclub"
              />
              <CompareSchoolCtaButton
                href={NOVAKID_LINK}
                label="NovaKidの無料体験レッスンを見る"
                note="体験レッスンの申込に、クレジットカードの登録はいりません"
                contentName="novakid"
              />
            </div>

          </article>

          {/* フッター */}
          <footer style={{
            backgroundColor: C.pale,
            borderTop: `1px solid ${C.border}`,
            padding: "24px 16px",
            fontSize: 12, color: C.dim, lineHeight: 1.8,
          }}>
            <p>情報確認日：{infoDateStr}</p>
            <p style={{ marginTop: 4 }}>出典：CampusTop（既存LPの情報）、ESL club公式サイト（eslclub.jp）、NovaKid公式サイト（novakidschool.com/ja/）</p>
            <p style={{ marginTop: 4 }}>この記事にはプロモーション（広告）が含まれます。</p>
            <p style={{ marginTop: 8 }}>運営者：{site.owner}　連絡先：{site.email}</p>
            <p style={{ marginTop: 4 }}>&copy; {new Date().getFullYear()} {site.owner}</p>
          </footer>
        </div>
      </div>

      <StickySchoolCta
        tableId="compare-table-inner"
        earlyViewId="early-view"
      />
    </>
  );
}
