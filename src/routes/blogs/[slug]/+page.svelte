<script lang="ts">
	import CommonLayout from '../../../components/CommonLayout.svelte';
	import Head from '../../../components/Head.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.meta !== undefined}
	<Head pageTitle={data.title} description={data.meta.description} />
{/if}
<svelte:head>
  <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<CommonLayout title={data.title}>
	<article class="znc p-16 rounded-lg bg-white">
		{@html data.content}
	</article>
</CommonLayout>
