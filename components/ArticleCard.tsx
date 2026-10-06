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
    <article className="article-card">
      <Link href={buildArticleUrl(article)} className="block p-5">
        <h3 className="text-base font-semibold leading-snug mb-2" style={{ color: "var(--text-on)" }}>
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {article.description}
        </p>
        <time
          dateTime={article.publishedAt}
          className="block mt-3 text-xs"
          style={{ color: "var(--text-dim)", opacity: 0.7 }}
        >
          {article.publishedAt.replace(/-/g, "/")}
        </time>
      </Link>
    </article>
  );
}
