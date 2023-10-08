import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css'
const Education = () => {
  return (
    <div className='my-10 px-[5%] md:px-[10%] ml-auto   bg-[#0c2a50] lg:w-[1280px] shadow-md rounded-l-3xl'>
      <div className='container mx-auto text-center py-8'>
        <p
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="3000"
          data-aos-once="false"
          className="text-design text-5xl font-black pb-4 text-center"><>Education & Experience</></p>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-6 "
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="3000"
          data-aos-once="false"
        >
          <div

            className='education-box'>
            <i>
              <FaGraduationCap />
            </i>
            <span className='text-2xl font-bold text-white'>2022- Present</span>
            <h3 className='font-bold text-cyan-400 '>Web Development With MERN Stack</h3>
            <h3 className='font-bold text-[#5dc418]'>Programmming Hero</h3>
          </div>

          <div

            className='education-box'>
            <i>
              <FaGraduationCap />
            </i>
            <span className='text-2xl font-bold text-white'>2022</span>
            <h3 className='font-bold text-cyan-400 '>Web Development With PHP</h3>
            <h3 className='font-bold text-[#5dc418]'>Eshikhon</h3>
          </div>

          <div
            className=' education-box'>
            <i>
              <FaGraduationCap />
            </i>
            <span className='text-2xl font-bold text-white'>2017-2019</span>
            <h3 className='font-bold text-cyan-400'>Higher Secondary School Certificate HSC</h3>
            <h3 className='font-bold text-[#5dc418]'>Amdai United College, Amdai, Sadar Joypurhat</h3>
            <p className='text-white'>Department Science
            </p>
          </div>

          <div

            className=' education-box'>
            <i>
              <FaGraduationCap />
            </i>
            <span className='text-2xl font-bold text-white'>2015-2017</span>
            <h3 className='font-bold text-cyan-400'>Secondary School Certificate SSC</h3>
            <h3 className='font-bold text-[#5dc418]'>Kaodoa Kayrapara Dakhil Madrasha</h3>
            <p className='text-white'>Department Science
            </p>
          </div>



        </div>
      </div>

    </div>



  );
};

export default Education;