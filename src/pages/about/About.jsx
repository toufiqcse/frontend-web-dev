import React from "react";
import { FaGraduationCap } from 'react-icons/fa'
import Education from "../../components/Educations/Education";



const About = () => {
  return (
    <div id='about' className="lg:w-[1280px]  bg-[#0c2a50] grid grid-cols-1 lg:grid-cols-2 shadow-2xl p-8 rounded-r-3xl gap-10 mb-10 mt-28 pt-36" >
      <div className="z-20 bg-color mx-auto p-[.8px] block md:hidden lg:block rounded-full w-[280px] h-[280px] md:w-[450px] md:h-[450px] aos-init aos-animate"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1300">
        <img src="portfolio.png" className="bg-gradient-to-r from-[#06b6d4] to-[#22c55e] mx-auto w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full" alt="" />
      </div>
      <div className="flex items-center z-0 ">
        <div className="text-center lg:text-left">
          <div className="" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1300">
            <h2 className="text-design text-5xl font-black">About Me</h2>
          </div>
          <p className="my-5 text-justify text-white font-[Nunito]">
            As a Frontend Web developer with a deep knowledge of React.js & Next.js, my name is Toufiqul Isalm, I am based in Rajshahi, Bangladesh. I currently completed my MERN Stack Web Development Course from Programming Hero. I'm passionate about exploring new technologies in the web world. With a deep understanding of Next.js, I specialize in building dynamic and user-friendly interfaces that make a lasting impact. Additionally, I have a solid grasp of Redux, Material UI, and Wordpress Development, which complement my React.js skills. Adapting to new technologies comes naturally to me, as I eagerly embrace emerging trends to deliver innovative solutions. Meeting deadlines while maintaining top-notch quality is a priority, and I continuously expand my skill set to stay ahead in the ever-evolving web development landscape. With my love for learning and proficiency in React.js, I'm excited to create exceptional web applications that drive success.
          </p>
        </div>

      </div>
    </div>

  );
};

export default About;
