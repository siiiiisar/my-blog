<script lang="ts">
	import type { BlogList } from '$lib/content/blog';
	import BlogCard from './BlogCard.svelte';

	export let data: BlogList;
</script>

<ul>
	{#each data.contents as content}
		<BlogCard {content} />
	{/each}
</ul>
