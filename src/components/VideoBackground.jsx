import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
import PropTypes from "prop-types";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(movieId);

  if (!trailer || !trailer.key) return <div>Loading...</div>;

  return (
    <div className="w-screen aspect-video inset-0">
      <iframe
        className="w-full h-full "
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0`}
        title={trailer?.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default VideoBackground;
