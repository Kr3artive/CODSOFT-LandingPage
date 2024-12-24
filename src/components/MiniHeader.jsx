import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";

const MiniHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-12 lg:px-28 py-2 bg-gradient-to-r from-orange-400 to-pink-600 gap-4 sm:gap-0">
      <div className="flex gap-4">
        <FaXTwitter className="text-white text-lg md:text-xl" />
        <BsInstagram className="text-white text-lg md:text-xl" />
        <FaFacebook className="text-white text-lg md:text-xl" />
        <FaYoutube className="text-white text-lg md:text-xl" />
        <FaPinterest className="text-white text-lg md:text-xl" />
        <FaLinkedin className="text-white text-lg md:text-xl" />
      </div>
      <div className="flex items-center">
        <MdLocalPhone className="text-white mr-2 text-lg md:text-xl" />
        <h1 className="text-white text-sm md:text-base font-medium">
          +234-7062987803
        </h1>
      </div>
      <div className="border-2 border-white rounded-3xl">
        <h1 className="text-white text-sm md:text-base font-semibold text-center py-1 px-3">
          REQUEST A CONSULT
        </h1>
      </div>
    </div>
  );
};

export default MiniHeader;
