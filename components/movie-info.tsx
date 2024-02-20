import { API_URL } from "../app/(home)/page"
async function getMovie(id: string) {
    console.log(`Fetching Movie :  ${Date.now()}`) // 영화 패치 시간
    await new Promise((res) => setTimeout(res, 2000))
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
}


export default async function Movieinfo({ id }: { id: string }) {
    const infos = await getMovie(id);
    return <h6>{JSON.stringify(infos)}</h6>
}