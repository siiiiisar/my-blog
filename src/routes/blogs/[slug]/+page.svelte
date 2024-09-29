<script lang="ts">
	import CommonLayout from '../../../components/CommonLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<CommonLayout title={data.title}>
	<article class="znc p-16 rounded-lg bg-white">
		{@html data.content}
	</article>
</CommonLayout>
