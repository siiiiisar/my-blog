import { buildSeo } from '$lib/seo';
import { listBy } from '$lib/server/content/blog-repository';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const list = await listBy(params.slug, { limit: 100 });

	return {
		...list,
		seo: buildSeo({
			title: `#${params.slug}`,
			description: `タグ「${params.slug}」の記事一覧`
		})
	};
};

export const prerender = 'auto';
