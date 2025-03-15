import { useEffect, useState } from "react";
import { API_OPTIONS } from "./constant";

const MovieTrailer = ({ movieId, onClose }) => {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieTrailer = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailerVideo = filterData.length ? filterData[0] : json.results[0];
        setTrailer(trailerVideo);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieTrailer();
  }, [movieId]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative w-full md:w-4/5 lg:w-3/4 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : trailer ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-sm md:text-base">
            No trailer available
          </div>
        )}
        
        {/* Close button - made more accessible on mobile */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full transition-all duration-300"
          aria-label="Close trailer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieTrailer;