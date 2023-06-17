import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel';
import spinner from '../../assets/adnan-profile.png';
import BackToTopButton from '../BackToTop/BackToTopButton';
import Projects from '../Projects/Projects';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => setLoading(false), 4000);
    },[])

    return (
        <div>
            {loading ? <div className='w-full h-screen m-auto flex justify-center items-center flex-col'>
                <img className='h-10 w-10' src={spinner} alt="" />
                <progress className="progress h-1 w-56 mt-10 bg-white"></progress>
            </div> :<Element name='/'>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <ReviewCarousel></ReviewCarousel>
                <Contact></Contact>
                <Footer></Footer>
                <BackToTopButton></BackToTopButton>
            </Element>}
        </div>
    );
};

export default Home;