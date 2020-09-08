<script>
	import Logo from '../components/header/logo.svelte';
	import Favicons from '../components/header/favicons.svelte';
</script>
<footer>
	<div class="container w-full px-4 md:px-8 py-8 pb-24 max-w-6xl mx-auto flex items-center ">
		<div class="w-full mx-0 sm:mx-6">
			<div class="w-full mx-auto flex flex-wrap items-center">
				<div class="flex w-full md:w-1/2 justify-center md:justify-start text-teal-900 font-extrabold py-4">
					<Logo/>
				</div>
				<div class="flex w-full md:w-1/2 justify-center md:justify-start">

					<div class="flex flex-wrap md: flex-no-wrap w-full md:w-1/2 items-center justify-center py-4">
						<Favicons/>
					</div>
				</div>
			</div>

		</div>
	</div>
</footer>
