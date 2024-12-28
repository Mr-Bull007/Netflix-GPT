import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langChoice = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const data = await response.json();
    return data.results;
  }

  const handleGPTSearchClick = async () => {
    try {
      const gptSearchQuery =
        "Act as a movie recommendation system. And recommend 5 movies based on the given criteria: " +
        searchText.current.value +
        ". Make the recommendation a good and healthy mix of critically acclaimed films and popular films, unless specifically asked for one. Now, you just need to send me the movie names. Also, keep the list comma separated like the example given ahead. Example: The Godfather, Golmaal, Deewar, Manto, Ghatak.";

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const gptResults = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: gptSearchQuery }],
      });
      // completion.then((result) => console.log(result.choices[0].message));
      console.log("gptResults: ", gptResults.choices?.[0]?.message?.content);
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promiseArrays = gptMovies.map((movie) => searchMovieTMDB(movie));
      
      const tmdbResults = await Promise.all(promiseArrays);
      console.log(tmdbResults);

      dispatch(addGPTMovieResult(tmdbResults));
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  

  return (
    <div className="flex justify-center">
      <form className="flex mt-28" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="py-3 px-4 w-80 my-5 mr-2 bg-black opacity-70 rounded-lg text-white border-white"
          placeholder={lang[langChoice].GPTSearchPlaceholder}
        />
        <button
          className="px-9 py-1 my-5 bg-red-600 text-white rounded-lg hover:bg-red-700"
          onClick={handleGPTSearchClick}
        >
          {lang[langChoice].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
