import React from "react";
import { Link } from "react-router";
import logo from "../images/y-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f1d25] via-[#162833] to-[#0f1d25] text-white font-[Montserrat] text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        <div className="col-span-2">
          <img
            src={logo}
            alt="Yorkumi Logo"
            className="h-16 mb-4 rounded-md"
          />
          <p className="text-white/70 mb-6 max-w-xs">
            Premium natural cosmetics crafted with care for modern beauty enthusiasts.
          </p>
          <div className="flex gap-3">
            {[
              {
                href: "https://www.instagram.com/yorkumi_gh?igsh=MTF5b2NmejAzOThhZA==",
                icon: <FaInstagram />,
                bg: "bg-pink-600",
                hover: "hover:bg-pink-700",
              },
              {
                href: "https://www.facebook.com/yorkumigh",
                icon: <FaFacebookF />,
                bg: "bg-blue-600",
                hover: "hover:bg-blue-700",
              },
              {
                href: "http://tiktok.com/@yorkumishea",
                icon: <FaTiktok />,
                bg: "bg-gray-800",
                hover: "hover:bg-gray-100 hover:text-black",
              },
              {
                href: "https://x.com/yorkumishea?t=teeHiS6mNKqNq-1XqQ2Z5A&s=09",
                icon: <FaTwitter />,
                bg: "bg-sky-500",
                hover: "hover:bg-sky-600",
              },
              {
                href: "https://wa.me/+233269392148",
                icon: <FaWhatsapp />,
                bg: "bg-green-500",
                hover: "hover:bg-green-600",
              },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white transition ${item.bg} ${item.hover}`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#ec8733] after:mt-1">
            Products
          </h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="/product" className="hover:text-white transition">Skincare</Link></li>
            <li><Link to="/product" className="hover:text-white transition">Haircare</Link></li>
            <li><Link to="/product" className="hover:text-white transition">Lipcare</Link></li>
            <li><Link to="/product" className="hover:text-white transition">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#ec8733] after:mt-1">
            Company
          </h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="#" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Press</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-[#ec8733] after:mt-1">
            Support
          </h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="#" className="hover:text-white transition">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link to="#" className="hover:text-white transition">Contact Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 ">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} YORKUMI Organics. All rights reserved.
          </p>
          <form
            action="https://yorkumi.com/subscribe"
            method="POST"
            className="flex items-center bg-white/10 rounded-full overflow-hidden">
            <input
              type="email"
              name="email"
              required
              placeholder="Subscribe to newsletter"
              className="bg-transparent px-4 py-2 text-white placeholder-white/50 outline-none w-48 md:w-64"
            />
            <button className="bg-[#ec8733] px-4 py-2 text-sm font-semibold hover:bg-[#d86620] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;