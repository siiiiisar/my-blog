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

<article class="relative bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
	<header class="mb-5 aspect-h-9 aspect-w-16">
		<a href={content.id}>
			<img
				class="rounded-t-lg h-full w-full object-cover object-center"
				src={content.eyecatch?.url ?? $page.url.origin + '/blog_no_image.jpg'}
				alt={content.title}
				loading="lazy"
			/>
		</a>
	</header>
	<h2 class="mb-10 mx-5 font-bold text-lg line-clamp-3">
		<a href={content.id}>
			{content.title}
		</a>
	</h2>
	<footer class="absolute left-5 bottom-2">
		<p class="text-sm text-gray-500">{dayjs(content.publishedAt).fromNow()}</p>
	</footer>
</article>
