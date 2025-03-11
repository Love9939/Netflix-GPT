import { onAuthStateChanged , signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR} from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store =>store.user);
  
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
      console.log(error)
      navigate("/error")
    });

  }
  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid , email , displayName ,photoURL} = user;
        dispatch(
          addUser({
            uid: uid , 
            email: email , 
            displayName: displayName ,
            photoURL: photoURL
          })
        );
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
        
      }
    });
    return ()=> unsuscribe();
  },[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
          className="w-40"
          src={LOGO}
          alt="logo" />
        {user && (<div className="flex p-2">
          <img className="w-12 h-12"
            src={USER_AVATAR}
            alt="usericon" 
          />
          <button onClick={handleSignOut}
  className="p-0.5 m-1 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
>
  Sign Out
</button>


        </div>)}
    </div>
  )
}

export default Header