import React from 'react';
import './Button.css'
const Button = ({children} ) => {
   
    return (
        <div>
            <button className='BTN my-4 text-white text-xl px-4 hove:transition duration-150 ease-in-out '>{children} </button>
        </div>
    );
};

export default Button;