import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_IMG, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addClickGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const gptClicked = useSelector((store) => store.GPT.toggleGPTSearchValue);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearch = () => {
    dispatch(addClickGPTSearch());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-28 py-3 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="w-48" src={LOGO_IMG} alt="logo" />
      {user && (
        <div className="flex">
          <div className="m-4 p-3 font-extrabold text-white">
            <h2>Hi {user.displayName}!</h2>
          </div>
          {gptClicked && (
            <div className="m-3 p-3 py-4">
              <select className="bg-gray-900 text-white" onChange={handleLangChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="py-3 px-5 m-4 bg-red-600 rounded-xl hover:bg-red-700">
            <button
              className="text-black font-bold w-20 h-5"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
          <button
            className="px-4 py-2 m-4 bg-violet-800 rounded-xl text-white hover:bg-violet-950"
            onClick={handleGPTSearch}
          >
            {gptClicked ? "Back to Home" : "GPT Search"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
