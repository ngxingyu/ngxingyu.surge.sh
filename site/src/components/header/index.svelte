<script>
	import { stores } from '@sapper/app';
	import { headerStore } from "../../stores";
	import A from "../ui-elements/a.svelte";
	import Logo from "./logo.svelte";
	import MobileMenu from "./mobile-menu.svelte";
	import RightNav from "./right-nav.svelte";
	import ScrollProgressBar from "../blog-post/scroll-progress-bar.svelte";
	import Search from "./search.svelte";
  import Favicons from "./favicons.svelte";

	const { page } = stores();
	console.log($page.path);

	$: isArticle = $page.path.startsWith("/blog");
	$: isHeaderVisible = true;//!$headerStore.header.isTransparent;
	$: isSearchVisible = $page.path === "/";

	$: if ($page.path !== "/") {
		headerStore.setHeaderTransparent(false);
		}

	let activeMenu="";

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

	const onMenuClicked = menuId => () => {
		activeMenu = activeMenu === menuId ? "" : menuId;
		};
</script>

	<svelte:body on:click={() => (activeMenu = '')} />

	{#if isHeaderVisible}
  <div class:transparent={$headerStore.header.isTransparent}>
    <div>
      <div class="flex justify-between items-center text-white p-2">
        <div class={`${isSearchVisible ? 'flex' : 'hidden md:flex'} justify-start flex-1`}>
          <Favicons />
          {#if isSearchVisible}
          <Search />
          {/if}
        </div>
		<Logo />
		<!--<RightNav {onMenuClicked} {activeMenu} menu={projectsMenu} />-->
		<MobileMenu isOpen={activeMenu === 'mobile'} menuItems={projectsMenu.items} />
        <div class="-mr-2 -my-2 md:hidden">
          <button
            on:click|stopPropagation={onMenuClicked('mobile')}
            type="button"
            aria-label="Menu"
            class="inline-flex items-center justify-center p-2 rounded-md
            text-gray-400 focus:outline-none transition duration-150 ease-in-out">
            <svg
              focusable="false"
              aria-hidden="true"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {#if isArticle && process.browser}
      <ScrollProgressBar />
    {/if}
  </div>
{/if}
