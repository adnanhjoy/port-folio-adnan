import React, { useEffect } from 'react';
import profile from '../../assets/adnan-profile.png';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])
    
    return (
        <div className='container mx-auto'>
            <Element name='about'>
            <div className='py-14 min-h-full text-white'>
                <h1 className='text-center text-4xl'>About Me</h1>
                <div className='grid gap-28 md:grid-cols-2 w-3/4 m-auto mt-14'>
                    <div className=' m-auto'>
                        <img data-aos="zoom-in" src={profile} alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <h1 className='text-3xl'>I'm <span className='font-bold'>Adnan Hossain</span></h1>
                        <h2 className='text-1xl font-bold'>A MERN Stack Developer</h2>
                        <hr className=' my-5' />
                        <p>I am Adnan Hossain, a student of Dhaka International University and a versatile and self-motivated Full stack web developer with considerable technical skills in MERN stack and React development. <br /><br />
                            My goal is to build a successful career in the field of web development while continuously expanding my knowledge and skills to stay abreast of the latest trends and technologies in the industry.</p>
                    </div>
                </div>
            </div>
        </Element>
        </div>
    );
};

export default About;