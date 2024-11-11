import "../App.css";

const AboutAuthor = () => {
  return (
    <>
      <>
        <div
          className="max-w-6xl mx-auto px-4 pb-12 pt-10 poppins-light "
          id="team"
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Our Team
            </h2>
          </div>

          {/* Host Info Container */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-12 ">
            {/* Image Container */}
            <div className="author w-full md:w-3/5"></div>

            {/* Content Container */}
            <div className="w-full md:w-2/3">
              {/* Name and Title */}

              <div className="mt-5 md:mt-10">
                <ul className="list-disc list-outside pl-5 sm:pl-6 text-gray-800 text-xl space-y-3">
                  <li>
                    <span className="font-bold ">20+years of experience</span>{" "}
                    in brain development and mental arithmetic
                  </li>
                  <li>
                    Expert educators specializing in{" "}
                    <span className="font-bold "> abacus training</span> and
                    <span className="font-bold "> cognitive skills</span>
                  </li>
                  <li>
                    Proven track record in{" "}
                    <span className="font-bold ">enhancing</span> children's
                    learning and
                    <span className="font-bold "> academic performance</span>
                  </li>
                  <li>
                    Focused on innovative,{" "}
                    <span className="font-bold ">fun</span>, and{" "}
                    <span className="font-bold ">engaging</span> teaching
                    methods
                  </li>

                  <li>
                    Committed to{" "}
                    <span className="font-bold ">helping children</span> unlock
                    their <span className="font-bold ">full potential</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AboutAuthor;
