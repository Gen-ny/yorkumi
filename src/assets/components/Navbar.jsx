import { useState, useContext, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import "@fontsource/montserrat";
import logo from "../images/y-logo.png";
import { Link, useNavigate } from "react-router";
import { CartContext } from "../Content/Cart";
import CartModal from "./CartModal"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-sm font-[Montserrat] fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#f9f4f0] text-xs sm:text-sm text-gray-700 px-4 sm:px-6 py-2 flex justify-between items-center">
        <div className="font-bold italic text-center sm:text-left text-sm sm:text-lg">
          Organic charm meets everlasting glow
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Search - desktop */}
          <div className="hidden md:flex items-center border border-gray-300 px-4 py-1.5 rounded-full">
            <FiSearch className="mr-2" />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm bg-transparent placeholder-gray-500"
            />
          </div>

          {/* Search - mobile */}
          <div className="flex md:hidden items-center border border-gray-300 px-2 py-1 rounded-full">
            <FiSearch size={16} />
          </div>

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(true)}
            title="View Cart"
          >
            <FiShoppingCart size={20} className="hover:text-[#ec8733]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ec8733] text-white text-[10px] px-1.5 py-[1px] rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Yorkumi Logo"
            className="w-32 sm:w-40 h-10 object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-bold uppercase tracking-wide text-gray-800">
          <Link to="/" className="hover:text-[#C37233]">Home</Link>
          <Link to="/about" className="hover:text-[#C37233]">About</Link>
          <Link to="/product" className="hover:text-[#C37233]">Shop</Link>
          <Link to="/blog" className="hover:text-[#C37233]">Blog</Link>
          <Link to="/contact" className="hover:text-[#C37233]">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md animate-slide-down">
          <Link to="/" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733]">Home</Link>
          <Link to="/about" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733]">About</Link>
          <Link to="/product" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733]">Shop</Link>
          <Link to="/blog" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733]">Blog</Link>
          <Link to="/contact" className="block text-sm font-medium uppercase text-gray-800 hover:text-[#ec8733]">Contact</Link>
        </div>
      )}

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;