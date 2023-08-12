import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import resume from '../../assets/resume/Resume of Adnan Hossain.pdf'
import './Header.css';
import Hamburger from 'hamburger-react'
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import MobileNav from './MobileNav';

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const [navcolor, setNavcolor] = useState(false);

    const navbarBgChange = () => {
        if (window.scrollY >= 100) {
            setNavcolor(true);
        } else {
            setNavcolor(false)
        }
    }

    window.addEventListener('scroll', navbarBgChange);

    return (
        <div className='background-img h-[100vh] md:h-[30vh] lg:h-screen 2xl:h-[50vh]'>

            <div style={{ zIndex: '999' }} className={navcolor ? 'nav-bg-color fixed top-0 w-full' : ' bg-transparent fixed  top-0 w-full'}  >
                <header className='container mx-auto' >
                    <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link to='/' spy={true} smooth={true} offset={50} duration={500}><img className='w-full lg:ps-10 cursor-pointer h-8' src={logo} alt="" /></Link>
                        </div>
                        <div className="flex lg:hidden">
                            <label htmlFor="my-drawer-4" >
                                <Hamburger size={20} color='white' toggled={isOpen} toggle={setOpen} />
                            </label>
                        </div>
                        <div className="hidden lg:flex lg:gap-8 lg:justify-end lg:pe-10">
                            <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' to='/' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                            <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' activeClass="active" to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                            <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' to='skills' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
                            <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' to='projects' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                            <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' to='contact' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                        </div>
                    </nav>
                </header>

            </div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Hero Content */}
                    <div className="hero h-[100vh] md:h-[30vh] lg:h-screen 2xl:h-[50vh]">
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h2 className='uppercase text-white text-lg font-semibold tracking-widestn'>W e l c o m e</h2>
                                <p className="my-5 text-3xl text-white">
                                    <span className='me-2'>I am</span>

                                    <Typewriter
                                        words={['Adnan Hossain', 'Web Developer']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={120}
                                        deleteSpeed={100}
                                        delaySpeed={3000}
                                    />
                                </p>
                                <p className=" mb-5 font-normal text-white">I am seeking a challenging opportunity that will allow me to utilize my skills and abilities to achieve a challenging goal.</p>
                                <a href={resume} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer" download>Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-56 h-full bg-base-200 text-base-content fixed">
                        <MobileNav
                            navcolor={navcolor}
                        />
                    </ul>
                </div>
            </div>

            <div className='fixed hidden md:block text-white z-50  translate-y-[-50%] top-1/2 left-5 flex-col'>
                <a href="https://www.facebook.com/engr.adnanhossain" target="blank" className='m-0 hover:text-blue-700'><FaFacebookSquare className=' w-8 h-8' /></a>
                <a href="https://github.com/engadnanhossain" target="blank" className='m-0 hover:text-gray-600'><FaGithubSquare className=' w-8 h-8' /></a>
                <a href="https://www.linkedin.com/in/engadnanhossain" target="blank" className='m-0 hover:text-blue-700'><FaLinkedin className=' w-8 h-8' /></a>
            </div>

        </div>
    );
};

export default Header;