<script lang="ts">
	export let title: string = '';
</script>

<div class="mx-auto max-w-screen-lg px-3 py-6">
	{#if title !== ''}
		<h1 class="m-10 text-center text-4xl font-bold">{title}</h1>
	{/if}
	<slot />
</div>
