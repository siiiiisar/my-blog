<script lang="ts">
	import BlogLayout from '../../components/BlogLayout.svelte';
	import Head from '../../components/Head.svelte';
	import type { PageData } from './$types';
	import TableOfContents from '../../components/TableOfContents.svelte';

	export let data: PageData;
</script>

{#if data.meta !== undefined}
	<Head pageTitle={data.title} description={data.meta.description} />
{/if}
<svelte:head>
	<script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<BlogLayout {data}>
	<aside class="mb-5 2xl:order-last">
		<TableOfContents />
	</aside>
	<section class="znc p-6 lg:p-16 sm:p-10 rounded-lg bg-white xl:col-span-3 border border-gray-200">
		<!-- eslint-disable -->
		{@html data.content}
	</section>
</BlogLayout>
