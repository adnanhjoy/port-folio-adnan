import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel';
import BackToTopButton from '../BackToTop/BackToTopButton';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Element name='/'>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <ReviewCarousel></ReviewCarousel>
                <Contact></Contact>
                <Footer></Footer>
                <BackToTopButton></BackToTopButton>
            </Element>
        </div>
    );
};

export default Home;