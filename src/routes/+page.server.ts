import type { PageServerLoad } from './$types';
import { getBlogList } from '$lib/server/content/blog-repository';

export const load: PageServerLoad = async () => {
	return await getBlogList();
};

export const prerender = true;
