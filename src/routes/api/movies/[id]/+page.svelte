<script lang='ts'>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { Rating, Star, type RatingIconProps } from "flowbite-svelte";
    const wrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Star(anchor, { ..._props, ...props });


    let movies:any = []
    $: id = $page.params.id;

    onMount(async() =>{
        const response = await fetch('/api/movies')
        movies = await response.json()
    })
    $: selectedMovie = movies.find((movie: { id: number; title: string }) => movie.id === Number(id));

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
          <h1 class="text-4xl font-bold mb-2">{selectedMovie.title}</h1>
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
    <div class="pt-4 center"><button class="btn btn-ghost" onclick={() => goto('/')}>Regresar</button></div>
  </div>
{:else}
  <div class="text-center text-gray-400 mt-20">Película no encontrada.</div>
{/if}
