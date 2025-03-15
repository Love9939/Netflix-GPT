import { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieNames, addMovieResults, setLoadingMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=hi-US&page=1`,
        API_OPTIONS
      );

      if (!data.ok) {
        throw new Error("Failed to fetch movies from TMDB");
      }

      const json = await data.json();
      return json.results;
    } catch (error) {
      setError("Failed to fetch movies. Please try again.");
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value.trim();

    if (!query) {
      setError("Please enter a search query.");
      return;
    }

    setLoading(true);
    setError("");
    dispatch(setLoadingMovies(true));

    try {
      const gptQuery =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        query +
        ". Only give the names of 10 movies, comma-separated.";

      const deepseekResult = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
      });

      if (!deepseekResult.choices || !deepseekResult.choices[0]?.message?.content) {
        throw new Error("No results found from GPT.");
      }

      const gptMovies = deepseekResult.choices[0].message.content
        .split(",")
        .map((movie) => movie.trim())
        .slice(0, 10);
        
      dispatch(addMovieNames(gptMovies));
        
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      
      dispatch(addMovieResults(tmdbResults));

    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      dispatch(setLoadingMovies(false));
      searchText.current.value = "";
    }
  };

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[8%] flex justify-center px-4">
      <form
        className="w-full max-w-lg bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 sm:p-3 md:p-4 m-2 sm:m-3 md:m-4 col-span-8 bg-white rounded-md"
          placeholder="What would you like to watch?"
        />
        <button
          className={`py-2 sm:py-3 md:py-4 px-1 sm:px-2 m-2 sm:m-3 md:m-4 col-span-4 bg-red-600 text-sm sm:text-base md:text-xl text-white rounded-md cursor-pointer ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleGptSearchClick}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-center text-red-500 absolute top-36 sm:top-40 md:top-44">
          {error}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;