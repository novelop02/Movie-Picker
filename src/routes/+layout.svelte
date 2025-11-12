<script lang="ts">
	export let data;
    import { goto, invalidateAll } from "$app/navigation";
	import { getUserData } from "$lib/userInfo";
	import "../app.css";
    import { page } from "$app/stores";

	let {supabase,session} = data
	$: ({supabase,session} = data)
	let profile:any = {}
	// session is null, if session is null we have no user, if its not null, we have a user
	supabase.auth.onAuthStateChange(async (event,session) => {
		if(event === "SIGNED_IN"){
			await invalidateAll();
		}
		if(event === "SIGNED_OUT"){
			await goto("login");
			invalidateAll();
		}
	});
	page.subscribe(async () => {
  		profile = await getUserData(supabase, session);
	});
</script>


<!--Navbar-->
<nav class="navbar bg-base-100 shadow-md px-4 max-w-3xl mx-auto justify-between">
	<!--Left side of navbar-->
	<div>
		<a href="/" class="btn btn-ghost text-xl text-primary">MoviePicker</a>
		{#if session !== null}
			<a href="/{session.user.email}" class="btn btn-ghost">Mi Perfil</a>
			<a href="/roulette" class="btn btn-ghost 2xl">Ruleta</a>
		{/if}
	</div>
	<!--Right side of navbar-->
	<div class="flex items-center space-x-4">
  		{#if session == null}
    		<a class="btn btn-ghost text-xl" href="/login">Login</a>
		{:else}
			{#if profile.name != "" || profile.name == undefined}
				<div class="flex items-center bg-primary text-white px-4 py-1 rounded-full shadow-md">
				<span class="font-semibold text-lg">{profile.name}</span>
				</div>
			{/if}
   			<button class="btn btn-ghost ml-2" on:click={async () => await supabase.auth.signOut()}>Logout</button>
 		{/if}
	</div>
</nav>

<slot></slot>