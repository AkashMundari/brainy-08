import "../App.css";
import HeroNav from "./HeroNav";

const Hero = () => {
  return (
    <>
      <HeroNav />
      <div
        className="hero-section relative p-6 md:pt-14 md:pl-14 h-fit md:h-[650px]"
        id="home"
      >
        {/* Overlay div for background blur/opacity */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[4px]"></div>

        {/* Content wrapper - make sure it's above the overlay */}
        <div className="relative z-10">
          <div className="hero-section-low text-white  mt-9">
            <div className="poppins-semibold text-4xl md:text-6xl p-4 text-center">
              Invest in Brilliance: Gift your child an intelligent mind –{" "}
              <span className="font-bold animate-custom-pulse ">
                Free Webinar
              </span>
            </div>
            <div className="poppins-medium mt-7 text-xl md:text-4xl p-5 flex justify-center">
              <div className=" p-3 space-y-3">
                Explore how brain training
                <br />
                <div className="text-lg md:text-2xl text-left pl-7 md:pl-9">
                  <ul className="list-disc text-left">
                    <li>Enhances cognitive skills</li>
                    <li>Elevates academic success</li>
                    <li>Gives your child a winning advantage</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="poppins-semibold text-center">
                <button
                  className="bg-red-600 p-4 text-xl rounded-sm hover:bg-red-700 transition-colors duration-300"
                  style={{
                    animation: "pulse-scale 0.8s ease-in-out infinite",
                  }}
                >
                  Register Now!!
                </button>
              </p>
              <p className="poppins-medium mt-3 text-lg text-center">
                *<span className="font-bold"> Limited registration </span>only.
                Register before we're filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
