import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {

   return (
    <div>
        <h1 className="px-2 pt-4 pb-1 font-bold text-lg text-white z-10">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide pl-2">
            <div className="flex">
            {movies?.map(movie => <MovieCard key={movie.id} movieName={movie.title} posterPath={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList