<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<Header/>

<div class="mx-auto max-w-screen-lg px-3 py-6">
	<slot />
</div>

<Footer/>
