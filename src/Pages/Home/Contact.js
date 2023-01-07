import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Home.css'
import { toast } from 'react-hot-toast';
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_153dg77', 'template_6ly1f5r', form.current, '3dtauFC-uDlSVRAX9')
            .then((result) => {

                toast.success('your message send complete')
                console.log(result);

            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()

    };

    return (
        <div className='py-7 w-[1200px] lg:w-[1600px] mx-auto'>
            <h1 className='md:text-4xl font-semibold text-center text-[#C4CFDE] py-6'> Contact With Me
            </h1>
           
                <div className='text-[#C4CFDE] w-56 lg:w-[450px] mx-auto'>
                    <div className='Card '>
                        <form className='w-full lg:ml-8' ref={form} onSubmit={sendEmail}>
                            <label className="label block">
                                <span className="label-text block text-[#C4CFDE]">Name</span>
                            </label>
                            <input className='Input w-72 h-12' type="text" name="user_name" />
                            <label className="label">
                                <span className="label-text text-[#C4CFDE]">Phone</span>
                            </label>
                            <input className='Input w-72 h-12' type="text" name="user_phone" />
                            <label className="label">
                                <span className="label-text text-[#C4CFDE]">Email</span>
                            </label>
                            <input className='Input w-72 h-12' type="email" name="user_email" />
                            <label className="label">
                                <span className="label-text text-[#C4CFDE]">Subject</span>
                            </label>
                            <input className='Input w-72 h-12' type="text" name="user_subject" />
                            <br />
                            <label className="label">
                                <span className="label-text text-[#C4CFDE]">Message</span>
                            </label>
                            <textarea className='Input w-72 h-36' name="message" />
                            <br />
                            <div className='flex w-72 justify-center Button items-center text-[#ff013c] '>
                                <button className='mr-2'>Send Message</button>
                                <BsArrowRight className=' ' />
                            </div>
                        </form>
                    </div>
                
            </div>


        </div>
    );
};

export default Contact;