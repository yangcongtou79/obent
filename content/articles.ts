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
    publishedAt: "2024-09-01",
    updatedAt: "2024-09-01",
  },
  {
    slug: "cost",
    category: "kosodate",
    theme: "photo",
    title: "フォトスタジオの料金はどこで差が出るか",
    description:
      "撮影料・衣装・写真商品など料金の内訳と、予約前に確認しておくポイントをまとめました。",
    publishedAt: "2024-09-01",
    updatedAt: "2024-09-01",
  },
  {
    slug: "plan",
    category: "kosodate",
    theme: "photo",
    title: "七五三の撮影プランの選び方",
    description:
      "代表的な4つのプランタイプの特徴と、それぞれが向いている家庭を比較します。",
    publishedAt: "2024-09-01",
    updatedAt: "2024-09-01",
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
