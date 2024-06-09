import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: "fas fa-truck",
      title: "Schedule a pickup",
      description: "Set up a pre-sorted pickup from the municipality in a predetermined time slot",
      link: "/schedule"
    },
    {
      icon: "fas fa-tshirt",
      title: "Donate Clothes",
      description: "Give back and promote sustainability by handing over pre-loved but intact clothes to those in need.",
      link: "/donate-clothes"
    },
    {
      icon: "fas fa-book-open",
      title: "Donate Books",
      description: "Give your old books a new life by donating and contribute to a more educated and informed society.",
      link: "/donate-books"
    },
    {
      icon: "fas fa-bullhorn",
      title: "Stay Informed",
      description: "Stay updated about all green happenings in and around Mangalore and spread the word!",
      link: "/stay-informed"
    },
    {
      icon: "fas fa-recycle",
      title: "Can it be recycled?",
      description: "Get educated on whether your household product can be recycled or not.",
      link: "/can-be-recycled"
    },
    {
      icon: "fas fa-seedling",
      title: "Make Better Choices",
      description: "Learn how to make better impactful choices that will help save both, the environment as well as cut down your bills",
      link: "/make-better-choices"
    }
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Services We Offer</h1>
          <p className="text-lg mb-1">Take a look around...</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="p-4 bg-gray-100 rounded-full mb-4">
                <i className={`${service.icon} text-green-500 text-3xl`}></i>
              </div>
              <h4 className="font-bold text-lg mb-2">{service.title}</h4>
              <p className="mb-4">{service.description}</p>
              <button onClick={() => handleNavigate(service.link)} className="inline-block text-green-600 hover:text-green-800">
                <i className="fas fa-plus-circle text-lg"></i>
              </button>
              {/* but<Link to='/schedule'>hii</Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
