<script lang="ts">
	import type { Blog } from '$lib/microcms';
	import { page } from '$app/stores';

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
	<div class="p-5 bg-violet-300">
		<a href="blogs/{content.id}">
			<p class="mb-2 font-bold tracking-tight text-lg">
				{content.title}
			</p>
		</a>
		<p class="mb-3 font-normal text-sm">{content.createdAt}</p>
	</div>
</div>
