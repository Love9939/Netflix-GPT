import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { SIGN_IN_LOGO, USER_AVATAR } from "../utils/constant";



const Login = () => {
    const[isSignInForm , setIsSignInForm] = useState(true);
    const[errorMessage , setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = ()=>{
        const messages =checkValidateData(
            email.current.value, 
            password.current.value
        );
        setErrorMessage(messages);

        if(messages) return;
        //signup and sign in
        if(!isSignInForm){
    createUserWithEmailAndPassword(
                auth,
                email.current.value, 
                password.current.value
    )
  .then((userCredential) => {
    // Signed up logic
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, 
        photoURL: USER_AVATAR,
      }).then(() => {
        const {uid , email , displayName ,photoURL} = auth.currentUser;
                  dispatch(
                    addUser({
                      uid: uid , 
                      email: email , 
                      displayName: displayName ,
                      photoURL: photoURL
                    })
                  );
        
      }).catch((error) => {
        setErrorMessage(error.message);

      });
    //console.log(user);
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage)
    
  });

        } else{
            //sign in logic 
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage)
  });

        }
    };
    
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
        

    }
    
  return (
    <div>
        <Header />
        <div className="absolute">
            <img src={SIGN_IN_LOGO}
            alt="Background image" />
        </div>
        <form onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg ">
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm ? "Sign In":"Sign Up"}
            </h1>

            {!isSignInForm && <input ref={name}
            type="text"
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-600" />  
            }

            <input ref={email}
                type="text"
                placeholder="Email address" 
                className="p-4 my-4 w-full bg-gray-600" />

            <input ref={password}
                type="password"
                placeholder="Password" 
                className="p-4 my-4 w-full bg-gray-600"/>
            <p className="font-bold text-red-500 px-4 py-2 rounded-md shadow-md transition-opacity duration-300">{
            errorMessage}
            </p>

            <button
                type="button"
                className="p-4 my-4 w-full bg-red-700 rounded-lg cursor-pointer" 
                onClick={handleButtonClick}
            >
            {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className="py-4 cursor-pointer text-lg " 
                onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix ? Sign Up now" : "Already registred ? Sign In Now"}
            </p>

        </form>
    </div>
  )
}

export default Login ;