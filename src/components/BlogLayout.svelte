<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageData } from '../routes/blogs/[slug]/$types';
	import Tag from './Tag.svelte';

	export let data: PageData;
</script>

<article>
	<header>
		<h1>
			{data.title}
		</h1>
		<p class="mt-5 opacity-50">
			{dayjs(data.publishedAt).format('YYYY/MM/DD')}
		</p>
	</header>
	<div>
		<div class="flex">
			{#if data.meta?.tags && data.meta.tags.length > 0}
				<div class="mb-2 flex flex-wrap">
					{#each data.meta.tags as tag}
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
	</div>
</article>
