<script lang="ts">
	import BlogLayout from '../../../components/BlogLayout.svelte';
	import type { PageData } from './$types';
	import TableOfContents from './components/TableOfContents.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<BlogLayout blog={data}>
	<aside class="mb-5 2xl:order-last">
		<TableOfContents />
	</aside>
	<section class="znc slide-enter-content">
		<!-- eslint-disable -->
		{@html data.content}
	</section>
</BlogLayout>
