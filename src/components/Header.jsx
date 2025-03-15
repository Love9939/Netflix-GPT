import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    setShowMenu(false); // Close mobile menu after action
  };

  return (
    <div className="absolute w-screen px-4 sm:px-6 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-24 sm:w-32 md:w-40" src={LOGO} alt="logo" />
      
      {user && (
        <div className="flex items-center gap-2">
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2">
            <button
              className="px-2 py-2 bg-purple-600 text-white text-xs font-semibold rounded-md hover:bg-purple-700 transition duration-300"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover"
              src={USER_AVATAR}
              alt="usericon"
            />
            <button
              onClick={handleSignOut}
              className="px-2 py-2 bg-red-600 text-white text-xs font-semibold rounded-md hover:bg-red-700 transition duration-300"
            >
              Sign Out
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-1 rounded"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Mobile menu */}
          {showMenu && (
            <div className="absolute top-12 right-4 bg-black bg-opacity-90 p-4 rounded-lg shadow-lg z-20 md:hidden">
              <div className="flex flex-col gap-2">
                <button
                  className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-md hover:bg-purple-700 transition duration-300 w-full text-left"
                  onClick={handleGptSearchClick}
                >
                  {showGptSearch ? "Home Page" : "GPT Search"}
                </button>
                <div className="flex items-center gap-2 px-1 py-2">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={USER_AVATAR}
                    alt="usericon"
                  />
                  <span className="text-white text-sm truncate max-w-32">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition duration-300 w-full text-left"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;