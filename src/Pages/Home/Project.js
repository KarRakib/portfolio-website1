import React from 'react';
import './MyProject.css'

const Project = ({ project }) => {
    const { img,site } = project
    console.log(project);
    return (
        <div className='text-center align-middle'>
            <div className='p'>
                Project
                <div className='p-browser'>
                    <div className='p-circle'></div>
                    <div className='p-circle'></div>
                    <div className='p-circle'></div>
                </div>
                <a href={site} target='_blank'>
                    <img className='p-image' src={img} alt="" srcSet="" />
                </a>
                <div>
                </div>
               
            </div>
        </div>
    );
};

export default Project;