import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validation";

const Login = () => {
  const [alreadySignUp, setAlreadySignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef();
  const password = useRef(null);
  const toggleSignUp = () => {
    setAlreadySignUp(!alreadySignUp)
  }

  const handleSubmit = () => {
    const mssg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(mssg);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg" alt="background-image" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black w-3/12 my-36 p-12 pr-14 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-sm">
        <h1 className="font-bold text-3xl p-2">{alreadySignUp ? "Sign In" : "Sign Up"}</h1>
        {!alreadySignUp && <input type="text" placeholder="Your Name" className="p-4 m-2 mb-4 w-full rounded-sm bg-gray-700 bg-opacity-50" />}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 m-2 mb-4 w-full rounded-sm bg-gray-700 bg-opacity-50" />
        <input ref={password} type="password" placeholder="Password" className="p-4 m-2 mb-4 w-full rounded-sm bg-gray-700 bg-opacity-50" />
        <p className="p-2 text-red-600">{errorMessage}</p> 
        <button className="p-2 m-2 bg-red-700 hover:bg-red-900 w-full rounded-sm" onClick={handleSubmit}>{alreadySignUp ? "Sign In" : "Sign Up"}</button>
        <p className="p-1 m-1">{alreadySignUp ? "New to Netflix?" : "Have a Netflix account already?"} <span className="text-red-500 hover:underline cursor-pointer" onClick={toggleSignUp}>{alreadySignUp? "Sign Up now!" : "Sign In then!"}</span></p>
      </form>
    </div>
  )
}

export default Login