import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [alreadySignUp, setAlreadySignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const email = useRef();
  const name = useRef();
  const password = useRef(null);
  const toggleSignUp = () => {
    setAlreadySignUp(!alreadySignUp);
  };

  const handleSubmit = () => {
    const mssg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(mssg);
    if (mssg) return;

    if (!alreadySignUp) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen w-screen object-cover" src={BACKGROUND_IMG} alt="background-image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black md:w-3/12 my-36 p-12 pr-14 md:mx-auto right-0 left-0 text-white bg-opacity-80 rounded-sm"
      >
        <h1 className="font-bold text-3xl p-2">
          {alreadySignUp ? "Sign In" : "Sign Up"}
        </h1>
        {!alreadySignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Your Name"
            className="p-4 m-2 mb-4 w-full rounded-sm bg-gray-700 bg-opacity-50"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 mb-4 w-full rounded-sm bg-gray-700 bg-opacity-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 mb-4 w-full rounded-sm bg-gray-700 bg-opacity-50"
        />
        <p className="p-2 text-red-600">{errorMessage}</p>
        <button
          className="p-2 m-2 bg-red-700 hover:bg-red-900 w-full rounded-sm"
          onClick={handleSubmit}
        >
          {alreadySignUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-1 m-1">
          {alreadySignUp
            ? "New to Netflix?"
            : "Have a Netflix account already?"}{" "}
          <span
            className="text-red-500 hover:underline cursor-pointer"
            onClick={toggleSignUp}
          >
            {alreadySignUp ? "Sign Up now!" : "Sign In then!"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
