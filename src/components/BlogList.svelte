<script lang="ts">
	import type { BlogList } from '$lib/content/blog';
	import BlogCard from './BlogCard.svelte';

	export let data: BlogList;
</script>

<ul>
	<div class="pointer-events-none relative h-20 select-none"></div>
	{#each data.contents as content}
		<BlogCard {content} />
	{/each}
</ul>
