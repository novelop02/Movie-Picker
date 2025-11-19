<script lang='ts'>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    
    let movies:any = []
    $: id = $page.params.id;

    onMount(async() =>{
        const response = await fetch('/api/movies')
        movies = await response.json()
    })
    
</script>

<div>
    {#each movies as movie}
        {#if movie.id == id}
            {movie.title}
            {movie.genre}
        {/if}
    {/each}
</div>