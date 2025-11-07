<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { getPokemonList, getPokemon } from "$lib/pokemonAPI";

    export let data;

    let { supabase, session } = data;
    $: ({ supabase, session } = data);
    $: email = $page.params.email;

    let pokemonlist: any[] = [];
    let pokemonData: any[] = [];

    let profile = {
        description: "",
        pokemon_ids: [1, 2, 3],
        name: "",
        age: 0
    };

    let isModalOpen = false;
    let searchInput = "";

    async function refreshPokemonData() {
        if (!Array.isArray(profile.pokemon_ids)) {
            pokemonData = [];
            return;
        }
        const promises = profile.pokemon_ids.map((id: number) =>
            getPokemon(id.toString())
        );
        pokemonData = await Promise.all(promises);
    }

    export async function saveProfile() {
        const { data: profileData } = await supabase
            .from("profiles")
            .select("*")
            .eq("email", email);

        if (!profileData || profileData.length === 0) {
            await supabase.from("profiles").insert({
                ...profile,
                user_id: session?.user?.id,
                email: session?.user?.email
            });
        } else {
            await supabase
                .from("profiles")
                .update(profile)
                .eq("user_id", session?.user?.id);
        }
    }

    onMount(async () => {
        pokemonlist = await getPokemonList();

        const { data: profileData } = await supabase
            .from("profiles")
            .select("description, pokemon_ids, name, age")
            .eq("email", email);

        if (!profileData || profileData.length === 0) {
            if (email == session?.user?.email) {
                await saveProfile();
            } else {
                profile = {
                    name: "",
                    description: "This user does not have a profile yet!",
                    pokemon_ids: [],
                    age: 0
                };
            }
        } else {
            profile = profileData[0];
        }

        await refreshPokemonData();
    });

    async function savePageEdits() {
        await saveProfile();
        await refreshPokemonData();
        isModalOpen = false;
    }

    function togglePokemon(id: number) {
        let pokemonIDs = [...profile.pokemon_ids];

        if (pokemonIDs.length >= 3 && !pokemonIDs.includes(id)) {
            alert("You can only have 3 Pokémon!");
            return;
        }

        if (pokemonIDs.includes(id)) {
            pokemonIDs = pokemonIDs.filter(x => x !== id);
        } else {
            pokemonIDs.push(id);
        }

        profile.pokemon_ids = pokemonIDs;
    }
</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content">
        <div class="max-w-2xl text-center">
            {#if profile.name == ""}
                <h1 class="text-white font-bold text-4xl">Your Page</h1>
            {:else}
                <h1 class="text-white font-bold text-4xl">{profile.name}'s Page</h1>
            {/if}

            <p class="py-3 max-w-md mx-auto">{profile.description}</p>

            <div class="grid grid-cols-3">
                {#if pokemonData.length === 0}
                    <p>Cargando Pokémon...</p>
                {:else}
                    {#each pokemonData as pokemon}
                        <div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="{pokemon.sprites.front_default}" alt="Pokemon" class="w-32 h-32 mx-auto"/>
                                    <h2 class="text-white text-2xl font-bold">{pokemon.name}</h2>
                                    <p class="text-info">{pokemon.types[0].type.name}</p> 
                                </div>
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>

            {#if email == session?.user?.email}
                <button class="btn btn-info" on:click={() => isModalOpen = true}>Edit Page</button>

                <dialog class="modal" class:modal-open={isModalOpen}>
                    <div class="modal-box">
                        <h2 class="font-bold text-xl">Edita tu perfil!</h2>

                        <div class="max-w-md m-3">
                            <p class="text-left">Nombre:</p>
                            <input class="input input-bordered w-full" bind:value={profile.name} required>

                            <p class="text-left pt-4">Edad:</p>
                            <input type="number" class="input input-bordered w-full" bind:value={profile.age}>

                            <p class="text-left pt-4">Descripción:</p>
                            <textarea class="textarea textarea-bordered w-full" bind:value={profile.description}></textarea>
                        </div>

                        <p class="text-white p-2">Escoge tus Pokémon</p>

                        <input class="input input-bordered w-full mb-3" placeholder="Buscar Pokémon" bind:value={searchInput} />

                        <div class="grid grid-cols-3 max-h-[600px] overflow-y-scroll">
                            {#each pokemonlist as pokemon, i}
                                {#if pokemon.name.includes(searchInput)}
                                    <button
                                        class={"card bg-slate-700 h-12 m-1 flex justify-center items-center " +
                                        (profile.pokemon_ids.includes(i+1) ? "border-2 border-blue-500" : "")}
                                        on:click={() => togglePokemon(i+1)}>
                                        <span class="text-white">{pokemon.name}</span>
                                    </button>
                                {/if}
                            {/each}
                        </div>

                        <button class="btn btn-success mt-3" on:click={savePageEdits}>Guardar cambios</button>
                        <button class="btn btn-error mt-3" on:click={() => isModalOpen = false}>Cerrar</button>
                    </div>
                </dialog>
            {/if}
        </div>
    </div>
</div>
