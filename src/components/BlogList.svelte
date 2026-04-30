<script lang="ts">
	import type { Blog } from '$lib/content/blog';
	import BlogCard from './BlogCard.svelte';

	export let blogs: Blog[];
</script>

<ul>
	<div class="pointer-events-none relative h-20 select-none"></div>
	{#each blogs as blog}
		<BlogCard content={blog} />
	{/each}
</ul>
