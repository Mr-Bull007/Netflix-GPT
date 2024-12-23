
const VideoTitle = ({title, description}) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-10 absolute text-white bg-gradient-to-r from-black">
        <h1 className="font-extrabold text-6xl">{title}</h1>
        <p className="py-2 text-lg w-1/3">{description}</p>
        <div className="">
            <button className="bg-white p-4 px-12 mr-1 font-semibold rounded-md text-xl text-black hover:opacity-80">Play</button>
            <button className="bg-gray-500 p-4 px-12 ml-1 font-semibold rounded-md text-xl text-white bg-opacity-50 hover:opacity-80">More Info</button>
        </div>
        
    </div>
  )
}

export default VideoTitle