import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import './Header.css';
import Typical from 'react-typical';

const Header = () => {
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
        <div>
            <div className={navcolor ? 'navbar nav-bg-color fixed top-0' : 'navbar bg-transparent fixed top-0'}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className=' text-black bg-transparent' to='/' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                            <li><Link className=' text-black bg-transparent' activeClass="active" to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                            <li><Link className=' text-black bg-transparent' to='skills' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
                            <li><Link className=' text-black bg-transparent' to='projects' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                            <li><Link className=' text-black bg-transparent' to='contact' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/' spy={true} smooth={true} offset={50} duration={500}><img className='h-10 w-full lg:ps-10 cursor-pointer' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className=' text-white bg-transparent' to='/' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                        <li><Link className=' text-white bg-transparent' activeClass="active" to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li><Link className=' text-white bg-transparent' to='skills' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
                        <li><Link className=' text-white bg-transparent' to='projects' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                        <li><Link className=' text-white bg-transparent' to='contact' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end pr-10">
                </div>
            </div>
            <div className="hero min-h-screen background-img">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5 text-3xl flex justify-center">
                            <span className='me-2'>Hi I'm</span>
                            <Typical
                                steps={['Adnna Hossain', 1000,
                                    'Web Developer', 500,]}
                                loop={Infinity}
                                wrapper='p'
                            />
                        </p>
                        <p className="mb-5 font-thin text-white">I am seeking a challenging opportunity that will allow me to utilize my skills and abilities to achieve a challenging goal.</p>
                        <Link to='' className="btn btn-primary">Download Resume</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;