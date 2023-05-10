// import React from 'react';
// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import logo from '../../assets/logo.png';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { Link } from 'react-scroll';
// import author from '../../assets/adnan-profile.png';
// import './NavBar.css'

// const NavBar = () => {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [navcolor, setNavcolor] = useState(false);

//     const navbarBgChange = () => {
//         if (window.scrollY >= 100) {
//             setNavcolor(true);
//         } else {
//             setNavcolor(false)
//         }
//     }

//     window.addEventListener('scroll', navbarBgChange);

//     return (
//         <div style={{zIndex:'999'}} className={navcolor ? 'nav-bg-color sticky top-0' : ' bg-transparent sticky top-0'}>
//             <header className="absolute inset-x-0 top-0 z-50">
//                 <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//                     <div className="flex lg:flex-1">
//                         {/* <a href="#" className="-m-1.5 p-1.5">
//                             <span className="sr-only">Your Company</span>
//                             <img
//                                 className="h-8 w-auto"
//                                 src={logo}
//                                 alt="logo"
//                             />
//                         </a> */}
//                         <Link to='/' spy={true} smooth={true} offset={50} duration={500}><img className='w-full lg:ps-10 cursor-pointer h-8' src={logo} alt="" /></Link>
//                     </div>
//                     <div className="flex lg:hidden">
//                         <button
//                             type="button"
//                             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
//                             onClick={() => setMobileMenuOpen(true)}
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//                         </button>
//                     </div>
//                     <div className="hidden lg:flex lg:gap-8">
//                         <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' to='/' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
//                         <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' activeClass="active" to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
//                         <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' to='skills' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
//                         <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' to='projects' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
//                         <li className=' list-none'><Link className=' text-white cursor-pointer bg-transparent' to='contact' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
//                     </div>
//                     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//                         {/* login */}
//                     </div>
//                 </nav>
//                 <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//                     <div className="fixed inset-0 z-50" />
//                     <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//                         <div className="flex items-center justify-between">
//                             <a href="#" className="-m-1.5 p-1.5">
//                                 <span className="sr-only">Your Company</span>
//                                 <img
//                                     className="h-8 w-auto"
//                                     src={author}
//                                     alt=""
//                                 />
//                             </a>
//                             <button
//                                 type="button"
//                                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                                 onClick={() => setMobileMenuOpen(false)}
//                             >
//                                 <span className="sr-only">Close menu</span>
//                                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                             </button>
//                         </div>
//                         <div className="mt-6 flow-root">
//                             <div className="-my-6 divide-y divide-gray-500/10">
//                                 <div className="space-y-2 py-6">
//                                     <li className=' list-none'><Link className=' text-black cursor-pointer bg-transparent' to='/' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
//                                     <li className=' list-none'><Link className=' text-black cursor-pointer bg-transparent' activeClass="active" to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
//                                     <li className=' list-none'><Link className=' text-black cursor-pointer bg-transparent' to='skills' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
//                                     <li className=' list-none'><Link className=' text-black cursor-pointer bg-transparent' to='projects' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
//                                     <li className=' list-none'><Link className=' text-black cursor-pointer bg-transparent' to='contact' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
//                                 </div>
//                                 {/* <div className="py-6">
//                                     <a
//                                         href="#"
//                                         className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                                     >
//                                         Log in
//                                     </a>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </Dialog.Panel>
//                 </Dialog>
//             </header>
//         </div>
//     );
// };

// export default NavBar;