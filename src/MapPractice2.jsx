import { useMovieGenerator } from "./useMovieGenerator";
export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    console.log("movies", movies);

    const showMovies = (movie => {
        return (
            <div className="movie">
                <h2 className="title">{movie.title}</h2>
                <p>Starring: {movie.star}</p>
                <p>Genre: {movie.genre}</p>
                <blockquote>Iconic quote: {movie.quote}</blockquote>
            </div>   
        )
    }
    )

    return (
        <div className="mapPractice">
            <h2>Movie list</h2>
            <button onClick={regenerate}>Change Movies</button>
            <div className="movieList">
                {movies.map(showMovies)}
            </div>
        </div>
    );
}