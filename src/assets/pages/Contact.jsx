import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Clock, Mail, Phone, Store } from "lucide-react";
import contactImg from "../images/contact.jpg";
import "@fontsource/montserrat";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <>
      <Navbar />
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#fefaf6] font-[Montserrat]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-64 sm:h-80 md:h-96 lg:h-[610px]">
            <img
              src={contactImg}
              alt="Contact Yorkumi"
              className="w-full h-full rounded-2xl shadow-xl object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1b5059] mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-500 italic text-sm sm:text-base">
                Have questions or want to learn more about our natural skincare products? We'd love to hear from you.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md">
                Thank you for contacting us! We'll get back to you shortly.
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xanjrnbk"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5 bg-white p-6 rounded-xl shadow-md border border-[#f2e8e2] max-w-md w-full"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-3 border border-[#ec8733]/40 rounded-md focus:ring-2 focus:ring-[#ec8733] focus:outline-none text-[#1b5059] placeholder:text-[#1b5059]/60 bg-[#fffaf7]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-3 border border-[#ec8733]/40 rounded-md focus:ring-2 focus:ring-[#ec8733] focus:outline-none text-[#1b5059] placeholder:text-[#1b5059]/60 bg-[#fffaf7]"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-5 py-3 border border-[#ec8733]/40 rounded-md focus:ring-2 focus:ring-[#ec8733] focus:outline-none text-[#1b5059] placeholder:text-[#1b5059]/60 bg-[#fffaf7]"
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#C37233] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d86620] transition w-fit shadow-lg"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="text-center mt-10">
          <h1 className="text-xl sm:text-2xl font-bold">OR</h1>
          <a
            href="https://wa.me/233269392148?text=Hi Yorkumi, I want to order from my cart"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#1b5059] underline hover:text-[#ec8733] transition mt-2"
          >
            Send more enquiries on WhatsApp
          </a>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 rounded-lg bg-[#F2E3C2] shadow-lg max-w-4xl mx-auto my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Business Hours</h2>
        <div className="space-y-4 text-gray-700 text-sm sm:text-base">
          {[
            { day: "Sunday", hours: "Closed", closed: true },
            { day: "Monday", hours: "9:00 AM – 8:30 PM" },
            { day: "Tuesday", hours: "9:00 AM – 8:30 PM" },
            { day: "Wednesday", hours: "9:00 AM – 8:30 PM" },
            { day: "Thursday", hours: "9:00 AM – 8:30 PM" },
            { day: "Friday", hours: "9:00 AM – 8:30 PM" },
            { day: "Saturday", hours: "9:00 AM – 8:30 PM" },
          ].map(({ day, hours, closed }, i) => (
            <div key={i} className="flex justify-between border-b pb-2">
              <span>{day}</span>
              <span className={closed ? "text-red-500 font-medium" : ""}>
                {hours}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[#F9F4F0]">
        <h2 className="text-xl sm:text-3xl font-extrabold italic mb-6 text-gray-500 text-center">
          LOCATE US ON THE MAP
        </h2>
        <div className="w-full h-64 sm:h-[350px] lg:h-[450px] overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127075.369812566!2d-0.25814090521879574!3d5.551403920559543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssakumono%20chapel%20square%20spintex%20road%20accra!5e0!3m2!1sen!2sgh!4v1754392114650!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Yorkumishea Map"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;