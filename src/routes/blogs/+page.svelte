<script lang="ts">
	import type { PageData } from './$types';
	import BlogCard from '../../components/BlogCard.svelte';
	import CommonLayout from '../../components/CommonLayout.svelte';
	import Head from '../../components/Head.svelte';

	export let data: PageData;
	const pageTitle: string = 'Blogs';
</script>

<Head {pageTitle} />

<CommonLayout title={pageTitle}>
	<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
		{#each data.contents as content}
			<BlogCard {content} />
		{/each}
	</div>
</CommonLayout>
