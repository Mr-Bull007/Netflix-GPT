import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
    const langChoice = useSelector(store => store.config.lang);

  return (
    <div className="flex justify-center">
      <form className="flex mt-28">
        <input
          type="text"
          className="py-3 px-4 w-80 my-5 mr-2 bg-black opacity-70 rounded-lg text-white border-white"
          placeholder={lang[langChoice].GPTSearchPlaceholder}
        />
        <button className="px-9 py-1 my-5 bg-red-600 text-white rounded-lg hover:bg-red-700">
          {lang[langChoice].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
