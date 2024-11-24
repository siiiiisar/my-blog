<script lang="ts">
	import CommonLayout from '../../../components/CommonLayout.svelte';
	import Head from '../../../components/Head.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.meta !== undefined}
	<Head pageTitle={data.title} description={data.meta.description} />
{/if}

<CommonLayout title={data.title}>
	<article class="znc p-16 rounded-lg bg-white">
		{@html data.content}
	</article>
</CommonLayout>
