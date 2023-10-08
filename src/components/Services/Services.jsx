// @ts-nocheck
import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <section id='services' className="my-16 pt-12 bg-[#0c2a50] font-[Poppins] px-[5%] md:px-[10%]">
            <div className="container mx-auto text-center py-8">
                <h2
                    className="text-design text-5xl font-black pb-4"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="3000"
                    data-aos-once="false"
                >Services</h2>
                <p className="text-lg mb-12 text-white">
                    We offer a range of services to help you establish a strong online presence. Explore our expertise in Frontend Web Development, Web Design, Digital Marketing, and WordPress Development, all beautifully crafted with Bootstrap, Tailwind CSS, Material UI, and Styled Components.
                </p>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 "
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="3000"
                    data-aos-once="false"
                >
                    {/* Web Design */}
                    <div className="px-4 py-4 bg-white rounded-lg shadow-lg flex flex-col justify-between cursor-pointer transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out ">
                        <div>
                            <img src="/web-design-logo.webp" alt="" className="inline-flex justify-center w-[190px]" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Frontend Web Development</h3>
                            <p className="text-gray-600 mb-4">
                                Our frontend Web Development & Web Design services are powered by Tailwind CSS, Material UI ensuring that your website not only looks stunning but also provides an exceptional user experience on all devices.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <NavLink to="#" className="bg-gradient-to-r from-[#06b6d4] to-[#22c55e] px-4 py-2 rounded-md text-gray-900 hover:bg-[#22c55e]  btn-design">Learn More</NavLink>
                        </div>
                    </div>

                    {/* Digital Marketing */}
                    <div className="px-4 py-4 bg-white rounded-lg shadow-lg flex flex-col justify-between cursor-pointer transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
                        <div>
                            <img src="/dm.png" alt="" className="inline-flex justify-center w-[190px]" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
                            <p className="text-gray-600 mb-4">
                                Elevate your brand's online presence with our Digital Marketing strategies, complemented by visually appealing materials designed using Email marketing, Lead generation.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <NavLink to="#" className="bg-gradient-to-r from-[#06b6d4] to-[#22c55e] px-4 py-2 rounded-md text-gray-900 hover:bg-[#22c55e] btn-design">Learn More</NavLink>
                        </div>
                    </div>

                    {/* WordPress Development */}
                    <div className="px-4 py-4 bg-white rounded-lg shadow-lg flex flex-col justify-between cursor-pointer transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
                        <div>
                            <img src="/wordpress.png" alt="" className="inline-flex justify-center w-[190px]" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">WordPress Development</h3>
                            <p className="text-gray-600 mb-4">
                                Our WordPress Development services harness the power of unique and functional websites that resonate with your audience.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <NavLink to="#" className="bg-gradient-to-r from-[#06b6d4] to-[#22c55e] px-4 py-2 rounded-md text-gray-900 hover:bg-[#22c55e] btn-design">Learn More</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
