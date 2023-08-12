import React from 'react';
import spinner from '../../assets/adnan-profile.png';


const Loader = () => {
    return (
        <div className='w-full h-screen m-auto flex justify-center items-center flex-col'>
            <img className='h-10 w-10' src={spinner} alt="" />
            <progress className="progress h-1 w-56 mt-10 bg-white"></progress>
        </div>
    );
};

export default Loader;