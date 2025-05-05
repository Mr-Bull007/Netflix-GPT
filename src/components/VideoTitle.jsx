import PropTypes from "prop-types";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video md:pt-[25%] pt-5 md:px-10 px-5 absolute text-white bg-black md:bg-gradient-to-r from-black md:mt-0 mt-[56.4%]">
      <h1 className="font-extrabold text-2xl md:text-6xl">{title}</h1>
      <p className="hidden lg:inline-block py-2 text-lg w-1/3">{description}</p>
      <div className="md:mt-0 mt-2">
        <button className="bg-white p-4 md:px-12 mr-1 font-semibold rounded-md text-xl text-black hover:opacity-80">
          Play
        </button>
        <button className="bg-gray-500 p-4 md:px-12 ml-1 font-semibold rounded-md text-xl text-white bg-opacity-50 hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default VideoTitle;
