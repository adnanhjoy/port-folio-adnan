import React from 'react';
import { Element } from 'react-scroll';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Element name='contact'>
                <div className='py-14 contact-bg min-h-full flex flex-col items-center'>
                    <h1 className='text-center text-4xl mb-1 text-white'>Get in Touch</h1>
                    <p className='text-center text-sm  text-white'>Feel free to drop us a line to contact us</p>
                    <div className='w-11/12 m-auto'>
                        <form className='md:w-1/2 sm:w-11/12 m-auto'>
                            <label className=' block text-white'>Email</label>
                            <input className='w-full p-2 rounded' type="email" placeholder='email' required />
                            <label className=' block mt-6 text-white'>Message</label>
                            <textarea className='w-full p-2 rounded h-28' type="text" placeholder='message' required />
                            <button className='btn btn-outline btn-primary block mt-6 m-auto' type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default Contact;