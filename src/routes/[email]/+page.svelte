<!--localhost:5173/example@outlook.com-->

<script lang="ts">
    import { page } from "$app/stores";
    import { getPokemonList,getPokemon } from "$lib/pokemonAPI";
    export let data;

    let {supabase,session} = data
    $: ({supabase,session} = data)
    $: email = $page.params.email;

    let pokemonlist: any = []
    let pokemonData: any = [] // [{pikachu},{bulbasaur}]
    let profile: any = {
        description: " This is your description, feel free to write about yourself",
        pokemon_ids: [1,2,5]
    }

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

    page.subscribe(async() =>{
        pokemonlist = await getPokemonList();
        await refreshPokemonData();
        console.log(await getPokemon("pikachu"));
        console.log(pokemonlist);
        console.log(pokemonData);
    });
</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content">
        <div class="max-w-2xl text-center">
            <h1 class="text-white font-bold text-4xl">{email}'s Page</h1>
            <p class="py-3 max-w-md mx-auto">User description here...</p>
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
            
        </div>
    </div>
</div>