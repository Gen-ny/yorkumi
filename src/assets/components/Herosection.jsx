import "@fontsource/montserrat";
import img1 from "../images/hero.jpg";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto bg-[#F9FAFB] relative mt-20 md:mt-40 px-6 md:px-12 lg:px-20">
      
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center items-start text-left font-semibold">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold leading-snug">
          Natural Beauty <br />
          <span className="text-[#2A1009]">Redefined</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-6 mb-4 max-w-md">
          Discover our premium collection of organic cosmetics crafted with the finest
          natural ingredients for your everyday beauty routine.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <Link to="/product">
            <button className="px-6 py-2.5 cursor-pointer bg-[#2A1009] hover:bg-[#4e1e11] text-white rounded-md transition">
              Shop Now
            </button>
          </Link>
          <Link to="/about">
            <button className="px-6 py-2 border border-gray-500 cursor-pointer hover:bg-[#C7C1BF] bg-white text-black rounded-md transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center animate-pulse">
        <img
          src={img1}
          alt="Hero Image"
          className="w-full max-w-md md:max-w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;