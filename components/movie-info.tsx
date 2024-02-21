import { API_URL } from "../app/(home)/page"
import styles from '../styles/movie-info.module.css'
import Link from "next/link"
async function getMovie(id: string) {
    console.log(`Fetching Movie :  ${Date.now()}`) // 영화 패치 시간
    // throw new Error("somethin wrong");
    await new Promise((res) => setTimeout(res, 1000))
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
}


export default async function Movieinfo({ id }: { id: string }) {
    const infos = await getMovie(id);
    return <div className={styles.container}>
        <img src={infos.poster_path} alt={infos.title} className={styles.poster} />
        <div>
            <h1 className={styles.title}>{infos.title}</h1>
            <h3>★{infos.vote_average.toFixed(1)}</h3>
            <p className={styles.info}>{infos.overview}</p>
            <Link href={infos.homepage} target={"_blank"}>Homepage &rarr;</Link>
        </div>

    </div>
}