<script lang="ts">
	import type { Blog } from '$lib/microcms/blog';
	import { page } from '$app/stores';
	import dayjs from 'dayjs';
	import 'dayjs/locale/ja';
	import relativeTime from 'dayjs/plugin/relativeTime';

	export let content: Blog;

	dayjs.locale('ja');
	dayjs.extend(relativeTime);
</script>

<article
	class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
	<header class="aspect-h-9 aspect-w-16 overflow-hidden">
		<a href={content.id}>
			<img
				class="h-full w-full rounded-t-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
				src={content.eyecatch?.url ?? $page.url.origin + '/blog_no_image.jpg'}
				alt={content.title}
				loading="lazy"
			/>
		</a>
	</header>
	<div class="flex-1 p-5">
		<h2 class="mb-2 line-clamp-3 text-lg font-bold">
			<a href={content.id}>
				{content.title}
			</a>
		</h2>
	</div>
	<footer class="px-5 pb-4">
		<p class="text-sm text-gray-500">{dayjs(content.publishedAt).fromNow()}</p>
	</footer>
</article>
