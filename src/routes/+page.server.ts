import type { PageServerLoad } from './$types';
import { listBy } from '$lib/server/content/blog-repository';

export const load: PageServerLoad = async () => {
	return await listBy();
};

export const prerender = true;
