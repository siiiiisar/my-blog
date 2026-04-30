import type { PageServerLoad } from './$types';
import { buildSeo } from '$lib/seo';
import { findBy } from '$lib/server/content/blog-repository';
import { transformArticleHtml } from '$lib/server/content/transform-article-html';

export const load: PageServerLoad = async ({ params }) => {
	const blog = await findBy(params.slug);
	const transformedContent = await transformArticleHtml(blog.content);

	return {
		...blog,
		content: transformedContent,
		seo: buildSeo({
			title: blog.title,
			description: blog.meta?.description,
			ogImage: blog.meta?.image?.url ?? blog.eyecatch?.url
		})
	};
};

export const prerender = 'auto';
