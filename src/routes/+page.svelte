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
  <div class="hero-content flex flex-col items-center justify-center text-center px-4 py-10 relative">
    <div class="max-w-md mb-10">
        <div class="relative w-full max-w-sm text-left">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </div>
            <input
            type="text"
            placeholder="Busca una Película!"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
      {#if session == null}
        <h1 class="text-white font-bold text-3xl sm:text-4xl">
          Welcome to MoviePicker
        </h1>
        <p class="py-6 text-base sm:text-lg text-gray-300">
          Create an account to make your own unique URL
        </p>
        <a href="/login" class="btn btn-primary btn-wide">
          Create an Account
        </a>
      {/if}
    </div>

    <!-- SECCIÓN INFERIOR (POKEMONES) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full justify-items-center">
      {#if pokemonData === undefined}
        <p class="text-white text-lg">Loading...</p>
      {:else}
        {#each pokemonData as pokemon}
          <div class="card bg-slate-700 w-64 sm:w-56 md:w-60 lg:w-64 shadow-lg shadow-blue-900 hover:scale-105 transition-transform duration-300">
            <div class="card-body items-center">
              <img src="{pokemon.sprites.front_default}" alt="Pokemon" class="w-32 h-32 object-contain"/>
              <h2 class="text-white text-xl sm:text-2xl font-bold capitalize">{pokemon.name}</h2>
              <p class="text-info text-sm sm:text-base">{pokemon.types[0].type.name}</p>
            </div>
          </div>
        {/each}
      {/if}
    </div>

  </div>
</div>
