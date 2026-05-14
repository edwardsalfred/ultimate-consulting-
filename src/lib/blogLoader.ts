import { marked } from 'marked';

export interface MarkdownPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  publishDate: string;
  excerpt: string;
  image: string;
  htmlContent: string;
  source: 'markdown';
}

const rawFiles: Record<string, string> = import.meta.glob(
  '../../content/blog/published/*.md',
  { eager: true, query: '?raw', import: 'default' }
) as Record<string, string>;

function formatDate(isoDate: string): string {
  if (!isoDate) return '';

  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;

  const [year, month, day] = parts.map(Number);

  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: raw };
  }

  const frontmatterStr = match[1];
  const content = match[2];

  const data: Record<string, string> = {};
  const lines = frontmatterStr.split(/\r?\n/);

  for (const line of lines) {
    const colonIdx = line.indexOf(':');

    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      data[key] = value;
    }
  }

  return { data, content };
}

function createExcerpt(content: string): string {
  return content
    .replace(/[#>*_\-\[\]()`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);
}

function parseMarkdownPost(
  filePath: string,
  rawContent: string
): MarkdownPost | null {
  try {
    const { data, content } = parseFrontmatter(rawContent);

    const slug =
      data.slug ||
      filePath.split('/').pop()?.replace('.md', '') ||
      '';

    const publishDateStr = data.publishDate || '';

    if (!publishDateStr) {
      return null;
    }

    const htmlContent = marked(content) as string;

    return {
      slug,
      title: data.title || 'Untitled',
      category: data.category || 'General',
      author: data.author || 'Ultimate Consulting',
      publishDate: publishDateStr,
      date: formatDate(publishDateStr),
      excerpt: data.excerpt || createExcerpt(content),
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

    if (post) {
      posts.push(post);
    }
  }

  posts.sort((a, b) => b.publishDate.localeCompare(a.publishDate));

  return posts;
}