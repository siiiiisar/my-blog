<script lang="ts">
	import dayjs from 'dayjs';
	import Tag from './Tag.svelte';
	import type { Blog } from '$lib/content/blog';

	export let blog: Blog;
</script>

<article>
	<header>
		<h1>
			{blog.title}
		</h1>
		<p class="mt-5 opacity-50">
			{dayjs(blog.publishedAt).format('YYYY/MM/DD')}
		</p>
	</header>
	<div class="flex">
		{#if blog.meta?.tags?.length}
			<div class="mb-2 flex flex-wrap">
				{#each blog.meta.tags as tag}
					<div class="mb-2 mr-2">
						<Tag href={`/tags/${tag.id}`}>{tag.name}</Tag>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div>
		<slot />
	</div>
</article>
