<script>
    export let data;
    let {supabase,session} = data
	$: ({supabase,session} = data)
</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content flex-col lg:flex-row">
        <div class="max-w-md text-center">
            <h1 class="text-white font-bold text-4xl font-verdana">Welcome to MoviePicker</h1>
            {#if session == null}
                <p class="py-6">Create an account to make your own unique URL</p>
                <a href="/login" class="btn btn-primary">Create an Account</a>
            {/if}
        </div>
    </div>
</div>