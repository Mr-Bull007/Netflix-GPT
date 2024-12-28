import { BACKGROUND_IMG } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMG} alt="background-image" className="h-screen object-cover w-screen"/>
      </div>
      <div className="pt-[30%] md:p-0">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
