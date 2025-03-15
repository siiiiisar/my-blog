<script lang="ts">
	import dayjs from 'dayjs';

	export let title: string;
	export let publishedAt: string;
</script>

<article>
	<header class="px-20 py-10 text-center">
		<h1>
			<span class="text-lg lg:text-2xl font-bold">
				{title}
			</span>
		</h1>
		<div class="mt-5">
			<span class="text-sm text-gray-500 tracking-wider">
				{dayjs(publishedAt).format('YYYY/MM/DD')} 公開
			</span>
		</div>
	</header>
	<div class="sm:p-5 xl:mx-60 2xl:p-10 2xl:grid 2xl:grid-cols-4 2xl:gap-8">
		<slot />
	</div>
</article>
