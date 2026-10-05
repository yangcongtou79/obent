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
  when?: string;         // "選ぶ場面" 列。値があると3列表レイアウトになる
  highlighted?: boolean; // 主要な選択肢を控えめに強調する
};

export type LpMenuMapRow = {
  want: string; // "こうしたい" の短いテキスト（\n で改行可）
  menu: string; // 選ぶメニュー名（\n で改行可）
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
  articleLinkLabel?: string;    // 記事3の導線に使う文言（広告主名を含めない）
  optionsHeading?: string;
  optionsIntro?: string;
  menuMap?: LpMenuMapRow[];     // 選び方の図（こうしたい→メニュー）のデータ
  optionsAsTable?: boolean;     // trueのとき2列表レイアウト（メニュー＋内容）
  optionsNote?: string;         // 選択肢セクション末尾の注記
  pricingHeading?: string;
  pricingBody?: LpBodyBlock[];
  stepsHeading?: string;
  stepsNote?: string;           // 予約の流れセクション末尾の注記
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
    articleLinkLabel: "関東・関西などのスタジオの予約手順を見る",
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
  {
    slug: "photo-tokai",
    title: "七五三の撮影プランの選び方（愛知・岐阜・三重）",
    lead: "フォトスタジオタートルは、愛知・岐阜・三重に店舗があるフォトスタジオです。WEB予約では、最初に撮影メニューを選びます。七五三のメニューは4種類あります。このページでは、4種類の違いと、予約の流れを整理しました。",
    ctaLabel: "WEBで予約する",
    affiliateUrl: "",         // 承認後に A8.net のアフィリエイトリンクを入力する
    measurementImageUrl: "",  // 承認後に A8.net の計測用画像 URL を入力する
    infoDate: "2026-10-05",
    articleLinkLabel: "愛知・岐阜・三重のスタジオの予約手順を見る",
    optionsHeading: "七五三の4つのメニュー、どれを選ぶか",
    optionsIntro:
      "WEB予約の最初の画面で「子供撮影」を開くと、七五三のメニューが4つ並びます。違いは、お参り用の着物を借りるかどうかと、撮影とお参りを同じ日にするかどうかです。",
    menuMap: [
      { want: "スタジオで撮影だけしたい", menu: "七五三撮影パック" },
      { want: "お参りの日の着物も借りたい", menu: "七五三お参りプラン" },
      { want: "自分の服装で撮影したい", menu: "七五三撮影\n（着用して来店）" },
      { want: "撮影とお参りを\n同じ日に済ませたい", menu: "七五三撮影＆お参り\n1DAYプラン" },
    ],
    optionsAsTable: true,
    optionsNote:
      "撮影メニューは複数選ぶこともできます。この4つにないプランを希望する場合は、スタジオへの問い合わせが必要です。",
    stepsHeading: "WEB予約の流れ",
    stepsNote:
      "予約ページの案内では、支払いにクレジットカードとバーコード決済が使えます。現金での決済はできません。",
    faqsHeading: "予約の前によくある疑問",
    options: [
      {
        title: "七五三撮影パック",
        description:
          "スタジオ内での撮影プランです。スタジオの着物でも、持ち込みの着物でも撮影できます。",
      },
      {
        title: "七五三お参りプラン",
        description:
          "スタジオでの撮影と、お参りの日の着物レンタルの両方が付いたプランです。",
      },
      {
        title: "七五三撮影（着用して来店）",
        description:
          "来店したときの服装で撮影するプランです。事前に着てから来店します。",
      },
      {
        title: "七五三撮影＆お参り1DAYプラン",
        description:
          "撮影とお参りを1日で済ませるプランです。家族の日程を合わせにくい場合に向いています。公式サイトでは、2026年12月29日までのキャンペーンとして案内されています。",
      },
    ],
    steps: [
      {
        title: "プランを選ぶ",
        description: "「子供撮影」の中から七五三のメニューを選び、店舗を選びます",
      },
      { title: "人数を入力する", description: "" },
      { title: "お客様名を入力する", description: "" },
      { title: "内容を確認する", description: "" },
      { title: "完了", description: "" },
    ],
    faqs: [
      {
        question: "撮影にはどのくらい時間がかかりますか。",
        answer:
          "公式サイトの案内では、1家族につき1時間の撮影時間が確保されています。撮影には、カメラマンのほかに、家族をサポートするスタッフが付きます。",
      },
      {
        question: "自分の着物を持ち込めますか。",
        answer:
          "七五三撮影パックは、スタジオの着物でも、持ち込みの着物でも撮影できます。",
      },
      {
        question: "店舗はどこにありますか。",
        answer:
          "愛知県、岐阜県、三重県にあります。予約フォームでは、地域（名古屋、尾張、三河、岐阜、三重）を選んでから店舗を選びます。",
      },
      {
        question: "予約のあとで、日時を変更できますか。",
        answer:
          "予約ページに、予約の変更とキャンセルの案内があります。手続きの方法と期限は、予約ページで確認してください。",
      },
    ],
  },
];
