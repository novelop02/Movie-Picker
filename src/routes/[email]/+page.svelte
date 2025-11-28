<!--localhost:5173/example@outlook.com-->

<script lang="ts">
    import { page } from "$app/stores";
    import { getUserData } from "$lib/userInfo.js";
    import { onMount } from "svelte";
    import { Star } from 'lucide-svelte';
    import { get } from 'svelte/store';
    import { roulette, addMovie, removeMovie, MAX_MOVIES } from '$lib/rouletteStore.js';
    export let data;

    let {supabase,session} = data
    $: ({supabase,session} = data)
    $: email = $page.params.email;

    let profile: any = {};
    let movies:any = []
    let isModalOpen = false;
    let userMovies: any[] = [];

    onMount(async() =>{
        const response = await fetch('/api/movies')
        movies = await response.json()

        if(profile.movies_ids){
          userMovies = movies.filter((movie:any)=> profile.movies_ids.includes(movie.id))
        }
    });

    $: if(profile.movies_ids){
      userMovies = movies.filter((movie:any)=> profile.movies_ids.includes(movie.id))
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
        profile = await getUserData(supabase,session)
    });
    
    async function savePageEdits() {
        await saveProfile();
        isModalOpen = false;
        location.reload()
    }
    
    function toggleRoulette(movie: any, event: Event) {
        event.preventDefault();
        event.stopPropagation();

        const currentRoulette = get(roulette);
        const isIn = currentRoulette.some((m: any) => m.id === movie.id);

        if (isIn) {
            removeMovie(movie.id);
        } else {
            if (currentRoulette.length >= MAX_MOVIES) {
                alert("¡Límite alcanzado!");
                return;
            }
            addMovie(movie);
        }
    }

    async function toggleFavorite(movie: any, event: Event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (!session) return; 

        const movieId = movie.id;
        if (!profile.movies_ids) profile.movies_ids = [];

        if (profile.movies_ids.includes(movieId)) {
            profile.movies_ids = profile.movies_ids.filter((id: number) => id !== movieId);
        } else {
            profile.movies_ids.push(movieId);
        }
        profile = profile; 
        await saveProfile();
    }

</script>
{#if !profile.name || profile.name == ""}
    <title>Usuario - Movie Picker</title>
{:else}
    <title>{profile.name} - Movie Picker</title>
{/if}
<div class="min-h-screen bg-base-300 py-10 px-4 md:px-8 flex flex-col items-center">
    
    <!-- usuario -->
    <div class="max-w-3xl mx-auto text-center mb-12">
        
        {#if profile.name == "" || !profile.name}
             <h1 class="text-5xl font-extrabold text-white mb-4 drop-shadow-md tracking-tight">
                 🎬 ¡Tu página!
             </h1>
        {:else}
             <h1 class="text-5xl font-extrabold text-white mb-4 drop-shadow-md tracking-tight">
                {profile.name}
             </h1>
        {/if}
        
        {#if profile.description}
            <div class="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl inline-block shadow-inner max-w-xl border border-white/10">
                <p class="text-xl text-gray-300 italic leading-relaxed">
                    {profile.description}
                </p>
            </div>
        {/if}

        <!-- boton editar -->
        {#if email === session?.user?.email}
            <div class="mt-8">
                <button class="btn btn-info btn-outline gap-2 hover:scale-105 transition-transform shadow-md" on:click={() => isModalOpen = true}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    Editar página
                </button>
            </div>
        {/if}
    </div>

    <!-- favoritos -->
    <div class="max-w-360 mx-auto w-full px-6">
        <h2 class="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-4 flex items-center gap-3">
            <span class="text-yellow-400 text-4xl">⭐</span> Favoritos
        </h2>

        {#if userMovies.length > 0}
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {#each userMovies as movie}
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

                        <a href={`/api/movies/${movie.id}`} class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 backdrop-blur-sm cursor-pointer z-10">
                            <span class="text-white text-base font-medium underline hover:text-blue-300 transition-colors mt-8">
                                Ver detalles →
                            </span>
                        </a>

                        <div class="absolute top-2 right-2 z-20 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            
                            {#if session}
                                <button 
                                    class="btn btn-circle btn-sm border-none shadow-lg bg-yellow-400 text-black hover:bg-yellow-500"
                                    on:click={(e) => toggleFavorite(movie, e)}
                                    title="Quitar de Favoritos"
                                >
                                    <Star size={18} fill="currentColor" />
                                </button>
                            {/if}

                            <button 
                                class="btn btn-circle btn-sm border-none shadow-lg {$roulette.some(m => m.id === movie.id) ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500/80 text-white hover:bg-blue-600'}"
                                on:click={(e) => toggleRoulette(movie, e)}
                                title="Añadir a Ruleta"
                            >
                                <span class="font-bold text-lg">
                                    {$roulette.some(m => m.id === movie.id) ? '-' : '+'}
                                </span>
                            </button>
                        </div>
                        
                        </div>
                {/each}
            </div>
        {:else}
            <div class="text-center py-16 bg-slate-800/30 rounded-3xl border-2 border-dashed border-gray-600">
                <p class="text-gray-400 text-xl font-semibold">Aún no hay películas favoritas en este perfil.</p>
                <p class="text-gray-500 mt-2">¡Explora y añade tus favoritas!</p>
                <a href="/" class="btn btn-primary mt-6">Explorar Películas</a>
            </div>
        {/if}
    </div>
    <dialog class="modal" class:modal-open={isModalOpen}>
        <div class="modal-box max-w-lg bg-base-100 shadow-2xl rounded-2xl">
            <h3 class="font-bold text-2xl mb-6 text-center text-white">Editar Perfil</h3>
            
            <form class="flex flex-col gap-5" on:submit|preventDefault={savePageEdits}>
                <div class="form-control w-full">
                    <label class="label" for="name">
                        <span class="label-text font-semibold text-base">Nombre</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition-colors"
                        placeholder="Tu nombre"
                        bind:value={profile.name}
                        required
                    />
                </div>
                
                <div class="form-control w-full">
                    <label class="label" for="age">
                        <span class="label-text font-semibold text-base">Edad</span>
                    </label>
                    <input
                        id="age"
                        type="number"
                        class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition-colors"
                        placeholder="Ej: 25"
                        bind:value={profile.age}
                    />
                </div>
                
                <div class="form-control w-full">
                    <label class="label" for="description">
                        <span class="label-text font-semibold text-base">Sobre ti</span>
                    </label>
                    <textarea
                        id="description"
                        class="textarea textarea-bordered h-32 bg-base-200 focus:bg-base-100 transition-colors text-base resize-none"
                        placeholder="Hablanos un poco de ti!"
                        bind:value={profile.description}
                    ></textarea>
                </div>
                
                <div class="modal-action mt-8 flex justify-end gap-3">
                    <button type="button" class="btn btn-ghost hover:bg-base-200" on:click={() => isModalOpen = false}>
                        Cancelar
                    </button>
                    <button type="submit" class="btn btn-success px-8 text-white">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button on:click={() => isModalOpen = false}>close</button>
        </form>
    </dialog>

</div>