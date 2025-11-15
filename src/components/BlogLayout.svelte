<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageData } from '../routes/[slug]/$types';
	import { page } from '$app/stores';
	import Tag from './Tag.svelte';

	export let data: PageData;
	let url = $page.url.href;
	let copied = false;

	const copyToClipboard = () => {
		navigator.clipboard.writeText(url);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	};
</script>

<article>
	<header class="px-20 py-10 text-center">
		<h1>
			<span class="text-lg font-bold lg:text-2xl">
				{data.title}
			</span>
		</h1>
		<div class="mt-5">
			<span class="text-sm tracking-wider text-gray-500">
				{dayjs(data.publishedAt).format('YYYY/MM/DD')} 公開
			</span>
		</div>
		<div class="mt-5 flex justify-center space-x-4">
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
				class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Twitterでシェア"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 512 512"
					fill="currentColor"
				>
					<path
						d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
					/>
				</svg>
			</a>
			<button
				class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
				on:click={copyToClipboard}
				aria-label="URLをコピー"
			>
				{#if copied}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-clipboard-check"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"
						/>
						<path
							d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"
						/>
						<path
							d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-clipboard"
						viewBox="0 0 16 16"
					>
						<path
							d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"
						/>
						<path
							d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</header>
	<div class="sm:p-5 xl:mx-60 2xl:p-10">
		<div class="flex">
			{#if data.meta?.tags && data.meta.tags.length > 0}
				<div class="mb-2 flex flex-wrap">
					{#each data.meta.tags as tag}
						<div class="mb-2 mr-2">
							<Tag href={`/tags/${tag.id}`}>{tag.name}</Tag>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div class="2xl:grid 2xl:grid-cols-4 2xl:gap-8">
			<slot />
		</div>
	</div>
</article>
