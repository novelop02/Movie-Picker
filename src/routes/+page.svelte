<script lang="ts">
    import { page } from '$app/stores';
    import { getUserData } from '$lib/userInfo.js';
    import { onMount } from 'svelte';
    import { Star } from 'lucide-svelte';
    import { get } from 'svelte/store';
    import { roulette, addMovie, removeMovie, MAX_MOVIES } from '$lib/rouletteStore.js';
    

    let movies:any = []
    let profile: any = {}
    let searchInput: string = ""
    let isFavorite = false


  //Aqui agrego las nuevas variables que van a servir para filtrar
  let generoDisponible: string[] = ['Todos']; //Va a tomar acción, comedia, drama, etc.
  let generoSeleccionado: string = 'Todos';

  function getUnicoGenero(movieList: any[]): string[]{
    const unicoGenro = new Set<string>();

    movieList.forEach(movie => {
      if (movie.genre) {
        const genresArray = movie.genre.split(/ \/ |\/ /).map((g: string) => g.trim());
                genresArray.forEach((genre: string) => {
                    unicoGenro.add(genre);
                });
            }
        });
        return ['Todos', ...Array.from(unicoGenro).sort()];
      }

    // Fetch movies on component mount //GET
    onMount(async() =>{
      const response = await fetch('/api/movies')
      movies = await response.json()
      generoDisponible = getUnicoGenero(movies);
    })
    
    export let data;
    let {supabase,session} = data
	  $: ({supabase,session} = data)

    page.subscribe(async() =>{
        profile = await getUserData(supabase,session)
    });
    
    $:filteredMovies = movies.filter((movie: {title:string, genre:string, age:number})=> {
      //Filtrado por el titulo
      const titulo = movie.title.toLowerCase().includes(searchInput.toLowerCase());

      //Filtrado por el genero
      const esSeleccionado = generoSeleccionado === 'Todos';

      //Filtrado por edad
      const tieneEdad = movie.age <= profile.age

      const match = esSeleccionado || movie.genre.includes(generoSeleccionado);

      return titulo && match && tieneEdad;
    });

    //Función para la Ruleta
    function toggleRoulette(movie: any, event: Event) {
        event.preventDefault(); // Evita abrir detalles
        event.stopPropagation(); 

        const currentRoulette = get(roulette);
        const isIn = currentRoulette.some((m: any) => m.id === movie.id);

        if (isIn) {
            removeMovie(movie.id);
        } else {
            if (currentRoulette.length >= MAX_MOVIES) {
                alert("¡Límite de películas en la ruleta alcanzado!");
                return;
            }
            addMovie(movie);
        }
    }

    //Función para Favoritos (Corregida)
    async function toggleFavorite(movie: any, event: Event) {
        event.preventDefault();
        event.stopPropagation(); 

        if (!session) return alert("Inicia sesión para guardar favoritos");

        const movieId = movie.id;
        if (!profile.movies_ids) profile.movies_ids = [];

        if (profile.movies_ids.includes(movieId)) {
            profile.movies_ids = profile.movies_ids.filter((id: number) => id !== movieId);
        } else {
            profile.movies_ids.push(movieId);
        }
        profile = profile; // Actualiza la vista
        await saveProfile();
    }

    // 3. Función para Guardar en Base de Datos
    async function saveProfile() {
        if (!session?.user?.email) return;
        const userEmail = session.user.email;

        const { data: profileData } = await supabase
            .from("profiles")
            .select("*")
            .eq("email", userEmail);

        if (profileData?.length === 0) {
            await supabase.from("profiles").insert({ ...profile, user_id: session.user.id, email: userEmail });
        } else {
            await supabase.from("profiles").update(profile).eq("email", userEmail);
        }
    }
</script>

<title>Movie Picker</title>
<div class="min-h-screen bg-base-300 flex flex-col items-center py-10 px-4">
  <!-- Título y acciones -->
  <div class="text-center mb-10 p-5">
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
    <div class="flex flex-col md:flex-row gap-4 w-full max-w-2xl mx-auto mt-8 mb-1">
      <div class="relative grow">
        <svg xmlns="http://www.w3.org/2000/svg"
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

        <input type="text"
        placeholder="Buscar pelicula"
        class="input input-bordered w-full pl-12 py-3 **bg-white text-gray-900** text-lg rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        bind:value={searchInput}
        />
      </div>

      <div class="form-control w-full md:w-auto md:min-w-40">
            <select 
                class="select select-bordered w-full **bg-white text-gray-900** text-lg rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary"
                bind:value={generoSeleccionado}
            >
                {#each generoDisponible as genero}
                    <option value={genero}>{genero}</option>
                {/each}
            </select>
        </div>
    </div>
  </div>

<!-- Grid -->
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">

  {#each filteredMovies as movie}
    <div class="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-800/50 transition-all duration-300">
      
      <div class="w-full aspect-video overflow-hidden bg-black">
        <img
          src={movie.img}
          alt={movie.title}
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div class="p-4 bg-slate-900">
        <h2 class="text-lg font-semibold text-white text-center group-hover:text-blue-300 transition-colors truncate">
          {movie.title}
        </h2>
      </div>

      <a
        href={`/api/movies/${movie.id}`}
        class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 backdrop-blur-sm cursor-pointer z-10"
      >
        <span class="text-white text-base font-bold underline hover:text-blue-300 transition-colors mt-8">
          Ver detalles →
        </span>
      </a>

      <div class="absolute top-2 right-2 z-20 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        <!--- boton favoritos y estrella --->
        {#if session}
            <button 
                class="btn btn-circle btn-sm border-none shadow-lg {profile?.movies_ids?.includes(movie.id) ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-gray-700/80 text-white hover:bg-gray-600'}"
                on:click={(e) => toggleFavorite(movie, e)}
                title="Favoritos"
            >
                <Star size={18} fill={profile?.movies_ids?.includes(movie.id) ? "currentColor" : "none"} />
            </button>
        {/if}

        <!--- boton ruleta --->
        <button 
            class="flex items-center btn btn-circle btn-sm border-none shadow-lg {$roulette.some(m => m.id === movie.id) ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500/80 text-white hover:bg-blue-600'}"
            on:click={(e) => toggleRoulette(movie, e)}
            title="Añadir a Ruleta"
        >
            <span class="font-bold text-xl leading-none pb-2">
                {$roulette.some(m => m.id === movie.id) ? '-' : '+'}
            </span>
        </button>

      </div>
    </div>
  {/each}
</div>

</div>
