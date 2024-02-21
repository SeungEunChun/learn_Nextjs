import MovieVideos from "../../../../components/movie-videos"
import Movieinfo from "../../../../components/movie-info"
import { Suspense } from "react"





export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {



    return <div>

        <Suspense fallback={<h1>Loading Movieinfo..</h1>}>
            <Movieinfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading Movievideo..</h1>}>
            <MovieVideos id={id} />
        </Suspense>

    </div>
}