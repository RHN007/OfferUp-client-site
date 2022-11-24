import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../../assets/404 Error.gif'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const PageNotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={pageNotFound} className="max-w-sm rounded-lg shadow-2xl" alt='404' />
          <div className='p-10'>
            <h1 className="text-5xl font-bold text-primary">Sorry Page <br /> Not Found</h1>
            <br />
            <Link to='/'> <PrimaryButton>Click Here to go Home Page</PrimaryButton> </Link>
          </div>
        </div>
      </div>
    );
};

export default PageNotFound;