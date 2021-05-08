<script>
	import { stores } from '@sapper/app';
	import { headerStore } from "../../stores";
	import A from "../ui-elements/a.svelte";
	import Logo from "../logo.svelte";
	import ResponsiveMenu from "./responsive-menu.svelte";
	import ScrollProgressBar from "../blog-post/scroll-progress-bar.svelte";
	import Hamburger from './Hamburger.svelte';
	import Search from "./search.svelte";
	import Favicons from "../favicons.svelte";

	const { page } = stores();
	console.log($page.path);
	$: isOpen=$headerStore.header.isOpen;
	$: isArticle = $page.path.startsWith("/blog");
	$: isHeaderVisible = true;//!$headerStore.header.isTransparent;
	$: isSearchVisible = $page.path === "/blog";
	$: console.log(isOpen);

	$: if ($page.path !== "/") {
		headerStore.setHeaderTransparent(false);
		}


	const projectsMenu = {
		label: "Projects",
		svgPath:
		"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
		items: [

			{
				label: "Blog",
				description: "A collection of random articles.",
				href: "/blog",
				svgPath: "M4,10 L12,10 L12,12 L4,12 L4,10 L4,10 Z M4,14 L12,14 L12,16 L4,16 L4,14 L4,14 Z M4,4 L12,4 L12,8 L4,8 L4,4 L4,4 Z M16,2 L16,1 L16,0 L0,0 L0,1 L0,1 L0,17.0057979 C0,18.656688 1.34320226,20 3.00012623,20 L17,20 C18.6534829,20 20,18.6601943 20,17.0074602 L20,3 L20,2 L16,2 L16,2 L16,2 Z M16,4 L16,17.0066023 C16,17.5552407 16.4438648,18 17,18 C17.5522847,18 18,17.5553691 18,16.9991283 L18,4 L16,4 L16,4 L16,4 Z M2,2 L14,2 L14,17.0057979 C14,17.3541355 14.0597981,17.6887794 14.1697239,18 L3.00748397,18 C2.44892021,18 2,17.5552407 2,17.0066023 L2,2 L2,2 L2,2 L2,2 Z",
				},
			{
				label: "About Me",
				description: "",
				href: "/about",
				svgPath: "",
				},
			{
				label: "Widgets",
				description: "Various components (written in svelte)",
				href: "/widgets",
				svgPath: "M 10 20 C 15.5228 20 20 15.5228 20 10 C 20 4.47715 15.5228 0 10 0 C 4.47715 0 0 4.47715 0 10 C 0 15.5228 4.47715 20 10 20 Z M 7.87868 7.87868 L 15.6569 4.34315 L 12.1213 12.1213 L 4.34315 15.6569 L 7.87868 7.87868 Z M 10 11 C 10.5523 11 11 10.5523 11 10 C 11 9.44772 10.5523 9 10 9 C 9.44772 9 9 9.44772 9 10 C 9 10.5523 9.44772 11 10 11 Z",
				}
			]
		};

</script>
<style>
</style>

{#if isHeaderVisible}
	<div class:transparent={$headerStore.header.isTransparent} class='circuit-board order-1'>
		<div class="block w-screen md:inline-flex justify-between items-center p-2">
			<div class="flex-1 w-screen md:w-auto inline-flex justify-around items-center text-gray-200 p-2">
				<div class="w-1/3 md:w-full flex justify-start">
					<Favicons />
					{#if isSearchVisible}
						<Search value={1} />
					{/if}
				</div>
				<div class="w-1/3 md:w-full flex justify-center">
					<Logo />
				</div>
				<Hamburger on:click={headerStore.setHeaderOpen(!(isOpen===true)?true:false)} />
			</div>
			<ResponsiveMenu menu={projectsMenu} />
		</div>
		{#if isSearchVisible}
			<Search value={2} />
		{/if}


		{#if isArticle && process.browser}
			<ScrollProgressBar />
		{/if}
	</div>
{/if}
