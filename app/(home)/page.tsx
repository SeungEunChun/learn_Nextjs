import Link from "next/link";
export const metadata = {
    title: 'Home',

}

async function getMovies() {
    await new Promise((res => setTimeout(res, 1000)))
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function Myhome() {
    const movies = await getMovies();
    return <div>
        <ul>
            {movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
        </ul>
    </div>
}