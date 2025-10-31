<script lang="ts">
    export let data;
    import {Auth} from '@supabase/auth-ui-svelte';
    import { ThemeSupa } from '@supabase/auth-ui-shared';
    import { goto } from '$app/navigation';
    let {supabase,session} = data
    $: ({supabase,session} = data)

    console.log(supabase);
    console.log(session);
    $:if(session){
        goto("/")
    }
</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content w-[800px]">
        <div class="flex flex-col">
            <p class="text-center text-2xl font-bold">Create an account or login below!</p>

            <!--SUPABASE AUTH UI-->
            <Auth
                supabaseClient={supabase}
                theme="dark"
                appearance={{
                theme: ThemeSupa,
                style: {
                    input: "width: 400px; color: white;",
                    container: "padding: 2rem; border-radius: 1rem;",
                    label: "color: white;",
                    button: "width: 400px; margin-left: auto; margin-right: auto; display: block; background-color: #6366F1; color: white;",
                    anchor: "color: white;"
                    }
                }}
            />
        </div>
    </div>
</div>