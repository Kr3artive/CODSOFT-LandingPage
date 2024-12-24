import { SiJavascript } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <header className="flex items-center px-6 lg:px-28 py-4 justify-between shadow-md bg-white">
      <div className="flex items-center gap-2">
        <SiJavascript
          className="bg-gradient-to-r from-orange-400 to-pink-600"
          size={40}
        />
        <h1 className="font-bold text-2xl lg:text-3xl text-gray-800">
          LANDING PAGE
        </h1>
      </div>
      <nav className="hidden lg:flex gap-8">
        <Link to="/" className="hover:text-orange-500 transition">
          Home
        </Link>
        <Link to="/" className="hover:text-orange-500 transition">
          Blog
        </Link>
        <Link to="/" className="hover:text-orange-500 transition">
          Pages
        </Link>
        <Link to="/" className="hover:text-orange-500 transition">
          Testimonial
        </Link>
        <Link to="/" className="hover:text-orange-500 transition">
          Contact
        </Link>
      </nav>
      <div className="hidden lg:flex gap-6 items-center">
        <Link
          to="/buy"
          className="font-semibold text-white bg-gradient-to-r from-orange-400 to-pink-600 px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          BUY NOW
        </Link>
        <IoSearch className="text-gray-600 cursor-pointer" size={20} />
      </div>

      <div className="lg:hidden flex items-center">
        <button
          aria-label={nav ? "Close menu" : "Open menu"}
          onClick={handleNav}
          className="text-gray-800"
        >
          {nav ? <MdClose size={25} /> : <GiHamburgerMenu size={25} />}
        </button>

        {nav && (
          <div className="absolute top-48 right-4 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-4 z-50">
            <Link
              to="/"
              onClick={handleNav}
              className="font-semibold text-lg w-full text-center hover:text-orange-500 transition"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={handleNav}
              className="font-semibold text-lg w-full text-center hover:text-orange-500 transition"
            >
              Blog
            </Link>
            <Link
              to="/"
              onClick={handleNav}
              className="font-semibold text-lg w-full text-center hover:text-orange-500 transition"
            >
              Pages
            </Link>
            <Link
              to="/"
              onClick={handleNav}
              className="font-semibold text-lg w-full text-center hover:text-orange-500 transition"
            >
              Testimonial
            </Link>
            <Link
              to="/"
              onClick={handleNav}
              className="font-semibold text-lg w-full text-center hover:text-orange-500 transition"
            >
              Contact
            </Link>
            <a
              href="mailto:example@example.com"
              onClick={handleNav}
              className="font-semibold text-white bg-gradient-to-r from-orange-400 to-pink-600 px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              BUY NOW
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
