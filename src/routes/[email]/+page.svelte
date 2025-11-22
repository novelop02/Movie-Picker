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
    let userMovies: any[] = [];

    onMount(async() =>{
        const response = await fetch('/api/movies')
        movies = await response.json()

        if(profile.movies_ids){
          userMovies = movies.filter((movie:any)=> profile.movies_ids.includes(movie.id))
        }
    });

    // Cada vez que profile.movies_ids cambie, actualizar userMovies
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
    
</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content">
        <div class="max-w-2xl text-center">
            {#if profile.name == ""}
                <h1 class="text-white font-bold text-4xl">Tu página!</h1>
            {:else}
                <h1 class="text-white font-bold text-4xl">Página de {profile.name}!</h1>
            {/if}
            <p class="py-3 max-w-md mx-auto">{profile.description}</p>
<!-- Grid -->
<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 max-w-[90rem] mx-auto px-6">

  {#each userMovies as movie}
    <div
      class="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-800/50 transition-all duration-300"
    >
      <!-- Imagen horizontal -->
      <div class="w-full aspect-[16/9] overflow-hidden bg-black rounded-t-2xl">
        <img
          src={movie.img}
          alt={movie.title}
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <!-- Título debajo -->
      <div class="p-3 bg-slate-900 rounded-b-2xl">
        <h2 class="text-sm sm:text-base font-semibold text-white text-center group-hover:text-blue-300 transition-colors truncate">
          {movie.title}
        </h2>
      </div>

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 backdrop-blur-sm rounded-2xl"
      >
        <p class="text-white text-sm font-medium">
          <a href={`/api/movies/${movie.id}`}>Ver detalles →</a>
        </p>
      </div>
    </div>
  {/each}
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