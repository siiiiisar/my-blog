<script lang="ts">
	import type { Blog } from '$lib/microcms';
	import { page } from '$app/stores';
	import dayjs from 'dayjs';

	export let content: Blog;
</script>

<div class="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
	<div class="aspect-h-9 aspect-w-16">
		<a href="blogs/{content.id}">
			<img
				class="rounded-t-lg h-full w-full object-cover object-center"
				src={content.eyecatch?.url ?? $page.url.origin + "/blog_no_image.jpg"}
				alt={content.title}
				loading="lazy"
			/>
		</a>
	</div>
	<div class="p-5 bg-slate-200">
		<a href="blogs/{content.id}">
			<p class="mb-2 font-bold tracking-tight text-lg">
				{content.title}
			</p>
		</a>
		<p class="text-sm text-gray-500">{dayjs(content.createdAt).format("YYYY-MM-DD")}</p>
	</div>
</div>
