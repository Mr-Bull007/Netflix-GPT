import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black md:mt-0 mt-[30%] -ml-3 md:ml-0'>
      <div className='md:-mt-48 mt-0 relative z-20 ml-8'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Popular" movies={movies.nowPlayingMovies}/>
      <MovieList title="Horror" movies={movies.nowPlayingMovies}/>
      <MovieList title="" movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer