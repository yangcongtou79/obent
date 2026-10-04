export type Theme = {
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "kosodate",
    title: "子育て",
    description:
      "お宮参り・誕生日・七五三・入園入学など、子育ての節目を記録するための情報をまとめています。",
  },
];

export const themes: Theme[] = [
  {
    slug: "photo",
    categorySlug: "kosodate",
    title: "記念写真",
    description:
      "フォトスタジオの選び方から料金の仕組み、撮影当日の流れまで、記念写真にまつわる情報をまとめています。",
  },
];

export function getThemesByCategory(categorySlug: string): Theme[] {
  return themes.filter((t) => t.categorySlug === categorySlug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getTheme(
  categorySlug: string,
  themeSlug: string
): Theme | undefined {
  return themes.find(
    (t) => t.categorySlug === categorySlug && t.slug === themeSlug
  );
}
