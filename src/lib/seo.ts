import { App } from '$config/app';

const DEFAULT_DESCRIPTION =
	'京都で働くソフトウェアエンジニアです。バックエンドを中心に備忘録がメインのブログです。';
const DEFAULT_OG_IMAGE_PATH = '/ogp.webp';

export type Seo = {
	pageTitle: string;
	description: string;
	ogImage: string;
};

type BuildSeoInput = {
	title?: string;
	description?: string;
	ogImage?: string;
};

export const defaultSeo: Seo = {
	pageTitle: App.name,
	description: DEFAULT_DESCRIPTION,
	ogImage: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH)
};

export function buildSeo(input: BuildSeoInput = {}): Seo {
	return {
		pageTitle: input.title ? `${input.title} | ${App.name}` : defaultSeo.pageTitle,
		description: input.description ?? defaultSeo.description,
		ogImage: input.ogImage ? toAbsoluteUrl(input.ogImage) : defaultSeo.ogImage
	};
}

function toAbsoluteUrl(pathOrUrl: string): string {
	return new URL(pathOrUrl, App.url).toString();
}
