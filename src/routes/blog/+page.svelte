<script context="module" lang="ts">
  export interface Blog {
    title: string,
    createdAt: string,
    eyeCatchUrl: string
  }
</script>

<script lang="ts">
	import BlogCard from "../../components/BlogCard.svelte";

  // TODO APIで取得
  const blogList: Blog[] = [
    {
      title: "ブログタイトル",
      createdAt: "2024-08-14T14:54:08.384Z",
      eyeCatchUrl: "https://images.microcms-assets.io/assets/6b73b0467f254d3a9f5bf55dc020a88e/2af9e9fc33d24c07a9badbac57fd28fd/siiiiisar.webp"
    },
    {
      title: "ブログタイトル2",
      createdAt: "2024-08-15T14:54:08.384Z",
      eyeCatchUrl: "https://images.microcms-assets.io/assets/6b73b0467f254d3a9f5bf55dc020a88e/2af9e9fc33d24c07a9badbac57fd28fd/siiiiisar.webp"
    },
  ];
</script>

<h1>Blogs</h1>
<p>ブログ</p>
{#each blogList as blog}
  <BlogCard 
    {blog}
  />
{/each}
