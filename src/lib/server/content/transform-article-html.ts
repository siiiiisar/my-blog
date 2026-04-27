import { highlightCodeBlocksInHtml } from '$lib/server/content/highlight-code-blocks';
import { sanitizeArticleHtml } from '$lib/server/content/sanitize-article-html';

export async function transformArticleHtml(rawHtml: string): Promise<string> {
	const sanitizedHtml = sanitizeArticleHtml(rawHtml);
	return await highlightCodeBlocksInHtml(sanitizedHtml);
}
