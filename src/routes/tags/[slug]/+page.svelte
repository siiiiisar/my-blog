<script lang="ts">
	import type { PageData } from './$types';
	import BlogList from '../../../components/BlogList.svelte';
	import CommonLayout from '../../../components/CommonLayout.svelte';
	export let data: PageData;
</script>

<CommonLayout>
	<BlogList {data} />
</CommonLayout>
