import React from 'react';

const Info1 = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start px-12 max-w-screen-xl w-full">
        <div className="text-section lg:w-1/2 w-full mb-12 lg:mb-0">
          <h2 className="text-green-600 text-2xl font-semibold">Why Join Us!</h2>
          <h1 className="text-green-900 text-5xl font-bold mt-4">
            Few Reasons Why! You should join this Sansar
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Join us in our efforts to protect our community from the harsh effects of increasing waste.
            By joining us you become part of the mission of increasing environmental awareness,
            protecting our rich wildlife, extending the life of landfills and making a better SANSAR for our precious future generation.
          </p>
        </div>
        <div className="cards-section flex flex-col items-center lg:w-1/2 w-full lg:pl-16 space-y-8">
          <div className="flex space-x-8">
            <div className="card flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
              <div className="card-icon mb-6">
                <img src="path/to/healthier-earth-icon.png" alt="Healthier Earth" className="w-16 h-16" /> {/* Replace with your icon path */}
              </div>
              <p className="text-green-800 font-semibold text-xl text-center">A Healthier Earth</p>
            </div>
            <div className="card flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
              <div className="card-icon mb-6">
                <img src="path/to/dedicated-community-icon.png" alt="Dedicated Community" className="w-16 h-16" /> {/* Replace with your icon path */}
              </div>
              <p className="text-green-800 font-semibold text-xl text-center">Dedicated Community</p>
            </div>
          </div>
          <div className="card flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
            <div className="card-icon mb-6">
              <img src="path/to/encourage-innovation-icon.png" alt="Encourage Innovation" className="w-16 h-16" /> {/* Replace with your icon path */}
            </div>
            <p className="text-green-800 font-semibold text-xl text-center">Encourage Innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info1;
