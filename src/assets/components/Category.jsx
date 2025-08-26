import { useEffect } from "react";
import { Link } from "react-router";
import hair from "../images/hair.png";
import skin from "../images/skin.jpg";
import soap from "../images/soap.png";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    title: "Skin Care",
    image: skin,
    description: "Hydrate and rejuvenate your skin.",
  },
  {
    title: "Hair Care",
    image: hair,
    description: "Nourish and strengthen healthy hair.",
  },
  {
    title: "Soap",
    image: soap,
    description: "Gently cleanse your skin with our natural soaps.",
  },
];

const CategorySection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 font-[Montserrat]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {categories.map((category, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="group transition transform hover:scale-105"
          >
            <div className="overflow-hidden mx-auto mb-6 w-[300px] h-[360px] rounded-[9999px] ">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-[16px] font-semibold">{category.title}</h3>

            <p className="text-sm font-Montserrat text-gray-500 mt-1 mb-1">{category.description}</p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
