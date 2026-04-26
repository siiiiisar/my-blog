import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { Blog, BlogList } from '$lib/content/blog';
import { microcmsClient } from '$lib/server/cms/microcms-client';

const BLOGS_ENDPOINT = 'blogs';

export async function getBlogList(queries?: MicroCMSQueries): Promise<BlogList> {
	try {
		return await microcmsClient.get<BlogList>({
			endpoint: BLOGS_ENDPOINT,
			queries
		});
	} catch (error) {
		console.error('[microcms] failed to fetch blog list', error);
		return createEmptyBlogList();
	}
}

export async function getBlogListByTagId(
	tagId: string,
	queries?: MicroCMSQueries
): Promise<BlogList> {
	const filters = [`meta.tags[contains]${tagId}`, queries?.filters].filter(Boolean).join('&&');

	try {
		return await microcmsClient.get<BlogList>({
			endpoint: BLOGS_ENDPOINT,
			queries: {
				...queries,
				filters
			}
		});
	} catch (error) {
		console.error('[microcms] failed to fetch tagged blog list', error);
		return createEmptyBlogList();
	}
}

export async function getBlogDetail(contentId: string, queries?: MicroCMSQueries): Promise<Blog> {
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
