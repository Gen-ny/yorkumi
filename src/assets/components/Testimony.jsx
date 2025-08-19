import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import T1 from "../images/T1.jpg";
import T2 from "../images/T2.jpg";
import T3 from "../images/T3.jpg";
import T4 from "../images/T4.jpg";
import T5 from "../images/T5.jpg";
import T6 from "../images/T6.jpg";
import T8 from "../images/T8.jpg";
import T9 from "../images/T9.jpg";
import T10 from "../images/T10.jpg";

const testimonials = [
  { image: T1 },
  { image: T2 },
  { image: T3 },
  { image: T4 },
  { image: T5 },
  { image: T6 },
  { image: T8 },
  { image: T9 },
  { image: T10 },
];

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1b5059] mb-10">What Our Customers Say
 </h2>

       <Slider {...settings}>
  {testimonials.map((item, index) => (
    <div key={index} className="!px-[4px]"> 
      <div className="w-[400px] h-[250px] rounded-xl overflow-hidden shadow-md">
        <img
          src={item.image}
          alt="testimonial"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  ))}
</Slider>
      </div>
    </section>
  );
};

export default Testimonial;
