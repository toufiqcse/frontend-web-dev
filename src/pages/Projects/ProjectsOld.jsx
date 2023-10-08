import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProjectsOld = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='px-[10%] py-6 h-screen   bg-slate-700 text-white ' id='#projects'>
      <p className='text-2xl text-center font-bold text-cyan-400 my-8 '>Features Projects </p>

      <div className=''>
        <Slider {...settings} className=''>

          <div className=' w-full ml-2 '>
            <a href='https://physics-academy-8441d.web.app'>
              <img className='object-cover w-full rounded-sm h-60' src="coaching.png" alt="" />

            </a>
            <p className='text-xl  block font-medium text-center pb-2 mt-2 underline text-cyan-400'>Coaching Center</p>


          </div>



          <div className='w-full '>
            <a href='https://travel-tour-070.web.app/'>
              <img className='object-cover w-full rounded-sm h-60' src="tour.png" alt="" />
            </a>
            <p className='text-xl  block font-medium text-center pb-2 mt-2 underline text-cyan-400'>Travel Tour </p>
          </div>
          <div className='w-full mx-2 '>
            <a href='https://classic-abashik-hotel.web.app/'>
              <img className='object-cover w-full rounded-sm h-60' src="tour.png" alt="" />
            </a>
            <p className='text-xl  block font-medium text-center pb-2 mt-2 underline text-cyan-400'>Hotel & Resort </p>
          </div>
          <div className=''>
            <a href='https://daily-sonar-bangla.web.app/'>
              <img className='object-cover w-full rounded-sm h-60' src="tour.png" alt="" />
            </a>
            <p className='text-xl  block font-medium text-center pb-2 mt-2 underline text-cyan-400'>News Portal</p>
          </div>


        </Slider>
      </div>

    </div>
  );
};

export default ProjectsOld;