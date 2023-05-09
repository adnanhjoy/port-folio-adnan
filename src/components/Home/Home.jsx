import React from 'react';
import { Element } from 'react-scroll';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Element name='/'>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Contact></Contact>
                <Footer></Footer>
            </Element>
        </div>
    );
};

export default Home;