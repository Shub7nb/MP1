import React from 'react';


const teamMembers = [
  {
    name: 'Prathamesh Jadi',
    title: '01FE21BCS213',
    imgSrc: 'https://undraw.co/illustrations', // Replace with actual vector art URL
  },
  {
    name: 'Chaitanya UM ',
    title: '01FE21BCS352',
    imgSrc: 'https://undraw.co/illustrations', // Replace with actual vector art URL
  },
  {
    name: 'Sakshi Habib',
    title: '01FE21BCS356',
    imgSrc: './IMG_7486.JPG', // Replace with actual vector art URL
  },
  {
    name: 'Shubham NB',
    title: '01FE21BCS360',
    imgSrc: 'https://undraw.co/illustrations', // Replace with actual vector art URL
  },
];

const Members = () => {
  return (
    <div className="container-xxl py-16" id="team1">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-12" style={{ maxWidth: '600px' }}>
          <p className="text-2xl font-semibold text-green-600">Our Team</p>
          <h1 className="text-5xl font-bold text-green-800 mb-5">Dedicated & Commited Team Members</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div className="relative group overflow-hidden rounded-lg shadow-lg" key={index}>
              <img className="w-full h-full object-cover" src={member.imgSrc} alt={member.name} />
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-90 transition duration-300 ease-in-out p-6 flex flex-col justify-center items-start space-y-4">
                <div className="transform translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <h4 className="text-2xl font-bold text-green-800 mb-2">{member.name}</h4>
                  <p className="text-green-600">{member.title}</p>
                  <div className="flex space-x-3 mt-4">
                    <a className="text-green-600 hover:text-green-800" href="#"><i className="fab fa-facebook-f text-xl"></i></a>
                    <a className="text-green-600 hover:text-green-800" href="#"><i className="fab fa-twitter text-xl"></i></a>
                    <a className="text-green-600 hover:text-green-800" href="#"><i className="fab fa-instagram text-xl"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
