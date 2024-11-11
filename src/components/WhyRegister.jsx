import { Mail, Phone } from "lucide-react";
import "../App.css";
import { useState } from "react";
import ModalEmail from "./ModalEmail";

const WhyRegister = () => {
  const [showModalEmail, setShowModalEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add further logic here to handle the form submission
    console.log("Form submitted");
  };

  return (
    <div className=" flex flex-col items-center py-1 px-4 poppins-light ">
      <div className="w-full max-w-3xl bg-white  rounded-lg">
        <div className="p-2">
          <div className="text-center space-y-5">
            {/* Call to action */}
            <div className="py-4 mt-2 ">
              <p className="text-2xl text-[#024978] font-semibold mb-1">
                Don't Miss Out – Help Your Child Thrive! Register for Our Free
                Webinar Now!
              </p>
              <button
                className="bg-red-600 p-4 text-lg text-white rounded-sm mb-1 hover:bg-red-700 motion-safe:animate-bounce m-3"
                style={{
                  animation: "pulse-scale 0.8s ease-in-out infinite",
                }}
              >
                REGISTER NOW
              </button>
              <p className="text-rose-600 ">Free seats are limited!</p>
            </div>

            {/* Social buttons */}
            <div className="flex justify-center gap-4 pt-4 mt-4">
              <button
                className="bg-[#024978] text-white p-4 text-base rounded-sm mb-2 flex gap-2 hover:bg-[#035e9b]"
                onClick={() => setShowModalEmail(true)}
              >
                <Mail className="h-6 w-8" />
                EMAIL US
              </button>
              {showModalEmail && (
                <ModalEmail onClose={() => setShowModalEmail(false)} />
              )}
              <button className="bg-[#b7ce21] text-white p-4 text-base rounded-sm mb-2 flex gap-2 hover:bg-[#c2dc16]">
                <Phone className="h-6 w-8" />
                CALL US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRegister;
