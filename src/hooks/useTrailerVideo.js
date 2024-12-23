import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();


    const getMovieTrailer = async() => {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS)
        const data = await response.json();
        console.log(data.results);
        const trailerCard = data.results.find((card) => card.type === "Trailer") || data.results[0];
        dispatch(addTrailerVideo(trailerCard));


    }

    useEffect(() => {
        getMovieTrailer();
    }, [])
}

export default useTrailerVideo;