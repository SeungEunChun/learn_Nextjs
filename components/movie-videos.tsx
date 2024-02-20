
import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    console.log(`Fetching Video : ${Date.now()}`) //영화 비디오 패치 시간
    await new Promise((res) => setTimeout(res, 3000))
    const res = await fetch(`${API_URL}/${id}/videos`);
    return res.json();
}


export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}