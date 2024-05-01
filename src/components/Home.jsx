import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen">
      {/* Background Carousel */}
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        selectedItem={currentSlide}
        onChange={handleSlideChange}
      >
        <div>
          <img
            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            alt="Image"
            className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-6xl font-bold mb-5">
                <span className="font-normal text-gray-100 font-bold px-2 py-1">
                  Recycling isn't just for the environment - It's for our future.
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            alt="Image"
            className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-6xl font-bold mb-5">Together let's make a sustainable city</h1>
          </div>
        </div>
      </Carousel>

      {/* Feature Cards Section */}
      <div className="absolute bottom-0 w-full py-10 bg-white shadow-md">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
          {/* Feature Cards */}
          <FeatureCard icon="fa-times" title="No Hidden Cost" description="No pesky charges, nor any convenience fees." />
          <FeatureCard icon="fa-users" title="Dedicated Team" description="Constantly scouting for new ideas and innovations." />
          <FeatureCard icon="fa-phone" title="24/7 Available" description="Contact us for speedy replies to your queries." />
        </div>
      </div>

      {/* About Section */}
      {/* <AboutSection /> */}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow-md hover:shadow-lg lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
    <div className="flex items-center justify-center w-16 h-16 bg-green-200 p-3 rounded-full mr-3">
      <i className={`fas ${icon} text-green-500`}></i>
    </div>
    <div className="flex-1">
      <h5 className="mb-3 text-xl font-bold lg:text-2xl">{title}</h5>
      <p className="mb-6 text-lg text-gray-600">{description}</p>
    </div>
  </div>
);

// const AboutSection = () => {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <div className="md:col-span-1">
//           <img src="https://source.unsplash.com/random/400x600?woman" alt="Indian Woman" className="rounded-lg shadow-lg" />
//         </div>
//         <div className="md:col-span-2 space-y-6">
//           <h1 className="text-4xl font-bold text-green-600">SANSAR</h1>
//           <p className="text-xl text-green-600">Striving to make the environment better</p>
//           <h2 className="text-3xl font-bold">Providing a solution to the ever increasing "waste" in our lives</h2>
//           <p className="text-gray-700">
//             Sorting waste before disposal is crucial to ensure proper waste management and reduce the negative impact of waste on the environment. By separating recyclable materials such as plastic, paper, and metal from non-recyclable materials, we can facilitate their reuse and reduce the amount of waste sent to landfills or incinerators.
//           </p>
//           <div className="flex flex-col md:flex-row justify-between pt-4">
//             <div className="flex items-center space-x-4">
//               <div className="bg-green-100 p-4 rounded-full">
//                 <i className="fas fa-seedling text-green-500 text-3xl"></i>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">Conscious Sorting</h3>
//                 <p>Citizens sort their common waste before pick-up and promote a culture of sustainability and environmental responsibility.</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4 mt-4 md:mt-0">
//               <div className="bg-green-100 p-4 rounded-full">
//                 <i className="fas fa-hand-holding-heart text-green-500 text-3xl"></i>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">Donate for a new life</h3>
//                 <p>Donating clothes, furniture, and electronics can help improve the quality of life for families who cannot afford to purchase these items themselves.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


export default Home;
