import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { id: 1, initials: "NA", message: "Yorkumi has completely transformed my skincare routine. My skin feels smooth and radiant.", name: "Naa Adjorkor", role: "Customer" },
  { id: 2, initials: "KO", message: "I love how natural and refreshing the products feel. Definitely worth it!", name: "Kwame Owusu", role: "Customer" },
  { id: 3, initials: "NY", message: "The shea butter is unmatched. My skin stays moisturized all day.", name: "Nana Yaa", role: "Customer" },
  { id: 4, initials: "EK", message: "Great quality and excellent packaging. Yorkumi never disappoints.", name: "Emmanuel Kyei", role: "Customer" },
  { id: 5, initials: "CF", message: "Ever since I started using Yorkumi, my skin feels healthier and looks younger.", name: "Charles Frimpong", role: "Customer" },
  { id: 6, initials: "YT", message: "The natural scent is amazing, and I always get compliments on my skin.", name: "Yaw Tetteh", role: "Customer" },
];

export default function Testimony() {
  return (
    <section className="py-16 bg-gray-50"
      style={{
        backgroundImage:
          "url('https://asianbeautyessentials.com/cdn/shop/articles/Shea_butter_with_cosmetic_products.jpg?v=1690608351')",
      }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1b5059] mb-12">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="pb-16"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center relative h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#1b5059] text-white text-xl font-bold">
                    {t.initials}
                  </div>
                  <p className="text-gray-600 italic mb-4">“{t.message}”</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#ec8733]">{t.name}</h3>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}