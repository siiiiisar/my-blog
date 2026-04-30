import type { LayoutLoad } from './$types';
import { defaultSeo } from '$lib/seo';

export const load: LayoutLoad = () => ({
	seo: defaultSeo
});
