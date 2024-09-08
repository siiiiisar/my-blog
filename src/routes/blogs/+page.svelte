<script lang="ts">
	import type { PageData } from './$types';
	import BlogCard from '../../components/BlogCard.svelte';

	export let data: PageData;
</script>

<h1>Blogs</h1>
<p>ブログ</p>
<div class="mx-auto max-w-screen-lg px-3 py-6">
	<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
		{#each data.contents as content}
			<BlogCard {content} />
		{/each}
	</div>
</div>