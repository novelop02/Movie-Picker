<script lang="ts">
	export let data;
    import { goto, invalidate, invalidateAll } from "$app/navigation";
	import "../app.css";
	import { page } from "$app/stores";
	import { get } from "svelte/store";
	import { profile } from "$lib/userInfo";

	let {supabase,session} = data
	$: ({supabase,session} = data)
	$: email = $page.params.email;
	let currentProfile = get(profile)

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

	async function saveProfile() { // obtienes el valor actual del store
        const { data: profileData } = await supabase
            .from("profiles")
            .select("*")
            .eq("email", email);

        if (profileData?.length === 0) {
            await supabase
            .from("profiles")
            .insert({
            ...currentProfile,
            user_id: session?.user?.id,
            email: session?.user?.email
            });
        } else {
            await supabase
            .from("profiles")
            .update(currentProfile)
            .eq("user_id", session?.user?.id);
        }
    }

    page.subscribe(async() =>{
        // Try to grab the current profile (noveloop_@outlook.com)
        const { data: profileData, error: profileError} = await supabase
            .from("profiles")
            .select("description, pokemon_ids, name, age")
            .eq('email',email)
        // if the profileData is undefined ADD the current user is noveloop_@outlook.com
        // MAKE A NEW PROFILE
        if(profileData?.length == 0 && email == session?.user?.email){
            // saveProfile
            console.log("SAVE PROFILE!");
            await saveProfile();
        }else if (profileData != null && profileData.length > 0){
            currentProfile = profileData[0]
        }else{
            console.log("NO PROFILE")
            currentProfile = {
                name: "",
                description: "This user does not have a profile yet!",
                pokemon_ids: [],
                age:0
            }
        }
        // if profileData exists and it has data in it
        // show noveloop_@outlook.com

        // If no data exists, say NO PROFILE
    });
</script>


<!--Navbar-->
<nav class="navbar bg-base-100 shadow-md px-4 max-w-3xl mx-auto justify-between">
	
		<!--Left side of navbar-->
		<div>
			<a href="/" class="btn btn-ghost text-xl text-primary">MoviePicker</a>
			{#if session !== null}
				<a href="/{session.user.email}" class="btn btn-ghost">Mi Perfil</a>
				<a href="/" class="btn btn-ghost 2xl">Ruleta</a>
			{/if}
		</div>
		<!--Right side of navbar-->
		<div>
			{#if session == null}
				<a class="btn btn-ghost text-xl" href="/login">Login</a>
			{:else}
				<span class="text-white text-lg ml-2">{$profile.name}</span>
				<button class= "ml-2" on:click={async()=> {await supabase.auth.signOut()}}>Logout</button>
			{/if}
			
		</div>
</nav>

<slot></slot>