import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {
    const trailer = useSelector(store => store.movies?.trailerVideo)

    useTrailerVideo(movieId);

    if(!trailer) return <div className=''>Loading...</div>
  return (
    <div className='w-full aspect-video'>
        <iframe 
            className='w-full h-full'
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&si=c9fz6nd3FUo0fbW-&amp;controls=0&amp;start=2`} 
            title={trailer?.name} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground