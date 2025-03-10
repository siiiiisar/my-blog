import { createClient, type MicroCMSImage, type MicroCMSQueries } from 'microcms-js-sdk';
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';

const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

type Metadata = {
	fieldId: string;
	title?: string;
	description?: string;
	image?: MicroCMSImage;
};
export type Blog = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	eyecatch?: MicroCMSImage;
	meta?: Metadata;
};
export type BlogResponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: Blog[];
};

export const getList = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogResponse>({
		endpoint: 'blogs',
		queries
	});
};

export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	return await client.getListDetail<Blog>({
		endpoint: 'blogs',
		contentId: contentId,
		queries
	});
};
