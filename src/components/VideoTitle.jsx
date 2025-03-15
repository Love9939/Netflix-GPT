const VideoTitle = ({title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-28 sm:pt-36 md:pt-48 lg:pt-60 px-4 md:px-8 lg:px-12 absolute">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray drop-shadow-md line-clamp-2">
        {title}
      </h1>

      <p className="hidden sm:block w-full md:w-2/3 lg:w-1/3 mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3">
        {overview}
      </p>

      <div className="mt-2 md:py-2 flex gap-2 sm:gap-3 md:gap-5 flex-wrap">
        <button className="flex items-center gap-1 md:gap-2 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-lg font-semibold rounded-md shadow-md hover:bg-gray-200 transition-all duration-300 cursor-pointer">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 fill-black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        <button className="flex items-center gap-1 md:gap-2 bg-gray-700 text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-lg font-semibold rounded-md shadow-md hover:bg-gray-600 transition-all duration-300 cursor-pointer">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;