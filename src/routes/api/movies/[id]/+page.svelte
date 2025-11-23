<script lang='ts'>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { Rating, Star, type RatingIconProps } from "flowbite-svelte";
    import { getUserData } from "$lib/userInfo.js";
    // Importamos el store, la función para añadir y el límite
    import { roulette, addMovie, MAX_MOVIES } from '$lib/rouletteStore';
    import { get } from 'svelte/store';

    const wrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Star(anchor, { ..._props, ...props });

    export let data;
    let {supabase,session} = data
    $: ({supabase,session} = data)
    let movies:any = []
    $: id = $page.params.id;
    let isFavorite = false
    let profile:any = []
    $: email = $page.params.email;
    
    // Estado para el modal de límite
    let showLimitModal = false;

    page.subscribe(async() =>{
        profile = await getUserData(supabase,session)
    });

    onMount(async() =>{
        const response = await fetch('/api/movies')
        movies = await response.json()
    })
    $: selectedMovie = movies.find((movie: { id: number; title: string }) => movie.id === Number(id));

    // Función para añadir a la ruleta
    function addToRoulette() {
        if (!selectedMovie) return;

        const currentMovies = get(roulette);

        // Verificar si ya alcanzamos el límite
        if (currentMovies.length >= MAX_MOVIES) {
            showLimitModal = true;
            return;
        }

        // Añadir la película
        addMovie(selectedMovie);
        // Opcional: Mostrar una alerta simple de éxito
        alert("Película añadida a la ruleta");
    }

    async function toogleFavorite(){ 
        const movieId = selectedMovie?.id;

        if (!movieId) return;
        isFavorite = !isFavorite;
        if (isFavorite) {
            if (!profile.movies_ids) profile.movies_ids = [];// añade a fav
            if (!profile.movies_ids.includes(movieId)) {// checa si no esta duplicado
                profile.movies_ids.push(movieId);
            }
        } else {
            if (!profile.movies_ids) profile.movies_ids = [];// quita de fav
            profile.movies_ids = profile.movies_ids.filter((item: number) => item !== movieId);
        }
        await saveProfile();
        console.log(profile.movies_ids);
    } 

    function save_go(){
      saveProfile()
      goto('/')
    }

    async function saveProfile(){
    if (!session?.user?.email) return;

    const userEmail = session.user.email;
    
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("email",userEmail)

    if(profileError){
      console.error(profileError)
      return
    }

    if(profileData?.length === 0){
      // Crear nuevo perfil
      const {data, error} = await supabase
        .from("profiles")
        .insert({...profile,user_id:session.user.id,email:userEmail})
      if(error) console.error(error)
    }else{
      // Actualizar el perfil existente
      const {data, error} = await supabase
        .from("profiles")
        .update(profile)
        .eq("email",userEmail)
      if(error) console.error(error)
    }
}
</script>

{#if selectedMovie}
  <div class="max-w-5xl mx-auto mt-10 p-6 bg-base-200 rounded-3xl shadow-xl text-white">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Imagen -->
      <div class="shrink-0 w-full md:w-1/2">
        <img
          src={selectedMovie.img}
          alt={selectedMovie.title}
          class="rounded-xl w-full h-auto object-cover shadow-md"
        />
      </div>
      
      <!-- Detalles -->
      <div class="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <div class="flex items-center justify-between mb-2"> 
            <h1 class="text-4xl font-bold mb-2">{selectedMovie.title}</h1> 
            
            <!-- Contenedor de botones -->
            <div class="flex items-center gap-3">
                <!-- Botón Ruleta -->
                <button 
                    onclick={addToRoulette}
                    class="btn btn-sm btn-info text-white"
                    title="Añadir a Ruleta"
                >
                    + Ruleta
                </button>

                {#if session}
                    <button onclick={toogleFavorite} class="text-3xl">
                    {#if isFavorite}
                    ⭐
                    {:else}
                    ☆
                    {/if}
                    </button> 
                {/if}
            </div>
          </div>
          <p class="text-sm text-gray-400 mb-4">{selectedMovie.year} • {selectedMovie.genre}</p>
          <p class="text-base leading-relaxed mb-6">{selectedMovie.description}</p>
        </div>

        <!-- Extras -->
        <div class="mt-auto flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <Rating total={5} size={50} rating={selectedMovie.stars}/>
          </div>
          <div class="text-sm text-gray-300">
            Disponible en: <span class="font-semibold text-white">{selectedMovie.platform}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4 center"><button class="btn btn-ghost" onclick={save_go}>Regresar</button></div>
  </div>
{:else}
  <div class="text-center text-gray-400 mt-20">Película no encontrada.</div>
{/if}

<!-- Modal de Límite Alcanzado -->
{#if showLimitModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-slate-800 p-6 rounded-lg shadow-lg relative max-w-sm w-full text-center">
      <!-- Tachita para cerrar -->
      <button 
        class="absolute top-2 right-2 text-gray-400 hover:text-white text-xl font-bold"
        onclick={() => showLimitModal = false}
      >
        &times;
      </button>
      
      <h3 class="text-xl font-bold text-white mb-2">¡Límite Alcanzado!</h3>
      <p class="text-gray-300">
        Solo puedes tener hasta {MAX_MOVIES} películas en la ruleta. Elimina alguna para añadir esta.
      </p>
    </div>
  </div>
{/if}