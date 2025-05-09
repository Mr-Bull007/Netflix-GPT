import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[50%] md:pt-0 bg-black">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id.toString()} />
    </div>
  );
};

export default MainContainer;
