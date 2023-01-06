import React from 'react';
import About from './About';
import Contact from './Contact';
import Features from './Features';
import Hero from './Hero';
import './Home.css'
import MyProject from './MyProject';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='text-white '>
            <Hero></Hero>
            <Features></Features>
            <About></About>
            <Skill></Skill>
            <MyProject></MyProject>
            <Contact></Contact>
        </div>
    );
};

export default Home;