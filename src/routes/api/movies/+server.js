let movies = [
    {id:1, title:'The Muppets', pltaform:'Disney+',img:'https://m.media-amazon.com/images/M/MV5BMjE0MTM4NTc3NF5BMl5BanBnXkFtZTcwMjYzOTIxNg@@._V1_FMjpg_UX1000_.jpg'}
]

export async function GET(){
    return new Response(JSON.stringify(movies), {status:200})
}