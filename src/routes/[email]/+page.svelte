<!--localhost:5173/example@outlook.com-->

<script lang="ts">
    import { page } from "$app/stores";
    import { getUserData } from "$lib/userInfo.js";
    import { onMount } from "svelte";
    export let data;

    let {supabase,session} = data
    $: ({supabase,session} = data)
    $: email = $page.params.email;

    let profile: any = {};
    let movies:any = []

    let isModalOpen = false;
    let searchInput = "";
    // profiles in supabase which has columns for a description, pokemonsid, email
    // from this page, we cas u se the supabase object to then save to our database (grab the data)

    onMount(async() =>{
        const response = await fetch('/api/movies')
        movies = await response.json()
    })
    /*
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
    */
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
        //pokemonlist = await getPokemonList();
        profile = await getUserData(supabase,session)
        //await refreshPokemonData();
    });

    
    async function savePageEdits() {
        await saveProfile();
        isModalOpen = false;
        location.reload()
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
                {#if movies === undefined}
                    <p>Loading...</p>
                {:else}
                    {#each movies as movie}
                        <a
                            href={`/api/movies/${movie.id}`}
                            class="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-900 transition-all duration-300"
                        >  
                        <!-- Imagen -->
                        <div class="w-full h-48 sm:h-56 md:h-60 overflow-hidden">
                            <img
                                src={movie.img}
                                alt={movie.title}
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <!-- Título -->
                        <div class="p-4">
                          <h2 class="text-lg font-semibold text-white text-center group-hover:text-blue-300 transition-colors">
                            {movie.title}
                          </h2>
                        </div>
                        <!-- Hover overlay -->
                        <div
                          class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                        >
                          <p class="text-white text-sm font-medium">Ver detalles →</p>
                        </div>
                        </a>
                    {/each}
                {/if}
            </div>
            {#if email === session?.user?.email}
                <button class="btn btn-info" on:click={() => isModalOpen = true}>
                    Editar página
                </button>

                <dialog class="modal" class:modal-open={isModalOpen}>
                  <div class="modal-box max-w-2xl">
                    <h2 class="font-bold text-2xl mb-2">Edita tu perfil</h2>
                    <p class="mb-4 text-gray-500">Personaliza tu página para reflejar quién eres</p>

                    <form class="space-y-4" on:submit|preventDefault={savePageEdits}>
                      <fieldset class="space-y-2">
                        <label class="block text-sm font-medium text-left" for="name">Nombre</label>
                        <input
                          id="name"
                          type="text"
                          class="input input-bordered w-full"
                          placeholder="Manuel Soberanis"
                          bind:value={profile.name}
                          required
                        />
                      </fieldset>
                  
                      <fieldset class="space-y-2">
                        <label class="block text-sm font-medium text-left" for="age">Edad</label>
                        <input
                          id="age"
                          type="number"
                          class="input input-bordered w-full"
                          placeholder="17"
                          bind:value={profile.age}
                        />
                      </fieldset>
                  
                      <fieldset class="space-y-2">
                        <label class="block text-sm font-medium text-left" for="description">Sobre ti</label>
                        <textarea
                          id="description"
                          class="textarea textarea-bordered w-full"
                          placeholder="Me gusta la comedia y las películas de terror"
                          bind:value={profile.description}
                        ></textarea>
                      </fieldset>
                  
                      <div class="flex justify-end gap-3 pt-4">
                        <button type="submit" class="btn btn-success">Guardar</button>
                        <button type="button" class="btn btn-error" on:click={() => isModalOpen = false}>
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
            {/if}
        </div>
    </div>
</div>