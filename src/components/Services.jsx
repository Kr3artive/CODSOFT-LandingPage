import UI from "../Images/UI.webp";
import TECHSIS from "../Images/CREATIVE DESIGN.jpeg";
import RETINA from "../Images/RETINA.jpg";
import { GrAnnounce } from "react-icons/gr";

const Services = () => {
  const services = [
    { image: UI, title: "USER EXPERIENCE" },
    { image: TECHSIS, title: "CREATIVE DESIGN" },
    { image: RETINA, title: "RETINA READY" },
  ];

  return (
    <div className="px-6 py-10 md:px-12 lg:px-28">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          OUR SERVICES
        </h1>
        <div className="w-20 mb-4 h-1 mx-auto md:mx-0 mt-2 bg-gradient-to-r from-orange-400 to-pink-600"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full max-h-60 object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white w-[200px] rounded-3xl flex gap-2 items-center shadow-md">
              <div className="p-2 bg-gradient-to-r from-orange-400 to-pink-600 text-white rounded-full">
                <GrAnnounce size={30} />
              </div>
              <h1 className="font-bold text-sm md:text-base">
                {service.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
