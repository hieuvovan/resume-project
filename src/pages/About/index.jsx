import React from 'react';

const AboutMe = () => {

  return (
    <section className="h-screen p-20 section-about">
      <div className="flex justify-between items-center pb-2 section-header">
        <h3 className="text-4xl font-bold highlight section-title">About Me.</h3>
        <svg className="w-12 h-12 section-icons" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#00a3e0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#00a3e0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div className="flex justify-between pt-12 section-body">
        <div className="w-3/5 description-wrapper">
          <h4 className="text-2xl font-bold description-title">Web Developer</h4>
          <div className="pt-4 description-content">
            <ul className="descs">
              <li className="pb-4 desc">
                Currently, I am a final year student at Da Nang University of Technology and Sciences.
                My major is Information Technology.
              </li>
              <li className="pb-4 desc">
                I want to be a professional Web Developer. Currently, I am following the Front-end.
                And in the future, I also want to learn about Backend to become a full-fledged Web Developer.
              </li>
              <li className="pb-4 desc">
                My strengths are research, logic, diligence, algorithms.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/5 personal-infor">
          <h4 className="text-2xl font-bold infor-title">Personal Information</h4>
          <div className="pt-4 infor-content">
            <ul className="infor-list">
              <li className="flex pb-4 text-lg infor-item">
                <p className="font-medium underline-highlight">Name</p>
                <span className="text"><span className="px-2">:</span>Hieu Vo</span>
              </li>
              <li className="flex pb-4 text-lg infor-item">
                <p className="font-medium underline-highlight">Age</p>
                <span className="text"><span className="px-2">:</span>22 Years</span>
              </li>
              <li className="flex pb-4 text-lg infor-item">
                <p className="font-medium underline-highlight">Residence</p>
                <span className="text"><span className="px-2">:</span>Da Nang, Viet Nam</span>
              </li>
              <li className="flex pb-4 text-lg infor-item">
                <p className="font-medium underline-highlight">Address</p>
                <span className="text"><span className="px-2">:</span>10/5 Nguyen Xuan Huu</span>
              </li>
              <li className="flex pb-4 text-lg infor-item">
                <p className="font-medium underline-highlight">Email</p>
                <span className="text"><span className="px-2">:</span>hieuvo0904@gmail.com</span>
              </li>
              <li className="flex pb-4 text-lg infor-item">
                <p className="font-medium underline-highlight">Phone</p>
                <span className="text"><span className="px-2">:</span>(+84) 367379018</span>
              </li>
              <li className="flex pb-4 text-lg infor-item">
                <p className="font-medium underline-highlight">Freelance</p>
                <span className="text"><span className="px-2">:</span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
