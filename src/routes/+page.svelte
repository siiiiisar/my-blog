<script lang="ts">
	import type { PageData } from './$types';
	import BlogCard from '../components/BlogCard.svelte';
	import CommonLayout from '../components/CommonLayout.svelte';
	import Head from '../components/Head.svelte';

	export let data: PageData;
	const pageTitle: string = 'siiiiisar.blog';
</script>

<Head {pageTitle} />

<CommonLayout>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
		{#each data.contents as content}
			<BlogCard {content} />
		{/each}
	</div>
</CommonLayout>
