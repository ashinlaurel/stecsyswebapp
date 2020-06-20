import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 bg-white w-full mx-32 shadow-xl rounded-lg ">
        <div className="px-6">
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
              About Us
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
              Since 1999
            </div>
          </div>
          <div className="py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                  For who thoroughly her boy estimating conviction. Removed
                  demands expense account in outward tedious do. Particular way
                  thoroughly unaffected projection favourable mrs can projecting
                  own. Thirty it matter enable become admire in giving. See
                  resolved goodness felicity shy civility domestic had but.
                  Drawings offended yet answered jennings perceive laughing six
                  did far.{" "}
                </p>
                <a
                  href="#pablo"
                  className="font-normal text-pink-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
