<script lang="ts">
	import type { PageData } from "./$types";
	import BlogCard from "../../components/BlogCard.svelte";

  export let data: PageData;
</script>

<h1>Blogs</h1>
<p>ブログ</p>
{#each data.contents as content}
  <BlogCard {content}/>
{/each}
