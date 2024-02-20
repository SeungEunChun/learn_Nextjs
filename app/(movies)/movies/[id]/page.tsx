import { API_URL } from "../../../(home)/page"
async function getMovie(id: string) {
    console.log(`Fetching Movie :  ${Date.now()}`) // 영화 패치 시간
    await new Promise((res) => setTimeout(res, 2000))
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
}

async function getVideos(id: string) {
    console.log(`Fetching Video : ${Date.now()}`) //영화 비디오 패치 시간
    await new Promise((res) => setTimeout(res, 2000))
    const res = await fetch(`${API_URL}/${id}/videos`);
    return res.json();
}




export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    console.log("fetch start")
    const [movies, videos] = await Promise.all([getMovie(id), getVideos(id)])
    console.log("fetch complete")
    return <h1>{movies.title}</h1>
}