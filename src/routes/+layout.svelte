<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Head from '../components/Head.svelte';
	import { page } from '$app/stores';

	const defaultSeo = {
		pageTitle: 'siiiiisar.blog',
		description:
			'京都で働くソフトウェアエンジニアです。バックエンドを中心に備忘録がメインのブログです。'
	};
</script>

<Head {...$page.data.seo ?? defaultSeo} />
<Header />
<main class="of-x-hidden px-7 py-10">
	<slot />
</main>
<Footer />
