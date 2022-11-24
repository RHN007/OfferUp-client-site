import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import signImg from '../../assets/SignUpGif.gif'

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');

    const handleSignUp = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={signImg} className="max-w-sm md:max-w-lg rounded-lg shadow-2xl lg:ml-10" alt='login' />
                    <div>
                        <div className='w-96 p-7'>
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    <input type="text" {...register("name", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input type="text"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Password</span></label>
                                    <input type="password" {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>
                                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                               
                            </form>
                            <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                            <div className="divider">OR</div>
                            <button className='btn btn-outline  btn-primary  w-full'><FaGoogle className='mr-2 font-bold text-2xl '></FaGoogle>Google Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;