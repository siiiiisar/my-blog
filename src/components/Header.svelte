<script>
	import GradientText from './GradientText.svelte';
</script>

<header class="sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
	<div class="container mx-auto flex items-center justify-between p-5 text-lg">
		<a class="flex items-center font-medium" href="/">
			<span class="text-3xl font-bold"><GradientText text="siiiiisar"></GradientText></span>
		</a>
		<nav class="flex items-center space-x-6">
			<a href="/about" class="text-gray-600 transition-colors hover:text-gray-900"> About </a>
		</nav>
	</div>
</header>
