import type { PageServerLoad } from './$types';
import { getDetal } from '$lib/microcms';

export const load: PageServerLoad = async ({ params }) => {
	return await getDetal(params.slug);
};
