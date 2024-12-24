import React from "react";

const About = () => {
  return (
    <div className="px-6 py-10 md:px-12 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">ABOUT US</h1>
        <div className="w-20 mb-4 h-1 mx-auto md:mx-0 mt-2 bg-gradient-to-r from-orange-400 to-pink-600"></div>
        <p className="mt-4 text-base md:text-lg font-bold text-black">
          With 15 years of experience, we are passionate about anchoring better
          results for our clients.
        </p>
        <p className="mt-4 text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut
          aliquam adipisci ea culpa! Voluptates maiores quia placeat impedit
          deserunt voluptatibus incidunt ipsam, nobis facere quidem, rem iste
          ipsum delectus aut possimus eum! Dicta fuga, consectetur molestiae
          eveniet deserunt quaerat veritatis illum perferendis earum repellat
          sed. Quia reiciendis error, blanditiis officiis illo aliquid culpa
          magni eveniet voluptas qui itaque porro?
        </p>
        <button className="px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-400 to-pink-600 text-white font-medium rounded-3xl shadow-lg transition mt-6">
          READ MORE
        </button>
      </div>

      {/* Image Section */}
      <div
        className="relative w-full h-60 sm:h-80 md:h-[500px] lg:h-[600px] bg-center bg-cover bg-no-repeat rounded-lg shadow-lg"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/1c/d4/98/1cd498cb7f6fdeba5b1cb3aa3a6aed54.jpg')`,
        }}
        role="img"
        aria-label="Beautiful natural scenery background"
      ></div>
    </div>
  );
};

export default About;
