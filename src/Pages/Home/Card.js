import React from 'react';
import './Home.css'
import { BsArrowRight } from "react-icons/bs";
const Card = ({ card }) => {
    const { icon, title, des } = card;
    return (
        <div className=' '>
            <div className=" Card md:w-96 w-80 ">
                <div className="">
                    <img src={icon} alt="" />
                    <h2 className="text-2xl font-semibold py-3" >{title}</h2>

                    <p>{des} </p>
                    <BsArrowRight className='text-[#ff0000] mt-4 text-xl' />
                </div>
            </div>
        </div>
    );
};

export default Card;