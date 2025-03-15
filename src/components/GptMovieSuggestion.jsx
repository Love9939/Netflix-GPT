import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerMovieCard from "../utils/ShimmerMovieCard";

const GptMovieSuggestion = () => {
  const {movieNames, movieResults, loading} = useSelector(store => store.gpt);

  // Show shimmer effect while loading  
  if (loading) {
    return (
      <div className="p-2 m-2 opacity-90 bg-black-700 text-white flex flex-wrap justify-center">
        {Array.from({ length: 12 }).map((_, index) => (
          <ShimmerMovieCard key={index} />
        ))}
      </div>
    );
  }

  // If no results
  if (!movieNames?.length) {
    return null;
  }

  return (
    <div className="p-1 sm:p-2 opacity-90 bg-black-700 text-white">
      <div>
        {movieNames.map((movie, index) => (
          movieResults[index]?.length > 0 ? (
            <MovieList 
              key={movie} 
              title={movie} 
              movies={movieResults[index]} 
            />
          ) : null
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;