import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-2 md:px-6 bg-black">
      <h1 className="text-base md:text-lg font-semibold text-white mx-2 md:mx-4 py-2">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide pb-2 md:pb-4">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard 
              key={movie.id} 
              posterPath={movie.poster_path} 
              movieId={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;