import type { MicroCMSImage, MicroCMSQueries } from 'microcms-js-sdk';
import { microcmsClient } from './client';

type Tag = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	name: string;
};
type Metadata = {
	fieldId: string;
	title?: string;
	description?: string;
	image?: MicroCMSImage;
	tags?: Tag[];
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
	return await microcmsClient.get<BlogResponse>({
		endpoint: 'blogs',
		queries
	});
};

export const getListByTagId = async (tagId: string, queries?: MicroCMSQueries) => {
	const filters = [`meta.tags[contains]${tagId}`, queries?.filters].filter(Boolean).join('&&');

	return await microcmsClient.get<BlogResponse>({
		endpoint: 'blogs',
		queries: {
			...queries,
			filters
		}
	});
};

export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	return await microcmsClient.getListDetail<Blog>({
		endpoint: 'blogs',
		contentId: contentId,
		queries
	});
};
