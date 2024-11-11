import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../App.css";

const HeroNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", id: "home", href: "#home" },
    { name: "About", id: "about", href: "#about" },
    { name: "Team", id: "team", href: "#team" },
    { name: "Benefits", id: "benefits", href: "#benefits" },
    { name: "Reviews", id: "reviews", href: "#reviews" },
    
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className="poppins-light bg-white px-1">
        <div
          className={`transition-all duration-300 ease-in-out px-1 py-4 md:px-5 
        ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white backdrop-blur-sm shadow-md z-30"
            : "relative"
        }
        flex justify-between items-center `}
        >
          {/*logo*/}
          <div className="logo mr-10"></div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg transition-colors ${
                  isScrolled ? "text-gray-800" : "text-black"
                } ${
                  activeSection === item.id
                    ? "font-medium border-b-2 border-current"
                    : "hover:text-gray-300"
                }`}
              >
                {item.name}
              </button>
            ))}

            <div className="flex flex-col">
              <button
                className="bg-red-600 p-4 text-lg text-white rounded-sm hover:bg-red-700 transition-colors duration-300 mx-auto "
                style={{
                  animation: "pulse-scale 0.8s ease-in-out infinite",
                }}
              >
                Register Now!!
              </button>
              <p className=" text-[18px] text-center">
                <span className="text-black">Better</span>
                <span className="text-[rgb(2,73,120)] "> Math </span>Better
                <span className="text-[#b7ce21] "> Brain</span>
              </p>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden mt-2 flex flex-col w-[300px] justify-center items-center">
            <button
              className="bg-red-600 p-3
           text-lg rounded-sm hover:bg-red-700 transition-colors duration-300 text-white md:hidden w-[100px]"
              style={{
                animation: "pulse-scale 0.8s ease-in-out infinite",
              }}
            >
              Register
            </button>

            <p className=" text-[11px] md:hidden text-center">
              <span className="text-black">Better</span>
              <span className="text-[rgb(2,73,120)] "> Math </span>Better
              <span className="text-[#b7ce21] "> Brain</span>
            </p>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex items-center p-2 px-0 rounded-md transition-colors
            ${
              isScrolled
                ? "text-black hover:bg-gray-100"
                : "text-black hover:bg-white/10"
            }`}
          >
            <Menu size={40} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full h-full flex flex-col relative p-5">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <X size={40} />
            </button>

            <nav className="flex flex-col justify-center items-center h-full">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-4xl md:text-5xl text-gray-800 hover:text-gray-600 mb-8 transition-colors ${
                    activeSection === item.id ? "font-medium" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroNav;
