import { BACKGROUND_IMG } from "../utils/constants"
import GPTMovieSuggestions from "./GPTMovieSuggestions"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
              <img src={BACKGROUND_IMG} alt="background-image" />
            </div>
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch