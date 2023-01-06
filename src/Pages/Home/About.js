import React from 'react';
import './Home.css'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from '../../Components/Button';

const About = () => {
    return (
        <div className='py-7 w-[1200px] lg:w-[1600px] mx-auto  '>
            <h3 className='text-4xl font-semibold hover:underline decoration-[#ff004f] underline-offset-8 decoration-4 Transition'> ABOUT ME</h3>
            <h4 className='text-start text-xl my-4'> Hi, This is Kar Rakib</h4>
            <p className='text-start'> A Passionate MERN Stack Developer and dedicated to my work. I worked varies projects with modern technologies like javascript, react, node js, golang.
                Most of my time I design and build digital products. I prefer to keep learning, continue challenging myself,and do interesting things that matter</p> <br />
            <p className='text-start'> A Passionate Web Developer and dedicated to my work. I worked varies projects with modern technologies like javascript, react, node js, golang.
                Most of my time I design and build digital products. I prefer to keep learning, continue challenging myself,and do interesting things that matter</p>
           <h3 className='text-start mt-4 font-bold text-[#b73e77] rounded-lg'> FIND WITH ME</h3>
            <div className='flex gap-1'>
                <Button><a href="" target="_blank"> <FaFacebook className='text-xl mx-1' /> </a></Button>
                <Button> <a href="" target="_blank">  <FaGithub className='text-xl mx-1' /> </a></Button>
                <Button><a href="" target="_blank"> <FaLinkedin className='text-xl mx-1' /> </a></Button>
                
                
            </div>
        </div>
    );
};

export default About;