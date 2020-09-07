<script>
  export let description = "Xing Yu";
  /* export let image = ""; */
  /* export let imageAlt = ""; */
  export let keywords = "Computer Science, Mathematics";
  export let title = "XY's personal website";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="author" content="Xing Yu Ng">
  <meta name="description" content="{description}"/>
  <meta name="keywords" content="{keywords}"/>

  <slot/>
</svelte:head>
