<script>
  import A from "../ui-elements/a.svelte";
  export let menuItem;
</script>


<A href="{menuItem.href}">
  <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{menuItem.svgPath}"/>
  </svg>
  <div>
    <p>
      {menuItem.label}
    </p>
  </div>
</A>
