<script>
  import SeoHead from '../components/seo/head.svelte';
  import Header from '../components/header/index.svelte';
  import Footer from '../components/footer.svelte';
  import GlobalCSS from '../components/globalcss.svelte';
</script>
<GlobalCSS />

<SeoHead/>
<Header/>

<main>
	<slot></slot>
	<Footer />
</main>
