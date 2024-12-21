<script>
	import GradientText from './GradientText.svelte';
</script>

<header>
	<div class="container mx-auto flex flex-wrap p-5 flex-col text-lg md:flex-row items-center">
		<a class="flex font-medium items-center base mb-4 md:mb-0" href="/">
			<span class="flex items-center font-bold">
				<GradientText text="siiiiisar.blog" />
			</span>
		</a>
		<nav class="md:ml-auto flex flex-wrap items-center justify-center font-bold">
			<a href="/about" class="mr-5">
				<GradientText text="About" />
			</a>
			<a href="https://github.com/siiiiisar" class="mr-5">
				<GradientText text="Github" />
			</a>
			<a href="https://x.com/siiiiisar" class="mr-5">
				<GradientText text="X" />
			</a>
		</nav>
	</div>
</header>
