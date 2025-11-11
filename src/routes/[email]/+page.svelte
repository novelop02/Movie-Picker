<!--localhost:5173/example@outlook.com-->

<script lang="ts">
    import { page } from "$app/stores";
    import { getPokemonList,getPokemon } from "$lib/pokemonAPI";
    import { getUserData } from "$lib/userInfo.js";
    export let data;

    let {supabase,session} = data
    $: ({supabase,session} = data)
    $: email = $page.params.email;

    let pokemonlist: any = []
    let pokemonData: any = [] // [{pikachu},{bulbasaur}]
    let profile: any = {
        description: "",
        pokemon_ids: [1,2,3],
        name: ""
    };


    let isModalOpen = false;
    let searchInput = "";
    // profiles in supabase which has columns for a description, pokemonsid, email
    // from this page, we cas u se the supabase object to then save to our database (grab the data)

    async function refreshPokemonData() {
        pokemonData = [];
 
        profile.pokemon_ids.map(async (id:number)=>{
            // 1./ bulbassaur
            const data = await getPokemon(id.toString())
            
            if(pokemonData === undefined){
                pokemonData = [data];
            }else{
                pokemonData = [ ...pokemonData,data]
            }
        });
    }

    async function saveProfile(){
        const { data: profileData, error: profileError} = await supabase.from("profiles").select("*").eq('email',email)

        if(profileData?.length === 0){ // Create a new row
            const { data, error } = await supabase
                .from("profiles")
                .insert({...profile, user_id: session?.user?.id, email: session?.user?.email})
        }else{ // update the profile row
            const { data, error } = await supabase
                .from("profiles")
                .update(profile) // description, pokemon_id
                .eq("user_id",session?.user?.id)
        }
    }

    page.subscribe(async() =>{
        pokemonlist = await getPokemonList();
        profile = await getUserData(supabase,session)
        await refreshPokemonData();
    });

    async function savePageEdits() {
        await saveProfile();
        await refreshPokemonData();
        isModalOpen = false;
        //location.reload()
    }

    async function togglePokemon(id: number) {
        let pokemonIDs = profile.pokemon_ids;
        // [1,2,3] "toggle 2" -> [1,3] -. "toggle 2 - [1,2,3]"

        // make sure we never have more than 3 pokemon
        if(pokemonIDs.length >= 3  && !pokemonIDs.includes(id)){
            alert("You can only have 3 pokemons!")
            return
        }
        // if pojemonIDs has ID, remove it
        if(pokemonIDs.includes(id)){
            let index = pokemonIDs.indexOf(id);
            pokemonIDs.splice(index,1);
        }else{
            pokemonIDs.push(id);
        }

        profile.pokemon_ids = [...pokemonIDs]
    }
</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content">
        <div class="max-w-2xl text-center">
            {#if profile.name == ""}
                <h1 class="text-white font-bold text-4xl">Your Page</h1>
            {:else}
                <h1 class="text-white font-bold text-4xl">{profile.name}'s Page</h1>
            {/if}
            <p class="py-3 max-w-md mx-auto">{profile.description}</p>
            <div class="grid grid-cols-3">
                {#if pokemonData === undefined}
                    <p>Loading...</p>
                {:else}
                    {#each pokemonData as pokemon}
                        <div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="{pokemon.sprites.front_default}" alt="Pokemon" class="w-32 h-32 mx-auto"/>
                                    <h2 class="text-white text-2xl font-bold">{pokemon.name}</h2>
                                    <p class="text-info">{pokemon.types[0].type.name}</p> 
                                </div>
                            </div>
                        </div>
                    {/each}
                
                {/if}
            </div>
            {#if email == session?.user?.email}
                <button class="btn btn-info" on:click={() => isModalOpen = true}>Edit Page</button>
                <dialog class="modal min-w-lg" class:modal-open={isModalOpen}>
                    <div class="modal-box">
                        <h2 class="font-bold text-xl">Edita tu perfil!</h2>
                        <p class="p-3">Edita tu página para darle personalidad</p>
                        <div class=" max-w-md m-3">
                            <p class="text-left">Nombre:</p>
                            <input 
                                type="text" 
                                class="input input-bordered w-full" 
                                placeholder="Manuel Soberanis"
                                bind:value={profile.name}
                                required>
                                <p class="text-left pt-4">Edad:</p>
                            <input 
                                type="number" 
                                class="input input-bordered w-full" 
                                placeholder="17"
                                bind:value={profile.age}>
                            <p class="text-white text-left pt-4">Hablanos un poco de ti!</p>
                            <textarea
                                bind:value={profile.description}
                                placeholder="Me gusta la comedia y las peliculas de terror"
                                class="textarea textarea-bordered w-full max-w-md"
                            ></textarea>
                        </div>
                    
                        <p class="text-white p-2">Select your pokemon</p>
                        
                        <div class="grid grid-cols-3 overflow-y-scroll max-h-[600px] m-3">
                            <div class="col-span-3">
                                <input
                                type="text"
                                class="input input-bordered w-full"
                                placeholder="Search for a pokemon!"
                                bind:value={searchInput}
                                >
                            </div>
                            {#each pokemonlist as pokemon,index}
                                {#if pokemon.name.includes(searchInput)}
                                    <button 
                                        class={
                                            "card bg-slate-700 h-12 p-1 m-1 justify-center items-center "
                                            + (Array.isArray(profile.pokemon_ids) && profile.pokemon_ids.includes(index + 1)
                                            ? " border-2 border-blue-600"
                                            : "")
                                            }
                                            on:click={() => togglePokemon(index+1)}
                                        >
                                        <div class="text-center">
                                            <h2 class="text-white text-xl">{pokemon.name}</h2>
                                        </div>
                                    </button>
                                {/if}
                            {/each}
                        </div>
                        <button class="btn btn-success" on:click={() => savePageEdits()}>Save Edits</button>
                        <button class="btn btn-error"on:click={() => isModalOpen = false}>Close</button>
                    </div>
                </dialog>
            {/if}
        </div>
    </div>
</div>