import type { PageServerLoad } from './$types';
import { getDetail } from '$lib/microcms/blog';
import { sanitizeArticleHtml } from '$lib/sanitize-html/sanitizer';
import { highlightCodeBlocksInHtml } from '$lib/server/content/highlight-code-blocks';

export const load: PageServerLoad = async ({ params }) => {
	const blog = await getDetail(params.slug);
	const sanitizedContent = sanitizeArticleHtml(blog.content);
	const highlightedContent = await highlightCodeBlocksInHtml(sanitizedContent);

	return {
		...blog,
		content: highlightedContent,
		seo: {
			pageTitle: blog.title,
			description: blog.meta?.description,
			ogImage: blog.meta?.image?.url ?? blog.eyecatch?.url
		}
	};
};

export const prerender = 'auto';
