import React from 'react';
import { Element } from 'react-scroll';
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='container mx-auto'>
            <Element name='projects'>
                <div className='w-4/5 mx-auto py-14'>
                    <h1 className='text-center text-4xl text-white'>Projects</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-14'>
                        <div className="relative h-96 hover:opacity-100 card-bg hover:bg-bottom ease-in-out duration-[3s]">
                            <div className=" absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-[.5s] ease-in bg-black hover:opacity-75 cursor-pointer">
                                <div className='translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute flex flex-col'>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <TfiWorld></TfiWorld>
                                        <a>Live Site</a>
                                    </span>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <FaGithub></FaGithub>
                                        <a>Client Site</a>
                                    </span>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <FaGithub></FaGithub>
                                        <a>Server Site</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 hover:opacity-100 card2-bg hover:bg-bottom ease-in-out duration-[3s]">
                            <div className=" absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-[.5s] ease-in bg-black hover:opacity-75 cursor-pointer">
                                <div className='translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute flex flex-col'>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <TfiWorld></TfiWorld>
                                        <a>Live Site</a>
                                    </span>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <FaGithub></FaGithub>
                                        <a>Client Site</a>
                                    </span>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <FaGithub></FaGithub>
                                        <a>Server Site</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 hover:opacity-100 card3-bg hover:bg-bottom ease-in-out duration-[3s]">
                            <div className=" absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-[.5s] ease-in bg-black hover:opacity-75 cursor-pointer">
                                <div className='translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute flex flex-col'>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <TfiWorld></TfiWorld>
                                        <a>Live Site</a>
                                    </span>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <FaGithub></FaGithub>
                                        <a>Client Site</a>
                                    </span>
                                    <span className='text-white md:text-xl flex justify-center items-center gap-2 hover:bg-[#0f172a] py-1 px-3 rounded mb-3 border'>
                                        <FaGithub></FaGithub>
                                        <a>Server Site</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default Projects;