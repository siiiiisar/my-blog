<script lang="ts">
	import { page } from '$app/state';

	const message = page.status === 404 ? 'Welcome!' : 'Sorry, something went wrong.';
</script>

<h1>
	{page.status}
</h1>
<div>{message}</div>
