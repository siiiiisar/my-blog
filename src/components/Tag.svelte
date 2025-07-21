<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 transition-colors duration-300 hover:bg-gray-300"
>
	<slot />
</a>
