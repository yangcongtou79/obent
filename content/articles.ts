export type Article = {
  slug: string;
  category: string;
  theme: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
};

export const articles: Article[] = [
  {
    slug: "timing",
    category: "kosodate",
    theme: "photo",
    title: "七五三の記念写真はいつ撮るか",
    description:
      "前撮り・当日撮影・後撮りの特徴と、予約が取りやすい時期の目安を整理しました。",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
  },
  {
    slug: "cost",
    category: "kosodate",
    theme: "photo",
    title: "フォトスタジオの料金はどこで差が出るか",
    description:
      "撮影料・衣装・写真商品など料金の内訳と、予約前に確認しておくポイントをまとめました。",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
  },
  {
    slug: "plan",
    category: "kosodate",
    theme: "photo",
    title: "七五三の撮影プランの選び方",
    description:
      "代表的な4つのプランタイプの特徴と、それぞれが向いている家庭を比較します。",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
  },
  {
    slug: "school",
    category: "kosodate",
    theme: "english",
    title: "小学校の英語は、何年生で何を学ぶか",
    description:
      "3・4年生の外国語活動と5・6年生の教科としての英語の違いを、授業時数と学習内容から整理しました。",
    publishedAt: "2026-10-06",
    updatedAt: "2026-10-06",
  },
  {
    slug: "compare",
    category: "kosodate",
    theme: "english",
    title: "通学の教室とオンライン英会話の違い",
    description:
      "送迎・時間割・学習形式・親の関わりなど、通学とオンラインの特徴を比較しました。",
    publishedAt: "2026-10-06",
    updatedAt: "2026-10-06",
  },
  {
    slug: "consultation",
    category: "kosodate",
    theme: "english",
    title: "オンライン英会話の無料相談で確認すること",
    description:
      "入会前の無料相談や体験で確認しておきたい項目と、家庭側の準備をまとめました。",
    publishedAt: "2026-10-06",
    updatedAt: "2026-10-06",
  },
];

export function getArticlesByTheme(
  category: string,
  theme: string
): Article[] {
  return articles.filter(
    (a) => a.category === category && a.theme === theme
  );
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
