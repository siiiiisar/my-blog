<script lang="ts">
	export let title: string = '';
</script>

<article class="mx-auto max-w-screen-lg px-3 py-6">
	<header>
		<h1 class="text-center text-4xl m-10 font-bold">{title}</h1>
	</header>
	<slot />
</article>
