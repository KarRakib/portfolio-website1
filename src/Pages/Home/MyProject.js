import React, { useEffect, useState } from 'react';
import './MyProject.css'
import Project from './Project';


const MyProject = () => {
    const [projects, setProjects] = useState()
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='py-10  md:w-[1200px] lg:w-[1600px] mx-auto'>
            <h1 className='text-4xl text-center font-semibold text-[#C4CFDE]'> My Project </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8'>

                {
                    projects?.map(project => <Project key={project.id} project={project}></Project>)
                }


                {/* <h3 className='text-4xl font-semibold project text-center'> My Project</h3>
<div className='p'>
    card
    <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
    </div>
    <a href="kar.com" target='_blank'>
        <img className='p-image' src={image} alt="" srcSet="" />
    </a>
</div> */}
            </div>
        </div>
    );
};/*  */

export default MyProject;