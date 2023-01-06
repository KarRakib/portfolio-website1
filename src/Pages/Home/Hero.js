import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../../Components/Button';

const Hero = () => {
  return (
    <div className='py-10 flex md:w-[1200px] lg:w-[1600px] mx-auto flex-col lg:flex-row'>
      <div className='w-1/2 self-center '>
      <h1 className='md:text-6xl text-3xl mb-4 font-semibold'>
        Hi, There I'm Kar Rakib
        </h1>
        <span className='text-[#FF014F] text-5xl font-bold pb-5	 '>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Full Stack Web-Developer', 'React Font-end Developer', 'and', 'Back-end Developer']}
            loop={7}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
        </span>
 <div className='mt-5'>
 <a  href="https://docs.google.com/document/d/1D55hLnnhG-_w_mSkv8vLHD7DA2wqeRVx/edit?usp=sharing&ouid=109567756374762240746&rtpof=true&sd=true" 
//  download='https://docs.google.com/document/d/1D55hLnnhG-_w_mSkv8vLHD7DA2wqeRVx/edit?usp=sharing&ouid=109567756374762240746&rtpof=true&sd=true'
 target='_blank' rel="noreferrer">  <Button> RESUME DOWNLOAD </Button></a>
 </div>
    
      </div>
      <div className='w-1/2 px-3 '>
      <img className='lg:w-2/3 h-[511px] lg:ml-9 rounded-2xl w-full ' src="https://i.ibb.co/s2Kw1ph/1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;