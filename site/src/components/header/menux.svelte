<script>
  import { slide } from "svelte/transition";
  import MenuItem from "./menu-item.svelte";

  export let isOpen = false;
  export let menu;

</script>
<div class="relative flex">
    <div in:slide={{duration: 200}} out:slide={{duration: 150}} >
            {#each menu.items as menuItem}
              <MenuItem {menuItem} />
            {/each}
    </div>
</div>
