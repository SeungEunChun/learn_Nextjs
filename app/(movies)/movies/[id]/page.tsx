
import Movieinfo from "../../../../components/movie-info"
import { Suspense } from "react"
import { getMovie } from "../../../../components/movie-info"

interface IParams {
    params: { id: number };
}


export async function generateMetadata({ params: { id } }: IParams) {
    const movieid = await getMovie(id);
    return {
        title: movieid.title,
        description: movieid.overview
    }
}


export default async function MovieDetailPage({ params: { id } }: IParams) {



    return <div>

        <Suspense fallback={<h1>Loading Movieinfo..</h1>}>
            <Movieinfo id={id} />
        </Suspense>


    </div>
}