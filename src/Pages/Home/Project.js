import React from 'react';
import './MyProject.css'

const Project = ({ project }) => {
    const { img } = project
    return (
        <div>
            <div className='p'>
                card
                <div className='p-browser'>
                    <div className='p-circle'></div>
                    <div className='p-circle'></div>
                    <div className='p-circle'></div>
                </div>
                <a href="kar.com" target='_blank'>
                    <img className='p-image' src={img} alt="" srcSet="" />
                </a>
            </div>
        </div>
    );
};

export default Project;