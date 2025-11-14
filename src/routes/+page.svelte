<script lang="ts">
    import { getPokemonList,getPokemon } from '$lib/pokemonAPI.js';
    import { page } from '$app/stores';
    import { getUserData } from '$lib/userInfo.js';
    import { onMount } from 'svelte';
    let movies:any = []

    // Fetch movies on component mount //GET
    onMount(async() =>{
      const response = await fetch('/api/movies')
      movies = await response.json()
    })
    
    export let data;
    let {supabase,session} = data
	  $: ({supabase,session} = data)
    let pokemonList: any = []
    let pokemonData: any = []
    let allPokemon: any = {
      ids: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    }
    let profile: any = {};

    async function refreshData() {
        const promises = allPokemon.ids.map((id: number) => getPokemon(id.toString()));
        const results = await Promise.all(promises);
        pokemonData = results;
    }


    page.subscribe(async() =>{
        pokemonList = await getPokemonList();
        await refreshData();
        console.log(await getPokemon("pikachu"));

        profile = await getUserData(supabase,session)
    });
    
</script>


<div class="min-h-screen bg-base-300 flex flex-col items-center justify-center px-4">

  <div class="text-center mb-8 p-5">
    <h1 class="text-4xl font-bold text-white">Bienvenido a Movie-Picker</h1>
    {#if session == undefined}
      <p class="text-gray-400 mt-2">Create an account to make your own unique URL</p>
      <button class="btn btn-primary mt-4">Create an Account</button>
    {/if}
    <div class="relative w-full max-w-lg mx-auto mt-6">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>

      <input
        type="text"
        placeholder="Busca una Película!"
        class="input input-bordered w-full pl-10 bg-base-200 text-white"
      />
    </div>


  </div>

<!-- Grid de Películas -->
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4 py-6">
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
</div>
</div>