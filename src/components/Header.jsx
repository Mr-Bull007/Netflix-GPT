import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO_IMG } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
      console.log(error.message)
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, displayName, email} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });

      return () => unsubscribe();
}, []);
  return (
      <div className="absolute px-28 py-3 bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img className="w-48" src={LOGO_IMG} alt="logo" />
        {user && (
          <div className="flex">
          <div className="m-4 p-3 font-extrabold text-white"><h2>Hi {user.displayName}!</h2></div>
          <div className="py-3 px-5 m-4 bg-red-600 rounded-xl"><button className=" text-black font-bold w-20 h-5" onClick={handleSignOut}>Sign Out</button></div></div>)}
      </div>
  )
}

export default Header