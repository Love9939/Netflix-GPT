

const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center ">
        
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-9 bg-white" placeholder="What would you like to watch today" />
            <button className="py-4 px-2 m-4 col-span-3 bg-red-600 text-xl text-white rounded-md cursor-pointer" >
                Search
            </button>
        </form>
        
    </div>
  )
}

export default GptSearchBar