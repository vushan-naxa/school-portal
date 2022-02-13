<script>
	import { userLogin } from './stores'
	import Login from './components/Login.svelte'
	const handleLogout = () => {
		$userLogin = false;
	}
</script>

<main>
	<div class='flex h-screen justify-center items-center'>
		<div class="w-full max-w-xs ">
			{#if $userLogin === false}
			<Login />
			{:else}
			<button type="button" on:click={handleLogout}>Logout</button>
			{/if}
		</div>
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>