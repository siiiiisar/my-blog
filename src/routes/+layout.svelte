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
