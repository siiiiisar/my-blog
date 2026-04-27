import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { Blog, BlogList } from '$lib/content/blog';
import { microcmsClient } from '$lib/server/cms/microcms-client';

const BLOGS_ENDPOINT = 'blogs';

export async function listBy(tagId?: string, queries?: MicroCMSQueries): Promise<BlogList> {
	const filters = [tagId ? `meta.tags[contains]${tagId}` : undefined, queries?.filters]
		.filter(Boolean)
		.join('&&');

	try {
		return await microcmsClient.get<BlogList>({
			endpoint: BLOGS_ENDPOINT,
			queries: {
				...queries,
				...(filters ? { filters } : {})
			}
		});
	} catch (error) {
		console.error('[microcms] failed to fetch blog list', error);
		return createEmptyBlogList();
	}
}

export async function findBy(contentId: string, queries?: MicroCMSQueries): Promise<Blog> {
	return await microcmsClient.getListDetail<Blog>({
		endpoint: BLOGS_ENDPOINT,
		contentId,
		queries
	});
}

function createEmptyBlogList(): BlogList {
	return {
		totalCount: 0,
		offset: 0,
		limit: 0,
		contents: []
	};
}
