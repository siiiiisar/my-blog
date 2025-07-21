import { getList } from '$lib/microcms/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return await getList({ filters: `tags[contains]${params.slug}` });
};

export const prerender = false;
