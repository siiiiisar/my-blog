<script lang="ts">
	import type { Blog } from '$lib/microcms';

	export let content: Blog;
</script>

<div class="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
	<div class="aspect-h-2 aspect-w-5">
		<a href="blogs/{content.id}">
			<img
				class="rounded-t-lg h-full w-full object-cover object-center"
				src={content.eyecatch?.url}
				alt={content.title}
				loading="lazy"
			/>
		</a>
	</div>
	<div class="p-5 bg-gradient-to-br from-violet-900 to-violet-900/50">
		<a href="blogs/{content.id}">
			<h5 class="mb-2 font-bold tracking-tight text-base">
				{content.title}
			</h5>
		</a>
		<p class="mb-3 font-normal text-base">{content.createdAt}</p>
	</div>
</div>
