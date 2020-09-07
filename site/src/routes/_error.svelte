<script>
	import ErrCanvas from './ErrCanvas.svelte';
	import { onMount } from 'svelte';
	import headerStore from "../stores/header.js";

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
	const title =	status === 500 ? "Updates available..." : "Don't worry, we can fix this.";
	headerStore.setHeaderTransparent(false);

	let m = { x: 0, y: 0 };
	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
		}

</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex flex-col" on:mousemove={handleMousemove}>
	<section >
		<ErrCanvas bind:position={m}>
			<h1>
				{#if status === 500}
				🎉 A new version is available
				{:else}Error: {status} {error.message}
				{/if}
			</h1>
			{#if status === 500}
				<div class="flex justify-center">
					<a href='.' on:click={()=>window.location.reload(true)}>
						Click here to update the site
					</a>
				</div>
			{/if}

			{#if dev && error.stack}
				<pre>{error.stack}</pre>
			{/if}

		</ErrCanvas>

	</section>
</div>

