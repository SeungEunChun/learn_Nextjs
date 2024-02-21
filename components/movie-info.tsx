
import { API_URL } from "../app/constants"
import styles from '../styles/movie-info.module.css'
import Link from "next/link"
import { Suspense } from "react"
import MovieVideos from '../components/movie-videos'
export async function getMovie(id: number) {
    console.log(`Fetching Movie :  ${Date.now()}`) // 영화 패치 시간
    // throw new Error("somethin wrong");
    await new Promise((res) => setTimeout(res, 1000))
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
}

async function getCredits(id: number) {
    await new Promise((res) => setTimeout(res, 1000))
    const res = await fetch(`${API_URL}/${id}/credits`)
    return res.json();
}


export default async function Movieinfo({ id }: { id: number }) {
    const infos = await getMovie(id);
    const credits = await getCredits(id);
    return <div className={styles.container}>
        <img src={infos.poster_path} alt={infos.title} className={styles.poster} />
        <div>
            <h1 className={styles.title}>{infos.title}</h1>
            <h3>❤️‍🔥{infos.vote_average.toFixed(1)}</h3>
            <p className={styles.info}>{infos.overview}</p>
            <Link href={infos.homepage} target={"_blank"}>Homepage &rarr;</Link>

        </div>

        <ul style={{ width: "300px" }}>Credits actor | character
            <hr />
            {

                credits.map((credit) => (
                    <li key={credit.id} className={styles.list}>
                        {credit.name} | {credit.character}


                    </li>
                ))//해당 영화에 출연한 배우들 전체 이름을 뽑아오고 싶었으니까 2중맵 처리
            }
        </ul>

        <Suspense fallback={<h1 style={{ marginTop: "30px" }}>Loading Movievideo..</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}