<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageData } from '../routes/[slug]/$types';
	import { page } from '$app/stores';

	export let data: PageData;
	let url = $page.url.href;

	const copyToClipboard = () => {
		navigator.clipboard.writeText(url);
		alert('URLをコピーしました');
	};
</script>

<article>
	<header class="px-20 py-10 text-center">
		<h1>
			<span class="text-lg lg:text-2xl font-bold">
				{data.title}
			</span>
		</h1>
		<div class="mt-5">
			<span class="text-sm text-gray-500 tracking-wider">
				{dayjs(data.publishedAt).format('YYYY/MM/DD')} 公開
			</span>
		</div>
		<div class="flex justify-center mt-5">
			<a
				href="https://b.hatena.ne.jp/entry/"
				class="hatena-bookmark-button"
				data-hatena-bookmark-layout="touch"
				title="このエントリーをはてなブックマークに追加"
			>
				<img
					src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
					alt="このエントリーをはてなブックマークに追加"
					width="20"
					height="20"
					style="border: none;"
				/>
			</a>
			<script
				type="text/javascript"
				src="https://b.st-hatena.com/js/bookmark_button.js"
				charset="utf-8"
				async="async"
			></script>
			<a
				href="https://twitter.com/intent/tweet?url={url}&text={data.title}&via=siiiiisar"
				role="button"
				class="inline-block p-2"
			>
				<span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
						<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
						<path
							d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
						/>
					</svg>
				</span>
			</a>
			<!-- urlをコピーするボタン -->
			<button class="inline-block p-2" on:click={copyToClipboard}>
				<span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M18 2H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-2 14H8V4h8zm-6 4h4v2h-4z"
						/>
					</svg>
				</span>
			</button>
		</div>
	</header>
	<div class="sm:p-5 xl:mx-60 2xl:p-10">
		<div class="flex">
			{#if data.meta !== undefined && data.meta.tags !== undefined}
				{#each data.meta.tags as tag}
					<div class="mr-2 mb-5 px-3 py-1 bg-white rounded-3xl border border-grey-200">
						<span class="text-sm text-gray-500">{tag.name}</span>
					</div>
				{/each}
			{/if}
		</div>
		<div class="2xl:grid 2xl:grid-cols-4 2xl:gap-8">
			<slot />
		</div>
	</div>
</article>
