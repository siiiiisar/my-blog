<script lang="ts">
	import type { PageData } from './$types';
	import BlogList from '../../../components/BlogList.svelte';
	export let data: PageData;
</script>

<BlogList blogs={data.contents} />
