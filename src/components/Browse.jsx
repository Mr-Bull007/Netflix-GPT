import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const gptClicked = useSelector(store => store.GPT.toggleGPTSearchValue);
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {gptClicked ? <GPTSearch /> : (
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
