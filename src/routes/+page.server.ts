import type { PageServerLoad } from './$types';
import { getList } from '$lib/microcms/blog';

export const load: PageServerLoad = async () => {
	return await getList();
};

export const prerender = true;
