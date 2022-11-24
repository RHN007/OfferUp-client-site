import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import loginImg from '../../assets/Mobile login.gif'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { signIn,googleSingIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (data) => {
        setLoginError('')
        signIn(data.email, data.password) 
        .then(result => {
            const user = result.user; 
            setLoginUserEmail(data.email)
            navigate(from, {replace:true}); 
        })
        .catch(err => {
            console.log(err.message)
            setLoginError(err.message)
        })
    }

    const handleGoogleSingIn= () => {
        googleSingIn()
        .then(result => {
            // const user = result.user
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken; 
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            setLoginError(error.message)
            })
    }




    return (
        <div >
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={loginImg} className="max-w-sm md:max-w-lg rounded-lg shadow-2xl lg:ml-10" alt='login' />
                    <div>
                        <div className='w-96 p-7'>
                            <form onSubmit={handleSubmit(handleLogin)}>
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
                                    <input type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                        className="input input-bordered w-full max-w-xs" />
                                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <input className='btn btn-primary w-full' value="Login" type="submit" />
                                <div>
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </div>
                            </form>
                            <p>New to OfferUp <Link className='text-secondary' to="/signup">Create a New Account</Link></p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSingIn} className='btn btn-outline  btn-primary  w-full'><FaGoogle className='mr-2 font-bold text-2xl '></FaGoogle>Google login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;