import type { PageServerLoad } from './$types';
import { getDetail } from '$lib/microcms/blog';

export const load: PageServerLoad = async ({ params }) => {
	const blog = await getDetail(params.slug);

	return {
		...blog,
		seo: {
			pageTitle: blog.title,
			description: blog.meta?.description,
			ogImage: blog.meta?.image?.url ?? blog.eyecatch?.url
		}
	};
};

export const prerender = true;
