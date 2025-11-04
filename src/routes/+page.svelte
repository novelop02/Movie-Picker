<script lang="ts">
    import { getPokemonList,getPokemon } from '$lib/pokemonAPI.js';
    import { page } from '$app/stores';

    export let data;
    let {supabase,session} = data
	$: ({supabase,session} = data)
    let pokemonList: any = []
    let pokemonData: any = []
    let allPokemon: any = {
        ids: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    }

    async function refreshData() {
        const promises = allPokemon.ids.map((id: number) => getPokemon(id.toString()));
        const results = await Promise.all(promises);
        pokemonData = results;
    }


    page.subscribe(async() =>{
        pokemonList = await getPokemonList();
        await refreshData();
        console.log(await getPokemon("pikachu"));
        console.log(pokemonList);
        console.log(pokemonData);
    });
    

</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content flex-col lg:flex-row">
        <div class="max-w-md text-center">
            {#if session == null}
                <h1 class="text-white font-bold text-4xl font-verdana">Welcome to MoviePicker</h1>
                <p class="py-6">Create an account to make your own unique URL</p>
                <a href="/login" class="btn btn-primary">Create an Account</a>
            {/if}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {#if pokemonData === undefined}
                    <p>Loading...</p>
                {:else}
                    {#each pokemonData as pokemon}
                        <div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900 hover:scale-105 transition-transform duration-300">
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