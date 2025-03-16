<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageData } from '../routes/[slug]/$types';

	export let data: PageData;
</script>

<article>
	<header class="px-20 py-10 text-center">
		<h1>
			<span class="text-lg lg:text-2xl font-bold">
				{data.title}
			</span>
		</h1>
		<div class="mt-5">
			<span class="text-sm text-gray-500 tracking-wider">
				{dayjs(data.publishedAt).format('YYYY/MM/DD')} 公開
			</span>
		</div>
	</header>
	<div class="sm:p-5 xl:mx-60 2xl:p-10">
		<div class="flex">
			{#if data.meta !== undefined && data.meta.tags !== undefined}
				{#each data.meta.tags as tag}
					<div class="mr-2 mb-5 px-3 py-1 bg-white rounded-3xl border border-grey-200">
						<span class="text-sm text-gray-500">{tag.name}</span>
					</div>
				{/each}
			{/if}
		</div>
		<div class="2xl:grid 2xl:grid-cols-4 2xl:gap-8">
			<slot />
		</div>
	</div>
</article>
