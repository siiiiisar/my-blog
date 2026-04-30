<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Head from '../components/Head.svelte';
	import { page } from '$app/stores';
</script>

<Head {...$page.data.seo} />
<Header />
<main class="of-x-hidden px-7 py-10">
	<slot />
</main>
<Footer />
