import React from 'react';
import Marquee from 'react-fast-marquee';
import { MdVerified } from "react-icons/md";
import './style.css'


import SkillBar from 'react-skillbars';
const Skill = () => {
    const color = {
        bar: "#1a6ea2",
        title: {
            text: "#fff",
            background: "#fd1a54"
        }
    };
    const skills = [
        { type: 'HTML5', level: 85 },
        { type: 'CSS3', level: 80, },
        { type: 'Javascript', level: 75 },
        { type: 'React', level: 85 },
        { type: 'Nodejs', level: 65 },
        { type: 'Mongodb', level: 70 },
    ]
    return (
        <div className='py-7 w-[1200px] lg:w-[1600px] mx-auto  '>
            <h3 className='text-4xl font-semibold  header-3'> MY SKILL</h3>
            <div className='flex flex-col lg:flex-row gap-5'>

                <div className='w-1/2'>
                    <h4 className='text-start text-xl my-4'> Hi, This is Kar Rakib</h4>
                    <p className='text-start text-[#d8d0d0] '> As a web developer, you likely have a strong foundation in programming languages such as HTML, CSS, and JavaScript, as well as experience building and maintaining websites and web-based applications. You may also have skills in other programming languages and technologies, such as PHP, Ruby, or Python, depending on your focus within web development.

                        Your ability to write efficient and effective code, troubleshoot technical issues, and work well as part of a team are valuable skills in the field of web development. You may also have excellent problem-solving abilities, good communication skills, and the ability to work under tight deadlines.

                        In addition to your technical skills, you may also have a strong understanding of web design principles and user experience (UX) design, which can help you create websites and applications that are both functional and visually appealing.

                        Overall, your skills as a web developer make you well-equipped to take on a wide range of development projects and build high-quality websites and web-based applications for clients or organizations.</p>
                </div>

                <div className='w-1/2 mt-5'>
                    <div className='lg:w-full py-8 h-80 w-1/3'>
                        <SkillBar className="text-white"

                            skills={skills} height={'3vh'} colors={color} />
                    </div>
                </div>

            </div>
            <div>
                <h4 className='text-center text-xl font-semibold py-6 familiar'>  My familiar technology</h4>
                <div className='bg-[#1b1e22] text-white w-1/4 lg:w-full '>
                    <Marquee gradientColor='none' >
                        <div className=' flex items-center text-xl '> <MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> HTML5 </p> <MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> CSS3 </p> <MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> JavaScript </p><MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> React Js </p><MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> Node Js </p><MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> MongoDB </p><MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> Tailwind </p><MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> Bootstrap </p>  <MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> Bootstrap </p> <MdVerified className='text-[#3EB75E] mx-2 ' /> <p className='pr-4'> Firebase </p>  </div>
                    </Marquee>

                </div>
            </div>

        </div>
    );
};

export default Skill;