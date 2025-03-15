const ShimmerMovieCard = () => {
  return (
    <div className="w-28 sm:w-36 md:w-40 lg:w-48 h-40 sm:h-52 md:h-60 lg:h-72 bg-gray-700 rounded-lg overflow-hidden shadow-lg mx-1 my-2 md:mx-3 md:my-3 flex-shrink-0 animate-pulse">
      <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-800"></div>
    </div>
  );
};

export default ShimmerMovieCard;