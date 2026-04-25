import type { PageServerLoad } from './$types';
import { getDetail } from '$lib/microcms/blog';
import { sanitizeArticleHtml } from '$lib/sanitize-html/sanitizer';

export const load: PageServerLoad = async ({ params }) => {
	const blog = await getDetail(params.slug);

	return {
		...blog,
		content: sanitizeArticleHtml(blog.content),
		seo: {
			pageTitle: blog.title,
			description: blog.meta?.description,
			ogImage: blog.meta?.image?.url ?? blog.eyecatch?.url
		}
	};
};

export const prerender = 'auto';
