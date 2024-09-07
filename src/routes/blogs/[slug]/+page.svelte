<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Article</h1>
<p>ブログの内容</p>
<div>
	{@html data.content}
</div>
