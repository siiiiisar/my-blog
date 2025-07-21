<script lang="ts">
	import type { PageData } from './$types';
	import BlogList from '../../../components/BlogList.svelte';
	import CommonLayout from '../../../components/CommonLayout.svelte';
	import Head from '../../../components/Head.svelte';

	export let data: PageData;
	const pageTitle: string = 'siiiiisar.blog';
</script>

<Head {pageTitle} />

<CommonLayout>
	<BlogList {data} />
</CommonLayout>
