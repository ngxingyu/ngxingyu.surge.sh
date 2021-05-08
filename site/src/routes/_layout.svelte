<script>
	import SeoHead from '../components/seo/head.svelte';
	import Header from '../components/header/index.svelte';
	import Footer from '../components/footer.svelte';
	import GlobalCSS from '../components/globalcss.svelte';
	import { headerStore } from '../stores';
</script>
<GlobalCSS />

<SeoHead/>
<div class="flex flex-col h-screen justify-between">
	<Header/>
  <main class="mb-auto order-2" on:click={headerStore.setHeaderOpen(false)}>
		<div class="font-sans leading-normal tracking-normal pb-10">
			<slot></slot>
		</div>
	</main>
	<Footer/>
</div>
