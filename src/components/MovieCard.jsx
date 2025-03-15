import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constant";
import MovieTrailer from "../utils/MovieTrailer";

const MovieCard = ({ posterPath, movieId }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!posterPath) return null;

  return (
    <>
      <div
        className="relative w-28 sm:w-36 md:w-40 lg:w-48 h-40 sm:h-52 md:h-60 lg:h-72 bg-zinc-900 rounded-lg overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl mx-1 my-2 md:mx-3 md:my-3 flex-shrink-0"
        onClick={() => setShowTrailer(true)}
      >
        <img
          alt="Movie Card"
          src={`${IMG_CDN_URL}${posterPath}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Play icon overlay - visible on mobile hover as well */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300">
          <div className="bg-black bg-opacity-50 rounded-full p-2 md:p-3">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Show Trailer Modal */}
      {showTrailer && (
        <MovieTrailer
          movieId={movieId}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </>
  );
};

export default MovieCard;