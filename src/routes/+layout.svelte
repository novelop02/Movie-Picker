<script>
	export let data;
    import { goto, invalidate, invalidateAll } from "$app/navigation";
	import { ThemeSupa } from "@supabase/auth-ui-shared";
	import {Auth} from '@supabase/auth-ui-svelte';
	import "../app.css";

	let {supabase,session} = data
	$: ({supabase,session} = data)

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
</script>


<!--Navbar-->
<div class="bg-base-100 justify-between fixed top-0 left-0 right-0">
	<div class="navbar max-w-3xl mx-auto justify-between">
		<!--Left side of navbar-->
		<div>
			<a href="/" class="btn btn-ghost text-xl">PokePage</a>
			{#if session !== null}
				<a href="/{session.user.email}" class="btn btn-ghost">My Page</a>
				<a href="/" class="btn btn-ghost 2xl">Ruleta</a>
			{/if}
		</div>
		<!--Right side of navbar-->
		<div>
			{#if session == null}
				<button on:click={()=>goto("/login")}>Login</button>
			{:else}
				<span class="text-white text-lg ml-2">{session.user.email}</span>
				<button class= "ml-2" on:click={async()=> {await supabase.auth.signOut()}}>Logout</button>
			{/if}
			
		</div>
	</div>
</div>

<slot></slot>