import React from 'react';
import { FaBriefcase, FaHome, FaLaptopCode, FaRegEnvelope, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-scroll';
import author from '../../assets/adnan-profile.png';

const MobileNav = ({ navcolor }) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <p className={navcolor ? 'mt-10 p-1.5' : 'm-1 p-1.5'}>
                    <span className="sr-only">Your Company</span>
                    {
                        !navcolor && <img
                            className="h-8 w-auto"
                            src={author}
                            alt=""
                        />
                    }
                </p>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        <li className='list-none'><Link className='flex hover:text-blue-800 items-center gap-4 text-white cursor-pointer bg-transparent' to='/' activeClass="active" spy={true} smooth={true} offset={50} duration={500}><FaHome className=''></FaHome>Home</Link></li>

                        <li className='list-none'><Link className='flex hover:text-blue-800 items-center gap-4 text-white cursor-pointer bg-transparent' activeClass="active" to='about' spy={true} smooth={true} offset={50} duration={500}><FaUserGraduate className='' />About</Link></li>

                        <li className='list-none'><Link className='flex hover:text-blue-800 items-center gap-4 text-white cursor-pointer bg-transparent' to='skills' activeClass="active" spy={true} smooth={true} offset={50} duration={500}><FaLaptopCode className='' />Skills</Link></li>

                        <li className='list-none'><Link className='flex hover:text-blue-800 items-center gap-4 text-white cursor-pointer bg-transparent' to='projects' activeClass="active" spy={true} smooth={true} offset={50} duration={500}><FaBriefcase className='' />Projects</Link></li>

                        <li className='list-none'><Link className='flex hover:text-blue-800 items-center gap-4 text-white cursor-pointer bg-transparent' to='contact' activeClass="active" spy={true} smooth={true} offset={50} duration={500}><FaRegEnvelope className='' />Contact</Link></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;