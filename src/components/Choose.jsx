import { PiRocketLaunchDuotone } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

const Choose = () => {
  return (
    <div className="px-6 py-10 md:px-12 lg:px-28 grid gap-12 items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-r from-orange-400 to-pink-600">
      <div>
        <div className="flex gap-4 items-center mb-3">
          <div className="border-2 border-white text-white p-3 rounded-full flex items-center justify-center">
            <PiRocketLaunchDuotone size={24} />
          </div>
          <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">LAUNCH BUSINESS</h1>
        </div>
        <p className="text-white text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          est!
        </p>
      </div>
      <div>
        <div className="flex gap-4 items-center mb-3">
          <div className="border-2 border-white text-white p-3 rounded-full flex items-center justify-center">
            <FaHeadphones size={24} />
          </div>
          <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">ONLINE SUPPORT TEAM</h1>
        </div>
        <p className="text-white text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          est!
        </p>
      </div>
      <div>
        <div className="flex gap-4 items-center mb-3">
          <div className="border-2 border-white text-white p-3 rounded-full flex items-center justify-center">
            <FaRegClock size={24} />
          </div>
          <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">TIME MANAGEMENT</h1>
        </div>
        <p className="text-white text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          est!
        </p>
      </div>
    </div>
  );
};

export default Choose;
