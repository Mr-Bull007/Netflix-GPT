import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      console.log(error.message)
    });
    
  }
  return (
      <div className="absolute px-28 py-3 bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img className="w-48" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {user && (<div className="py-3 px-5 m-4 bg-red-600 rounded-xl"><button className=" text-black font-bold w-20 h-5" onClick={handleSignOut}>Sign Out</button></div>)}
      </div>
  )
}

export default Header