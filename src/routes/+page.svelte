<script lang="ts">
	import GradientText from '../components/GradientText.svelte';
	import Head from '../components/Head.svelte';

	const pageTitle: string = 'Home';
</script>

<Head {pageTitle} />

<div>
	<h1 class="mt-16 text-3xl font-bold">
		Hi! I'm <GradientText text="Shunsuke Ueda" /> ✌🏻
	</h1>
	<br />
	<p class="mt-6 text-xl">
		京都で働くソフトウェアエンジニアです。
		<br />
		バックエンドを中心に備忘録がメインのブログです。
	</p>
</div>
