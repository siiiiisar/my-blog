<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import * as tocbot from 'tocbot';

	onMount(() => {
		tocbot.init({
			tocSelector: '.toc',
			contentSelector: '.znc',
			headingSelector: 'h1, h2, h3'
		});
	});

	onDestroy(() => {
		tocbot.destroy();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.27.4/tocbot.css" />
</svelte:head>

<div class="p-5 rounded-lg bg-white sticky top-[100px] border border-gray-200">
	<details>
		<summary class="p-2">目次</summary>
		<nav class="toc" />
	</details>
</div>
