import type { PageServerLoad } from './$types';
import { buildSeo } from '$lib/seo';
import { listBy } from '$lib/server/content/blog-repository';

export const load: PageServerLoad = async () => {
	const list = await listBy();

	return {
		...list,
		seo: buildSeo({
			title: 'Blog'
		})
	};
};

export const prerender = true;
