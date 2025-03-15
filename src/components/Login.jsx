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
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        const messages = checkValidateData(
            email.current.value, 
            password.current.value
        );
        setErrorMessage(messages);

        if(messages) return;
        
        if(!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: USER_AVATAR,
                }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(
                        addUser({
                        uid: uid, 
                        email: email, 
                        displayName: displayName,
                        photoURL: photoURL
                        })
                    );
                }).catch((error) => {
                    setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
            });
        } else {
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
            });
        }
    };
    
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    
    return (
        <div>
            <Header />
            <div className="fixed inset-0 w-full">
                <img 
                    src={SIGN_IN_LOGO}
                    alt="Background image" 
                    className="h-full w-full object-cover"
                />
            </div>
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 absolute p-6 sm:p-8 md:p-12 bg-black/80 my-16 sm:my-24 md:my-36 mx-auto right-0 left-0 text-white rounded-lg"
            >
                <h1 className="font-bold text-2xl sm:text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input 
                        ref={name}
                        type="text"
                        placeholder="Full Name" 
                        className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-600 rounded-md" 
                    />  
                )}

                <input 
                    ref={email}
                    type="text"
                    placeholder="Email address" 
                    className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-600 rounded-md" 
                />

                <input 
                    ref={password}
                    type="password"
                    placeholder="Password" 
                    className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-600 rounded-md"
                />
                
                {errorMessage && (
                    <p className="font-bold text-red-500 px-4 py-2 rounded-md shadow-md transition-opacity duration-300 text-sm">
                        {errorMessage}
                    </p>
                )}

                <button
                    type="button"
                    className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-red-700 rounded-lg cursor-pointer hover:bg-red-800 transition-colors" 
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="py-2 sm:py-4 cursor-pointer text-sm sm:text-base" 
                    onClick={toggleSignInForm}
                >
                    {isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;