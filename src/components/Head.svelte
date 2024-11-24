<script lang="ts">
	import { page } from '$app/stores';
	import { App } from '$config/app';

	export let pageTitle: string;
	export let description: string = 'siiiiisarの雑多なブログです。';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:locale" content="ja_JP" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:url" content={App.url + $page.url.pathname} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={App.url + '/ogp.webp'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@siiiiisar" />
</svelte:head>
