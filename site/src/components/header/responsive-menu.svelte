<script>
	import A from '../ui-elements/a.svelte';
	import { stores } from '@sapper/app';
	import { headerStore } from "../../stores";
	import Logo from '../logo.svelte';
	export let menu;
	$:isOpen=$headerStore.header.isOpen;
	$:console.log(isOpen);
</script>
<div class="w-full md:w-1/3 md:inline-flex md:justify-around items-center">
	<div class="block w-full md:w-auto md:inline-flex text-gray-200">
		{#each menu.items as menuItem}
			<div type='button' class:hidden={!isOpen} on:mousedown={headerStore.setHeaderOpen(false)} class="text-sm md:flex p-3">
				<A href="{menuItem.href}" class="block mt-4 lg:inline-block md:mt-0 items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
					{menuItem.label}
				</A>
			</div>
		{/each}

	</div>
</div>
