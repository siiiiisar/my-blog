<script lang="ts">
	import { page } from '$app/stores';
	import { App } from '$config/app';

	export let pageTitle: string;
	export let description: string | undefined = undefined;
	export let ogImage: string | undefined = undefined;

	let metaDescription: string;
	let resolvedOgImage: string;

	$: metaDescription = description ?? 'siiiiisarの雑多なブログです。';
	$: resolvedOgImage = ogImage ?? App.url + '/ogp.webp';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta property="og:locale" content="ja_JP" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:url" content={App.url + $page.url.pathname} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content={resolvedOgImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@siiiiisar" />
</svelte:head>
