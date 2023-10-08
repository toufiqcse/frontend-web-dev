// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGoogle, BsInstagram, BsLinkedin, BsTwitch } from "react-icons/bs";
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import AutoTyped from "../../../components/AutoTyped/AutoTyped";
import About from "../../about/About";

const PDF_FILE_URL = "resume.pdf"

const HomePage = () => {





  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className="px-[5%] md:px-[10%] text-white  grid grid-cols-1 md:grid-cols-2 gap-14 mt-16 md:mt-32 p-2 mx-auto">
      <div className="mx-auto"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-once="false" >
        <div className="">
          <h3

            className="text-xl font-medium md:mb-2 mb-1 text-center md:text-left">Hello !! 👋 <span className="inline-block ">I am</span> </h3>
          <h1
            className="text-3xl font-semibold md:mb-2 mb-1 text-center md:text-left"> <span className="hidden md:visible">I am</span> Toufiqul Isalm</h1>
          <h3

            className="text-xl font-medium md:mb-2 mb-2 leading-none">

            <span className="text-cyan-400 font-bold  flex justify-center md:justify-start">

              <AutoTyped />
            </span>{" "}
          </h3>
          <p


            className="text-sm md:text-md md:mb-2 mb-1 text-justify font-[Poppins] leading-4 md:leading-6  md:text-left">
            Passionate and skilled React developer with a strong drive for innovation. Dedicated to creating cutting-edge, user-friendly solutions that deliver impactful results. Detail-oriented, collaborative, and continuously learning to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
        <div
          className=" ">
          <a
            className="inline-flex w-8 h-8 bg-transparent border-2 border-cyan-400 rounded-full text-sm  items-center justify-center my-6 mr-4 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-lg hover:shadow-cyan-400"
            href="https://web.facebook.com/toufiqcse7/"
          >
            <BsFacebook />
          </a>
          <a
            className="w-8 h-8 bg-transparent border-2 border-cyan-500 rounded-full text-sm  justify-center hover:bg-cyan-500 hover:text-black transition duration-300
            text-cyan-500 items-center my-6 mx-4  inline-flex hover:shadow-lg hover:shadow-cyan-500"
            href="https://www.instagram.com/frontend_webdesignmernstack/"
          >
            <BsInstagram />
          </a>
          <a
            className="w-8 h-8 bg-transparent border-2 border-cyan-500 rounded-full text-sm  justify-center hover:bg-cyan-500 hover:text-black transition duration-300
            text-cyan-500  items-center my-6 mx-4  inline-flex hover:shadow-lg hover:shadow-cyan-500"
            href="https://www.linkedin.com/in/toufiqul-isalm-b7a298247/"
          >
            <BsLinkedin />
          </a>
          <a
            className="w-8 h-8 bg-transparent border-2 border-cyan-500 rounded-full  justify-center hover:bg-cyan-500 hover:text-black transition duration-300
            text-cyan-500 text-sm  items-center my-6 mx-4  inline-flex hover:shadow-lg hover:shadow-cyan-500"
            href="https://www.linkedin.com/in/toufiqul-isalm-b7a298247/"
          >
            <BsTwitch />
          </a>
        </div>

        <button
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-once="false"
          className="inline-block bg-cyan-500 shadow-lg shadow-cyan-500 px-4 py-1 text-white rounded-md  border-none outline-none hover:rounded-full transition duration-500 hover:ring-2 hover:ring-green-400 " onClick={() => {
            handleDownload(PDF_FILE_URL);
          }}>Resume
        </button>
        <a
          href="#contact"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-once="false"
          className="inline-block ml-2 bg-green-500 shadow-lg shadow-green-500 px-4 py-1 text-white rounded-md  border-none outline-none hover:rounded-full transition duration-500 hover:ring-2 hover:ring-cyan-400" >Hire Me
        </a>
      </div>

      <div className="mt-20 md:mt-0 bg-color w-[300px] h-[340px] inline-flex justify-center items-center  md:w-[340px]  lg:w-[427px] md:h-[427px] p-[6px] animate-[bounce_2.8s_ease-in-out_infinite] mx-auto rounded-full">
        <img
          className="w-[300px] h-[340px] md:w-[340px]  mx-auto  lg:w-[427px] md:h-[427px] bg-gradient-to-r from-[#06b6d4] to-[#22c55e]   duration-500 transition z-10 rounded-full"
          src="portfolio.png"
          alt=""
        />
      </div>


    </div>
  );
};

export default HomePage;
