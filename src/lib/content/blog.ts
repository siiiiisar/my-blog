import type { MicroCMSImage } from 'microcms-js-sdk';

export type BlogTag = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	name: string;
};

export type BlogMetadata = {
	fieldId: string;
	title?: string;
	description?: string;
	image?: MicroCMSImage;
	tags?: BlogTag[];
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
	meta?: BlogMetadata;
};

export type BlogList = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: Blog[];
};
