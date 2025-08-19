import { Link, useParams } from "react-router";
import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.webp";
import blog4 from "../images/blog4.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Why from "../components/Why";
import { li, link } from "framer-motion/client";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Decode Your Skin",
      excerpt: "A Simple Guide to Understanding Your Skin Type (Natural Skincare Edition)...",
      image: blog1,
      date: "April 25, 2025",
      link: "/blog/1"
    },
    {
      id: 2,
      title: "The Transformative Magic of Body Scrubs",
      excerpt: "Body scrubs can work wonders for your skin. Discover their benefits...",
      image: blog2,
      date: "March 23, 2025",
      link: "/blog/2"
    },
    {
      id: 3,
      title: "HAPPY NEW YEAR",
      excerpt: "Celebrate the New Year with a fresh start for your skin...",
      image: blog3,
      date: "January 26, 2025",
      link: "/blog/3"
    },
    {
      id: 4,
      title: "Acne Eating you Up",
      excerpt: "Understanding acne and how to treat it naturally...",
      image: blog4,
      date: "February 24, 2025",
      link: "/blog/4"
    },
  ];

  return (
    <div className="font-[Montserrat]">
        <Navbar />
      <section className="bg-[#f9f4f0] py-40 text-center">
        <h1 className="text-4xl font-bold text-[#1b5059]">Yorkumi Blog</h1>
        <p className="text-gray-600 mt-3">Natural beauty tips, product guides & lifestyle inspiration</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {blogs.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="mt-2 text-lg font-bold text-[#1b5059]">{post.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                 to={`/blog/${post.id}`}
                  className="text-sm text-[#ec8733] font-semibold hover:underline"
                >
                  Read More →
                </Link>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Why />
      <Footer />
    </div>
  );
}