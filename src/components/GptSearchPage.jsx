import { SIGN_IN_LOGO } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full -z-10"> 
        <img 
          src={SIGN_IN_LOGO}
          alt="Background image" 
          className="object-cover w-full h-full"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;