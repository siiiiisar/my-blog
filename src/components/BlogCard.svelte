<script lang="ts">
	import type { Blog } from '$lib/microcms';
	import { page } from '$app/stores';
	import dayjs from 'dayjs';

	export let content: Blog;
</script>

<li class="relative bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
	<div class="mb-5 aspect-h-9 aspect-w-16">
		<a href={content.id}>
			<img
				class="rounded-t-lg h-full w-full object-cover object-center"
				src={content.eyecatch?.url ?? $page.url.origin + '/blog_no_image.jpg'}
				alt={content.title}
				loading="lazy"
			/>
		</a>
	</div>
	<div class="mb-10 mx-5">
		<a href={content.id}>
			<p class="font-bold text-lg line-clamp-3">
				{content.title}
			</p>
		</a>
	</div>
	<div class="absolute left-5 bottom-2">
		<p class="text-sm text-gray-500">{dayjs(content.createdAt).format('YYYY-MM-DD')}</p>
	</div>
</li>
