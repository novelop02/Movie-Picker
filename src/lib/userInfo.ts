import { writable } from "svelte/store";
import { page } from '$app/stores';

/*
let {supabase,session} = data
$: ({supabase,session} = data)
$: email = $page.params.email;

interface Profile {
  description: string;
  pokemon_ids: number[];
  name: string;
  age: 0
}

export let profile = writable<Profile>( {
    description: "",
    pokemon_ids: [1,2,3],
    name: "",
    age: 0
});

export async function saveProfile() { // obtienes el valor actual del store
        const { data: profileData } = await supabase
            .from("profiles")
            .select("*")
            .eq("email", email);

        if (profileData?.length === 0) {
            await supabase
            .from("profiles")
            .insert({
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
    }*/