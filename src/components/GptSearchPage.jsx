
import { SIGN_IN_LOGO } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10"> 
            <img src={SIGN_IN_LOGO}
            alt="Background image" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
        
    </div>
  )
}

export default GptSearchPage;