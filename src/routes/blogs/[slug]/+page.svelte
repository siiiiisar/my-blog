<script lang="ts">
	import CommonLayout from '../../../components/CommonLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<CommonLayout title='Article'>
	<div>
		{@html data.content}
	</div>
</CommonLayout>
