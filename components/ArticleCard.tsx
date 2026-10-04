import Link from "next/link";
import type { Article } from "@/content/articles";

interface ArticleCardProps {
  article: Article;
}

function buildArticleUrl(article: Article): string {
  return `/${article.category}/${article.theme}/guide/${article.slug}/`;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
      <Link href={buildArticleUrl(article)} className="block p-5 hover:bg-stone-50 dark:hover:bg-zinc-800 transition-colors">
        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 leading-snug mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {article.description}
        </p>
        <time
          dateTime={article.publishedAt}
          className="block mt-3 text-xs text-zinc-400 dark:text-zinc-500"
        >
          {article.publishedAt.replace(/-/g, "/")}
        </time>
      </Link>
    </article>
  );
}
