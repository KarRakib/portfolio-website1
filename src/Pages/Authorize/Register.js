import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';
const Register = () => {
    const {useRegister} = useContext(authContext)
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors },reset  } = useForm();
    const onSubmit = (data )=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRegister(data.email, data.password)     
    .then(result=>{
        const user = result.user;
        toast.success('user success')
        navigate('/')
        console.log(user);
    } )
       }
    
    return (
        <div>

            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            {...register("fullName", { required: true })}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullName"
                            placeholder="Full Name" />


                        <input
                            {...register("email", { required: true })}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />


                        <input
                            {...register("password", { required: true })}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />

                        <input
                        {...register("confirm_password", { required: true })}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

{/* <input type="submit" value="submit" /> */}
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <Link className="no-underline border-b border-rose-400 text-rose-200" href="#">
                                Terms of Service
                            </Link> and
                            <Link className="no-underline border-b border-rose-400 text-rose-200" href="#">
                                Privacy Policy
                            </Link>
                        </div>
                    </form>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;