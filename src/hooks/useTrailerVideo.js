import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const data = await response.json();
      const trailerCard =
        data.results.find((card) => card.type === "Trailer") || data.results[0];
      dispatch(addTrailerVideo(trailerCard));

      console.log("Trailer video:", trailerCard);
    } catch (error) {
      console.log("Error fetching trailer: ", error);
    }
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
