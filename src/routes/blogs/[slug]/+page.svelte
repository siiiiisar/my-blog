<script lang="ts">
	import CommonLayout from '../../../components/CommonLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<CommonLayout title={data.title}>
	<article class="markdown-body p-16 rounded-lg">
		{@html data.content}
	</article>
</CommonLayout>
