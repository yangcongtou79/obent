export type LpStep = {
  title: string;
  description: string;
};

export type LpFaq = {
  question: string;
  answer: string;
};

export type LpOption = {
  title: string;
  description: string;
  when?: string;         // "選ぶ場面" 列。値があると表レイアウトになる
  highlighted?: boolean; // 主要な選択肢を控えめに強調する
};

export type LpBodyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LpData = {
  slug: string;
  title: string;
  lead: string;
  ctaLabel: string;
  affiliateUrl: string;         // 空文字のままではページを生成しない
  measurementImageUrl?: string; // A8.net 計測用画像 URL（1×1px img）
  infoDate?: string;            // 情報確認日（ISO形式 YYYY-MM-DD）
  optionsHeading?: string;
  optionsIntro?: string;
  pricingHeading?: string;
  pricingBody?: LpBodyBlock[];
  stepsHeading?: string;
  faqsHeading?: string;
  options: LpOption[];
  steps: LpStep[];
  faqs: LpFaq[];
};

export const lpItems: LpData[] = [
  {
    slug: "photo-studio",
    title: "七五三の撮影予約の前に確認しておくこと",
    lead: "スタジオキャラットのWEB予約は、24時間受け付けています。予約フォームは4つのステップで進みます。このページでは、最初の画面で迷いやすい選択肢と、予約の前に知っておきたい料金の仕組みを整理しました。",
    ctaLabel: "WEBで撮影を予約する",
    affiliateUrl: "",         // 承認後に A8.net のアフィリエイトリンクを入力する
    measurementImageUrl: "",  // 承認後に A8.net の計測用画像 URL を入力する
    infoDate: "2026-10-05",
    optionsHeading: "予約フォームの最初に出る3つの選択肢",
    optionsIntro:
      "WEB予約の最初の画面では、利用目的を3つの中から選びます。撮影の日時を決めたい場合は「撮影のご予約」を選びます。",
    pricingHeading: "曜日と時期によって、料金が加算されます",
    pricingBody: [
      {
        type: "p",
        text: "スタジオキャラットの七五三プランでは、プラン料金に次の料金が加算される場合があります。",
      },
      {
        type: "ul",
        items: [
          "撮影日が9月〜12月の場合：シーズン料金",
          "撮影日が土日祝日の場合：土日祝日料金",
        ],
      },
      {
        type: "p",
        text: "9月〜12月の土日祝日に撮影すると、両方が加算されます。一部のプランは対象外です。金額と対象プランは、公式サイトの七五三プランのページで確認できます。",
      },
      {
        type: "p",
        text: "店舗一覧のページには、店舗ごとに直近の空き枠が表示されます。土日が「TEL」（電話で問い合わせ）と表示されている店舗でも、平日は「◯」が付いていてWEBから予約できる日があります。日程に融通がきく場合は、平日の空き枠から確認すると、予約を取りやすく、土日祝日料金もかかりません。",
      },
    ],
    stepsHeading: "WEB予約の流れ",
    faqsHeading: "予約の前によくある疑問",
    options: [
      {
        title: "撮影のご予約",
        description: "店舗と日時を選んで、撮影を予約する",
        when: "撮影の日を決めたいとき",
        highlighted: true,
      },
      {
        title: "スタジオ・衣装見学＆相談会のご予約",
        description:
          "撮影の前に、スタジオや衣装を見て相談する（振袖レンタルの相談は対象外）",
        when: "予約の前に、実際の雰囲気や衣装を確かめたいとき",
      },
      {
        title: "出張撮影の相談予約",
        description:
          "スタジオの外での撮影を相談する。備考欄に、希望のプラン、日時、撮影地を入力する",
        when: "神社など、スタジオ以外の場所で撮りたいとき",
      },
    ],
    steps: [
      { title: "利用目的を選ぶ", description: "「撮影のご予約」を選びます" },
      { title: "撮影する人数を入力する", description: "" },
      { title: "店舗と日時を選ぶ", description: "" },
      { title: "お客様情報を入力する", description: "" },
    ],
    faqs: [
      {
        question: "衣装や着付けは、料金に含まれますか。",
        answer:
          "プラン料金には、撮影、衣装と着付け、ヘアセットなどが含まれます。含まれる内容はプランによって変わるので、予約の前に公式サイトのプラン一覧で確認してください。",
      },
      {
        question: "撮影だけして、写真を買わないことはできますか。",
        answer:
          "公式サイトの案内では、衣装を着用した場合は写真の購入が必要です。",
      },
      {
        question: "きょうだいや親も一緒に写れますか。",
        answer:
          "どのプランでも家族での撮影ができます。14歳以上のきょうだいは、別途お支度代が必要です。",
      },
      {
        question: "近くに店舗はありますか。",
        answer:
          "店舗は、東京都、神奈川県、埼玉県、千葉県、栃木県、大阪府、京都府、奈良県、静岡県、愛知県、三重県、宮城県にあります。衣装やスタジオのセットは、店舗によって異なります。",
      },
    ],
  },
];
