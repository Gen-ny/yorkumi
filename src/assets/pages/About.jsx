import React, { useEffect } from 'react';
import { Link } from "react-router";
import { motion } from "framer-motion";
import team1 from "../images/shashadu.jpg";
import team2 from "../images/moha.jpg";
import team4 from "../images/sheri.jpg";
import about1 from "../images/soap.jpg";
import about2 from "../images/soap.jpg";
import "@fontsource/montserrat";
import Testimonial from "../components/Testimony";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Vid from "../images/vid.mp4";
import Why from "../components/Why";
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <>
      <Navbar />
      <section className="w-full bg-[#fdf6f0] text-[#1b5059] font-[Montserrat]">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >

          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto mt-15 text-gray-600">
            “YORKUMI believe in the truth and transparency in the personal care industry - what you see is what you get, with no compromise on luxury.”
          </p>
          <div className="flex justify-center mt-8 gap-4">
            <Link
              to="/product"
              className="bg-[#ec8733] text-white px-6 py-2 rounded-full hover:bg-[#d86620] transition"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="border border-[#ec8733] text-[#ec8733] px-6 py-2 rounded-full hover:bg-[#ec8733] hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>



        {/* Problems & Solutions */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <img src={about1} alt="Natural Care" className="rounded-xl shadow-md w-full object-cover" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Welcome To The Yorkumi Story</h3>
              <p className="mb-3 text-sm text-gray-700">
                A natural skincare brand that is bringing nature into your daily life.
                Retelling the ancient African beauty story. A beauty secret devoid of harmful chemicals that must be shared with the world. Inspiring confidence & pioneering the truth of embracing ones natural beauty.

                <p className="mb-3 text-sm text-gray-700">Sourcing our ingredients from women, we bring shea butter, black soap, neem & other natural raw ingredients to life so you can be nurtured.</p>

                <p className="mb-3 text-sm text-gray-700">Our story begun as a first time mom, battling allergies of all sorts & when everything else failed – this frustrated mother asked herself -what will her mother do if she was here – after extensive research this proudly made in Ghana boldly African brand was birthed.</p>

                <p className="mb-3 text-sm text-gray-700">Today we have grown, adding to our products line & increasing our client base. Continuous learning is what has brought us here & our promise to you is this – African Beauty secrets will be brought to the modernised table of today’s world through well researched ingredients & science based formulations.</p>

                <p className="text-[#D86620]">And that is why we say – Boldly Raw Beauty here at Yörkumi.</p>
                <p className="text-[#D86620]">Yörkumi: Your SkinConfidence Naturally.</p>
              </p>
              <p className="text-sm text-gray-700">
                Our products help reduce stretch marks, promote hair growth, clear skin tone, and support anti-aging—all while being 100% chemical free.
              </p>
            </div>
          </div>
        </div>

         <section className="bg-[#fdf4eb] py-20 px-4 md:px-10">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold">We follow a Simple Formula</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* First Circle */}
        <div className="rounded-full border border-[#caa87c] hover:bg-[#ddc3a6] w-64 h-64 flex items-center justify-center text-center p-6" data-aos="fade-up" data-aos-delay="100">
          <div>
            <h3 className="font-semibold text-sm md:text-base mb-2">HERBS &<br />ESSENTIAL OILS</h3>
            <p className="text-xs text-gray-700">that are not only medicinal but has been a well kept African secret for glowing healthy skin.</p>
          </div>
        </div>

        <span className="text-3xl font-bold" data-aos="fade-up" data-aos-delay="150">+</span>

        {/* Second Circle */}
        <div className="rounded-full border border-[#caa87c] hover:bg-[#ddc3a6] w-64 h-64 flex items-center justify-center text-center p-6" data-aos="fade-up" data-aos-delay="200">
          <div>
            <h3 className="font-semibold text-sm md:text-base mb-2">EDIBLE BUTTERS<br />& PLANT OILS</h3>
            <p className="text-xs text-gray-700">that are poised to bring the touch of modernity to ethnicity.</p>
          </div>
        </div>

        <span className="text-3xl font-bold" data-aos="fade-up" data-aos-delay="250">=</span>

        {/* Final Circle (Filled) */}
        <div className="rounded-full bg-[#ddc3a6] w-64 h-64 flex items-center justify-center text-center p-6 text-white" data-aos="fade-up" data-aos-delay="300">
          <div>
            <h3 className="font-semibold text-sm md:text-base mb-2 text-black">SKIN CARE</h3>
            <div className="w-12 h-[1px] bg-white mx-auto mb-2"></div>
            <p className="text-xs text-black">
              Empowering you to confidently show off your natural glow. Welcome to SkinConfidence!
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* Impact Section */}
        <div className="bg-[#1b5059] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Making a Difference</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <strong>🌍 Community Empowerment:</strong> Women in northern Ghana find income opportunities through shea processing.
                </li>
                <li>
                  <strong>💼 Job Creation:</strong> Our growth helps support over 200 distributors and workers.
                </li>
                <li>
                  <strong>🌱 Economic Diversification:</strong> We contribute to reducing dependency on imported cosmetics.
                </li>
              </ul>
            </div>
            <motion.img
              src={about2}
              alt="Community Impact"
              className="rounded-xl shadow-lg w-full h-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        <Testimonial />


      </section>

      <Why />
      <Footer />
    </>
  );
};

export default About;
