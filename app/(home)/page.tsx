
export const metadata = {
    title: 'Home',

}

async function getMovies() {
    await new Promise((res => setTimeout(res, 2000)))
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function Myhome() {
    const movies = await getMovies();
    return <div>
        {JSON.stringify(movies)}
    </div>
}