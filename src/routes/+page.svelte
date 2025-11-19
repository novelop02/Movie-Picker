<script lang="ts">
    import { page } from '$app/stores';
    import { getUserData } from '$lib/userInfo.js';
    import { onMount } from 'svelte';
    import { Star } from 'lucide-svelte';

    let movies:any = []
    let profile: any = []
    let searchInput: string = ""
    let isFavorite = false

    // Fetch movies on component mount //GET
    onMount(async() =>{
      const response = await fetch('/api/movies')
      movies = await response.json()
    })
    
    export let data;
    let {supabase,session} = data
	  $: ({supabase,session} = data)

    page.subscribe(async() =>{
        profile = await getUserData(supabase,session)
    });
    
    $:filteredMovies = movies.filter((movie: {title:string})=>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    )

    function toogleFavorite(){
      isFavorite = !isFavorite
    }
</script>

<div class="min-h-screen bg-base-300 flex flex-col items-center py-10 px-4">

  <!-- Título y acciones -->
  <div class="text-center mb-10 p-5 max-w-2xl">
    <h1 class="text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
      🎬 Movie-Picker
    </h1>

    {#if session == undefined}
      <p class="text-gray-300 mt-3 text-lg">
        Crea una cuenta para obtener tu URL personalizada
      </p>
      <a href="/login"><button class="btn btn-primary mt-5 px-6 text-lg shadow-md hover:scale-105 transition-transform">
        Crear cuenta
      </button></a>
    {/if}

    <!-- Buscador -->
    <div class="relative w-full max-w-xl mx-auto mt-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7 text-gray-400 pointer-events-none z-20">
      
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>

      <input
        type="text"
        placeholder="Buscar película..."
        class="input input-bordered w-full pl-12 py-3 bg-base-200 text-white text-lg rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        bind:value={searchInput}
      />
    </div>
  </div>

<!-- Grid -->
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">

  {#each filteredMovies as movie}
    <div
      
      class="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-800/50 transition-all duration-300"
    >
      <!-- Imagen -->
      <div class="w-full aspect-video overflow-hidden bg-black">
        <img
          src={movie.img}
          alt={movie.title}
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <!-- Título -->
      <div class="p-4">
        <h2 class="text-lg font-semibold text-white text-center group-hover:text-blue-300 transition-colors">
          {movie.title}
        </h2>
      </div>

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 backdrop-blur-sm"
      >
        <p class="text-white text-sm font-medium">
          <a href={`/api/movies/${movie.id}`}>Ver detalles →</a>
        </p>
        <button on:click={toogleFavorite} class="absolute top-2 right-2 m-3">
          {#if isFavorite}
            ⭐
          {:else}
            ☆
          {/if}
        </button>
      </div>
    </div>
  {/each}
</div>

</div>
