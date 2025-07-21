<script lang="ts">
	import type { MicroCMSListResponse } from 'microcms-js-sdk';
	import type { Blog } from '../lib/microcms/blog';
	import BlogCard from './BlogCard.svelte';

	export let data: MicroCMSListResponse<Blog>;
</script>

<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
	{#each data.contents as content}
		<BlogCard {content} />
	{/each}
</div>
