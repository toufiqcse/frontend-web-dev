// @ts-nocheck
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaReact, FaWordpressSimple } from 'react-icons/fa';
import { SiTailwindcss, SiNetlify, SiFirebase, SiRedux } from 'react-icons/si'
import { GrAnnounce } from 'react-icons/gr'




const Skill = () => {

    const getRandomColor = () => {
        const colors = ['#ff4f4f', '#4fa0ff', '#ffed4f', '#52ff4f', '#4fdfff'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return (
        <div id='skill' className='pt-12 skill-section  bg-[#0c2a50] font-[Poppins] px-[5%] md:px-[10%] pb-10'>
            <h1 className='heading text-design text-5xl font-black py-8'
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="3000"
                data-aos-once="false"
            >Skills</h1>
            <div
                className='skills-container grid grid-cols-2 md:grid-cols-5 gap-10 cursor-pointer'
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="3000"
                data-aos-once="false"
            >

                <div className='skill-card bg-white px-4 py-4 rounded-md shadow-md  flex justify-center items-center'>
                    <FaHtml5 className='skill-img text-8xl text-orange-500' />
                    <CircularProgressbar
                        value={100}
                        text={` ${100}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <FaCss3 className='skill-img text-8xl text-blue-600' color='' />
                    <CircularProgressbar
                        value={95}
                        text={` ${95}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <FaBootstrap className='skill-img text-8xl text-purple-600' color='' />
                    <CircularProgressbar
                        value={85}
                        text={` ${85}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <SiTailwindcss className='skill-img text-8xl text-cyan-400' color='' />
                    <CircularProgressbar
                        value={100}
                        text={` ${100}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <FaReact className='skill-img text-8xl text-blue-600' color='' />
                    <CircularProgressbar
                        value={80}
                        text={` ${80}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <SiFirebase className='skill-img text-8xl text-yellow-600' color='' />
                    <CircularProgressbar
                        value={75}
                        text={` ${75}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <FaGithub className='skill-img text-8xl text-slate-600' color='' />
                    <CircularProgressbar
                        value={70}
                        text={` ${70}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <SiRedux className='skill-img text-8xl text-purple-600' color='' />
                    <CircularProgressbar
                        value={80}
                        text={` ${80}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <FaWordpressSimple className='skill-img text-8xl text-gray-800' color='' />
                    <CircularProgressbar
                        value={80}
                        text={` ${80}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div className='skill-card bg-white px-4 py-2 rounded-md shadow-md  flex justify-center items-center'>
                    <GrAnnounce className='skill-img text-8xl text-yellow-500' color='' />
                    <CircularProgressbar
                        value={80}
                        text={` ${80}%`}
                        className=' skill-level '
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: getRandomColor(),
                            textColor: 'red',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
            </div>
        </div>
    )
};

export default Skill;