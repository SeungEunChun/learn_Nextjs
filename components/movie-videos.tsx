
import { API_URL } from "../app/constants";
import styles from '../styles/movie-videos.module.css'

async function getVideos(id: string) {
    console.log(`Fetching Video : ${Date.now()}`) //영화 비디오 패치 시간
    await new Promise((res) => setTimeout(res, 1000))
    const res = await fetch(`${API_URL}/${id}/videos`);
    return res.json();
}


export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <div className={styles.container}>
        {
            videos.slice(0, 2).map((video) => (
                <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            ))
        }
    </div>
}