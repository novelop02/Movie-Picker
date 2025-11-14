import { movies } from '$lib/movies.js';

export async function GET({params}){
    const movie = movies.find(b => String(b.id) === params.id);
    if(!movie){
        return new Response(JSON.stringify({error:"Not found"}),{
            status:404,
            headers: {"Content-Type":"application/json"}
        });
    } 
    return new Response(JSON.stringify(movie),{
        status:200,
        headers:{"Content-Type":"application/json"}})
}

export async function DELETE({params}){
    const index = movies.findIndex(b => String(b.id) === params.id);
    if(index === -1){
        return new Response(JSON.stringify({error:"Not found"}),{
            status:404,
            headers: {"Content-Type":"application/json"}
        });
    }

    movies.splice(index,1)
    return new Response(null,{
        status:204,
        headers:{"Content-Type":"application/json"}})
}   


