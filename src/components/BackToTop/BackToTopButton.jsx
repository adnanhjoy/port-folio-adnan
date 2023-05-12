import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTopButton = () => {
    const [backtotop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            }
            else {
                setBackToTop(false);
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            {
                backtotop && (
                    <button onClick={scrollToTop} className='fixed bottom-12 right-12 h-12 w-8 '><FaArrowCircleUp className=' text-4xl text-white m-0'></FaArrowCircleUp></button>
                )
            }
        </div>
    );
};

export default BackToTopButton;