import React from 'react';
import { Element } from 'react-scroll';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPinterest, FaRegCopyright, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <Element>
            <div className='footer-bg text-white'>
                <footer className="grid md:grid-cols-4 gap-5 w-11/12 m-auto p-10 container mx-auto">
                    <div className='md:col-span-2 w-5/6'>
                        <h2 className="footer-title mb-4">Expertise</h2>
                        <div className='md:flex justify-between'>
                            <span>
                                <li className='list-none'>HTML-5</li>
                                <li className='list-none'>CSS-3</li>
                                <li className='list-none'>Bootstrap</li>
                                <li className='list-none'>React Bootstrap</li>
                                <li className='list-none'>Tailwind</li>
                                <li className='list-none'>JavaScript</li>
                                <li className='list-none'>Git & Github</li>
                            </span>
                            <span>
                                <li className='list-none'>ES6</li>
                                <li className='list-none'>React JS</li>
                                <li className='list-none'>Daisy UI</li>
                                <li className='list-none'>Node JS</li>
                                <li className='list-none'>Express JS</li>
                                <li className='list-none'>React Router</li>
                            </span>
                            <span>
                                <li className='list-none'>Firebase Auth</li>
                                <li className='list-none'>Firebase Hosting</li>
                                <li className='list-none'>MongoDB</li>
                                <li className='list-none'>npm</li>
                                <li className='list-none'>Netlify</li>
                                <li className='list-none'>Vercel</li>
                            </span>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h2 className="footer-title mb-4">Legal</h2>
                        <div>
                            <li className='list-none'><a to='/about' className="link link-hover">About us</a></li>
                            <li className='list-none'><a to='privacy-policy' className="link link-hover">Privacy Policy</a></li>
                            <li className='list-none'><a to='/terms-condition' className="link link-hover">Terms & Condition</a></li>
                            <li className='list-none'><a to='/cookies-policy' className="link link-hover">Cookies Policy</a></li>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h2 className="footer-title mb-4">Follow Me</h2>
                        <div className="flex justify-start gap-3">
                            <a href="https://www.facebook.com/engr.adnanhossain" target="blank" className='m-0 hover:text-blue-700'><FaFacebook className='w-6 h-6' /></a>
                            <a href="https://twitter.com/engadnanhossain" target="blank" className='m-0 hover:text-blue-500'><FaTwitter className='w-6 h-6' /></a>
                            <a href="https://www.instagram.com/engadnanhossain" target="blank" className='m-0 hover:text-rose-500'><FaInstagram className='w-6 h-6' /></a>
                            <a href="https://github.com/engadnanhossain" target="blank" className='m-0 hover:text-white'><FaGithub className='w-6 h-6' /></a>
                            <a href="https://www.pinterest.com/engadnanhossain" target="blank" className='m-0 hover:text-red-500'><FaPinterest className='w-6 h-6' /></a>
                            <a href="https://www.linkedin.com/in/engadnanhossain" target="blank" className='m-0 hover:text-blue-700'><FaLinkedin className='w-6 h-6' /></a>
                            <a href="https://www.youtube.com/@sohozcode" target="blank" className='m-0 hover:text-red-700'><FaYoutube className='w-6 h-6' /></a>
                        </div>
                    </div>
                </footer>
                <hr className='w-11/12 m-auto container' />
                <div className='container mx-auto'>
                    <p className='flex items-center justify-center py-6 text-xs'>Copyright <FaRegCopyright className='mx-1' /> 2023 <a className=' link-hover text-primary mx-1' target='blank' href="https://github.com/engadnanhossain">Adnan Hossain</a> All Right Reserved</p>
                </div>
            </div>
        </Element>
    );
};

export default Footer;