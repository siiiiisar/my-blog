<script lang="ts">
	import type { PageData } from './$types';
	import BlogList from '../../components/BlogList.svelte';
	export let data: PageData;
</script>

<div class="pointer-events-none mb-8 select-none text-3xl">
	<span> Blog </span>
</div>
<BlogList blogs={data.contents} />
