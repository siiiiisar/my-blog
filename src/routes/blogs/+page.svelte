<script lang="ts">
	import type { PageData } from './$types';
	import BlogCard from '../../components/BlogCard.svelte';
	import CommonLayout from '../../components/CommonLayout.svelte';

	export let data: PageData;
</script>

<CommonLayout title='Blogs'>
	<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
		{#each data.contents as content}
			<BlogCard {content} />
		{/each}
	</div>
</CommonLayout>