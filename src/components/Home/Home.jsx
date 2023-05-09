import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel';
import spinner from '../../assets/adnan-profile.png';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => setLoading(false), 2000);
    },[])

    return (
        <div>
            {loading ? <div className='w-full h-screen m-auto flex justify-center items-center flex-col'>
                <img className='h-10 w-10' src={spinner} alt="" />
                <progress className="progress w-56 mt-10"></progress>
            </div> :<Element name='/'>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <ReviewCarousel></ReviewCarousel>
                <Contact></Contact>
                <Footer></Footer>
            </Element>}
        </div>
    );
};

export default Home;