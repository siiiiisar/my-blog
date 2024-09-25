import type { PageServerLoad } from './$types';
import { getList } from '$lib/microcms';

export const load: PageServerLoad = async () => {
	return await getList();
};
