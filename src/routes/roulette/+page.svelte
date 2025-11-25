<script lang="ts">
    import { roulette, removeMovie, clearRoulette } from '$lib/rouletteStore';

    type Movie = {
        id: string | number;
        title: string;
    };

    let spinning = false;
    let selectedMovie: Movie | null = null;

    function handleRemove(id: Movie['id']) {
        removeMovie(id);
        if (selectedMovie && selectedMovie.id === id) {
            selectedMovie = null;
        }
    }

    function spin() {
        if ($roulette.length === 0) return;

        spinning = true;
        selectedMovie = null;

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * $roulette.length);
            selectedMovie = $roulette[randomIndex] as Movie;
            spinning = false;
        }, 1500);
    }
</script>

<title>Ruleta de Películas</title>
<div class="p-6 text-white min-h-screen flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-8">🎬 Ruleta de Películas</h1>

    <div class="w-full max-w-md">
        <div class="flex gap-4 mb-6">
            <button
                class="flex-1 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 font-bold shadow-lg transition-all"
                on:click={spin}
                disabled={spinning || $roulette.length === 0}
            >
                {spinning ? 'Girando...' : 'Girar Ruleta'}
            </button>
            
            <button
                class="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 font-bold shadow-lg transition-all"
                on:click={clearRoulette}
                disabled={$roulette.length === 0}
            >
                Borrar Todo
            </button>
        </div>

        <!-- seleccionada -->
        {#if selectedMovie}
            <div class="mb-8 p-4 bg-green-600 rounded-xl text-center shadow-xl transform transition-transform duration-500 scale-105">
                <div class="text-lg opacity-90">La pelicula ganadora es:</div>
                <div class="text-2xl font-extrabold mt-1">{selectedMovie.title}</div>
            </div>
        {/if}

        <!-- lista de peliculas -->
        <div class="space-y-3">
            {#if $roulette.length === 0}
                <p class="text-center text-gray-500 italic">No hay películas en la ruleta.</p>
            {/if}

            {#each $roulette as movie (movie.id)}
                <div class="group bg-gray-800 p-4 rounded-lg flex items-center justify-between shadow-md hover:bg-gray-750 transition-colors relative">
                    <span class="text-lg font-medium">{movie.title}</span>

                    <!-- boton de eliminar -->
                    <button
                        class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute right-4 text-red-400 hover:text-red-500 text-2xl font-bold"
                        on:click={() => handleRemove(movie.id)}
                        title="Eliminar"
                    >
                        &times;
                    </button>
                </div>
            {/each}
        </div>
        
        <div class="mt-4 text-right text-sm text-gray-500">
            {$roulette.length} / 10 películas
        </div>
    </div>
</div>