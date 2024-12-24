const Hero = () => {
    return (
      <div
        className="relative h-[550px] sm:h-[600px] lg:h-[700px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
        role="img"
        aria-label="Beautiful natural scenery background"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16 text-white">
          <div className="flex flex-col items-center sm:items-start border-l-4 border-gradient-to-r from-orange-400 to-pink-600 px-4 py-3 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              CREATIVE DIGITAL AGENCY
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl font-light text-center sm:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              rem beatae facilis, vero optio labore consequuntur eligendi odio
              nesciunt quasi.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-400 to-pink-600 text-white font-medium rounded-3xl shadow-lg transition">
                READ MORE
              </button>
              <button className="px-6 py-2 sm:py-3 bg-black text-white border-white border-2 font-medium rounded-3xl shadow-lg transition">
                REQUEST A CONSULT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  