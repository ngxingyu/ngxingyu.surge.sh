<script>
  import A from "../ui-elements/a.svelte";
  import MenuX from "./menux.svelte";

  export let onMenuClicked;
  export let activeMenu;
  export let menu;
</script>

<nav class="hidden md:flex justify-end flex-1 space-x-10">
  <MenuX
    isOpen={activeMenu === 'projects'}
    menu={menu}
    on:click={onMenuClicked('projects')} />
</nav>
