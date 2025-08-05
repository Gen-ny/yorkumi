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
    <footer className="bg-[#0f1d25] text-white font-[Montserrat] text-sm">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
        <div>
          <img src={logo} alt="Yorkumi Logo" className="h-16 font-extrabold mb-4 rounded-md" />
          <p className="text-white/70 mb-4">
            Premium natural cosmetics for modern beauty enthusiasts.
          </p>
          <div className="flex gap-4 text-white/70 text-xl">
            <Link to="https://www.instagram.com/yorkumi_gh?igsh=MTF5b2NmejAzOThhZA==" className="hover:text-red-600 text-red-500"><FaInstagram /></Link>
            <Link to="https://www.facebook.com/yorkumigh" className="hover:text-blue-600 text-blue-500"><FaFacebookF /></Link>
            <Link to="http://tiktok.com/@yorkumishea" className="hover:text-white"><FaTiktok /></Link>
            <Link to="https://x.com/yorkumishea?t=teeHiS6mNKqNq-1XqQ2Z5A&s=09" className="hover:text-blue-600 text-blue-500"><FaTwitter /></Link>
            <Link to="https://wa.me/+233269392148" className="hover:text-green-500 text-green-800"><FaWhatsapp /></Link>
          </div>
        </div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="#" className="hover:text-white">Skincare</Link></li>
            <li><Link to="#" className="hover:text-white">Haircare</Link></li>
            <li><Link to="#" className="hover:text-white">Lipcare</Link></li>
            <li><Link to="#" className="hover:text-white">New Arrivals</Link></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="#" className="hover:text-white">Careers</Link></li>
            <li><Link to="#" className="hover:text-white">Press</Link></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="#" className="hover:text-white">FAQ</Link></li>
            <li><Link to="#" className="hover:text-white">Shipping</Link></li>
            <li><Link to="#" className="hover:text-white">Returns</Link></li>
            <li><Link to="#" className="hover:text-white">Size Guide</Link></li>
          </ul>
        </div>
      </div>

    
      <div className="border-t border-white/10 text-center py-5 text-white/60 text-sm">
        &copy; {new Date().getFullYear()} YORKUMI Organics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;