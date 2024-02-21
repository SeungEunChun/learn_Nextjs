
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export async function getMovie() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}