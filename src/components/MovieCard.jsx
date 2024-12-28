import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movieName, posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className='pr-2 w-44 hover:scale-95 transition-transform duration-300'>
        <img alt={movieName+"_movie_poster"} src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard