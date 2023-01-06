import React from 'react';
import { HiMenu } from "react-icons/hi";
import { FaMobile } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import WebIcon from '@mui/icons-material/Web';
import './Home.css'
const Card = ({card}) => {
    const {icon} = card ;
    return (
        <div className=' '>
            <div className=" Card w-96 ">
                <div className="">
                    <img src={icon} alt="" />
                    <h2 className="">Card title!</h2>
                    
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
         
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;