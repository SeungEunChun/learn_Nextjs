import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { getMovie } from "../constants";
import { API_URL } from "../constants";


export const metadata = {
    title: "Home",
};


export default async function HomePage() {
    const movies = await getMovie();
    return (
        <div className={styles.container}>

            {
                movies.map((movie) => (
                    <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
                ))
            }

        </div>
    );
}