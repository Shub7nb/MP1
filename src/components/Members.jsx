import React from 'react';

const teamMembers = [
  {
    name: 'Sarah Abdul Khader',
    title: 'Environment Enthusiast',
    imgSrc: 'assets/img/290947444_345434671106643_8558062567782553777_n.jpg',
  },
  {
    name: 'Sanmitha Shetty',
    title: 'Innovator',
    imgSrc: 'assets/img/WhatsApp%20Image%202023-04-23%20at%2012.41.23%20AM.jpeg',
  },
  {
    name: 'Aditya Shriyan',
    title: 'Team Leader',
    imgSrc: 'assets/img/aditya3.jpg',
  },
  {
    name: 'New Member',
    title: 'New Role',
    imgSrc: 'assets/img/new_member.jpg', // replace with actual path
  },
];

const Members = () => {
  return (
    <div className="container-xxl py-5" id="team1">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-bold text-primary">Our Team</p>
          <h1 className="display-5 mb-5">Dedicated & Experienced Team Members</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div className={`team-item rounded wow fadeInUp`} data-wow-delay={`${0.1 * (index + 1)}s`} key={index}>
              <img className="img-fluid w-full rounded-t-lg" src={member.imgSrc} alt={member.name} />
              <div className="team-text p-4 text-center">
                <h4 className="mb-0">{member.name}</h4>
                <p className="text-primary">{member.title}</p>
                <div className="flex justify-center space-x-2">
                  <a className="btn btn-square rounded-full" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square rounded-full" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square rounded-full" href="#"><i className="fab fa-instagram"></i></a>
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
