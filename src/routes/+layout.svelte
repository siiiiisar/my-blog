<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Head from '../components/Head.svelte';
	import { page } from '$app/state';
</script>

<Head {...page.data.seo} />
<Header />
<main class="of-x-hidden px-7 py-10">
	<div class="grid-bg"></div>
	<div class="content m-auto mb-8">
		<slot />
	</div>
</main>
<Footer />

<style>
	.grid-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-image:
			linear-gradient(to right, #8882 1px, transparent 1px),
			linear-gradient(to bottom, #8882 1px, transparent 1px);
		background-size: 60px 60px;
	}
</style>
