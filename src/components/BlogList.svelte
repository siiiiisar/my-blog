<script lang="ts">
	import type { BlogList } from '$lib/content/blog';
	import BlogCard from './BlogCard.svelte';

	export let data: BlogList;
</script>

<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
	{#each data.contents as content}
		<BlogCard {content} />
	{/each}
</div>
