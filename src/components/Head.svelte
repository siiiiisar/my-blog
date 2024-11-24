<script lang="ts">
	import { page } from '$app/stores';

	export let pageTitle: string;
	export let description: string = 'siiiiisarの雑多なブログです。';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:locale" content="ja_JP" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={$page.url.origin + '/ogp.png'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@siiiiisar" />
</svelte:head>
