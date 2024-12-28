import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gptSuggestedMovies = useSelector((store) => store.GPT.gptMovieResult);
  if (!gptSuggestedMovies) return null;

  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      <h1 className="font-bold text-2xl">GPT Suggested Movies</h1>
      <div>
        {gptSuggestedMovies.map((movie, index) => (
          <MovieList key={index} title="" movies={movie} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
