import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = ({ params }) => {
	redirect(301, '/' + params.slug);
};

export const prerender = true;
