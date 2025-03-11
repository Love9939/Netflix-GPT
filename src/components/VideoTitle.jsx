


const VideoTitle = ({title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-60 px-12 absolute">
        <h1 
            className="text-3xl md:text-5xl font-bold text-gray drop-shadow-md">
            {title}
        </h1>

        <p 
            className=" w-1/3 mt-3 text-base md:text-lg text-gray-300 leading-relaxed">
            {overview}
        </p>

        <div className=" py-2 flex gap-5 flex-wrap">

            <button 
            className="flex items-center gap-2 bg-white text-black px-6 py-2 text-lg font-semibold rounded-md shadow-md hover:bg-gray-200 transition-all duration-300 cursor-pointer">
      <svg
        className="w-6 h-6 fill-black"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
      Play
            </button>

            <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-2 text-lg font-semibold rounded-md shadow-md hover:bg-gray-600 transition-all duration-300 cursor-pointer">
        <svg
          className="w-6 h-6 fill-white"
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