import type { PageServerLoad } from './$types';
import { getDetail } from '$lib/microcms/blog';

export const load: PageServerLoad = async ({ params }) => {
	return await getDetail(params.slug);
};

export const prerender = true;
