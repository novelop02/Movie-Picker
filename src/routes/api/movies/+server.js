import { movies } from '$lib/movies.js';

export async function GET(){
    return new Response(JSON.stringify(movies), {status:200})
}

export async function POST({request}) {
    const data = await request.json();
    const newMovie = {id: Date.now(), ...data};
    movies.push(newMovie);
    return new Response(JSON.stringify(newMovie),{status:201})
}