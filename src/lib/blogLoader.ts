import matter from 'gray-matter';
import { marked } from 'marked';

export interface MarkdownPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;        // formatted display date, e.g. "May 12, 2026"
  publishDate: string; // raw ISO date from frontmatter, e.g. "2026-05-12"
  excerpt: string;
  image: string;
  htmlContent: string;
  source: 'markdown';
}

/**
 * Vite's import.meta.glob loads every markdown file in content/blog/published
 * as raw text (thanks to the `?raw` suffix).
 * The glob path is relative to this file (src/lib/), so we go ../../content/...
 */
const rawFiles: Record<string, string> = import.meta.glob(
  '../../content/blog/published/*.md',
  { eager: true, query: '?raw', import: 'default' }
) as Record<string, string>;

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function parseMarkdownPost(filePath: string, rawContent: string): MarkdownPost | null {
  try {
    const { data, content } = matter(rawContent);
    const slug =
      data.slug ||
      filePath.split('/').pop()?.replace('.md', '') ||
      '';

    const htmlContent = marked(content) as string;

    return {
      slug,
      title: data.title || 'Untitled',
      category: data.category || 'General',
      author: data.author || 'Ultimate Consulting',
      publishDate: data.publishDate || '',
      date: data.publishDate ? formatDate(data.publishDate) : '',
      excerpt: data.excerpt || '',
      image: data.image || '',
      htmlContent,
      source: 'markdown',
    };
  } catch (err) {
    console.error(`Failed to parse markdown post: ${filePath}`, err);
    return null;
  }
}

export function loadMarkdownPosts(): MarkdownPost[] {
  const posts: MarkdownPost[] = [];

  for (const [filePath, rawContent] of Object.entries(rawFiles)) {
    const post = parseMarkdownPost(filePath, rawContent);
    if (post) posts.push(post);
  }

  // Sort newest first by publishDate
  posts.sort((a, b) => b.publishDate.localeCompare(a.publishDate));

  return posts;
}
