import "@fontsource/montserrat";
import img1 from "../images/hero.jpg";
import { Link } from "react-router";
import { div } from "framer-motion/client";

const HeroSection = () => {
  return (
        <div className="flex flex-row items-center justify-center h-auto bg-cover bg-center bg-[#F9FAFB] relative  mt-40">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center items-start text-left p-6 font-semibold ml-40">
            <h1 className="text-5xl text-black leading-16 font-bold">Natural Beauty <br /> <span className="text-[#2A1009] mr-28">Redefined</span> </h1>
            <p className="text-gray-600 text-base md:text-md mt-6 mb-2 max-w-md">Discover our premium collection of organic cosmetics crafted with the finest natural ingredients for your everyday beauty routine.</p>
            <div className="mt-4 flex flex-row justify-center gap-4 items-center">
              <Link to="/product"><button className="mt-4 px-6 py-2.5 cursor-pointer bg-[#2A1009] hover:bg-[#C37233] text-white ">Shop Now</button></Link>
              <Link to="/about"><button className="mt-4 px-6 py-2 border border-gray-500 cursor-pointer hover:bg-[#C7C1BF] bg-white text-black ">Learn More</button></Link>
            </div>
          </div>

          <div className="w-[50%] animate-pulse">
            <img
              src={img1}
              alt="Hero Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  );
};

export default HeroSection;
