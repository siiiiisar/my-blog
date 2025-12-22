import { getListByTagId } from '$lib/microcms/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const list = await getListByTagId(params.slug, { limit: 100 });

	return {
		...list,
		seo: {
			pageTitle: `#${params.slug} | siiiiisar.blog`,
			description: `タグ「${params.slug}」の記事一覧`
		}
	};
};

export const prerender = true;
