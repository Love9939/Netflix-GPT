import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  
  // Add check to ensure movies data is available
  if (!movies.nowPlayingMovies || !movies.topRatedMovies || 
      !movies.popularMovies || !movies.upcomingMovies) {
    return <div className="h-screen bg-black"></div>; // Placeholder while loading
  }
  
  return (
    <div className="bg-black pt-2 md:pt-0 md:-mt-16 lg:-mt-40 xl:-mt-52 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;