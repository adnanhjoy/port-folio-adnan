import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div data-aos="fade-up">
            <Element name='skills'>
                <div className='min-h-full py-14'>
                    <h1 className='text-center text-4xl'>Skills & Info</h1>
                    <div className='grid md:grid-cols-2 gap-28 w-3/4 m-auto mt-14'>
                        <div data-aos="fade-up" className=''>
                            <p>HTML</p>
                            <div className=' bg-slate-300 rounded h-4'>
                                <div className=' bg-red-500 w-11/12 text-end pr-2 text-white rounded h-4 text-xs'>95%</div>
                            </div>
                            <p>CSS</p>
                            <div className=' bg-slate-300 rounded h-4'>
                                <div className=' bg-blue-500 w-4/5 text-end pr-2 text-white rounded h-4 text-xs'>85%</div>
                            </div>
                            <p>JAVASCRIPT</p>
                            <div className=' bg-slate-300 rounded h-4'>
                                <div className=' bg-yellow-500 w-5/6 text-end pr-2 text-white rounded h-4 text-xs'>90%</div>
                            </div>
                            <p>FIREBASE</p>
                            <div className=' bg-slate-300 rounded h-4'>
                                <div className=' bg-blue-950 w-3/4 text-end pr-2 text-white rounded h-4 text-xs'>80%</div>
                            </div>
                            <p>REACT JS</p>
                            <div className=' bg-slate-300 rounded h-4'>
                                <div className=' bg-orange-500 w-5/6 text-end pr-2 text-white rounded h-4 text-xs'>90%</div>
                            </div>
                            <p>NODE JS</p>
                            <div className=' bg-slate-300 rounded h-4'>
                                <div className=' bg-green-500 w-4/5 text-end pr-2 text-white rounded h-4 text-xs'>85%</div>
                            </div>
                            <p>MONGODB</p>
                            <div className=' bg-slate-300 rounded h-4'>
                                <div className=' bg-violet-600 w-3/4 text-end pr-2 text-white rounded h-4 text-xs'>80%</div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <span className='grid grid-cols-4 mt-5'>
                                <p className='w-1/2'>Age</p>
                                <p className='col-span-3'>21</p>
                            </span>
                            <span className='grid grid-cols-4 mt-5'>
                                <p className='w-1/2'>Address</p>
                                <p className='col-span-3'>1943, Mirzapur, Tangail, Dhaka, Bangladesh</p>
                            </span>
                            <span className='grid grid-cols-4 mt-5'>
                                <p className='w-1/2'>Blog</p>
                                <p className='col-span-3'>fancytechyt.blogspot.com</p>
                            </span>
                            <span className='grid grid-cols-4 mt-5'>
                                <p className='w-1/2'>Email</p>
                                <p className='col-span-3'>engr.adnanhossain@gmail.com</p>
                            </span>
                            <span className='grid grid-cols-4 mt-5'>
                                <p className='w-1/2'>Site</p>
                                <p className='col-span-3'>www.fiverr.com/adnan673</p>
                            </span>
                            <span className='grid grid-cols-4 mt-5'>
                                <p className='w-1/2'>Phone</p>
                                <p className='col-span-3'>01681620458</p>
                            </span>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default Skills;