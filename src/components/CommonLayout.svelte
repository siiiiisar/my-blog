<script lang="ts">
	import GradientText from "./GradientText.svelte";

    export let title: string;
</script>

<div class="mx-auto max-w-screen-lg px-3 py-6">
    <h1 class="text-center text-4xl m-10">
        <GradientText text={title}/>
    </h1>
	<slot />
</div>